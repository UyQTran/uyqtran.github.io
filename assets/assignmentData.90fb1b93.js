var e=[{id:"intro",nextId:"coding",title:"Mitt f\xF8rste program",description:"Velkommen til progg.it! Her kan du kode i et programmeringsspr\xE5k som heter Python. P\xE5 denne siden ser du to hvite bokser. Den \xF8verste er editoren din, mens boksen under er output-feltet. Output-feltet er boksen som skriver ut resultatet av koden i editoren n\xE5r du trykker p\xE5 kj\xF8reknappen. P\xE5 eksempelet, ser du et funksjonskall i editoren der en funksjon print, som skriver ut strengen 'Hei verden!' til output-feltet. Pr\xF8v deg frem ved \xE5 trykke p\xE5 kj\xF8reknappen.",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:"print('Hei verden!')",solution:{solved:"",code:""}},{id:"coding",nextId:"variables",title:"Koding",description:"Kode er det samme som en oppskrift som maskinene v\xE5re f\xF8lger bastant. Det betyr at maskinen din skriver ut n\xF8yaktig hva som er mellom ' tegnene i funksjonskallet for print. Erstatt progg.it med ditt eget navn s\xE5 vil du f\xE5r en hilsen fra din egen maskin.",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:"print('Hei mitt navn er progg.it')",solution:{solved:"",code:""}},{id:"variables",nextId:"variables-string",title:"Variabler av tall",description:"I matematikken l\xE6rer vi om ligninger med ukjente variabler der v\xE5r oppgave som oftest er \xE5 finne ut hva variabelen er lik. Dette fungerer litt annerledes i programmering hvor vi er sjefen. Vi bestemmer hva variabelen skal v\xE6re lik. I editoren s\xE5 ser du en variabel x som vi har satt lik 3. Pr\xF8v \xE5 bytt ut 3 med ditt favorittall og trykk p\xE5 kj\xF8r",postDescription:{shouldShowIfSolved:!1,text:"Funksjonen print kan ta hvilke som helst variabler og printer fortsatt ut som om vi hadde byttet ut variabelen med verdien."},initialCode:`x = 3
print(x)`,solution:{solved:"",code:""}},{id:"variables-string",nextId:"variables-error",title:"Variabler av strenger",description:"Variabler kan ikke bare v\xE6re tall, men tekststrenger ogs\xE5. Variabler kan ogs\xE5 hete nesten hva som helst s\xE5 lenge variabelnavnet begynner med en bokstav. Trykk p\xE5 kj\xF8r og se resultatet.",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:`var1 = 'Jeg heter var1 og er en variabel'
print(var1)`,solution:{solved:"",code:""}},{id:"variables-error",nextId:"expressions",title:"Feil variabelnavn?",description:"Variabler kan hete nesten hva som helst. Nesten...",postDescription:{shouldShowIfSolved:!1,text:"P\xE5 output-feltet, ser du v\xE5r f\xF8rste feilmelding! Den forklarer at kildekoden v\xE5r inneholder s\xE5kalt 'bad input' og hvilket linjenummer feilen f\xF8rst forekommer. Alts\xE5 variabelnavn kan ikke starte med et tall."},initialCode:`1var = 'Jeg heter 1var og er en variabel'
print(1var)`,solution:{solved:"",code:""}},{id:"expressions",nextId:"code-error",title:"Uttrykk",description:"I editoren ser du et eksempel med to variabler x og y med en linje for \xE5 printe summen av disse variablene. Pr\xF8v deg frem med \xE5 trykke p\xE5 kj\xF8reknappen!",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:`x = 50
y = 30
print(x + y)`,solution:{solved:"",code:""}},{id:"code-error",nextId:"functions",title:"Feil i kildekoden",description:"Her mangler det noe. Kanskje det g\xE5r av likevel?",postDescription:{shouldShowIfSolved:!1,text:`Imotsetning til oss mennesker, s\xE5 m\xE5 maskinene vi jobber med, ta alt med teskje. Det betyr at alle paranteser av alle typer m\xE5 ha en start og sluttparantes. Alle kvotteringstegn som '' og "" m\xE5 avsluttes. Feilmeldingen i output-feltet forklarer at dette er en syntaksfeil. Det betyr at det er en feil i kildekoden som ikke f\xF8lger reglene i Python. Litt som en skrivefeil.`},initialCode:"print('Hei verden!'",solution:{solved:"",code:""}},{id:"functions",nextId:"functions-square-root",title:"Funksjoner",description:"En funksjon i Python starter med navnet til funksjonen med to paranteser. Mellom parantesene, kan man gi funksjonen argumenter. Et argument kan for eksempel v\xE6re tall eller strenger. Om en gitt funksjon, tar imot flere enn et argument, blir de skilt fra hverandre med komma. I editoren, ser du et eksempel p\xE5 bruken av funksjonen len(). Trykk p\xE5 kj\xF8r s\xE5 ser vi hva som skjer!",postDescription:{shouldShowIfSolved:!1,text:"I tillegg til navn og argumenter er noe som heter returverdi en del av anatomien til en funksjon. Returverdien er den verdien funksjonen gir oss tilbake og som vi kan sette lik en variabel. Funksjonen len() kan ta imot en streng som argument og returnerer lengden av strengen som returverdi."},initialCode:`variabel = len('progg.it')
print(variabel)`,solution:{solved:"",code:""}},{id:"functions-square-root",nextId:"functions-square-root-error",title:"Kvadratroten",description:"Python er et utrolig sterkt spr\xE5k med masse biblioteker som gj\xF8r koding mye enklere for oss. F\xF8r vi bruker et bibliotek s\xE5 m\xE5 vi importere biblioteket som du ser i linje 1 i editoren. Biblioteket math, er et bibliotek med masse matematiske funksjoner. I editoren s\xE5 ser du bruken av math sin funksjon for \xE5 regne ut kvadratroten av et tall eller variabel som er mellom parantesene. Skriv et program som skriver ut kvadratroten av 36.",postDescription:{shouldShowIfSolved:!0,text:"I dette eksempelet s\xE5 er math et bibliotek, sqrt() en funksjon av math og x et argument til math.sqrt(). Biblioteker i programmeringsverdenen er litt som en verkt\xF8ykasse. De inneholder funksjoner som andre har skrevet. Da slipper vi \xE5 finne opp verkt\xF8yene p\xE5 nytt fordi andre har gjort det f\xF8r oss \u263A\uFE0F"},initialCode:`import math
x = 16
sqrtX = math.sqrt(x)
print(sqrtX)`,solution:{solved:"6",code:`import math
x = 36
sqrtX = math.sqrt(x)
print('Kvadratroten til 36 er lik')
print(sqrtX)`}},{id:"functions-square-root-error",nextId:"functions-square-root-error-string",title:"Feil med funksjoner",description:"Ok, s\xE5 vi m\xE5 gi funksjonen math.sqrt() et tall for at den skal fungere. Men hva skjer om vi gir funskjonen mer enn ett tall?",postDescription:{shouldShowIfSolved:!1,text:"Output-feltet gir oss en feilmelding om at funksjonen math.sqrt() tar n\xF8yaktig et argument. Derfor s\xE5 vet ikke funksjonen hva den skal gj\xF8re med s\xE5 mange tall og gir oss en feilmelding slik at vi kan rette p\xE5 kildekoden."},initialCode:`import math
x = 16
sqrtX = math.sqrt(2,1,51)
print(sqrtX)`,solution:{solved:"",code:""}},{id:"functions-square-root-error-string",nextId:"pythagoras",title:"Hva om vi sender inn en streng?",description:"S\xE5 feilmeldingen fortalte oss at math.sqrt() tar n\xF8yaktig et argument. Men betyr det ogs\xE5 strenger? Hvordan regner man ut kvadratroten av 'progg.it'?",postDescription:{shouldShowIfSolved:!1,text:"N\xE5 fikk vi en helt annen feilmelding! Denne forteller oss at math.sqrt() kun tar imot tall som argument. For en kresen funksjon \u{1F621}"},initialCode:`import math
sqrtX = math.sqrt('progg.it')
print(sqrtX)`,solution:{solved:"",code:""}},{id:"pythagoras",nextId:"lists",title:"Pytagoras",description:"Pytagoras sin l\xE6resetning handler om at summen av arealene til katetene i en rettvinklet trekant er lik arealet til hypotenusen. Skriv et program som regner og skriver ut hypotenusen til en trekant der katetene er lik 5 og 12.",postDescription:{shouldShowIfSolved:!0,text:"Woho! Veldig bra jobbet! Hittil, har du l\xE6rt om variabler, tall og funksjonen sqrt i mattebiblioteket. Kun med denne kunnskapen s\xE5 har du klart \xE5 lage en kalkulator for \xE5 regne ut hypotenusen til en rettvinklet trekant. Men det er s\xE5 mye mer \xE5 l\xE6re om programmering og Python. Bare fortsett s\xE5nn \u{1F60A}"},initialCode:"",solution:{solved:"13",code:`import math
kat1 = 5
kat2 = 12
hyp = math.sqrt(kat1*kat1+kat2*kat2)
print('Hypotenusen til en rettvinklet trekant med kateter 5 og 12 er lik')
print(hyp)`}},{id:"lists",nextId:"lists-elements",title:"Lister",description:"En liste i Python er definert med klammeparanteser []. Inneholdet i listen heter elementer som er skilt fra hverandre med kommategn. Akkurat som tekststrenger og tall s\xE5 kan ogs\xE5 lister v\xE6re variabler som vist p\xE5 eksempelet i editoren. Trykk p\xE5 kj\xF8reknappen for \xE5 se hva som blir skrevet ut p\xE5 terminalen.",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:`liste = [67,31,53,6,97,1]
print(liste)`,solution:{solved:"",code:""}},{id:"lists-elements",nextId:"lists-error",title:"Elementer i lister",description:"Noen ganger, vil vi kun skrive ut noen elementer i listen. Tenk p\xE5 en liste som en bok. En bok er jo egentlig en liste av ark. Ganske ofte n\xE5r vi leser fagb\xF8ker s\xE5 blir vi n\xF8dt til \xE5 sl\xE5 opp ting ved \xE5 lete etter sidenummeret. Indeks i en liste tilsvarer det vi ville ha kalt sidenummeret i en bok. Alts\xE5 et tall som beskriver hvor et element ligger i en liste. I editoren, ser du et eksempel der vi printer ut elementene p\xE5 plass 4 og 2 i listen. Kan du gjette hvilke tall som blir skrevet ut?",postDescription:{shouldShowIfSolved:!1,text:"Gjettet du kanskje at nummer 6 og 31 skulle bli printet ut? Grunnen til at det heller ble 97 og 53 er fordi maskinene v\xE5re rett og slett begynner \xE5 telle fra 0. Pr\xF8v \xE5 se hva som skjer om du pr\xF8ver \xE5 printe ut indeks nummer 0 fra liste variablen."},initialCode:`liste = [67,31,53,6,97,1]
print(liste[4])
print(liste[2])`,solution:{solved:"",code:""}},{id:"lists-error",nextId:"functions-range",title:"Liste error",description:"Hva med indeks h\xF8yere enn st\xF8rrelsen til listen?",postDescription:{shouldShowIfSolved:!1,text:"Akkurat som om vi skulle bla til side 100 i en bok med kun 2 sider s\xE5 vil ikke dette g\xE5. Feilmeldingen forklarer at indeksen v\xE5r er 'out of range' som betyr at den er utenfor grensen til listen. Alts\xE5 vi pr\xF8ver \xE5 hente et element med en indeks som ikke finnes i listen. I tillegg s\xE5 gir feilmeldingen beskjed om hvilken linjenummer i kildekoden v\xE5r, feilen forekommer. Veldig nyttig!"},initialCode:`liste = [3,14]
print(liste[100])`,solution:{solved:"",code:""}},{id:"functions-range",nextId:"loops",title:"Funksjonen range",description:"Denne funksjonen tar inn to tall og spytter ut en liste med tall fra det f\xF8rste gitte tallet frem til, men ikke inkludert det andre gitte tallet. I editoren, ser du et eksempel hvor vi kaller p\xE5 range med tall 0 og 10.",postDescription:{shouldShowIfSolved:!1,text:"Vi kan aksessere range verdien som en liste og bruke klammeparantesene []. I dette tilfellet skulle vi printe plass nummer 3 i listen."},initialCode:`liste = range(0,10)
print(liste[3])`,solution:{solved:"",code:""}},{id:"loops",nextId:"indents",title:"L\xF8kker",description:"Datamaskinen er utrolig flink til \xE5 gj\xF8re en ting mange ganger og gi oss kjappe resultater. Tenk deg om vi fikk i oppgave om \xE5 telle til 100. Det tar litt tid for oss mennesker \xE5 ramse opp alle tallene. Ordet 'for' er et n\xF8kkelord i Python som sier til datamaskinen at vi har et stykke kode som vi vil kj\xF8re flere ganger. I editoren, ser du et eksempel p\xE5 hvordan en l\xF8kke er skrevet i Python hvor print funksjonen blir kalt 25 ganger og printer ut alle tallene fra 25 frem til, men ikke inkludert 50. Endre p\xE5 l\xF8kken slik at print skriver ut alle tall fra 0 frem til, men ikke inkludert 100.",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:`for i in range(25,50):
	print(i)`,solution:{solved:"",code:""}},{id:"indents",nextId:"string-concat",title:"Hva er indentering?",description:"Indentering er rett og slett fire mellomrom eller en tab med tab-knappen p\xE5 tasturet som forteller maskinen at hvilken del av kildekoden tilh\xF8rer en annen del av koden. Fjern alle mellomrommene f\xF8r print. Hva skjer om vi har feil indentering i denne l\xF8kken?",postDescription:{shouldShowIfSolved:!1,text:"Da f\xE5r vi en feilmelding som forteller oss at maskinen ikke skj\xF8nner hvor variabel 'i' kommer fra i linje 2. Dette er fordi variabelen 'i' kun kan brukes i kode som tilh\xF8rer l\xF8kken v\xE5r."},initialCode:`for i in range(25,50):
	print(i)`,solution:{solved:"",code:""}},{id:"string-concat",nextId:"user-input",title:"Strengkonkatenering",description:"Ofte n\xE5r vi skriver programmer, kan det v\xE6re lurt \xE5 lagre strenger i flere enn en variabel. I editoren, ser du et eksempel p\xE5 hvordan vi kan sl\xE5 sammen to strengvariabler. Kalt konkatenering",postDescription:{shouldShowIfSolved:!1,text:"Strengkonkatenering er uttrykk bare for tekststrenger akkurat som tall har egne uttrykk med pluss og minus. Vi bruker operatoren + for \xE5 sl\xE5 sammen tekststrenger."},initialCode:`melding = 'Hei! Mitt navn er '
navn = 'progg.it'
print(melding + navn)`,solution:{solved:"",code:""}},{id:"user-input",nextId:"conversion-string-int",title:"Brukerinput",description:"N\xE5r vi bruker programmer p\xE5 maskinene v\xE5re, trenger de ofte input fra oss som brukere fra tastaturet. I Python, gj\xF8res dette med funksjonen input() som vist i eksempelet i editoren. Kj\xF8r programmet og skriv inn ditt eget navn.",postDescription:{shouldShowIfSolved:!1,text:"Det poppet plutselig opp en alarmboks p\xE5 nettleseren v\xE5r med et input-felt der vi kunne skrive navnet v\xE5rt. Det skal sies at dette skjer kun i progg.it fordi jeg er en nettside. Om du kj\xF8rer Python p\xE5 andre m\xE5ter, kan det hende at brukerinput blir hentet p\xE5 andre m\xE5ter."},initialCode:`navn = input()
print('Hei! Mitt navn er ' + navn)`,solution:{solved:"",code:""}},{id:"conversion-string-int",nextId:"conversion-int-string",title:"Typekonvertering fra streng til tall",description:"N\xE5 har vi kommet langt! Vi har n\xE5 l\xE6rt om to prim\xE6rtyper i Python, tall og strenger. Noen ganger vil vi kanskje bytte typer p\xE5 disse. Som for eksempel s\xE5 vil brukerinput alltid spytte ut en streng fra tastaturet. Om vi skriver inn tall i tastaturet s\xE5 vil vi kunne bruke dette tallet til \xE5 regne ut ting. Bruk funksjonen int() for \xE5 konvertere tallet vi tar inn i input(). Funksjonen int() tar imot n\xF8yaktig et argument som m\xE5 v\xE6re en streng.",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:`tall = input()
print(5 + tall)`,solution:{solved:"",code:`tall = int(input())
print(5 + tall)`}},{id:"conversion-int-string",nextId:"hypothenus-calculator",title:"Typekonvertering fra tall til streng",description:"Eller kanskje vi vil konkatenere et tall inn til en streng? Da bruker vi funksjonen str()",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:"print('Mitt favorittall er ' + 7)",solution:{solved:"7",code:"print('Mitt favorittall er ' + str(7))"}},{id:"hypothenus-calculator",nextId:"",title:"Hypotenuskalkulator",description:"N\xE5 har du l\xE6rt deg hvordan du regner ut Pytagoras l\xE6resetning og hvordan vi kan f\xE5 input fra bruker gjennom tastaturet. La oss kombinere den kunnskapen vi har oppl\xE6rt oss til \xE5 lage en kalkulator for \xE5 regne ut hypotenusen av en rettvinklet trekant. Kalkulatoren skal ta imot to brukerinput f\xF8rste katet og andre katet. Programmet skal s\xE5 regne ut hypotenusen. Til slutt, skal programmet printe ut hva brukeren skrev inn som katateter og verdien av den beregnede hypotenusen",postDescription:{shouldShowIfSolved:!1,text:""},initialCode:"",solution:{solved:"",code:`import math
kat1 = int(input())
kat2 = int(input())
hyp = math.sqrt(kat1*kat1+kat2*kat2)
print('Hypotenusen til en rettvinklet trekant med kateter ' + str(kat1) + ' og ' + str(kat2) + ' er lik ' + str(hyp))`}}];export{e as default};
