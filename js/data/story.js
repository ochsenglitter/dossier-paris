/* DOSSIER PARIS – Erzaehlstrang.
   Pro Modul: ein Briefing zu Beginn, vier Beats (einer pro Mission) und ein
   Cliffhanger am Ende. Kurz halten, hart schneiden, nie erklaeren.

   Tonlage: Thriller ab 16. Die Bedrohung ist echt und hat Folgen fuer echte
   Menschen – aber sie wird nie ausgemalt. Was wehtut, passiert zwischen den
   Saetzen. Am Ende steht kein offenes Grauen, sondern ein Ausweg, den er sich
   selbst erarbeitet hat. */

window.STORY_PROLOG = {
  titel: "EINGEHENDE NACHRICHT",
  text: [
    "03:14 Uhr. Dein Handy leuchtet auf. Keine Nummer, kein Name, keine Vorwarnung.",
    "«Bureau 9. Wir haben deine Akte gelesen. Zwei Jahre Französisch, eine Fünf im Zeugnis, und du verstehst kein einziges Wort. Genau deshalb schreiben wir dir.»",
    "«Wer nichts versteht, wird nicht verdächtigt. Wer vierzehn ist, wird nicht durchsucht. Du bist perfekt.»",
    "«Vor dir hatten wir jemanden. Er war gut. Er hat vier Monate durchgehalten. Dann war er weg.»",
    "«Du hast bis Februar. Fünfzehn Minuten am Tag. Mehr geben wir dir nicht, mehr brauchst du nicht.»",
    "«Antworte nicht mit ja. Antworte mit deinem Decknamen. Den echten Namen benutzt ab jetzt niemand mehr.»"
  ],
  frage: "Wie sollen wir dich nennen?"
};

window.STORY = {

  m01: {
    intro: "Gare du Nord, 16:40. Du sollst einen Kontakt treffen. Du weißt nicht, wie er aussieht. Du weißt nur: Er spricht dich an, und wenn du falsch antwortest, steht er wieder auf und du siehst ihn nie wieder.",
    beats: [
      "Ein Mann im grauen Mantel setzt sich neben dich. Er sieht dich nicht an. «Bonjour.» Mehr sagt er nicht. Zwölf Sekunden vergehen.",
      "Du antwortest. Seine Schultern gehen einen Millimeter runter. «Ça va ?» Die zweite Frage ist die eigentliche Prüfung.",
      "Er schiebt dir einen Umschlag über die Bank. Darauf steht eine einzige Zahl: 14. Sie kennen dein Alter, dein Zeugnis und deine Adresse.",
      "«Comment tu t'appelles ?» Du sagst deinen richtigen Namen. Er schüttelt kaum merklich den Kopf. «Non. Jamais celui-là.» Nie den."
    ],
    ende: "Er steht auf und ist im Gedränge verschwunden, bevor du aufgesehen hast. Im Umschlag: ein Schlüssel, eine Adresse und ein zweites Handy. Auf dem Display eine Zeile: «Quand il sonne, tu réponds.» Wenn es klingelt, gehst du ran."
  },

  m02: {
    intro: "Rue de Lille 47, dritter Stock. Der Schlüssel passt beim ersten Versuch. Die Wohnung ist nicht leer – sie ist verlassen worden. In großer Eile.",
    beats: [
      "Ein Stuhl liegt auf der Seite. Auf dem Tisch liegen Dinge in einer ordentlichen Reihe: le stylo, le cahier, la clé. Jemand hat sie hingelegt, bevor er gerannt ist.",
      "Deine Aufgabe klingt harmlos: Benenne jeden Gegenstand. Mit Artikel. Du sprichst in ein leeres Zimmer und weißt genau, dass jemand mithört.",
      "Unter dem Buch ein Zettel, zwei Wörter, hastig geschrieben: «le sac». Du drehst dich um. Auf dem umgekippten Stuhl liegt ein Rucksack, der vorhin nicht da war.",
      "Im Rucksack: ein Handy ohne SIM, zwanzig Euro und das Foto eines Gebäudes. Auf der Rückseite: «les clés sont dans la trousse»."
    ],
    ende: "Drei Schlüssel im Mäppchen. Beim Rausgehen streifst du die Kaffeetasse auf der Ablage. Sie ist noch warm."
  },

  m03: {
    intro: "Bureau 9 schickt dir fünf Profile. Fünf Menschen, fünf Beschreibungen, alle auf Französisch. Einer davon ist erfunden. Du sollst sagen, welcher.",
    beats: [
      "«Il est grand, timide, très gentil.» Klingt harmlos. Genau so klingt jede Personenbeschreibung, die sich jemand ausgedacht hat.",
      "«Elle est française, drôle, un peu bizarre.» Du markierst sie. Bizarre schreibt niemand zufällig über einen Kollegen.",
      "Beim vierten Profil stockst du. Das Adjektiv hat kein -e am Ende, also ein Mann. Der Name darüber ist ein Frauenname.",
      "Du meldest Nummer vier. Zurück kommt nur: «Bien. Tu n'es pas nul.» Nicht schlecht. Du grinst gegen deinen Willen."
    ],
    ende: "Zwei Tage später bekommst du dieselbe Liste noch einmal. Sie hat nur noch vier Namen. Nummer vier fehlt, und niemand erklärt dir, was das bedeutet."
  },

  m04: {
    intro: "Die fünfte Person auf der Liste hatte nie ein Foto. Nur einen Buchstaben: M. Du sollst herausfinden, wer das ist – indem du fragst. Auf Französisch. Ohne aufzufallen.",
    beats: [
      "Im Café: «Est-ce que vous connaissez quelqu'un ici ?» Die Kellnerin sieht dir nicht ins Gesicht. Sie sieht auf deine Hände.",
      "«Qu'est-ce que tu cherches ?» Ihre Gegenfrage kommt schneller als deine Antwort. Sie hat diese Frage nicht zum ersten Mal gestellt.",
      "Du sagst: «Je cherche M.» Sie stellt den Kaffee ab, sagt nichts und geht nach hinten. Die Tür fällt ins Schloss.",
      "Auf der Rechnung steht keine Zahl, nur ein Satz: «Ne demande plus. Pas ici. Pas à moi.» Frag nicht weiter. Nicht hier. Nicht mich."
    ],
    ende: "Am nächsten Tag bedient dort jemand anderes. Auf dem Nachbartisch liegt eine Zeitung, ein Artikel ist eingekreist. Es geht um eine Familie."
  },

  m05: {
    intro: "Der Artikel ist zwei Jahre alt. Ein Junge, fünfzehn, verschwunden zwischen Schule und Zuhause. Keine Spur, kein Verdächtiger, keine Erklärung.",
    beats: [
      "«Son père», «sa mère», «sa sœur». Du zeichnest den Stammbaum nach. Eine Person aus dem Artikel passt in keine einzige Zeile.",
      "«Il a un frère.» Der Bruder wird genau einmal erwähnt. In keinem der späteren Artikel kommt er noch vor.",
      "Du rechnest nach. Damals vierzehn, heute sechzehn. Genau das Alter, das du in zwei Jahren hast.",
      "Ein Detail, das in keinen Vermisstenartikel gehört: «Le chien s'appelle Malo.» Der Hund heißt Malo."
    ],
    ende: "Nur war Malo nie der Hund. Malo ist der Name, den der Junge in seinen letzten Nachrichten für sich selbst benutzt hat."
  },

  m06: {
    intro: "«20:15. Pont de Sully. Nicht früher, nicht später.» Du hast einen Termin und keine Ahnung, mit wem.",
    beats: [
      "Du stehst ab 20:00 an der Brücke. Um 20:10 kommt eine Nachricht: «Je ne suis pas là.» Ich bin nicht da.",
      "20:14: «Mais je te vois.» Aber ich sehe dich. Du drehst dich langsam im Kreis. Vierzig Menschen, keiner schaut her.",
      "20:15. Zwanzig Meter weiter lehnt ein Junge am Geländer. Dünn, Kapuze, vielleicht sechzehn. Er sieht aufs Wasser.",
      "Er sagt, ohne den Kopf zu heben: «Ils ne t'ont pas tout dit.» Sie haben dir nicht alles gesagt. Und dann: «Ne cours pas. Marche.»"
    ],
    ende: "Unten auf der Brücke wird ein Wagen langsamer. Als du wieder hinsiehst, ist das Geländer leer. Zu Hause hörst du die Aufnahme ab, die du reflexartig gestartet hattest. Ganz am Ende sagt er drei Wörter, die du live nicht gehört hast."
  },

  m07: {
    intro: "Die drei Wörter: «Suis le plan.» Folge dem Plan. Im Rucksack liegt ein Stadtplan mit sechs Punkten. Eingestochen mit einer Nadel, nicht gemalt.",
    beats: [
      "Erster Punkt: le musée. Am Eingang klebt ein Aufkleber mit einem Pfeil. Du folgst ihm zwei Stunden lang quer durch die Stadt.",
      "Zweiter Punkt: la piscine. Der Pfeil zeigt zurück zum Bahnhof. Entweder schickt dich jemand im Kreis – oder jemand prüft, ob dir jemand folgt.",
      "Dritter Punkt: la bibliothèque, Regal 447. In einem Buch steckt ein zweiter Stadtplan mit ganz anderen Punkten.",
      "Du hältst beide Pläne übereinander gegen die Fensterscheibe. Die Linien kreuzen sich an genau einer Stelle: la gare."
    ],
    ende: "Gleis 9, Schließfach 47. Der Schlüssel passt sofort. Darin liegt ein Trainingsplan, eine Bahnkarte – und ein Foto vom Haupteingang deiner Schule, aufgenommen letzten Dienstag um 7:52."
  },

  m08: {
    intro: "Der Trainingsplan ist keine Liste. Er ist eine Person. Nicht du. Die sollst du ab jetzt sein.",
    beats: [
      "«Tu fais du foot. Tu joues de la guitare. Tu détestes les maths.» Zwei davon stimmen sogar. Das dritte musst du lernen wie eine Vokabel.",
      "In der Schule fragt dich jemand, wo du am Wochenende warst. Du hörst dich selbst lügen und merkst, wie leicht es geht.",
      "Abends ruft eine Frau an und fragt dich auf Französisch nach deinen Hobbys. Du antwortest. Sie legt auf, ohne sich zu verabschieden.",
      "Zehn Minuten später: «Trop lent. Encore.» Zu langsam. Nochmal. Dreimal in dieser Nacht, immer um dieselbe Frage herum."
    ],
    ende: "Beim vierten Versuch sagt sie: «Bien.» Und dann, freundlich, fast beiläufig: «Maintenant, la vraie mission commence.» Jetzt beginnt die echte Mission."
  },

  m09: {
    intro: "Zug um 23:47, Wagen 12. Du musst drin sitzen. Und du musst auf Französisch erklären können, warum – falls jemand fragt.",
    beats: [
      "«Je prends le train de 23h47.» Du sagst es dir zwanzigmal vor. Prends, nicht prend. An einem einzigen Buchstaben hängt die ganze Tarnung.",
      "Der Schaffner fragt: «Vous venez d'où ?» Du antwortest zu schnell und zu korrekt. Er sieht dich eine Sekunde zu lang an.",
      "Drei Reihen weiter sitzt jemand mit einem Buch. Seit Paris dieselbe Seite. Vierzig Minuten, kein Umblättern.",
      "Eine Nachricht ohne Absender: «Tu peux venir ?» Kannst du kommen? Der Zug fährt in diesem Moment an."
    ],
    ende: "Du drückst gegen die Tür. Sie ist zu. «Je ne peux pas», tippst du. Die Antwort kommt in zwei Sekunden: «Parfait. Reste dans le train.» Perfekt. Bleib drin. Jemand wollte genau das."
  },

  m10: {
    intro: "Endstation, 00:31. Eine Stimme im Ohrhörer gibt dir den Weg an. Nur auf Französisch, nur einmal – und sie klingt jünger, als sie sollte.",
    beats: [
      "«Tourne à droite. Va tout droit. Traverse la place.» Du übersetzt im Laufen und biegst zweimal falsch ab.",
      "«Non. À GAUCHE.» Die Stimme ist genervt. Und sie gehört zu jemandem, der ungefähr in deinem Alter ist.",
      "Sackgasse. Hinter dir Schritte, gleichmäßig, ohne Eile. Die Stimme im Ohr wird sehr leise: «Ne cours pas. Marche normalement.»",
      "«L'immeuble est en face de la boulangerie.» In dieser Straße gibt es drei Bäckereien. Die Schritte hinter dir kommen näher."
    ],
    ende: "Du entscheidest dich für die mittlere. Im Treppenhaus brennt kein Licht. Im dritten Stock steht eine Tür offen, und dahinter brennt eine Lampe."
  },

  m11: {
    intro: "Die Wohnung ist bewohnt. Warme Lampe, Jacke über dem Stuhl, Geschirr in der Spüle. Du hast vier Minuten, um dir alles zu merken.",
    beats: [
      "«Un manteau noir. Une vieille photo. Une belle maison blanche.» Du sprichst leise mit, weil man sich Wörter besser merkt, wenn man sie ausspricht.",
      "Auf dem Foto: der Junge von der Brücke. Zwei Jahre jünger, lachend, zwischen seinen Eltern.",
      "Daneben hängt dasselbe Haus ein zweites Mal. Gleiche Perspektive, gleiche Tageszeit. Nur ohne Menschen.",
      "Schritte im Treppenhaus, zwei Etagen tiefer. Du machst die Lampe aus und stellst dich hinter die Tür."
    ],
    ende: "Jemand kommt herein, nimmt genau ein Foto von der Wand und geht wieder. Du siehst nur Schuhe. Erst im Bett fällt dir das Detail auf: Der Junge auf dem Foto trug dieselbe Jacke, die heute Nacht über dem Stuhl hing."
  },

  m12: {
    intro: "Bureau 9 verlangt einen Bericht. Vollständig, in der Vergangenheitsform. «Écris ce que tu as fait.» Schreib, was du getan hast.",
    beats: [
      "«J'ai pris le train. J'ai trouvé l'immeuble. J'ai regardé les photos.» In der Vergangenheitsform klingt alles harmloser, als es war.",
      "Einen Satz lässt du weg. Die Jacke. Du weißt selbst nicht genau, warum – und genau das beunruhigt dich.",
      "Antwort nach vier Minuten: «Tu as oublié quelque chose ?» Hast du etwas vergessen? Sie fragen nicht, wenn sie es nicht wissen.",
      "Du schreibst: «Non.» Zum ersten Mal lügst du Bureau 9 an. Auf Französisch, fehlerfrei, ohne zu zögern."
    ],
    ende: "Zwölf Stunden Funkstille. Dann eine einzige Zeile: «Bien. Tu apprends vite.» Gut, du lernst schnell. Darunter ein Foto: du, gestern Abend, vor eurer Haustür."
  },

  m13: {
    intro: "Akte 2247 wird freigegeben. 63 Seiten. Was vor zwei Jahren passiert ist, steht in einer Zeitform, die du bisher gemieden hast.",
    beats: [
      "«Il est parti à 6h. Il n'est jamais arrivé.» Er ist um sechs losgegangen. Er ist nie angekommen. Zwei Sätze, und dazwischen fehlt ein ganzer Tag.",
      "«Elle est restée à la maison.» Die Schwester. Sie hat als Einzige nie mit der Polizei gesprochen. Neben ihrem Namen steht ein Häkchen.",
      "«Ils sont venus le chercher.» Sie kamen, um ihn zu holen. Wer «sie» sind, steht auf keiner der 63 Seiten.",
      "Dir fällt auf, dass jeder Satz mit être eine Bewegung beschreibt. Die ganze Akte besteht aus Bewegung. Keine davon war freiwillig."
    ],
    ende: "Letzter Eintrag: «Le garçon est devenu M.» Der Junge wurde M. Darunter die Unterschrift des Verfassers: Vidal. Der Mann im grauen Mantel hat diese Akte selbst geschrieben."
  },

  m14: {
    intro: "M schreibt dir zum ersten Mal direkt. Und er schreibt nicht über gestern, sondern über morgen.",
    beats: [
      "«Ils vont te demander de choisir.» Sie werden dich bitten auszuwählen. Du liest es zweimal und verstehst es beim zweiten Mal.",
      "Keine Aufgabe. Eine Person. Den Nächsten. Jemanden aus deiner Schule, der jung genug ist und niemandem auffällt.",
      "«Tu vas dire oui. Tout le monde dit oui.» Du wirst ja sagen. Alle sagen ja. Er schreibt es ohne Vorwurf, wie eine Wetterprognose.",
      "Du tippst: «Je ne vais pas dire oui.» Es dauert vier Minuten, bis er antwortet: «Alors on va se voir.» Dann sehen wir uns."
    ],
    ende: "Und darunter, wie nachgeschoben: «Apporte le dossier.» Bring die Akte mit. Du hast keine Akte. Noch nicht."
  },

  m15: {
    intro: "Bureau 9 will wissen, was M dir geschrieben hat. Du sollst antworten, ohne einen Namen zu nennen. Also mit Pronomen.",
    beats: [
      "«Tu le connais ?» Kennst du ihn? – «Je ne le connais pas.» Der Satz ist grammatisch einwandfrei und vollständig gelogen.",
      "«Tu l'as vu ?» Hast du ihn gesehen? Du zögerst eine Sekunde zu lang. Am anderen Ende tippt jemand sehr lange und schickt dann nichts.",
      "«Je vais le trouver», schreibst du. Ich werde ihn finden. Sie sollen glauben, du stehst auf ihrer Seite.",
      "Antwort: «Nous aussi.» Wir auch. Zwei Wörter, und dir wird kalt."
    ],
    ende: "Zwei Parteien suchen jetzt denselben Jungen. Beide halten dich für ihr Werkzeug. Und mindestens eine von beiden hat recht damit."
  },

  m16: {
    intro: "Ein Code erreicht dich in vier Teilen, von vier verschiedenen Nummern, innerhalb von elf Minuten.",
    beats: [
      "Teil eins: «Tu lui fais confiance ?» Vertraust du ihm? Keine Anrede, kein Name, keine Erklärung.",
      "Teil zwei: «On leur a menti.» Man hat sie belogen. Zwei Gruppen, beide im Plural, beide ohne Gesicht.",
      "Teil drei: «Il y en a une autre.» Es gibt noch eine. Eine andere – was?",
      "Teil vier: «Trouve-la avant eux.» Finde sie vor ihnen. Du legst alle vier untereinander und siehst die Anfangsbuchstaben."
    ],
    ende: "T – O – I – T. Toit. Dach. In dieser ganzen Geschichte wurde genau ein Dach erwähnt. Im selben Moment kommt eine Nachricht von Bureau 9. Keine Worte, nur eine Adresse. Es ist eure."
  },

  m17: {
    intro: "Bevor du aufs Dach gehst, schickt M dir seine Geschichte. Sie steht komplett im Imparfait – so erzählt man, wie es früher einmal war.",
    beats: [
      "«Quand j'avais quatorze ans, j'étais nul en français.» Als ich vierzehn war, war ich schlecht in Französisch.",
      "«Je ne comprenais rien. Je faisais semblant.» Ich verstand nichts. Ich tat so als ob. Zwei Jahre lang, jeden Tag.",
      "«Ils me disaient que c'était trop tard.» Sie sagten mir, es sei zu spät. Sie sagen das jedem. Es ist der Satz, der am zuverlässigsten funktioniert.",
      "Dann schreibt er über Camille. Sechzehn, drei Jahre dabei, letztes Jahr ausgelaufen. Sie ist nicht verschwunden. Sie liegt in einer Klinik bei Lyon und spricht seit acht Monaten nicht."
    ],
    ende: "«Ce n'était pas vrai», schreibt er zum Schluss. Es war nicht wahr. «Et pour toi non plus, ce n'est pas trop tard.» Und für dich ist es auch nicht zu spät."
  },

  m18: {
    intro: "Vidal lädt dich zu einem Gespräch. Er nennt es nicht Verhör. Du sollst erzählen, was in jener Nacht passiert ist.",
    beats: [
      "«Il faisait nuit. Il n'y avait personne.» Das ist die Kulisse, Imparfait. Damit fängst du an, weil man damit Zeit gewinnt.",
      "«Tout à coup, j'ai entendu un bruit.» Das ist der Knall, Passé composé. Vidal schreibt nichts mit. Er sieht dich nur an.",
      "Jedes Mal, wenn du die Zeiten verwechselst, unterbricht er dich. Nach dem sechsten Mal unterbricht er nicht mehr.",
      "«Qu'est-ce qui s'est passé ensuite ?» Du erzählst eine Version. Nicht die Version. Er nickt an genau den richtigen Stellen."
    ],
    ende: "Am Ende steht er auf und sagt leise: «Tu racontes mieux que la plupart des adultes.» Du erzählst besser als die meisten Erwachsenen. Es klingt nicht wie ein Lob. Es klingt wie eine Entscheidung, die über dich gefallen ist."
  },

  m19: {
    intro: "Auf dem Dach ist niemand. Nur ein Umschlag, beschwert mit einem Stein. Darin drei Fotos und drei Sätze, die ineinandergreifen wie Zahnräder.",
    beats: [
      "«C'est l'homme qui t'a recruté.» Foto eins: grauer Mantel, Gare du Nord, aufgenommen vom Bahnsteig gegenüber. An dem Tag, an dem du ihn getroffen hast.",
      "«C'est le dossier que tu cherches.» Foto zwei: ein Aktenschrank mit vier Schlössern.",
      "«C'est l'endroit où tout a commencé.» Foto drei: Rue de Lille 47. Die erste Wohnung. Die mit der warmen Tasse.",
      "Die Wohnung war nie leer. Sie war seine. Du bist an dem Tag eingezogen, an dem er raus musste."
    ],
    ende: "Du warst nie der Erste. Du bist der Ersatz. Und irgendwo in deiner Schule läuft gerade jemand herum, der dein Ersatz werden soll."
  },

  m20: {
    intro: "Zwei Angebote am selben Abend. Bureau 9 ist mächtiger. M ist schneller. Einer von beiden lügt weniger.",
    beats: [
      "«Nous sommes plus forts qu'eux.» Wir sind stärker als sie, schreibt Bureau 9.",
      "«Je suis moins dangereux qu'eux.» Ich bin weniger gefährlich als sie, schreibt M.",
      "«C'est le meilleur choix.» Beide schreiben denselben Satz. Wortgleich, in derselben Minute.",
      "Das ist der Moment, in dem du aufhörst, einer Seite zu glauben, und anfängst zu rechnen."
    ],
    ende: "Du antwortest beiden dasselbe: «Je vais réfléchir.» Ich denke darüber nach. Zum ersten Mal verhandelst du – und keiner von beiden merkt, dass du erst seit ein paar Wochen wirklich verstehst, was sie schreiben."
  },

  m21: {
    intro: "Der Aktenschrank steht in der Rue de Lille. Vier Schlösser. Du hast drei Schlüssel und zehn Minuten, bis das Treppenhauslicht wieder angeht.",
    beats: [
      "«Tu dois choisir.» Du musst wählen. Zwei Schubladen, ein Versuch – und eine davon hängt an einem dünnen Draht, den du fast übersehen hättest.",
      "«Je sais que tu es là.» Ich weiß, dass du da bist. Die Nachricht kommt, während du davorstehst. Von M.",
      "«Attends. Ne mets pas la clé.» Warte. Steck den Schlüssel nicht rein. Du hältst mitten in der Bewegung an.",
      "Elf Sekunden nichts. Dann geht unten eine Tür, und jemand nimmt die Treppe. Ohne Eile, ohne Licht zu machen."
    ],
    ende: "Es ist der Mann im grauen Mantel. Er ruft nicht, er sucht nicht, er bleibt auf keinem Stockwerk stehen. Er geht direkt in den dritten Stock. Er weiß genau, wo du stehst."
  },

  m22: {
    intro: "Du hast sechs Stunden geschlafen und einen Plan. Er beginnt um sechs Uhr morgens und besteht ausschließlich aus völlig gewöhnlichen Handlungen.",
    beats: [
      "«Je me lève à six heures. Je m'habille. Je sors.» Nichts daran ist auffällig. Genau das ist der ganze Plan.",
      "«Ne te dépêche pas.» Beeil dich nicht. Wer rennt, wird gesehen. Du gehst in dem Tempo, in dem Leute zur Arbeit gehen.",
      "«Ils se sont trompés.» Sie haben sich geirrt – sie warten am Bahnhof. Du läufst die neun Kilometer zu Fuß.",
      "«On se retrouve à sept heures.» Wir treffen uns um sieben. Um 6:58 biegst du um die Ecke."
    ],
    ende: "Er steht da. Diesmal dreht er sich um. Über seinem linken Auge liegt ein Bluterguss, der ungefähr eine Woche alt ist, und er sagt kein Wort darüber."
  },

  m23: {
    intro: "M erklärt dir, was passieren wird. Alles im Futur. Er klingt wie jemand, der es schon einmal erlebt hat.",
    beats: [
      "«Ils viendront. Ils te demanderont le dossier.» Sie werden kommen und nach der Akte fragen. Noch heute.",
      "«Tu leur donneras une copie.» Du wirst ihnen eine Kopie geben. Nicht das Original. Unter keinen Umständen das Original.",
      "«Et après, tout ira bien.» Und danach wird alles gut. Er sagt es eine Spur zu schnell, um es selbst zu glauben.",
      "«Tu seras libre», sagt er. Du wirst frei sein. Dann, leiser: «Moi, je ne le serai jamais.»"
    ],
    ende: "Ich werde es nie sein. Das ist der erste Satz, bei dem du dir vollkommen sicher bist, dass er nicht lügt."
  },

  m24: {
    intro: "Letzte Übergabe. Du hast die Kopie, du hast die Sprache, und zum ersten Mal in vier Monaten hast du eine Wahl.",
    beats: [
      "«Si j'étais toi, je partirais», sagt M. Wenn ich du wäre, würde ich gehen.",
      "«Mais tu n'es pas moi», antwortest du. Er lacht. Zum ersten Mal, und es klingt, als hätte er es verlernt.",
      "Vidal nimmt die Kopie entgegen und blättert sie nicht durch. Er weiß, dass es eine Kopie ist. Er lässt dich trotzdem gehen – ein Junge, der schweigt, ist nützlicher als einer, der verschwindet.",
      "«Tu pourrais rester», sagt er im Weggehen. Du könntest bleiben. – «Je voudrais rentrer.» Ich möchte nach Hause."
    ],
    ende: "«Si tu rentres, ils te laisseront tranquille.» Wenn du heimgehst, lassen sie dich in Ruhe. Du gehst. M bleibt stehen, wo er steht, und du drehst dich nicht um. An der Haustür kommt die letzte Nachricht: «Tu n'as plus besoin de nous.» SAISON 4 ABGESCHLOSSEN. — Ein Jahr später vibriert in deiner Schublade ein Handy, das du längst weggelegt hattest."
  },

  m25: {
    intro: "Ein Jahr. Neue Klasse, neue Lehrerin, das alte Handy ganz unten unter den Socken. Und dann vibriert es doch.",
    beats: [
      "«Réponds vite. S'il te plaît.» Antworte schnell. Bitte. M hat in vier Monaten nie bitte geschrieben.",
      "Du tippst zurück, ohne den Umweg über den Kopf. Die Wörter sind einfach da. Zwei Jahre Arbeit, und du merkst es erst jetzt.",
      "«Tu écris beaucoup mieux qu'avant.» Du schreibst viel besser als früher. Danach sechs Adverbien hintereinander – und in jedem steckt ein falscher Buchstabe.",
      "M macht keine Fehler. Nicht solche. Du schreibst die sechs falschen Buchstaben untereinander: P – A – S – M – O – I. Pas moi. Nicht ich."
    ],
    ende: "Jemand anderes tippt auf seinem Handy. Und dieser Jemand schreibt weiter, als wäre nichts: «Il ne me reste que toi.» Mir bleibst nur noch du."
  },

  m26: {
    intro: "Wer auch immer da tippt, will, dass du eine Datei bekommst. Also nimmst du sie – und tust so, als hättest du nichts bemerkt.",
    beats: [
      "«Je te l'envoie maintenant.» Ich schicke sie dir jetzt. Zwei Pronomen in einem Satz, und du verstehst ihn, ohne nachzudenken.",
      "«Ne la leur donne pas.» Gib sie ihnen nicht. In der Reihenfolge der Wörter steckt die gesamte Anweisung.",
      "Du fragst: «Je la donne à qui, alors ?» – «À personne. Garde-la.» An niemanden. Behalt sie.",
      "Die Datei heißt 2247. Dieselbe Nummer wie vor einem Jahr. Nur ist sie jetzt doppelt so lang."
    ],
    ende: "Auf Seite 51 steht ein Name mit Geburtsdatum. Dreizehn Jahre alt. Und die Schule, die daneben steht, ist deine."
  },

  m27: {
    intro: "Bis drei Uhr morgens liest du. Und begreifst, dass du vor einem Jahr nicht die Akte gelesen hast, sondern eine gekürzte Fassung davon.",
    beats: [
      "«Ce que tu as lu l'année dernière n'était pas tout.» Was du letztes Jahr gelesen hast, war nicht alles.",
      "«Ce qui compte, c'est le reste.» Was zählt, ist der Rest. Der Rest sind vierzig Seiten.",
      "M ist nicht geflohen. Er wurde laufen gelassen. Als Köder, damit Bureau 9 sieht, wer sich mit ihm trifft.",
      "Auf Seite 12 steht, wer sich mit ihm getroffen hat. Der erste Eintrag der Liste bist du. Pont de Sully, 20:15."
    ],
    ende: "«C'est exactement ce dont j'avais peur.» Genau davor hatte ich Angst. Der Satz steht handschriftlich am Rand. Er wusste, wofür er benutzt wird. Er ist trotzdem zur Brücke gekommen."
  },

  m28: {
    intro: "Auf Seite 40 steht dein Name mit einem Datum daneben. Es ist drei Jahre alt. Ein volles Jahr, bevor dir irgendjemand geschrieben hat.",
    beats: [
      "«Ils t'avaient choisi avant de t'écrire.» Sie hatten dich ausgewählt, bevor sie dir schrieben.",
      "«Quand tu es arrivé, tout avait déjà été décidé.» Als du ankamst, war längst alles entschieden.",
      "Daneben steht, wer den ersten Bericht über dich verfasst hat. Jemand aus deiner Schule. Du erkennst den Namen sofort und liest ihn dreimal.",
      "«J'avais essayé de te prévenir.» Ich hatte versucht, dich zu warnen. Die Brücke. Der Junge am Geländer. Das war der Versuch."
    ],
    ende: "«Ils ne t'ont pas trouvé. Ils t'avaient cherché.» Sie haben dich nicht gefunden. Sie hatten dich gesucht. Deine Fünf in Französisch war kein Problem. Sie war die Qualifikation."
  },

  m29: {
    intro: "Ihr trefft euch im Park, am helllichten Tag, ohne Code und ohne Umweg. Für Vorsicht ist keine Zeit mehr.",
    beats: [
      "«Si tu n'avais pas répondu, rien ne serait arrivé.» Hättest du damals nicht geantwortet, wäre nichts davon passiert.",
      "«Tu aurais pu dire non.» Du hättest nein sagen können. – «Toi aussi», sagst du. Du auch. Er widerspricht nicht.",
      "Dann sagt er, was er getan hat. Vier Namen hat er gemeldet, um selbst herauszukommen. Einer davon war Camille.",
      "«J'aurais dû partir plus tôt.» Ich hätte früher gehen sollen. Er weint nicht. Er sitzt nur sehr lange sehr still da."
    ],
    ende: "«Mais alors, je ne t'aurais jamais connu.» Aber dann hätte ich dich nie kennengelernt. Du sagst eine Minute lang nichts. Dann sagst du: «On finit ça.» Wir bringen das zu Ende."
  },

  m30: {
    intro: "Am nächsten Morgen fordert M dich auf zu kommen. Und jeder einzelne Satz beginnt gleich.",
    beats: [
      "«Il faut que tu viennes.» Du musst kommen. Nicht «komm bitte». Eine andere Form, ein anderer Ton, eine andere Person.",
      "«Je veux que tu saches la vérité.» Ich will, dass du die Wahrheit weißt.",
      "«J'ai peur qu'ils soient déjà là.» Ich habe Angst, dass sie schon da sind.",
      "Vier Subjonctif-Formen, alle fehlerfrei. M hat vorgestern noch «il faut que tu vient» geschrieben. Das hier tippt jemand, der Französisch kann."
    ],
    ende: "Du antwortest trotzdem: «Il faut que tu me dises où.» Die Adresse kommt in vier Sekunden. Rue de Lille 47. Du gehst hin, und du weißt genau, dass es eine Falle ist."
  },

  m31: {
    intro: "Neun Kilometer zu Fuß, wie beim letzten Mal. Nur dass du diesmal weißt, wohin du gehst – und ungefähr ahnst, wer dort sitzt.",
    beats: [
      "«En arrivant, ne sonne pas.» Wenn du ankommst, klingel nicht. Abgeschickt vor vierzig Minuten.",
      "Du liest im Gehen. En marchant. Ohne anzuhalten, ohne nachzuschlagen. Vor zwei Jahren hättest du dafür ein Wörterbuch und zwanzig Minuten gebraucht.",
      "«J'essaie de tout t'expliquer. Mais j'ai arrêté de mentir.» Dieser eine Satz hat drei Fehler. Er ist also von M. Und er ist vierzig Minuten alt.",
      "Dritter Stock. Die Tür steht offen, genau wie beim ersten Mal. Die Lampe brennt. Auf dem Tisch stehen zwei Tassen."
    ],
    ende: "Jemand sitzt am Tisch. Es ist nicht M. Es ist eine junge Frau, vielleicht achtzehn, sie schiebt dir die zweite Tasse hin und sagt deinen Decknamen – so, als hätte sie ihn hundertmal gelesen."
  },

  m32: {
    intro: "Camille ist nicht mehr in der Klinik. Sie war acht Monate dort. Und seit einem Jahr führt sie die Rekrutierung von Bureau 9.",
    beats: [
      "Sie erklärt es ruhig, fast freundlich: Wer das übersteht, hat zwei Möglichkeiten. Kaputtgehen oder weitermachen. «On m'a donné le choix.» Man hat mir die Wahl gelassen.",
      "Sie legt zwei Umschläge auf den Tisch. Im einen dein Ausstieg. Im anderen ihr Job. «Il paraît que tu es doué.» Es heißt, du seist begabt.",
      "Du nimmst keinen von beiden. Du hast die Akte heute früh um 6:20 an eine Journalistin geschickt. Vierfach, mit Zeitstempel, von einem Rechner in der Stadtbibliothek.",
      "«Le dossier a été publié ce matin.» Die Akte wurde heute Morgen veröffentlicht. Im Passiv kommt niemand vor. Genau dafür gibt es das Passiv."
    ],
    ende: "Drei Tage später steht es in der Zeitung, ohne deinen Namen. «On m'a dit que tu étais nul en français», sagt Camille am Telefon, bevor sie auflegt und verschwindet. «On s'est trompé.» — Vier Wochen danach stellt deine neue Französischlehrerin im Unterricht eine Frage, die außer dir niemand versteht. Du antwortest. Sie sieht dich an, als hätte sie dich noch nie gesehen. In M's letztem Umschlag, den du nie geöffnet hattest, steht ein einziger Satz: «Ce n'était jamais une mission. C'était un cours de français. Et tu l'as terminé.» AKTE GESCHLOSSEN."
  }
};

/* Kurzfunk zwischendurch – wird zufällig eingestreut, wenn gerade kein Beat fällig ist. */
window.FUNK = [
  "«Encore cinq minutes. Tu peux.» Noch fünf Minuten. Du schaffst das.",
  "«Personne ne devient bon en un jour.» Niemand wird an einem Tag gut.",
  "«Ils ne savent pas encore que tu apprends.» Sie wissen noch nicht, dass du lernst.",
  "«Tu es plus fort qu'hier.» Du bist stärker als gestern.",
  "«Continue. Ne t'arrête pas maintenant.» Mach weiter. Hör jetzt nicht auf.",
  "«Chaque mot est une clé.» Jedes Wort ist ein Schlüssel.",
  "«Le silence est une réponse aussi.» Schweigen ist auch eine Antwort.",
  "«Ils comptent sur ton silence. Pas sur ton français.» Sie rechnen mit deinem Schweigen. Nicht mit deinem Französisch.",
  "«Ce que tu apprends, personne ne peut te le prendre.» Was du lernst, kann dir niemand mehr nehmen.",
  "«Ne fais confiance à personne. Sauf à ta mémoire.» Vertrau niemandem. Außer deinem Gedächtnis.",
  "«On t'attend demain.» Wir erwarten dich morgen."
];
