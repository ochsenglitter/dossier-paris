/* DOSSIER PARIS – Saison 5: "LE RETOUR"
   Stoff: 3. Lernjahr, Klasse 9 Gymnasium NRW (Découvertes 3 / À plus! 3).
   Das ist der Stoff, der aktuell im Unterricht laeuft – Saison 1 bis 4 holt
   den Rueckstand auf, Saison 5 haelt Anschluss an das, was gerade dran ist. */

window.CURRICULUM = window.CURRICULUM || [];

window.CURRICULUM.push(

{
  id: "m25", saison: 5, nr: 25,
  titel: "Ein Jahr später",
  thema: "Adverbien auf -ment und ihre Steigerung",
  ziel: "Du kannst sagen, WIE etwas passiert – und Adverbien steigern.",
  vocab: [
    ["lentement", "langsam"],
    ["rapidement", "schnell"],
    ["vraiment", "wirklich"],
    ["facilement", "leicht"],
    ["heureusement", "zum Glück"],
    ["évidemment", "offensichtlich, klar"],
    ["absolument", "unbedingt, absolut"],
    ["complètement", "völlig"],
    ["parfaitement", "perfekt"],
    ["sérieusement", "ernsthaft"],
    ["poliment", "höflich"],
    ["gentiment", "nett, freundlich"],
    ["doucement", "sanft, leise"],
    ["exactement", "genau"],
    ["récemment", "vor kurzem"],
    ["surtout", "vor allem"]
  ],
  phrases: [
    ["Il parle très lentement.", "Er spricht sehr langsam."],
    ["J'ai absolument besoin de toi.", "Ich brauche dich unbedingt."],
    ["Tu écris beaucoup mieux qu'avant.", "Du schreibst viel besser als früher."],
    ["Elle a répondu poliment.", "Sie hat höflich geantwortet."],
    ["C'est exactement ce que je pensais.", "Das ist genau das, was ich dachte."],
    ["Il court le plus vite de la classe.", "Er läuft am schnellsten in der Klasse."]
  ],
  grammar: [
    {
      id: "g1", titel: "Adverbien bilden",
      regel: "Adverbien sagen, WIE etwas passiert. Du nimmst die weibliche Form des Adjektivs und hängst -ment an. Das war es fast schon.",
      tabelle: [
        ["lent → lente → lentement", "Grundregel: weibliche Form + ment"],
        ["heureux → heureuse → heureusement", "genauso"],
        ["vrai → vraiment", "endet auf Vokal: direkt + ment"],
        ["poli → poliment", "genauso"],
        ["évident → évidemment", "auf -ent wird -emment"],
        ["constant → constamment", "auf -ant wird -amment"]
      ],
      tipp: "-emment und -amment klingen beide wie „amã“. Man hört keinen Unterschied – man schreibt ihn. Schau aufs Adjektiv: -ent oder -ant.",
      drills: [
        ["Adverb von 'lent'", "lentement"],
        ["Adverb von 'rapide'", "rapidement"],
        ["Adverb von 'heureux'", "heureusement"],
        ["Adverb von 'sérieux'", "sérieusement"],
        ["Adverb von 'vrai'", "vraiment"],
        ["Adverb von 'doux'", "doucement"],
        ["Adverb von 'évident'", "évidemment"],
        ["Adverb von 'gentil'", "gentiment"],
        ["Was ist richtig?", "Il parle poliment.", ["Il parle poliment.", "Il parle polie.", "Il parle poli."]]
      ]
    },
    {
      id: "g2", titel: "Adverbien steigern – und die alte Falle",
      regel: "Die Steigerung geht wie bei Adjektiven: plus / moins / aussi ... que. Nur bien ist unregelmäßig – und genau da geht es oft schief.",
      tabelle: [
        ["Il court plus vite que moi.", "schneller als ich"],
        ["Elle parle le plus clairement.", "am klarsten"],
        ["bien → mieux → le mieux", "gut → besser → am besten"],
        ["bon → meilleur → le meilleur", "das ist das ADJEKTIV"],
        ["Adverb steht beim VERB", "Il travaille bien."],
        ["Adjektiv steht beim NOMEN", "C'est un bon travail."]
      ],
      tipp: "Frag dich: beschreibe ich ein Ding oder eine Handlung? Ding → bon/meilleur. Handlung → bien/mieux. „Er spielt besser“ ist eine Handlung: il joue mieux.",
      drills: [
        ["Il joue ___ que moi. (besser, Handlung)", "mieux", ["mieux", "meilleur", "plus bien"]],
        ["C'est un ___ film. (besser, Ding)", "meilleur", ["meilleur", "mieux", "plus bon"]],
        ["Elle chante ___ de la classe. (am besten)", "le mieux", ["le mieux", "la meilleure", "le meilleur"]],
        ["Il court plus ___ que toi.", "vite", ["vite", "rapide", "vitement"]],
        ["Tu travailles ___ qu'avant. (besser)", "mieux"],
        ["Ça va ___ aujourd'hui. (besser)", "mieux"]
      ]
    }
  ]
},

{
  id: "m26", saison: 5, nr: 26,
  titel: "Zwei auf einmal",
  thema: "Mehrere Pronomen in einem Satz",
  ziel: "Du kannst zwei Pronomen kombinieren und in die richtige Reihenfolge bringen.",
  vocab: [
    ["le réseau social", "das soziale Netzwerk"],
    ["l'écran", "der Bildschirm"],
    ["le mot de passe", "das Passwort"],
    ["envoyer", "schicken"],
    ["partager", "teilen"],
    ["télécharger", "herunterladen"],
    ["publier", "veröffentlichen"],
    ["l'application", "die App"],
    ["le compte", "das Konto"],
    ["le lien", "der Link"],
    ["s'inscrire", "sich anmelden"],
    ["supprimer", "löschen"],
    ["le fichier", "die Datei"],
    ["prêter", "leihen"],
    ["rendre", "zurückgeben"],
    ["garder", "behalten"]
  ],
  phrases: [
    ["Je te l'envoie tout de suite.", "Ich schicke sie dir sofort."],
    ["Ne la leur donne pas.", "Gib sie ihnen nicht."],
    ["Il me l'a dit hier.", "Er hat es mir gestern gesagt."],
    ["Tu peux me le prêter ?", "Kannst du es mir leihen?"],
    ["Donne-le-moi !", "Gib es mir!"],
    ["Je lui en ai parlé.", "Ich habe mit ihm darüber gesprochen."]
  ],
  grammar: [
    {
      id: "g1", titel: "Die Reihenfolge der Pronomen",
      regel: "Treffen zwei Pronomen aufeinander, ist die Reihenfolge fest. Du musst sie nicht verstehen, du musst sie kennen – es ist immer dieselbe.",
      tabelle: [
        ["me / te / nous / vous", "1. Position"],
        ["le / la / les", "2. Position"],
        ["lui / leur", "3. Position"],
        ["y", "4. Position"],
        ["en", "5. Position"],
        ["Je te le donne. / Je le lui donne.", "Beispiele"]
      ],
      tipp: "Merkhilfe: erst die Person, die du duzt (me, te, nous, vous), dann die Sache (le, la, les), dann die dritte Person (lui, leur). Also: DICH – ES – IHM.",
      drills: [
        ["Il ___ ___ a dit. (es mir)", "me le", ["me le", "le me", "lui le"]],
        ["Je ___ ___ envoie. (sie dir)", "te la", ["te la", "la te", "te lui"]],
        ["Elle ___ ___ donne. (es ihm)", "le lui", ["le lui", "lui le", "le leur"]],
        ["Nous ___ ___ expliquons. (es ihnen)", "le leur", ["le leur", "leur le", "les leur"]],
        ["Ersetze: 'Je donne le livre à Paul.'", "Je le lui donne."],
        ["Ersetze: 'Il envoie la photo à ses amis.'", "Il la leur envoie."],
        ["Verneine: 'Je te le donne.'", "Je ne te le donne pas."]
      ]
    },
    {
      id: "g2", titel: "Im Imperativ dreht sich alles um",
      regel: "Beim bejahenden Befehl stehen die Pronomen HINTER dem Verb, mit Bindestrich – und me wird zu moi. Beim verneinten Befehl ist alles wieder normal.",
      tabelle: [
        ["Donne-le-moi !", "Gib es mir!"],
        ["Dis-le-lui !", "Sag es ihm!"],
        ["Rends-les-nous !", "Gib sie uns zurück!"],
        ["Ne me le donne pas !", "verneint: wieder davor"],
        ["Ne le lui dis pas !", "verneint: normale Reihenfolge"],
        ["Vas-y ! / Prends-en !", "mit y und en"]
      ],
      tipp: "Nur beim BEJAHENDEN Imperativ steht es hinten. Sobald ein ne auftaucht, ist alles wieder wie immer.",
      drills: [
        ["Befehl: 'Gib es mir!'", "Donne-le-moi !"],
        ["Befehl: 'Sag es ihm!'", "Dis-le-lui !"],
        ["Verneint: 'Sag es ihm nicht!'", "Ne le lui dis pas !"],
        ["Was ist richtig?", "Donne-le-moi !", ["Donne-le-moi !", "Donne-moi-le !", "Me le donne !"]],
        ["Was ist richtig?", "Ne me le donne pas !", ["Ne me le donne pas !", "Ne donne-le-moi pas !"]]
      ]
    }
  ]
},

{
  id: "m27", saison: 5, nr: 27,
  titel: "Was er nie gesagt hat",
  thema: "ce qui, ce que, ce dont und dont",
  ziel: "Du kannst 'das, was' ausdrücken – und dont sicher einsetzen.",
  vocab: [
    ["l'avis", "die Meinung"],
    ["à mon avis", "meiner Meinung nach"],
    ["être d'accord", "einverstanden sein"],
    ["avoir raison", "recht haben"],
    ["avoir tort", "unrecht haben"],
    ["discuter", "diskutieren"],
    ["expliquer", "erklären"],
    ["le sujet", "das Thema"],
    ["par contre", "dagegen, hingegen"],
    ["cependant", "jedoch"],
    ["d'ailleurs", "übrigens"],
    ["se souvenir de", "sich erinnern an"],
    ["avoir besoin de", "brauchen"],
    ["avoir peur de", "Angst haben vor"],
    ["parler de", "sprechen über"],
    ["s'agir de", "sich handeln um"]
  ],
  phrases: [
    ["Ce que tu as lu n'était pas tout.", "Was du gelesen hast, war nicht alles."],
    ["Ce qui compte, c'est le reste.", "Was zählt, ist der Rest."],
    ["C'est exactement ce dont j'avais peur.", "Genau davor hatte ich Angst."],
    ["Tout ce que je sais, c'est ça.", "Alles, was ich weiß, ist das."],
    ["L'homme dont je t'ai parlé.", "Der Mann, von dem ich dir erzählt habe."],
    ["C'est un livre dont tout le monde parle.", "Das ist ein Buch, über das alle reden."]
  ],
  grammar: [
    {
      id: "g1", titel: "ce qui, ce que, ce dont",
      regel: "Wenn es kein Nomen gibt, auf das sich das Relativpronomen bezieht, setzt du ce davor. Auf Deutsch heißt das immer 'das, was'.",
      tabelle: [
        ["ce qui + VERB", "Ce qui m'énerve, c'est ça."],
        ["ce que + SUBJEKT", "Ce que je pense, c'est autre chose."],
        ["ce dont (bei Verben mit de)", "Ce dont j'ai besoin, c'est du temps."],
        ["tout ce qui / tout ce que", "alles, was"],
        ["Der Test bleibt gleich", "Verb dahinter → qui, Subjekt → que"]
      ],
      tipp: "Derselbe Test wie in Modul 19: kommt direkt ein Verb, dann qui. Kommt ein Subjekt, dann que. Das ce davor ändert daran nichts.",
      drills: [
        ["___ me fait peur, c'est le silence.", "Ce qui", ["Ce qui", "Ce que", "Ce dont"]],
        ["___ tu dis est faux.", "Ce que", ["Ce que", "Ce qui", "Ce dont"]],
        ["___ j'ai besoin, c'est d'aide.", "Ce dont", ["Ce dont", "Ce que", "Ce qui"]],
        ["Je ne comprends pas ___ tu veux.", "ce que", ["ce que", "ce qui", "ce dont"]],
        ["Raconte-moi ___ s'est passé.", "ce qui", ["ce qui", "ce que", "ce dont"]],
        ["Tippe: 'alles, was ich weiß'", "tout ce que je sais"]
      ]
    },
    {
      id: "g2", titel: "dont – das Relativpronomen mit de",
      regel: "Überall, wo im französischen Satz ein de stehen würde, brauchst du dont. Das betrifft vor allem Verben mit de und Besitzangaben.",
      tabelle: [
        ["parler de → dont", "l'homme dont je parle"],
        ["avoir besoin de → dont", "le livre dont j'ai besoin"],
        ["avoir peur de → dont", "la chose dont j'ai peur"],
        ["se souvenir de → dont", "le jour dont je me souviens"],
        ["Besitz: dessen / deren", "la fille dont le père est prof"],
        ["Achtung: nach dont kein son/sa", "nicht 'dont son père'"]
      ],
      tipp: "Prüfe immer das Verb: Heißt es parler DE, avoir besoin DE, avoir peur DE? Dann ist es dont – nicht que.",
      drills: [
        ["C'est le film ___ je t'ai parlé.", "dont", ["dont", "que", "qui"]],
        ["Voilà le livre ___ j'ai besoin.", "dont", ["dont", "que", "où"]],
        ["C'est la fille ___ le père est prof.", "dont", ["dont", "que", "qui"]],
        ["C'est le film ___ j'ai vu hier.", "que", ["que", "dont", "qui"]],
        ["C'est la chose ___ j'ai le plus peur.", "dont", ["dont", "que", "qui"]],
        ["Verbinde: 'Voilà le dossier. Je t'ai parlé de ce dossier.'", "Voilà le dossier dont je t'ai parlé."]
      ]
    }
  ]
},

{
  id: "m28", saison: 5, nr: 28,
  titel: "Was vorher geschah",
  thema: "Plus-que-parfait – die Vorvergangenheit",
  ziel: "Du kannst ausdrücken, was schon passiert war, bevor etwas anderes passierte.",
  vocab: [
    ["auparavant", "zuvor"],
    ["la veille", "der Tag davor"],
    ["le lendemain", "der Tag danach"],
    ["jusqu'à", "bis"],
    ["dès que", "sobald"],
    ["à peine", "kaum"],
    ["l'événement", "das Ereignis"],
    ["la décision", "die Entscheidung"],
    ["la raison", "der Grund"],
    ["disparaître", "verschwinden"],
    ["se rendre compte", "merken, begreifen"],
    ["prévenir", "warnen, Bescheid sagen"],
    ["deviner", "erraten"],
    ["reconnaître", "erkennen"],
    ["le doute", "der Zweifel"],
    ["la suite", "die Fortsetzung"]
  ],
  phrases: [
    ["Ils t'avaient choisi avant de t'écrire.", "Sie hatten dich ausgewählt, bevor sie dir schrieben."],
    ["Quand je suis arrivé, il était déjà parti.", "Als ich ankam, war er schon weg."],
    ["J'avais essayé de te prévenir.", "Ich hatte versucht, dich zu warnen."],
    ["Elle avait tout compris.", "Sie hatte alles verstanden."],
    ["Nous étions déjà sortis.", "Wir waren schon rausgegangen."],
    ["Tout avait été décidé.", "Alles war entschieden worden."]
  ],
  grammar: [
    {
      id: "g1", titel: "Plus-que-parfait bilden",
      regel: "Genau wie das Passé composé – nur steht das Hilfsverb im Imparfait. Wenn du beide Zeiten schon kannst, ist das hier nur eine Kombination.",
      tabelle: [
        ["j'avais parlé", "ich hatte gesprochen"],
        ["tu avais fini", "du hattest beendet"],
        ["il avait pris", "er hatte genommen"],
        ["j'étais allé(e)", "ich war gegangen"],
        ["elle était partie", "sie war weggegangen"],
        ["je m'étais levé(e)", "ich war aufgestanden"]
      ],
      tipp: "Die Regeln von früher gelten alle weiter: dieselben être-Verben, dieselbe Angleichung des Partizips. Du tauschst nur ai gegen avais und suis gegen étais.",
      drills: [
        ["Plus-que-parfait: j'___ (avoir) parlé", "avais"],
        ["Plus-que-parfait: tu ___ (avoir) fini", "avais"],
        ["Plus-que-parfait: il ___ (être) parti", "était"],
        ["Plus-que-parfait: nous ___ (avoir) compris", "avions"],
        ["Plus-que-parfait: elles ___ (être) arrivées", "étaient"],
        ["Setze um: 'Il a mangé.' → Plus-que-parfait", "Il avait mangé."],
        ["Setze um: 'Elle est venue.' → Plus-que-parfait", "Elle était venue."],
        ["Elle ___ (partir) avant mon arrivée.", "était partie"]
      ]
    },
    {
      id: "g2", titel: "Wann man es braucht",
      regel: "Immer dann, wenn zwei Dinge in der Vergangenheit passieren und eins davon NOCH FRÜHER war. Das Frühere steht im Plus-que-parfait.",
      tabelle: [
        ["Quand je suis arrivé, il était parti.", "erst er weg, dann ich da"],
        ["Il m'a dit qu'il avait tout vu.", "das Sehen war vorher"],
        ["J'avais déjà mangé quand tu as appelé.", "déjà ist ein typisches Signal"],
        ["Signalwörter", "déjà, avant, auparavant, la veille"],
        ["Deutsch: 'hatte ... getan'", "genau dieselbe Idee"]
      ],
      tipp: "Im Deutschen sagst du es genauso: „Als ich ankam, war er schon gegangen.“ Wenn dein deutscher Satz „hatte“ oder „war ... gegangen“ enthält, ist es Plus-que-parfait.",
      drills: [
        ["Quand je suis arrivé, il ___ (partir) déjà.", "était déjà parti"],
        ["Il a dit qu'il ___ (voir) le film.", "avait vu"],
        ["Nous ___ (finir) quand elle est entrée.", "avions fini"],
        ["Welche Zeit ist zuerst passiert?", "das Plus-que-parfait", ["das Plus-que-parfait", "das Passé composé"]],
        ["'Sie waren schon weggefahren.'", "Ils étaient déjà partis."]
      ]
    }
  ]
},

{
  id: "m29", saison: 5, nr: 29,
  titel: "Was gewesen wäre",
  thema: "Conditionnel passé und si-Sätze Typ 3",
  ziel: "Du kannst über Dinge reden, die anders hätten laufen können.",
  vocab: [
    ["regretter", "bereuen"],
    ["le regret", "das Bedauern"],
    ["la faute", "der Fehler, die Schuld"],
    ["l'erreur", "der Irrtum"],
    ["le choix", "die Wahl"],
    ["éviter", "vermeiden"],
    ["empêcher", "verhindern"],
    ["oser", "wagen"],
    ["risquer", "riskieren"],
    ["avouer", "gestehen"],
    ["pardonner", "verzeihen"],
    ["la confiance", "das Vertrauen"],
    ["la déception", "die Enttäuschung"],
    ["se douter de", "ahnen"],
    ["renoncer", "verzichten"],
    ["autrement", "anders"]
  ],
  phrases: [
    ["Tu aurais pu dire non.", "Du hättest nein sagen können."],
    ["J'aurais dû partir plus tôt.", "Ich hätte früher gehen sollen."],
    ["Si tu n'avais pas répondu, rien ne serait arrivé.", "Hättest du nicht geantwortet, wäre nichts passiert."],
    ["Je serais venu, mais je ne savais pas.", "Ich wäre gekommen, aber ich wusste es nicht."],
    ["Elle aurait aimé te voir.", "Sie hätte dich gern gesehen."],
    ["On aurait dû se parler.", "Wir hätten miteinander reden sollen."]
  ],
  grammar: [
    {
      id: "g1", titel: "Conditionnel passé",
      regel: "Wieder eine Kombination: avoir oder être im Conditionnel présent, dahinter das Partizip. Auf Deutsch: 'hätte gemacht', 'wäre gegangen'.",
      tabelle: [
        ["j'aurais fait", "ich hätte gemacht"],
        ["tu aurais pu", "du hättest gekonnt"],
        ["il aurait dû", "er hätte gemusst/sollen"],
        ["je serais allé(e)", "ich wäre gegangen"],
        ["elle serait venue", "sie wäre gekommen"],
        ["nous aurions voulu", "wir hätten gewollt"]
      ],
      tipp: "j'aurais dû = ich hätte sollen. j'aurais pu = ich hätte können. Diese beiden brauchst du im Alltag am häufigsten – lern sie als feste Wendung.",
      drills: [
        ["Conditionnel passé: j'___ (avoir) fait", "aurais"],
        ["Conditionnel passé: tu ___ (avoir) pu", "aurais"],
        ["Conditionnel passé: elle ___ (être) venue", "serait"],
        ["Conditionnel passé: nous ___ (avoir) voulu", "aurions"],
        ["'Ich hätte gehen sollen.'", "J'aurais dû partir."],
        ["'Er hätte kommen können.'", "Il aurait pu venir."],
        ["Was ist richtig?", "J'aurais dû le dire.", ["J'aurais dû le dire.", "J'aurai dû le dire.", "Je serais dû le dire."]]
      ]
    },
    {
      id: "g2", titel: "si-Sätze Typ 3",
      regel: "Der dritte und letzte Typ: es geht um etwas, das NICHT passiert ist und auch nicht mehr passieren kann. si + Plus-que-parfait, dann Conditionnel passé.",
      tabelle: [
        ["Typ 1: si + présent → futur", "Si tu viens, on ira."],
        ["Typ 2: si + imparfait → conditionnel", "Si tu venais, on irait."],
        ["Typ 3: si + plus-que-parfait → conditionnel passé", "Si tu étais venu, on serait allés."],
        ["Bedauern", "Si j'avais su, je n'aurais rien dit."],
        ["Nach si weiterhin NIE rai oder rais", "die Regel gilt auch hier"]
      ],
      tipp: "Die drei Typen sind eine Treppe: möglich (présent), unwahrscheinlich (imparfait), zu spät (plus-que-parfait). Und nach si steht nie eine r-Form.",
      drills: [
        ["Si j'___ (savoir), je serais venu.", "avais su"],
        ["Si tu étais venu, on ___ (s'amuser).", "se serait amusés", ["se serait amusés", "s'amuserait", "s'amusait"]],
        ["Si elle ___ (partir) plus tôt, elle aurait eu le train.", "était partie"],
        ["Was ist richtig?", "Si j'avais su, j'aurais dit non.", ["Si j'avais su, j'aurais dit non.", "Si j'aurais su, j'aurais dit non."]],
        ["Welcher Typ? 'Si tu viens, on ira au cinéma.'", "Typ 1", ["Typ 1", "Typ 2", "Typ 3"]],
        ["Welcher Typ? 'Si j'avais eu le temps, je serais venu.'", "Typ 3", ["Typ 3", "Typ 2", "Typ 1"]]
      ]
    }
  ]
},

{
  id: "m30", saison: 5, nr: 30,
  titel: "Was er will",
  thema: "Subjonctif présent",
  ziel: "Du kannst den Subjonctif bilden und weißt, wann er stehen muss.",
  vocab: [
    ["il faut que", "es ist nötig, dass"],
    ["souhaiter", "wünschen"],
    ["exiger", "verlangen"],
    ["craindre", "fürchten"],
    ["bien que", "obwohl"],
    ["pour que", "damit"],
    ["avant que", "bevor"],
    ["jusqu'à ce que", "bis"],
    ["à condition que", "unter der Bedingung, dass"],
    ["s'engager", "sich engagieren"],
    ["le droit", "das Recht"],
    ["l'avenir", "die Zukunft"],
    ["proposer", "vorschlagen"],
    ["accepter", "annehmen"],
    ["refuser", "ablehnen"],
    ["permettre", "erlauben"]
  ],
  phrases: [
    ["Il faut que tu viennes.", "Du musst kommen."],
    ["Je veux que tu saches la vérité.", "Ich will, dass du die Wahrheit weißt."],
    ["J'ai peur qu'ils soient déjà là.", "Ich habe Angst, dass sie schon da sind."],
    ["Bien que ce soit dangereux, viens.", "Obwohl es gefährlich ist, komm."],
    ["Je suis content que tu sois là.", "Ich bin froh, dass du da bist."],
    ["Il faut que je parte.", "Ich muss gehen."]
  ],
  grammar: [
    {
      id: "g1", titel: "Subjonctif bilden",
      regel: "Nimm die ils-Form im Präsens, streich das -ent weg, häng die Endungen an. Das Rezept kennst du schon vom Imparfait – nur mit einer anderen Ausgangsform.",
      tabelle: [
        ["ils parlent → parl-", "Schritt 1: Stamm"],
        ["que je parle / que tu parles", "-e, -es"],
        ["qu'il parle / qu'ils parlent", "-e, -ent"],
        ["que nous parlions / que vous parliez", "-ions, -iez"],
        ["ils finissent → que je finisse", "finir"],
        ["ils prennent → que je prenne", "prendre"]
      ],
      tipp: "Bei -er-Verben klingt der Subjonctif genau wie das Präsens. Die Form fällt also erst bei unregelmäßigen Verben wirklich auf – und die sind unten.",
      drills: [
        ["Subjonctif: que je ___ (parler)", "parle"],
        ["Subjonctif: que tu ___ (finir)", "finisses"],
        ["Subjonctif: qu'il ___ (prendre)", "prenne"],
        ["Subjonctif: que nous ___ (venir)", "venions"],
        ["Subjonctif: qu'ils ___ (attendre)", "attendent"],
        ["Subjonctif: que vous ___ (partir)", "partiez"]
      ]
    },
    {
      id: "g2", titel: "Die unregelmäßigen und die Auslöser",
      regel: "Acht Verben haben einen eigenen Subjonctif. Und der Subjonctif kommt nie allein – er steht immer nach einem bestimmten Auslöser.",
      tabelle: [
        ["être → que je sois", "avoir → que j'aie"],
        ["aller → que j'aille", "faire → que je fasse"],
        ["pouvoir → que je puisse", "savoir → que je sache"],
        ["vouloir → que je veuille", "il faut → qu'il faille"],
        ["Auslöser: Wille und Notwendigkeit", "il faut que, vouloir que, exiger que"],
        ["Auslöser: Gefühl", "avoir peur que, être content que, regretter que"],
        ["Auslöser: feste Konjunktionen", "bien que, pour que, avant que, jusqu'à ce que"]
      ],
      tipp: "Merk dir die Auslöser statt der Regel: Wer etwas WILL, FÜHLT oder ZWEIFELT, löst den Subjonctif aus. Wer etwas WEISS oder SAGT, nicht – nach 'je pense que' steht ganz normaler Indikativ.",
      drills: [
        ["Il faut que tu ___ (être) à l'heure.", "sois"],
        ["Je veux que tu ___ (savoir) la vérité.", "saches"],
        ["Il faut que j'___ (aller) au collège.", "aille"],
        ["Bien qu'il ___ (faire) froid, on sort.", "fasse"],
        ["J'ai peur qu'elle ne ___ (pouvoir) pas venir.", "puisse"],
        ["Je suis content que tu ___ (être) là.", "sois"],
        ["Il faut que nous ___ (avoir) le temps.", "ayons"],
        ["Nach 'je pense que' steht ...", "Indikativ", ["Indikativ", "Subjonctif"]],
        ["Nach 'il faut que' steht ...", "Subjonctif", ["Subjonctif", "Indikativ"]]
      ]
    }
  ]
},

{
  id: "m31", saison: 5, nr: 31,
  titel: "Im Gehen",
  thema: "Gérondif und Verben mit à oder de",
  ziel: "Du kannst Gleichzeitigkeit ausdrücken und weißt, welche Präposition vor dem Infinitiv steht.",
  vocab: [
    ["le stage", "das Praktikum"],
    ["l'entreprise", "das Unternehmen"],
    ["le patron", "der Chef"],
    ["le collègue", "der Kollege"],
    ["le métier", "der Beruf"],
    ["le salaire", "das Gehalt"],
    ["la formation", "die Ausbildung"],
    ["postuler", "sich bewerben"],
    ["l'entretien", "das Vorstellungsgespräch"],
    ["l'expérience", "die Erfahrung"],
    ["commencer à", "anfangen zu"],
    ["réussir à", "es schaffen zu"],
    ["apprendre à", "lernen zu"],
    ["essayer de", "versuchen zu"],
    ["décider de", "beschließen zu"],
    ["arrêter de", "aufhören zu"]
  ],
  phrases: [
    ["En arrivant, ne sonne pas.", "Wenn du ankommst, klingel nicht."],
    ["Il lit en marchant.", "Er liest im Gehen."],
    ["J'essaie de tout t'expliquer.", "Ich versuche, dir alles zu erklären."],
    ["J'ai arrêté de mentir.", "Ich habe aufgehört zu lügen."],
    ["Elle a réussi à trouver un stage.", "Sie hat es geschafft, ein Praktikum zu finden."],
    ["On apprend en faisant des erreurs.", "Man lernt, indem man Fehler macht."]
  ],
  grammar: [
    {
      id: "g1", titel: "Das Gérondif: en + Partizip Präsens",
      regel: "Dieselbe nous-Form wie beim Imparfait: -ons streichen, -ant anhängen, en davor. Es heißt 'während', 'indem' oder 'wenn'.",
      tabelle: [
        ["nous parlons → en parlant", "Bildung"],
        ["nous faisons → en faisant", "faire"],
        ["nous prenons → en prenant", "prendre"],
        ["être → en étant", "unregelmäßig"],
        ["avoir → en ayant", "unregelmäßig"],
        ["savoir → en sachant", "unregelmäßig"]
      ],
      tipp: "Wichtig: Gérondif und Hauptsatz müssen dasselbe Subjekt haben. 'Il lit en marchant' – er liest und er geht. Sonst brauchst du einen Nebensatz.",
      drills: [
        ["Gérondif von 'parler'", "en parlant"],
        ["Gérondif von 'faire'", "en faisant"],
        ["Gérondif von 'prendre'", "en prenant"],
        ["Gérondif von 'aller'", "en allant"],
        ["Gérondif von 'être'", "en étant"],
        ["Il travaille ___ (écouter) de la musique.", "en écoutant"],
        ["'Man lernt, indem man übt.' On apprend ___ (s'entraîner).", "en s'entraînant"]
      ]
    },
    {
      id: "g2", titel: "à oder de vor dem Infinitiv?",
      regel: "Manche Verben verlangen à, andere de, manche gar nichts. Das lernt man Verb für Verb – deshalb hier die häufigsten als Liste.",
      tabelle: [
        ["commencer à, réussir à", "anfangen zu, schaffen zu"],
        ["apprendre à, aider à", "lernen zu, helfen zu"],
        ["arriver à, continuer à", "es schaffen, weitermachen"],
        ["essayer de, décider de", "versuchen, beschließen"],
        ["oublier de, arrêter de", "vergessen, aufhören"],
        ["ohne alles: vouloir, pouvoir, devoir, aller", "Je veux partir."]
      ],
      tipp: "Faustregel als Eselsbrücke: Die à-Verben zeigen nach vorn – anfangen, lernen, schaffen. Die de-Verben schauen zurück – aufhören, vergessen, vermeiden. Hilft nicht immer, aber oft.",
      drills: [
        ["J'ai commencé ___ apprendre le français.", "à", ["à", "de", "—"]],
        ["Il a essayé ___ comprendre.", "de", ["de", "à", "—"]],
        ["Elle a décidé ___ partir.", "de", ["de", "à", "—"]],
        ["Nous avons réussi ___ finir.", "à", ["à", "de", "—"]],
        ["J'ai oublié ___ te le dire.", "de", ["de", "à", "—"]],
        ["Je veux ___ partir.", "—", ["—", "à", "de"]],
        ["Il apprend ___ nager.", "à", ["à", "de", "—"]],
        ["Arrête ___ parler !", "de", ["de", "à", "—"]]
      ]
    }
  ]
},

{
  id: "m32", saison: 5, nr: 32,
  titel: "Der Bericht",
  thema: "Passiv und indirekte Rede",
  ziel: "Du kannst Passivsätze bilden und Gesagtes wiedergeben – die letzten beiden großen Baustellen.",
  vocab: [
    ["annoncer", "ankündigen"],
    ["déclarer", "erklären"],
    ["affirmer", "behaupten"],
    ["ajouter", "hinzufügen"],
    ["raconter", "erzählen"],
    ["l'article", "der Artikel"],
    ["la presse", "die Presse"],
    ["l'information", "die Information"],
    ["le témoignage", "die Aussage"],
    ["découvrir", "entdecken"],
    ["selon", "laut, gemäß"],
    ["d'après", "nach, laut"],
    ["l'environnement", "die Umwelt"],
    ["protéger", "schützen"],
    ["le changement", "die Veränderung"],
    ["la société", "die Gesellschaft"]
  ],
  phrases: [
    ["Le dossier a été publié ce matin.", "Die Akte wurde heute Morgen veröffentlicht."],
    ["Ce livre est lu par tout le monde.", "Dieses Buch wird von allen gelesen."],
    ["On m'a dit que tu étais là.", "Man hat mir gesagt, dass du da warst."],
    ["Il a dit qu'il était fatigué.", "Er sagte, er sei müde."],
    ["Elle m'a demandé si je comprenais.", "Sie hat mich gefragt, ob ich verstehe."],
    ["Il m'a demandé ce que je faisais.", "Er hat mich gefragt, was ich mache."]
  ],
  grammar: [
    {
      id: "g1", titel: "Das Passiv",
      regel: "être in der passenden Zeit + Partizip. Das Partizip gleicht sich an das Subjekt an. Wer handelt, steht mit par dahinter – oder gar nicht.",
      tabelle: [
        ["Le livre est lu par Marie.", "Präsens"],
        ["Le livre a été lu.", "Passé composé"],
        ["Le livre était lu.", "Imparfait"],
        ["Le livre sera lu.", "Futur"],
        ["La lettre a été écrite.", "Angleichung: + e"],
        ["On a publié le dossier.", "Alternative: on statt Passiv"]
      ],
      tipp: "Franzosen vermeiden das Passiv gern und nehmen stattdessen on: 'On a publié le dossier' statt 'Le dossier a été publié'. Beides ist richtig, on klingt natürlicher.",
      drills: [
        ["Le livre ___ (être) lu par tous. (Präsens)", "est"],
        ["La maison ___ (être) construite en 1900. (Passé composé)", "a été"],
        ["Setze ins Passiv: 'Marie écrit la lettre.'", "La lettre est écrite par Marie."],
        ["Setze ins Passiv: 'On a publié l'article.'", "L'article a été publié."],
        ["Was ist richtig?", "La porte a été fermée.", ["La porte a été fermée.", "La porte a été fermé.", "La porte est été fermée."]],
        ["Aktiv mit on: 'Le dossier a été trouvé.'", "On a trouvé le dossier."]
      ]
    },
    {
      id: "g2", titel: "Indirekte Rede",
      regel: "Aus 'Il dit: « Je suis fatigué »' wird 'Il dit qu'il est fatigué.' Steht das einleitende Verb in der Vergangenheit, rutschen die Zeiten eine Stufe zurück.",
      tabelle: [
        ["Aussage → que", "Il dit qu'il vient."],
        ["Ja/Nein-Frage → si", "Il demande si tu viens."],
        ["Frage mit qu'est-ce que → ce que", "Il demande ce que tu fais."],
        ["présent → imparfait", "« Je suis » → il a dit qu'il était"],
        ["passé composé → plus-que-parfait", "« J'ai vu » → il a dit qu'il avait vu"],
        ["futur → conditionnel", "« Je viendrai » → il a dit qu'il viendrait"]
      ],
      tipp: "Zwei Dinge ändern sich immer: die Person (je wird il) und, wenn eingeleitet wird mit einer Vergangenheitsform, die Zeit. Zeitangaben rutschen mit: aujourd'hui wird ce jour-là, demain wird le lendemain.",
      drills: [
        ["Il dit : « Je viens. » → Il dit qu'il ___.", "vient"],
        ["Il a dit : « Je viens. » → Il a dit qu'il ___.", "venait"],
        ["Elle a dit : « J'ai fini. » → Elle a dit qu'elle ___ ___.", "avait fini"],
        ["Il a dit : « Je partirai. » → Il a dit qu'il ___.", "partirait"],
        ["Il demande : « Tu viens ? » → Il demande ___ tu viens.", "si", ["si", "que", "ce que"]],
        ["Il demande : « Qu'est-ce que tu fais ? » → Il demande ___ tu fais.", "ce que", ["ce que", "si", "que"]],
        ["Was ist richtig?", "Il a dit qu'il était malade.", ["Il a dit qu'il était malade.", "Il a dit qu'il est malade."]]
      ]
    }
  ]
}

);
