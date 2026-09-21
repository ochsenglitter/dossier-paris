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

  function eilBauen() {
    EIL = [];
    const E = window.EILAUFTRAG;
    if (!E) return;

    const alleDe = [];
    E.gruppen.forEach(g => g.woerter.forEach(w => alleDe.push(w[1])));

    E.gruppen.forEach(gruppe => {
      gruppe.woerter.forEach((w, i) => {
        const fr = w[0], de = w[1], tipp = w[2] || null;
        const basis = "eil:" + gruppe.id + i;
        const andere = gruppe.woerter.map(x => x[1]).filter(x => x !== de);

        /* Eintraege mit Platzhalter ("Vive ...!") oder Abkuerzungen (OFAJ)
           lassen sich weder sinnvoll diktieren noch abtippen – die gibt es
           nur als Bedeutungsfrage. */
        const schreibbar = fr.indexOf("...") === -1 && !/[A-Z]{3,}/.test(fr);

        if (schreibbar) {
          EIL.push({
            key: basis + ":tip", eil: true, streng: true,
            modul: "eil1", thema: gruppe.name, typ: "tippen",
            frage: "Schreib auf Französisch: <b>" + de + "</b>",
            loesung: fr, tipp: tipp, sprechen: fr
          });

          EIL.push({
            key: basis + ":dik", eil: true, streng: true,
            modul: "eil1", thema: "Diktat", typ: "diktat",
            frage: "Hör zu und schreib genau das auf, was du hörst.",
            loesung: fr, tipp: tipp, sprechen: fr
          });
        }

        EIL.push({
          key: basis + ":sinn", eil: true,
          modul: "eil1", thema: gruppe.name, typ: "mc",
          frage: "Was bedeutet <b>" + fr + "</b>?",
          loesung: de,
          optionen: optionenBauen(de, andere, alleDe, 4, fr),
          sprechen: fr
        });
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
     Schreibaufgabe UND das Diktat mindestens einmal streng richtig waren. */
  DP.eilStand = function () {
    const E = window.EILAUFTRAG;
    if (!E) return { gesamt: 0, sitzt: 0, angefasst: 0, tage: null };
    let gesamt = 0, sitzt = 0, angefasst = 0;
    E.gruppen.forEach(gruppe => {
      gruppe.woerter.forEach((w, i) => {
        gesamt++;
        const a = DP.stand.srs["eil:" + gruppe.id + i + ":tip"];
        const b = DP.stand.srs["eil:" + gruppe.id + i + ":dik"];
        const c = DP.stand.srs["eil:" + gruppe.id + i + ":sinn"];
        if ((a && a.gesehen) || (b && b.gesehen) || (c && c.gesehen)) angefasst++;
        if (a || b) {
          if (a && a.r >= 2 && b && b.r >= 1) sitzt++;
        } else if (c && c.r >= 2) {
          sitzt++;                       /* nur als Bedeutungsfrage prüfbar */
        }
      });
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
