/* DOSSIER PARIS – Kern: Speicherstand, Wiederholungs-Algorithmus, Antwortpruefung. */

const DP = {};
window.DP = DP;

/* ---------- Hilfsfunktionen ---------- */

DP.heute = function () {
  const d = new Date();
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
};

DP.tagePlus = function (tage) {
  const d = new Date();
  d.setDate(d.getDate() + tage);
  return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
};

DP.tageDiff = function (a, b) {
  return Math.round((new Date(b) - new Date(a)) / 86400000);
};

DP.mische = function (arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

DP.zufall = function (arr) { return arr[Math.floor(Math.random() * arr.length)]; };

/* ---------- Antwortpruefung ---------- */

DP.norm = function (s) {
  return String(s || "")
    .toLowerCase()
    .replace(/[’‘´`]/g, "'")
    .replace(/\s*'\s*/g, "'")
    .replace(/[.!?;,:«»"]/g, "")
    .replace(/\s+/g, " ")
    .trim();
};

DP.ohneAkzente = function (s) {
  return s.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

DP.ohneArtikel = function (s) {
  return s.replace(/^(le |la |les |l'|un |une |des |der |die |das |ein |eine )/, "").trim();
};

DP.abstand = function (a, b) {
  if (a === b) return 0;
  if (Math.abs(a.length - b.length) > 2) return 9;
  const v = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    let vorher = v[0];
    v[0] = i;
    for (let j = 1; j <= b.length; j++) {
      const tmp = v[j];
      v[j] = Math.min(v[j] + 1, v[j - 1] + 1, vorher + (a[i - 1] === b[j - 1] ? 0 : 1));
      vorher = tmp;
    }
  }
  return v[b.length];
};

/* Ergebnis: "richtig" | "fast" | "falsch"
   "fast" = inhaltlich verstanden, aber Akzent/Tippfehler. Zaehlt als Erfolg,
   kommt aber frueher zurueck. Das haelt die Motivation oben, ohne zu schummeln. */
DP.pruefe = function (eingabe, loesung) {
  const e = DP.norm(eingabe);
  const l = DP.norm(loesung);
  if (!e) return "falsch";
  if (e === l) return "richtig";

  /* Mehrere zulaessige Loesungen mit / getrennt */
  const alternativen = l.split(" / ").map(x => x.trim());
  if (alternativen.some(a => a === e)) return "richtig";
  if (alternativen.some(a => DP.ohneArtikel(a) === DP.ohneArtikel(e))) return "richtig";

  if (DP.ohneAkzente(e) === DP.ohneAkzente(l)) return "fast";
  if (alternativen.some(a => DP.ohneAkzente(a) === DP.ohneAkzente(e))) return "fast";
  if (DP.abstand(DP.ohneAkzente(e), DP.ohneAkzente(l)) <= 1) return "fast";
  return "falsch";
};
/* Strenge Variante fuer den Eilauftrag: Im Vokabeltest ist ein fehlender
   Accent ein Fehler. "fast" bleibt als Rueckmeldung erhalten – damit er sieht,
   dass er nah dran war – zaehlt hier aber nicht als gekonnt. */
DP.pruefeStreng = function (eingabe, loesung) {
  const e = DP.norm(eingabe);
  const l = DP.norm(loesung);
  if (!e) return "falsch";
  if (e === l) return "richtig";

  const alternativen = l.split(" / ").map(x => x.trim());
  if (alternativen.some(a => a === e)) return "richtig";

  if (DP.ohneAkzente(e) === DP.ohneAkzente(l)) return "fast";
  if (alternativen.some(a => DP.ohneAkzente(a) === DP.ohneAkzente(e))) return "fast";
  if (DP.abstand(DP.ohneAkzente(e), DP.ohneAkzente(l)) <= 1) return "fast";
  return "falsch";
};

/* Welcher Buchstabe war es genau? Fuer eine Rueckmeldung, die nicht nur sagt
   "falsch", sondern zeigt, WO der Unterschied sitzt. */
DP.abweichungZeigen = function (eingabe, loesung) {
  const e = String(eingabe || ""), l = String(loesung || "");
  let i = 0;
  while (i < e.length && i < l.length && e[i].toLowerCase() === l[i].toLowerCase()) i++;
  if (i >= l.length) return null;
  return { stelle: i, zeichen: l[i] };
};

/* ---------- Speicherstand ----------
   Wichtigste Eigenschaft dieser App: Es darf niemals Fortschritt verloren gehen.
   Wer zwei Wochen lang jeden Tag fuenfzehn Minuten investiert und dann bei null
   steht, macht nie wieder auf. Deshalb hier mehr Aufwand als ueblich:

   - nach jeder einzelnen Antwort wird geschrieben, nicht erst am Ende
   - jeder Schreibvorgang bekommt eine laufende Nummer, damit ein zweiter
     offener Tab einen neueren Stand nicht ueberschreibt
   - zwei Staende werden zusammengefuehrt statt gegeneinander zu arbeiten
   - es gibt eine zweite Kopie, falls der Hauptstand beschaedigt ist
   - schlaegt das Schreiben fehl, erfaehrt man das sofort und sichtbar */

const SCHLUESSEL = "dossier-paris-v1";
const KOPIE_SCHLUESSEL = "dossier-paris-v1-kopie";
const REVISION_SCHLUESSEL = "dossier-paris-v1-rev";
const MISSION_SCHLUESSEL = "dossier-paris-v1-mission";

DP.SCHLUESSEL = SCHLUESSEL;
DP.aufSpeicherfehler = null;
DP.speicherLaeuft = { ok: true, grund: null, geprueft: false };

DP.leererStand = function () {
  return {
    v: 1,
    revision: 0,
    gespeichertAm: 0,
    letzteSicherung: 0,
    codename: "",
    xp: 0,
    kombo: 0,
    serie: { tage: 0, letzterTag: null, beste: 0, alibis: 2, alibiMonat: null },
    tag: { datum: null, sekunden: 0, aufgaben: 0, richtig: 0, missionFertig: false },
    srs: {},
    fortschritt: { modul: 0, beat: {}, fertig: [], briefing: {} },
    orden: [],
    verlauf: [],
    prolog: false,
    einstufungGemacht: false,
    einstellungen: { ton: true, stimme: true, tempo: 0.85, tagesziel: 15 }
  };
};

DP.stand = DP.leererStand();

/* Kann dieser Browser ueberhaupt dauerhaft speichern?

   Das ist die wichtigste Frage der ganzen App, und sie hat mehr als eine
   Antwort. Schreiben kann klappen und der Inhalt trotzdem weg sein, sobald
   der Tab zugeht – naemlich dann, wenn die Seite

   - in einem Rahmen innerhalb einer anderen Seite laeuft (dann greifen die
     Regeln fuer Fremdspeicher, und Safari wie Chrome raeumen auf),
   - im eingebauten Browser einer App geoeffnet wurde (WhatsApp, Instagram,
     Facebook – die meisten davon leeren beim Schliessen alles),
   - oder im privaten Modus laeuft.

   Ein stiller Fehlschlag ist hier das Schlimmste: Er uebt zwei Wochen und
   faengt jedes Mal von vorn an. Deshalb wird das erkannt und benannt. */

function imFremdenRahmen() {
  try { return window.self !== window.top; } catch (e) { return true; }
}

function appBrowser() {
  const ua = String((navigator && navigator.userAgent) || "");
  const muster = [
    [/FBAN|FBAV|FB_IAB/i, "Facebook"],
    [/Instagram/i, "Instagram"],
    [/MicroMessenger/i, "WeChat"],
    [/Snapchat/i, "Snapchat"],
    [/TikTok|musical_ly|BytedanceWebview/i, "TikTok"],
    [/\bLine\//i, "LINE"],
    [/LinkedInApp/i, "LinkedIn"],
    [/Pinterest/i, "Pinterest"],
    [/\bGSA\//i, "der Google-App"],
    [/;\s?wv\)|\bWebView\b/i, "einer App"]
  ];
  for (let i = 0; i < muster.length; i++) {
    if (muster[i][0].test(ua)) return muster[i][1];
  }
  return null;
}

DP.speicherPruefen = function () {
  let schreibbar = false, grund = null;
  try {
    const probe = "dossier-paris-probe";
    localStorage.setItem(probe, "1");
    schreibbar = localStorage.getItem(probe) === "1";
    localStorage.removeItem(probe);
    if (!schreibbar) grund = "Der Browser nimmt nichts an.";
  } catch (e) {
    grund = "Der Browser lässt keinen Speicher zu – vermutlich privater Modus.";
  }

  const rahmen = imFremdenRahmen();
  const app = appBrowser();

  /* "wackelig": Schreiben geht, aber es ueberlebt das Schliessen womoeglich nicht. */
  let lage = "ok", hinweis = null;
  if (!schreibbar) {
    lage = "blockiert";
    hinweis = grund;
  } else if (app) {
    lage = "wackelig";
    hinweis = "Du hast die App aus " + app + " heraus geöffnet. Der eingebaute Browser dort löscht meistens alles, sobald du das Fenster schließt.";
  } else if (rahmen) {
    lage = "wackelig";
    hinweis = "Die App läuft gerade eingebettet in einer anderen Seite. Browser behandeln den Speicher dann als fremd und räumen ihn oft auf.";
  }

  DP.speicherLaeuft = {
    ok: schreibbar, lage: lage, grund: hinweis, geprueft: true,
    rahmen: rahmen, app: app
  };
  return schreibbar;
};

/* Wie lange ist der letzte erfolgreiche Schreibvorgang her? */
DP.zuletztGespeichert = function () {
  if (!DP.stand.gespeichertAm) return null;
  const sek = Math.floor((Date.now() - DP.stand.gespeichertAm) / 1000);
  if (sek < 10) return "gerade eben";
  if (sek < 90) return "vor " + sek + " Sekunden";
  if (sek < 5400) return "vor " + Math.round(sek / 60) + " Minuten";
  if (sek < 172800) return "vor " + Math.round(sek / 3600) + " Stunden";
  return "vor " + Math.round(sek / 86400) + " Tagen";
};

function standAufbauen(roh) {
  const s = Object.assign(DP.leererStand(), roh);
  s.serie = Object.assign(DP.leererStand().serie, roh.serie || {});
  s.tag = Object.assign(DP.leererStand().tag, roh.tag || {});
  s.fortschritt = Object.assign(DP.leererStand().fortschritt, roh.fortschritt || {});
  s.einstellungen = Object.assign(DP.leererStand().einstellungen, roh.einstellungen || {});
  if (!s.srs || typeof s.srs !== "object") s.srs = {};
  if (!Array.isArray(s.orden)) s.orden = [];
  if (!Array.isArray(s.verlauf)) s.verlauf = [];
  if (!Array.isArray(s.fortschritt.fertig)) s.fortschritt.fertig = [];
  if (!s.fortschritt.beat || typeof s.fortschritt.beat !== "object") s.fortschritt.beat = {};
  if (!s.fortschritt.briefing || typeof s.fortschritt.briefing !== "object") s.fortschritt.briefing = {};
  return s;
}
DP.standAufbauen = standAufbauen;

function lesen(schluessel) {
  const roh = localStorage.getItem(schluessel);
  if (!roh) return null;
  const daten = JSON.parse(roh);
  if (!daten || typeof daten !== "object" || !daten.srs) throw new Error("unbrauchbar");
  return daten;
}

DP.laden = function () {
  DP.speicherPruefen();
  let geladen = null;
  try {
    geladen = lesen(SCHLUESSEL);
  } catch (e) {
    console.warn("Hauptstand beschädigt, versuche die Kopie.", e);
  }
  if (!geladen) {
    /* Zweite Chance: die Sicherheitskopie. Lieber ein paar Tage alt als weg. */
    try {
      geladen = lesen(KOPIE_SCHLUESSEL);
      if (geladen) console.warn("Aus der Sicherheitskopie wiederhergestellt.");
    } catch (e) {
      console.warn("Auch die Kopie ist unbrauchbar.", e);
    }
  }
  if (geladen) DP.stand = standAufbauen(geladen);
  DP.tagWechseln();
  return DP.stand;
};

let schreibZaehler = 0;

DP.speichern = function () {
  if (!DP.stand) return false;

  /* Hat in der Zwischenzeit ein anderer Tab geschrieben? Dann nicht einfach
     drueberbuegeln, sondern beide Staende zusammenfuehren. */
  try {
    const fremdeRevision = Number(localStorage.getItem(REVISION_SCHLUESSEL) || 0);
    if (fremdeRevision > (DP.stand.revision || 0)) {
      const fremd = lesen(SCHLUESSEL);
      if (fremd) DP.stand = DP.verschmelzen(DP.stand, standAufbauen(fremd));
    }
  } catch (e) { /* im Zweifel weiterschreiben – eigener Stand ist besser als keiner */ }

  DP.stand.revision = (Number(DP.stand.revision) || 0) + 1;
  DP.stand.gespeichertAm = Date.now();
  const text = JSON.stringify(DP.stand);

  try {
    localStorage.setItem(SCHLUESSEL, text);
    localStorage.setItem(REVISION_SCHLUESSEL, String(DP.stand.revision));
  } catch (e) {
    /* Meist Platzmangel. Erst die Kopie opfern, dann noch einmal versuchen. */
    try {
      localStorage.removeItem(KOPIE_SCHLUESSEL);
      localStorage.setItem(SCHLUESSEL, text);
      localStorage.setItem(REVISION_SCHLUESSEL, String(DP.stand.revision));
    } catch (e2) {
      /* Die Umgebungsbefunde (Rahmen, App-Browser) bleiben erhalten – nur die
         Einstufung kippt auf blockiert. */
      DP.speicherLaeuft = Object.assign({}, DP.speicherLaeuft, {
        ok: false, lage: "blockiert",
        grund: "Der Speicher ist voll oder wird vom Browser gesperrt.", geprueft: true
      });
      if (typeof DP.aufSpeicherfehler === "function") DP.aufSpeicherfehler(DP.speicherLaeuft);
      return false;
    }
  }

  if (!DP.speicherLaeuft.ok) {
    DP.speicherPruefen();                       /* Umgebung neu einschätzen */
    if (typeof DP.aufSpeicherfehler === "function") DP.aufSpeicherfehler(DP.speicherLaeuft);
  }

  schreibZaehler++;
  if (schreibZaehler % 12 === 0) {
    try { localStorage.setItem(KOPIE_SCHLUESSEL, text); } catch (e) { /* Kopie ist Kür */ }
  }
  return true;
};

/* Zwei Staende zusammenfuehren, ohne dass etwas verloren geht. Im Zweifel
   gewinnt immer der weiter fortgeschrittene Wert. */
DP.verschmelzen = function (meins, fremd) {
  const out = standAufbauen(JSON.parse(JSON.stringify(fremd)));
  const max = (a, b) => Math.max(Number(a) || 0, Number(b) || 0);
  const m = meins || DP.leererStand();

  out.xp = max(m.xp, fremd.xp);
  out.revision = max(m.revision, fremd.revision);
  out.letzteSicherung = max(m.letzteSicherung, fremd.letzteSicherung);
  out.codename = fremd.codename || m.codename;
  out.prolog = !!(m.prolog || fremd.prolog);
  out.einstufungGemacht = !!(m.einstufungGemacht || fremd.einstufungGemacht);

  const ms = m.serie || {};
  out.serie.tage = max(ms.tage, out.serie.tage);
  out.serie.beste = max(ms.beste, out.serie.beste);
  if (ms.letzterTag && (!out.serie.letzterTag || ms.letzterTag > out.serie.letzterTag)) {
    out.serie.letzterTag = ms.letzterTag;
  }

  /* Karten: pro Aufgabe die, die oefter geuebt wurde. */
  Object.keys(m.srs || {}).forEach(k => {
    const a = m.srs[k], b = out.srs[k];
    if (!b || (a.gesehen || 0) > (b.gesehen || 0)) out.srs[k] = a;
  });

  const mf = m.fortschritt || {};
  out.fortschritt.modul = max(mf.modul, out.fortschritt.modul);
  out.fortschritt.fertig = Array.from(new Set((out.fortschritt.fertig || []).concat(mf.fertig || [])));
  Object.keys(mf.beat || {}).forEach(k => {
    out.fortschritt.beat[k] = max((mf.beat || {})[k], out.fortschritt.beat[k]);
  });
  Object.keys(mf.briefing || {}).forEach(k => {
    out.fortschritt.briefing[k] = Array.from(new Set((out.fortschritt.briefing[k] || []).concat((mf.briefing || {})[k] || [])));
  });

  out.orden = Array.from(new Set((out.orden || []).concat(m.orden || [])));

  const mt = m.tag || {};
  if (mt.datum && mt.datum === out.tag.datum) {
    out.tag.sekunden = max(mt.sekunden, out.tag.sekunden);
    out.tag.aufgaben = max(mt.aufgaben, out.tag.aufgaben);
    out.tag.richtig = max(mt.richtig, out.tag.richtig);
    out.tag.missionFertig = !!(mt.missionFertig || out.tag.missionFertig);
  } else if (mt.datum && mt.datum > (out.tag.datum || "")) {
    out.tag = mt;
  }

  const nachDatum = {};
  (out.verlauf || []).concat(m.verlauf || []).forEach(t => {
    const da = nachDatum[t.datum];
    if (!da || (t.aufgaben || 0) > (da.aufgaben || 0)) nachDatum[t.datum] = t;
  });
  out.verlauf = Object.keys(nachDatum).sort().map(d => nachDatum[d]).slice(-400);

  return out;
};

/* Ein anderer Tab hat geschrieben – uebernehmen, ohne Eigenes zu verlieren. */
DP.fremdstandUebernehmen = function () {
  try {
    const fremd = lesen(SCHLUESSEL);
    if (!fremd) return false;
    if ((fremd.revision || 0) <= (DP.stand.revision || 0)) return false;
    DP.stand = DP.verschmelzen(DP.stand, standAufbauen(fremd));
    return true;
  } catch (e) {
    return false;
  }
};

/* ---------- Laufende Mission sichern ----------
   Damit ein abgebrochener Einsatz nicht komplett von vorn beginnen muss. */

DP.missionSichern = function (zustand) {
  try {
    localStorage.setItem(MISSION_SCHLUESSEL, JSON.stringify(zustand));
    return true;
  } catch (e) {
    return false;
  }
};

DP.missionHolen = function () {
  try {
    const roh = localStorage.getItem(MISSION_SCHLUESSEL);
    if (!roh) return null;
    const m = JSON.parse(roh);
    if (!m || !Array.isArray(m.schritte) || !m.schritte.length) return null;
    if (m.datum !== DP.heute()) return null;          /* von gestern: nicht fortsetzen */
    if (m.index >= m.schritte.length) return null;    /* war schon durch */
    return m;
  } catch (e) {
    return null;
  }
};

DP.missionVerwerfen = function () {
  try { localStorage.removeItem(MISSION_SCHLUESSEL); } catch (e) { /* egal */ }
};

DP.tagWechseln = function () {
  const h = DP.heute();
  if (DP.stand.tag.datum !== h) {
    if (DP.stand.tag.datum && DP.stand.tag.aufgaben > 0) {
      DP.stand.verlauf.push({
        datum: DP.stand.tag.datum,
        sekunden: DP.stand.tag.sekunden,
        aufgaben: DP.stand.tag.aufgaben,
        richtig: DP.stand.tag.richtig
      });
      if (DP.stand.verlauf.length > 400) DP.stand.verlauf = DP.stand.verlauf.slice(-400);
    }
    DP.stand.tag = { datum: h, sekunden: 0, aufgaben: 0, richtig: 0, missionFertig: false };
    DP.stand.kombo = 0;
    DP.serieAktualisieren();
    DP.speichern();
  }
};

/* Serie: gestern trainiert -> weiter. Einen Tag verpasst -> Alibi wird automatisch
   eingesetzt, falls vorhanden. Kein Drama, keine Bestrafung. */
DP.serieAktualisieren = function () {
  const s = DP.stand.serie;
  const monat = DP.heute().slice(0, 7);
  if (s.alibiMonat !== monat) { s.alibiMonat = monat; s.alibis = 2; }
  if (!s.letzterTag) return;
  const luecke = DP.tageDiff(s.letzterTag, DP.heute());
  if (luecke <= 1) return;
  const verpasst = luecke - 1;
  if (verpasst <= s.alibis) {
    s.alibis -= verpasst;
    s.letzterTag = DP.tagePlus(-1);
  } else {
    s.tage = 0;
  }
};

DP.serieZaehlen = function () {
  const s = DP.stand.serie;
  const h = DP.heute();
  if (s.letzterTag === h) return;
  s.tage = (s.letzterTag && DP.tageDiff(s.letzterTag, h) === 1) ? s.tage + 1 : 1;
  s.letzterTag = h;
  if (s.tage > s.beste) s.beste = s.tage;
};

/* ---------- Umzug auf eine andere Adresse ----------
   Der Browserspeicher gehoert zur Adresse. Wer die App von claude.ai auf die
   eigene Seite umzieht, wuerde dort bei null anfangen – deshalb laesst sich
   der ganze Stand in einen Link packen und auf der neuen Adresse wieder
   auslesen. Gepackt mit gzip, damit auch ein Stand von Monaten in eine URL
   passt; wo der Browser das nicht kann, bleibt der Weg ueber die Zwischenablage. */

DP.NEUE_ADRESSE = "https://ochsenglitter.github.io/dossier-paris/";

function bytesZuText(bytes) {
  let s = "";
  const block = 8192;
  for (let i = 0; i < bytes.length; i += block) {
    s += String.fromCharCode.apply(null, bytes.subarray(i, i + block));
  }
  return s;
}

function urlSicher(b64) {
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function ausUrlSicher(t) {
  let s = t.replace(/-/g, "+").replace(/_/g, "/");
  while (s.length % 4) s += "=";
  return s;
}

DP.standPacken = async function () {
  const text = JSON.stringify(DP.stand);
  let bytes = new TextEncoder().encode(text);
  let art = "r";
  if (typeof CompressionStream === "function") {
    try {
      const strom = new Blob([bytes]).stream().pipeThrough(new CompressionStream("gzip"));
      bytes = new Uint8Array(await new Response(strom).arrayBuffer());
      art = "g";
    } catch (e) { /* ungepackt weiter */ }
  }
  return art + urlSicher(btoa(bytesZuText(bytes)));
};

DP.standEntpacken = async function (code) {
  const art = code.charAt(0);
  const roh = atob(ausUrlSicher(code.slice(1)));
  let bytes = new Uint8Array(roh.length);
  for (let i = 0; i < roh.length; i++) bytes[i] = roh.charCodeAt(i);
  if (art === "g") {
    const strom = new Blob([bytes]).stream().pipeThrough(new DecompressionStream("gzip"));
    bytes = new Uint8Array(await new Response(strom).arrayBuffer());
  }
  return JSON.parse(new TextDecoder().decode(bytes));
};

DP.umzugsLink = async function (ziel) {
  const code = await DP.standPacken();
  return (ziel || DP.NEUE_ADRESSE) + "#stand=" + code;
};

/* Hat uns jemand einen Stand mitgebracht? Wird beim Start geprueft. */
DP.mitgebrachterStand = function () {
  const h = String(location.hash || "");
  const t = h.indexOf("#stand=");
  return t === 0 ? h.slice(7) : null;
};

DP.hashLeeren = function () {
  try {
    history.replaceState(null, "", location.pathname + location.search);
  } catch (e) { location.hash = ""; }
};

/* Uebernimmt einen mitgebrachten Stand, ohne Vorhandenes zu verlieren. */
DP.standUebernehmen = async function (code) {
  let daten;
  try {
    daten = await DP.standEntpacken(code);
  } catch (e) {
    return { ok: false, grund: "Der Link ist unvollständig oder beschädigt." };
  }
  if (!daten || typeof daten !== "object" || !daten.srs) {
    return { ok: false, grund: "In dem Link steckt kein Spielstand." };
  }
  const vorher = Object.keys(DP.stand.srs || {}).length;
  const bisher = Number(DP.stand.revision) || 0;
  DP.stand = DP.verschmelzen(DP.stand, DP.standAufbauen(daten));
  DP.stand.revision = Math.max(bisher, Number(daten.revision) || 0) + 1;
  DP.speichern();
  return {
    ok: true,
    codename: DP.stand.codename,
    karten: Object.keys(DP.stand.srs).length,
    dazu: Object.keys(DP.stand.srs).length - vorher,
    xp: DP.stand.xp,
    module: (DP.stand.fortschritt.fertig || []).length
  };
};

/* Laeuft die App schon auf der Zieladresse? */
DP.aufZieladresse = function () {
  try {
    return location.href.indexOf(DP.NEUE_ADRESSE) === 0 ||
           location.hostname === new URL(DP.NEUE_ADRESSE).hostname;
  } catch (e) { return false; }
};

/* ---------- Sicherung ----------
   Der Fortschritt liegt im localStorage dieses einen Browsers. Das ist schnell
   und braucht keinen Account – aber es bedeutet auch: neues Handy, geloeschte
   Browserdaten oder ein anderer Browser, und alles ist weg. Deshalb laesst sich
   der Stand als Text herausholen und woanders wieder einsetzen. */

DP.exportieren = function () {
  DP.stand.letzteSicherung = Date.now();
  DP.speichern();
  return JSON.stringify(DP.stand);
};

/* Wie viele Tage ist die letzte Sicherung her? null = noch nie gesichert. */
DP.sicherungAlter = function () {
  if (!DP.stand.letzteSicherung) return null;
  return Math.floor((Date.now() - DP.stand.letzteSicherung) / 86400000);
};

DP.importieren = function (text) {
  let daten;
  try {
    daten = JSON.parse(String(text || "").trim());
  } catch (e) {
    return { ok: false, grund: "Das ist kein gültiger Sicherungstext." };
  }
  if (!daten || typeof daten !== "object" || !daten.srs || typeof daten.srs !== "object") {
    return { ok: false, grund: "In dem Text steckt kein Spielstand." };
  }
  /* Der eingespielte Stand muss gewinnen, auch wenn auf diesem Gerät schon
     gespielt wurde – sonst wäre die Sicherung nutzlos. */
  const bisher = Number(DP.stand.revision) || 0;
  DP.stand = DP.standAufbauen(daten);
  DP.stand.revision = Math.max(bisher, Number(daten.revision) || 0) + 1;
  DP.missionVerwerfen();
  if (!DP.speichern()) {
    return { ok: false, grund: "Übernommen, aber das Speichern hat nicht geklappt. Prüf, ob der Browser im privaten Modus läuft." };
  }
  return {
    ok: true,
    karten: Object.keys(DP.stand.srs).length,
    codename: DP.stand.codename,
    module: (DP.stand.fortschritt.fertig || []).length
  };
};

/* ---------- Wiederholungs-Algorithmus (angelehnt an SM-2, vereinfacht) ---------- */

/* Abstaende in Tagen. Bewusst nicht enger: mit 1-2-4 Tagen erzeugt jede neue
   Karte in der ersten Woche so viele Wiederholungen, dass sich bei 15 Minuten
   am Tag ein Berg aufbaut, den niemand mehr abtraegt. 1-3-7-16 ist der uebliche
   Rhythmus und haelt den Stapel in einer Groesse, die taeglich zu schaffen ist. */
const INTERVALLE = [0, 1, 3, 7, 16, 35, 70, 140];

DP.karte = function (key) {
  if (!DP.stand.srs[key]) {
    DP.stand.srs[key] = { r: 0, faellig: DP.heute(), gesehen: 0, ok: 0, ko: 0, neu: true };
  }
  return DP.stand.srs[key];
};

DP.bewerten = function (key, ergebnis) {
  const k = DP.karte(key);
  k.gesehen++;
  k.neu = false;
  if (ergebnis === "richtig") {
    k.ok++;
    k.r = Math.min(k.r + 1, INTERVALLE.length - 1);
  } else if (ergebnis === "fast") {
    k.ok++;
    k.r = Math.min(k.r + 1, INTERVALLE.length - 1);
    if (k.r > 1) k.r -= 1;
  } else {
    k.ko++;
    k.r = Math.max(0, k.r - 2);
  }
  k.faellig = DP.tagePlus(INTERVALLE[k.r]);
  return k;
};

DP.istFaellig = function (key) {
  const k = DP.stand.srs[key];
  if (!k) return false;
  return k.faellig <= DP.heute();
};

DP.faelligeKeys = function () {
  const h = DP.heute();
  return Object.keys(DP.stand.srs).filter(k => DP.stand.srs[k].faellig <= h);
};

/* ---------- Punkte, Raenge, Orden ---------- */

DP.RAENGE = [
  { xp: 0, name: "Stagiaire", de: "Praktikant" },
  { xp: 300, name: "Recrue", de: "Rekrut" },
  { xp: 800, name: "Agent", de: "Agent" },
  { xp: 1800, name: "Agent confirmé", de: "Erfahrener Agent" },
  { xp: 3200, name: "Agent spécial", de: "Spezialagent" },
  { xp: 5200, name: "Chef de section", de: "Abteilungsleiter" },
  { xp: 8000, name: "Commandant", de: "Kommandant" },
  { xp: 12000, name: "Légende", de: "Legende" }
];

DP.rang = function (xp) {
  let r = DP.RAENGE[0];
  for (const x of DP.RAENGE) if (xp >= x.xp) r = x;
  return r;
};

DP.naechsterRang = function (xp) {
  return DP.RAENGE.find(x => x.xp > xp) || null;
};

DP.punkte = function (ergebnis) {
  if (ergebnis === "richtig") {
    DP.stand.kombo++;
    let p = 10;
    if (DP.stand.kombo > 0 && DP.stand.kombo % 5 === 0) p += 15;
    DP.stand.xp += p;
    return p;
  }
  if (ergebnis === "fast") {
    DP.stand.kombo++;
    DP.stand.xp += 6;
    return 6;
  }
  DP.stand.kombo = 0;
  return 0;
};

DP.ORDEN = [
  { id: "start", name: "Erste Mission", text: "Eine Mission abgeschlossen.", pruef: s => s.verlauf.length + (s.tag.missionFertig ? 1 : 0) >= 1 },
  { id: "serie3", name: "Drei am Stück", text: "3 Tage in Folge.", pruef: s => s.serie.beste >= 3 },
  { id: "serie7", name: "Eine Woche", text: "7 Tage in Folge.", pruef: s => s.serie.beste >= 7 },
  { id: "serie14", name: "Zwei Wochen", text: "14 Tage in Folge.", pruef: s => s.serie.beste >= 14 },
  { id: "serie30", name: "Ein Monat", text: "30 Tage in Folge.", pruef: s => s.serie.beste >= 30 },
  { id: "w100", name: "100 Karten", text: "100 verschiedene Aufgaben gemeistert.", pruef: s => Object.values(s.srs).filter(k => k.r >= 2).length >= 100 },
  { id: "w300", name: "300 Karten", text: "300 verschiedene Aufgaben gemeistert.", pruef: s => Object.values(s.srs).filter(k => k.r >= 2).length >= 300 },
  { id: "w800", name: "800 Karten", text: "800 verschiedene Aufgaben gemeistert.", pruef: s => Object.values(s.srs).filter(k => k.r >= 2).length >= 800 },
  { id: "s1", name: "Saison 1 geknackt", text: "Alle Module der Saison 1 abgeschlossen.", pruef: s => ["m01","m02","m03","m04","m05","m06"].every(m => s.fortschritt.fertig.includes(m)) },
  { id: "s2", name: "Saison 2 geknackt", text: "Alle Module der Saison 2 abgeschlossen.", pruef: s => ["m07","m08","m09","m10","m11","m12"].every(m => s.fortschritt.fertig.includes(m)) },
  { id: "s3", name: "Saison 3 geknackt", text: "Alle Module der Saison 3 abgeschlossen.", pruef: s => ["m13","m14","m15","m16","m17","m18"].every(m => s.fortschritt.fertig.includes(m)) },
  { id: "s4", name: "Saison 4 geknackt", text: "Alle Module der Saison 4 abgeschlossen.", pruef: s => ["m19","m20","m21","m22","m23","m24"].every(m => s.fortschritt.fertig.includes(m)) },
  { id: "aufgeholt", name: "Rückstand aufgeholt", text: "Der komplette Stoff aus Klasse 7 und 8 sitzt.", pruef: s => s.fortschritt.fertig.length >= 24 },
  { id: "s5", name: "Akte geschlossen", text: "Alle 32 Module abgeschlossen – inklusive drittem Lernjahr.", pruef: s => s.fortschritt.fertig.length >= 32 },
  { id: "pc", name: "Passé composé", text: "Die Vergangenheit sitzt.", pruef: s => DP.modulStaerke("m12") >= 0.8 && DP.modulStaerke("m13") >= 0.8 },
  { id: "kombo20", name: "Serie von 20", text: "20 richtige Antworten hintereinander.", pruef: s => s.kombo >= 20 },
  { id: "frueh", name: "Frühschicht", text: "Vor 8 Uhr morgens trainiert.", pruef: () => new Date().getHours() < 8 },
  { id: "spaet", name: "Nachtschicht", text: "Nach 22 Uhr trainiert.", pruef: () => new Date().getHours() >= 22 }
];

DP.ordenPruefen = function () {
  const neu = [];
  for (const o of DP.ORDEN) {
    if (DP.stand.orden.includes(o.id)) continue;
    let treffer = false;
    try { treffer = !!o.pruef(DP.stand); } catch (e) { treffer = false; }
    if (treffer) { DP.stand.orden.push(o.id); neu.push(o); }
  }
  return neu;
};

/* ---------- Fortschritt pro Modul ---------- */

DP.modulStaerke = function (modulId) {
  const keys = Object.keys(DP.stand.srs).filter(k => k.indexOf(modulId + ":") === 0);
  const gesamt = DP.itemsProModul(modulId);
  if (!gesamt) return 0;
  let summe = 0;
  for (const k of keys) summe += Math.min(DP.stand.srs[k].r, 4) / 4;
  return Math.min(1, summe / gesamt);
};

DP._itemZahl = {};
DP.itemsProModul = function (modulId) {
  if (DP._itemZahl[modulId] != null) return DP._itemZahl[modulId];
  const m = (window.CURRICULUM || []).find(x => x.id === modulId);
  if (!m) return 0;
  let n = m.vocab.length * 3 + m.phrases.length * 2;
  m.grammar.forEach(g => { n += g.drills.length; });
  DP._itemZahl[modulId] = n;
  return n;
};

/* Abgeschlossene Module zaehlen voll, das laufende anteilig. Ein Mittelwert ueber
   alle 24 Module wuerde monatelang bei 2 Prozent stehen – das demotiviert nur. */
DP.gesamtFortschritt = function () {
  const module = window.CURRICULUM || [];
  if (!module.length) return 0;
  const fertig = DP.stand.fortschritt.fertig.length;
  const aktuell = DP.modulStaerke(DP.aktuellesModul().id);
  return Math.min(1, (fertig + aktuell) / module.length);
};

DP.aktuellesModul = function () {
  const module = window.CURRICULUM || [];
  const i = Math.min(DP.stand.fortschritt.modul, module.length - 1);
  return module[i];
};
