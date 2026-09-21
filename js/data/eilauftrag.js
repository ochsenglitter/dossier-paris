/* DOSSIER PARIS – EILAUFTRAG
   Ein vorgezogener Sonderauftrag mit Frist: der Stoff, der in der Schule als
   Naechstes geprueft wird. Er draengelt sich vor die laufende Saison und wird
   anders trainiert als der Rest – schriftlich und per Diktat, mit strenger
   Rechtschreibung, weil im Test jeder Akzent zaehlt.

   Quelle: Unité 1 "Vive les échanges!", Vokabular S. 174-177.
   Frist anpassen: einfach das Datum unten aendern. */

window.EILAUFTRAG = {
  id: "eil1",
  titel: "Vive les échanges !",
  unite: "Unité 1",
  frist: "2026-09-23",
  anlass: "Vokabeltest",

  story: {
    intro: "Ein Auftrag ausserhalb der Reihe. Keine Erklaerung, kein Kontext, nur eine Liste und ein Datum.",
    beats: [
      "«Une liste. Par cœur. Mercredi.» Eine Liste. Auswendig. Mittwoch. Mehr steht nicht da.",
      "Kein Multiple Choice diesmal. Du musst jedes Wort selbst schreiben – mit jedem Accent an der richtigen Stelle.",
      "Die Haelfte davon kommt ueber Funk. Du hoerst es einmal und schreibst es auf. Genau so.",
      "«Ils vérifient l'orthographe.» Sie prüfen die Rechtschreibung. Ein falscher Accent ist ein falsches Wort."
    ],
    ende: "Auftrag erfüllt. Die Liste sitzt."
  },

  gruppen: [
    {
      id: "a", name: "Austausch und Aufenthalt",
      woerter: [
        ["Vive ...!", "Es lebe ...!; Es leben ...!"],
        ["un échange", "ein Tausch; ein Austausch", "é wie in école"],
        ["échanger qc", "etw. (aus)tauschen", "é am Anfang"],
        ["plusieurs", "mehrere", "endet auf -eurs"],
        ["une possibilité", "eine Möglichkeit", "zwei s, é am Ende"],
        ["un échange scolaire", "ein Schüleraustausch"],
        ["un séjour", "ein Aufenthalt", "é, dann jour"],
        ["un accueil", "ein Empfang", "cc und -ueil, nicht -euil"],
        ["une famille d'accueil", "eine Gastfamilie", "Apostroph nach d"],
        ["franco-allemand", "deutsch-französisch", "mit Bindestrich"],
        ["l'OFAJ", "das DFJW"],
        ["un lycée", "ein Gymnasium; ein Lycée", "y und é am Ende"],
        ["excité", "aufgeregt", "é in der Mitte und am Ende"],
        ["un programme d'échange", "ein Austauschprogramm", "programme mit zwei m"],
        ["l'Allemagne", "Deutschland", "zwei l, -gne am Ende"],
        ["l'allemand", "Deutsch (die Sprache)"]
      ]
    },
    {
      id: "b", name: "Kontakt und Erfahrung",
      woerter: [
        ["un correspondant", "ein Brieffreund; ein Austauschpartner", "zwei r"],
        ["une correspondante", "eine Brieffreundin; eine Austauschpartnerin"],
        ["difficile", "schwierig", "zwei f, ein c"],
        ["supporter qn", "jdn. aushalten; jdn. ertragen", "zwei p"],
        ["une annonce", "eine Anzeige; eine Annonce", "zwei n"],
        ["une expérience", "eine Erfahrung", "é in der Mitte, -ience am Ende"],
        ["un progrès", "ein Fortschritt", "accent grave auf dem è"],
        ["rechercher qn", "jdn. suchen"],
        ["aller chercher qn", "jdn. abholen"],
        ["une phrase", "ein Satz", "ph wie in Photo"],
        ["un mot", "ein Wort", "stummes t am Ende"],
        ["un début", "ein Anfang", "é und stummes t"],
        ["au début", "am Anfang"],
        ["un pays", "ein Land", "stummes s"],
        ["le mal du pays", "das Heimweh"],
        ["des chips", "(Kartoffel-)Chips"],
        ["le skate", "das Skaten; das Skateboard"]
      ]
    },
    {
      id: "c", name: "Vergleichen und beschreiben",
      woerter: [
        ["tout", "ganz; alle (männlich Einzahl)"],
        ["toute", "ganz (weiblich Einzahl)"],
        ["tous", "alle (männlich Mehrzahl)"],
        ["toutes", "alle (weiblich Mehrzahl)"],
        ["aussi rouge que", "so rot wie"],
        ["plus long que", "länger als"],
        ["moins disponible que", "weniger verfügbar als"],
        ["pareil", "gleich", "endet auf -eil"],
        ["timide", "schüchtern"],
        ["disponible", "verfügbar"],
        ["meilleur", "besser (Steigerung von bon)", "zwei l"],
        ["pire", "schlimmer (Steigerung von grave)"],
        ["magnifique", "wunderschön; großartig", "-que am Ende"],
        ["poli", "höflich"],
        ["gentil", "nett", "das l am Ende spricht man nicht"],
        ["impatient", "ungeduldig"],
        ["déçu", "enttäuscht", "é und ç mit Cedille"],
        ["grave", "schlimm"],
        ["possible", "möglich"]
      ]
    },
    {
      id: "d", name: "Land, Nacht und Tiere",
      woerter: [
        ["la campagne", "das Land (im Gegensatz zur Stadt)", "-gne am Ende"],
        ["la réalité", "die Wirklichkeit; die Realität", "é ... é"],
        ["la nuit", "die Nacht"],
        ["un âne", "ein Esel", "Zirkumflex auf dem â"],
        ["une ânesse", "eine Eselin"],
        ["un chien", "ein Hund"],
        ["une chienne", "eine Hündin", "zwei n"],
        ["par contre", "hingegen; dagegen"],
        ["à une heure de ...", "eine Stunde entfernt von ..."]
      ]
    },
    {
      id: "e", name: "Reagieren und beruhigen",
      woerter: [
        ["être embêté", "verlegen sein; jdm. unangenehm sein", "ê mit Zirkumflex"],
        ["exprimer qc", "etw. ausdrücken"],
        ["une expression", "ein Ausdruck", "zwei s"],
        ["essayer de faire qc", "versuchen, etw. zu tun", "zwei s, dann -ayer"],
        ["répéter qc", "etw. wiederholen", "zweimal é"],
        ["ressembler à qn", "jdm. ähnlich sein", "zwei s"],
        ["confondre qc", "etw. verwechseln"],
        ["Ne t'en fais pas.", "Mach dir nichts draus.", "Apostroph nach t"],
        ["Ne t'inquiète pas.", "Mach dir keine Sorgen.", "accent grave auf dem è"],
        ["T'inquiète.", "Keine Panik."],
        ["Ça craint !", "Das ist mies!; Das ist übel!", "großes Ç mit Cedille"],
        ["Excusez-moi !", "Entschuldigen Sie!", "mit Bindestrich"],
        ["Excuse-moi !", "Entschuldige!"]
      ]
    },
    {
      id: "w", name: "Wiederholung aus früheren Unités", wiederholung: true,
      woerter: [
        ["participer à qc", "an etw. teilnehmen"],
        ["choisir qc", "etw. auswählen"],
        ["aider qn", "jdm. helfen"],
        ["perdre qc", "etw. verlieren"],
        ["préparer qc", "etw. vorbereiten"],
        ["facile", "leicht"],
        ["un voyage", "eine Reise"],
        ["un mois", "ein Monat"],
        ["une journée", "ein Tag"],
        ["depuis", "seit"],
        ["ensuite", "dann; danach"]
      ]
    }
  ],

  saetze: [
    ["Vive le sport !", "Es lebe der Sport!"],
    ["Bon séjour en France !", "Schönen Aufenthalt in Frankreich!"],
    ["Tu veux participer à un échange ?", "Möchtest du an einem Austausch teilnehmen?"],
    ["Ma grande sœur va au lycée.", "Meine große Schwester geht aufs Gymnasium."],
    ["Je ne peux plus supporter cela !", "Ich kann das nicht mehr ertragen!"],
    ["Un échange est une expérience géniale !", "Ein Austausch ist eine tolle Erfahrung!"],
    ["J'ai fait des progrès en français.", "Ich habe Fortschritte im Französischen gemacht."],
    ["Je recherche une corres sympa.", "Ich suche eine nette Brieffreundin."],
    ["Toute la famille va chercher Claas à la gare.", "Die ganze Familie holt Claas vom Bahnhof ab."],
    ["Claas est aussi rouge qu'une tomate.", "Claas ist so rot wie eine Tomate."],
    ["Je ne comprends pas un seul mot !", "Ich verstehe kein einziges Wort!"],
    ["C'est un bon début !", "Das ist ein guter Anfang!"],
    ["Pour moi, c'est pareil.", "Für mich ist es dasselbe."],
    ["Tu es disponible samedi ?", "Hast du am Samstag Zeit?"],
    ["J'ai un peu le mal du pays.", "Ich habe ein bisschen Heimweh."],
    ["J'ai une meilleure idée !", "Ich habe eine bessere Idee!"],
    ["Ne sois pas aussi impatient !", "Sei nicht so ungeduldig!"],
    ["Le voyage était magnifique !", "Die Reise war wunderschön!"],
    ["La réalité est plus belle que les photos.", "Die Realität ist schöner als die Fotos."],
    ["Ce n'est pas (si) grave.", "Das ist nicht (so) schlimm."],
    ["Est-ce que vous pouvez répéter, s'il vous plaît ?", "Können Sie das bitte wiederholen?"],
    ["Lena a confondu les mots « désert » et « dessert ».", "Lena hat die Wörter désert und dessert verwechselt."]
  ],

  /* Le français parlé: geschrieben -> gesprochen */
  gesprochen: [
    ["Je suis désolé.", "Chuis désolé."],
    ["Tu as faim ?", "T'as faim ?"],
    ["Il y a ...", "Y a ..."],
    ["l'après-midi", "l'aprèm"],
    ["sympathique", "sympa"],
    ["cela", "ça"],
    ["Je ne sais pas.", "Chais pas."],
    ["Ne t'en fais pas.", "T'en fais pas."],
    ["Ne t'inquiète pas.", "T'inquiète."],
    ["une chose", "un truc"],
    ["un ami", "un pote"],
    ["C'est ennuyeux !", "Ça craint !"],
    ["Fais attention !", "Fais gaffe !"],
    ["une fête", "une teuf"],
    ["la famille", "la mifa"],
    ["Bien joué !", "Bien ouej !"]
  ]
};
