/* DOSSIER PARIS – Aufgaben-Generator.
   Aus jedem Vokabelpaar werden drei Aufgabentypen, aus jedem Satz zwei.
   So entstehen aus ueberschaubaren Daten knapp 1800 einzelne Uebungen. */

(function () {
  const DP = window.DP;

  let ALLE = null;
  let NACH_KEY = null;
  let NACH_MODUL = null;

  function deutschPool(modul, ausser) {
    const pool = modul.vocab.map(v => v[1]).filter(x => x !== ausser);
    return pool;
  }

  function globalerPool(ausser) {
    const p = [];
    (window.CURRICULUM || []).forEach(m => m.vocab.forEach(v => { if (v[1] !== ausser) p.push(v[1]); }));
    return p;
  }

  /* Welche deutschen Bedeutungen gehoeren zu welchem franzoesischen Wort?
     "la fille" heisst in Modul 1 "das Mädchen" und in Modul 5 "die Tochter".
     Beides nebeneinander als Antwortmöglichkeit waere schlicht unfair – also
     wird jede Bedeutung ausgeschlossen, die zum selben franzoesischen Wort
     gehoert wie die richtige Loesung. */
  let BEDEUTUNGEN = null;
  function bedeutungenZu(deutsch) {
    if (!BEDEUTUNGEN) {
      BEDEUTUNGEN = {};
      (window.CURRICULUM || []).forEach(m => m.vocab.forEach(v => {
        const fr = DP.norm(v[0]);
        (BEDEUTUNGEN[DP.norm(v[1])] = BEDEUTUNGEN[DP.norm(v[1])] || []).push(fr);
      }));
    }
    return BEDEUTUNGEN[DP.norm(deutsch)] || [];
  }

  function optionenBauen(richtig, pool, global, anzahl, franzoesisch) {
    const gesehen = new Set([DP.norm(richtig)]);
    const verboten = franzoesisch ? DP.norm(franzoesisch) : null;
    const out = [richtig];
    const quellen = DP.mische(pool).concat(DP.mische(global));
    for (const q of quellen) {
      if (out.length >= anzahl) break;
      const n = DP.norm(q);
      if (gesehen.has(n)) continue;
      if (verboten && bedeutungenZu(q).indexOf(verboten) > -1) continue;
      gesehen.add(n);
      out.push(q);
    }
    return DP.mische(out);
  }

  function bauen() {
    ALLE = [];
    NACH_KEY = {};
    NACH_MODUL = {};

    const module = window.CURRICULUM || [];

    module.forEach(modul => {
      const liste = [];
      const globalDe = globalerPool(null);

      /* --- Vokabeln --- */
      modul.vocab.forEach((v, i) => {
        const fr = v[0], de = v[1];
        const poolDe = deutschPool(modul, de);

        liste.push({
          key: modul.id + ":v" + i + ":fd",
          modul: modul.id, thema: "Wortschatz", typ: "mc",
          frage: "Was bedeutet <b>" + fr + "</b>?",
          loesung: de,
          optionen: optionenBauen(de, poolDe, globalDe, 4, fr),
          sprechen: fr
        });

        liste.push({
          key: modul.id + ":v" + i + ":df",
          modul: modul.id, thema: "Wortschatz", typ: "tippen",
          frage: "Wie heißt <b>" + de + "</b> auf Französisch?",
          loesung: fr,
          hinweis: fr.indexOf(" ") > -1 ? "Zwei Wörter." : null,
          sprechen: fr
        });

        liste.push({
          key: modul.id + ":v" + i + ":hoer",
          modul: modul.id, thema: "Hören", typ: "hoeren",
          frage: "Hör zu. Was bedeutet das?",
          loesung: de,
          optionen: optionenBauen(de, poolDe, globalDe, 4, fr),
          sprechen: fr
        });
      });

      /* --- Saetze --- */
      modul.phrases.forEach((p, j) => {
        const fr = p[0], de = p[1];
        const teile = fr.replace(/\s*[.!?]+$/, "").split(" ").filter(Boolean);

        liste.push({
          key: modul.id + ":p" + j + ":fd",
          modul: modul.id, thema: "Sätze", typ: "mc",
          frage: "Was bedeutet <b>" + fr + "</b>?",
          loesung: de,
          optionen: optionenBauen(de, modul.phrases.map(x => x[1]).filter(x => x !== de), globalDe, 4),
          sprechen: fr
        });

        if (teile.length >= 2 && teile.length <= 8) {
          liste.push({
            key: modul.id + ":p" + j + ":bau",
            modul: modul.id, thema: "Sätze", typ: "bauen",
            frage: de,
            loesung: fr,
            teile: DP.mische(teile),
            sprechen: fr
          });
        }
      });

      /* --- Grammatik-Drills --- */
      modul.grammar.forEach(g => {
        g.drills.forEach((d, k) => {
          const frage = d[0], loesung = d[1], optionen = d[2];
          liste.push({
            key: modul.id + ":" + g.id + ":d" + k,
            modul: modul.id, thema: g.titel, typ: optionen ? "mc" : "tippen",
            frage: frage.replace(/___/g, '<span class="luecke">_____</span>'),
            loesung: loesung,
            optionen: optionen ? DP.mische(optionen) : null,
            grammatik: g.id
          });
        });
      });

      NACH_MODUL[modul.id] = liste;
      liste.forEach(it => { NACH_KEY[it.key] = it; ALLE.push(it); });
    });
  }

  /* ---------- Eilauftrag ----------
     Eigener Aufgabenpool fuer den Stoff, der in der Schule als Naechstes
     geprueft wird. Andere Mischung als sonst: kein bequemes Ankreuzen der
     franzoesischen Seite, sondern selbst schreiben – einmal aus dem Deutschen
     heraus, einmal nach Gehoer. Beides mit strenger Rechtschreibung. */

  let EIL = null;
  let EILW = null;

  /* Schluessel am Wort statt an der Listenposition.
     Vorher hiess die dritte Vokabel der Gruppe b schlicht "eil:b2". Wird ein
     Eintrag zusammengelegt oder umsortiert, rutscht damit der gesamte
     Fortschritt der Gruppe auf die falschen Woerter. Jetzt haengt der
     Schluessel am franzoesischen Wort selbst und uebersteht jede Aenderung
     an der Liste. */
  /* Dieselbe Rechenvorschrift liegt in core.js: Das Umhaengen alter
     Schluessel beim Laden muss exakt dieselben Kuerzel treffen. */
  const eilKuerzel = DP.eilKuerzel;

  /* Bei Eintraegen mit Schraegstrich ("excité / excitée") ist das EIN Wort mit
     mehreren Schreibweisen – so steht es im Buch und so zaehlt es hier auch.
     Abgefragt werden die Formen trotzdem einzeln, sonst uebt er die weibliche
     Form nie. */
  const FORMNAMEN = {
    2: ["", "weibliche Form"],
    3: ["", "weibliche Form", "Mehrzahl"],
    4: ["", "weibliche Form", "männliche Mehrzahl", "weibliche Mehrzahl"]
  };

  /* Flache Liste aller Eilauftrag-Woerter, damit Aufgabenbau, Fortschritts-
     zaehlung und Missionsplanung dieselben Schluessel benutzen. */
  DP.eilWoerter = function () {
    if (EILW) return EILW;
    EILW = [];
    const E = window.EILAUFTRAG;
    if (!E) return EILW;
    const vergeben = {};
    E.gruppen.forEach(gruppe => {
      gruppe.woerter.forEach(w => {
        let k = eilKuerzel(w[0]);
        if (vergeben[k]) k = k + (++vergeben[k]);       /* Namensgleichheit */
        else vergeben[k] = 1;
        const formen = w[0].split(" / ").map(s => s.trim()).filter(Boolean);
        const deTeile = w[1].split(" / ").map(s => s.trim());
        EILW.push({
          fr: w[0], de: w[1], tipp: w[2] || null,
          basis: "eil:" + k,
          gruppe: gruppe.id, thema: gruppe.name,
          formen: formen,
          formDe: deTeile.length === formen.length ? deTeile : null,
          formName: FORMNAMEN[formen.length] || null
        });
      });
    });
    return EILW;
  };

  function eilBauen() {
    EIL = [];
    const E = window.EILAUFTRAG;
    if (!E) return;

    const woerter = DP.eilWoerter();
    const alleDe = woerter.map(w => w.de);

    woerter.forEach(w => {
      const andere = woerter.filter(x => x.gruppe === w.gruppe && x.de !== w.de).map(x => x.de);

      /* Eintraege mit Platzhalter ("Vive ...!") oder Abkuerzungen (OFAJ)
         lassen sich weder sinnvoll diktieren noch abtippen – die gibt es
         nur als Bedeutungsfrage. */
      const schreibbar = w.formen[0].indexOf("...") === -1 && !/[A-Z]{3,}/.test(w.formen[0]);

      if (schreibbar) {
        const deEins = w.formDe ? w.formDe[0] : w.de;
        EIL.push({
          key: w.basis + ":tip", eil: true, streng: true, wort: w.basis, gruppe: w.gruppe,
          modul: "eil1", thema: w.thema, typ: "tippen",
          frage: "Schreib auf Französisch: <b>" + deEins + "</b>",
          loesung: w.formen[0], tipp: w.tipp, sprechen: w.formen[0]
        });

        /* Diktat nur auf der Grundform: toute und toutes klingen gleich,
           nach Gehoer waere das nicht zu entscheiden. */
        EIL.push({
          key: w.basis + ":dik", eil: true, streng: true, wort: w.basis, gruppe: w.gruppe,
          modul: "eil1", thema: "Diktat", typ: "diktat",
          frage: "Hör zu und schreib genau das auf, was du hörst.",
          loesung: w.formen[0], tipp: w.tipp, sprechen: w.formen[0]
        });

        /* Die weiteren Formen desselben Wortes – gezielt und einzeln. */
        for (let j = 1; j < w.formen.length; j++) {
          const name = (w.formName && w.formName[j]) || "andere Form";
          EIL.push({
            key: w.basis + ":f" + j, eil: true, streng: true, wort: w.basis, gruppe: w.gruppe,
            modul: "eil1", thema: w.thema, typ: "tippen", form: true,
            frage: "<b>" + w.formen[0] + "</b> – wie schreibt man die " + name + "?",
            loesung: w.formen[j], tipp: w.tipp, sprechen: w.formen[j]
          });
        }
      }

      EIL.push({
        key: w.basis + ":sinn", eil: true, wort: w.basis, gruppe: w.gruppe,
        modul: "eil1", thema: w.thema, typ: "mc",
        frage: "Was bedeutet <b>" + w.fr + "</b>?",
        loesung: w.de,
        optionen: optionenBauen(w.de, andere, alleDe, 4, w.fr),
        sprechen: w.formen[0]
      });
    });

    (E.saetze || []).forEach((satz, j) => {
      const fr = satz[0], de = satz[1];
      const teile = fr.replace(/\s*[.!?]+$/, "").split(" ").filter(Boolean);

      EIL.push({
        key: "eil:s" + j + ":sinn", eil: true,
        modul: "eil1", thema: "Sätze", typ: "mc",
        frage: "Was bedeutet <b>" + fr + "</b>?",
        loesung: de,
        optionen: optionenBauen(de, E.saetze.map(x => x[1]).filter(x => x !== de), [], 4),
        sprechen: fr
      });

      if (teile.length >= 2 && teile.length <= 9) {
        EIL.push({
          key: "eil:s" + j + ":bau", eil: true,
          modul: "eil1", thema: "Sätze", typ: "bauen",
          frage: de, loesung: fr, teile: DP.mische(teile), sprechen: fr
        });
      }
      if (teile.length <= 5) {
        EIL.push({
          key: "eil:s" + j + ":dik", eil: true, streng: true,
          modul: "eil1", thema: "Diktat", typ: "diktat",
          frage: "Hör zu und schreib den Satz auf.",
          loesung: fr, sprechen: fr
        });
      }
    });

    const alleFam = (E.gesprochen || []).map(x => x[1]);
    (E.gesprochen || []).forEach((paar, k) => {
      const geschrieben = paar[0], gesprochen = paar[1];
      EIL.push({
        key: "eil:g" + k + ":mc", eil: true,
        modul: "eil1", thema: "Gesprochenes Französisch", typ: "mc",
        frage: "Wie sagt man <b>" + geschrieben + "</b> im gesprochenen Französisch?",
        loesung: gesprochen,
        optionen: optionenBauen(gesprochen, alleFam.filter(x => x !== gesprochen), [], 4),
        sprechen: gesprochen
      });
      if (gesprochen.indexOf("...") === -1) {
        EIL.push({
          key: "eil:g" + k + ":tip", eil: true, streng: true,
          modul: "eil1", thema: "Gesprochenes Französisch", typ: "tippen",
          frage: "Gesprochenes Französisch für: <b>" + geschrieben + "</b>",
          loesung: gesprochen, sprechen: gesprochen
        });
      }
    });

    EIL.forEach(it => { NACH_KEY[it.key] = it; });
  }

  DP.eilItems = function () {
    if (!ALLE) bauen();
    if (!EIL) eilBauen();
    return EIL;
  };

  /* Wie viele der Wörter sitzen? Ein Wort gilt als sicher, wenn die
     Schreibaufgabe UND das Diktat mindestens einmal streng richtig waren –
     und bei Woertern mit mehreren Formen auch jede weitere Form. Die
     weibliche Form ungeprueft durchgehen zu lassen waere im Test wertlos. */
  DP.eilStand = function () {
    const E = window.EILAUFTRAG;
    if (!E) return { gesamt: 0, sitzt: 0, angefasst: 0, tage: null };
    let gesamt = 0, sitzt = 0, angefasst = 0;
    DP.eilWoerter().forEach(w => {
      gesamt++;
      const a = DP.stand.srs[w.basis + ":tip"];
      const b = DP.stand.srs[w.basis + ":dik"];
      const c = DP.stand.srs[w.basis + ":sinn"];
      if ((a && a.gesehen) || (b && b.gesehen) || (c && c.gesehen)) angefasst++;
      let formenSitzen = true;
      for (let j = 1; j < w.formen.length; j++) {
        const f = DP.stand.srs[w.basis + ":f" + j];
        if (!f || f.r < 1) { formenSitzen = false; break; }
      }
      if (a || b) {
        if (a && a.r >= 2 && b && b.r >= 1 && formenSitzen) sitzt++;
      } else if (c && c.r >= 2) {
        sitzt++;                       /* nur als Bedeutungsfrage prüfbar */
      }
    });
    let tage = null;
    if (E.frist) tage = DP.tageDiff(DP.heute(), E.frist);
    return { gesamt: gesamt, sitzt: sitzt, angefasst: angefasst, tage: tage };
  };

  DP.alleItems = function () { if (!ALLE) bauen(); return ALLE; };
  DP.itemsFuerModul = function (id) { if (!ALLE) bauen(); return NACH_MODUL[id] || []; };
  DP.itemFuerKey = function (key) {
    if (!ALLE) bauen();
    if (key.indexOf("eil:") === 0 && !EIL) eilBauen();
    return NACH_KEY[key] || null;
  };

  /* Paare-Minispiel zum Aufwaermen: fuenf Vokabelpaare aus dem, was gerade dran ist. */
  DP.paareBauen = function (modulId, anzahl) {
    const modul = (window.CURRICULUM || []).find(m => m.id === modulId);
    if (!modul) return [];
    return DP.mische(modul.vocab).slice(0, anzahl || 5).map(v => ({ fr: v[0], de: v[1] }));
  };
})();
