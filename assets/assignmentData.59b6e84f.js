var e=[{title:"Mitt f\xF8rste program",description:"P\xE5 denne siden s\xE5 kan du kode i et programmeringsspr\xE5k som heter Python. Under ser du to hvite bokser. Den \xF8verste er editoren din, mens boksen under er outputfeltet. Outputfeltet er boksen som skriver ut resultatet av koden i editoren n\xE5r du trykker p\xE5 kj\xF8reknappen. I eksempelet under ser du et funksjonskall p\xE5 print som skriver ut strengen 'Hei verden!' til outputfeltet. PR\xF8v deg frem ved \xE5 trykke p\xE5 kj\xF8reknappen.",initialCode:"print('Hei verden!')",solution:{solved:"",code:""}},{title:"Koding",description:"Kode er det samme som en oppskrift som maskinene v\xE5re f\xF8lger bastant. Det betyr at maskinen din skriver ut n\xF8yaktig hva som er mellom ' tegnene i funksjonskallet for print under. Erstatt L\xD8RN med ditt eget navn s\xE5 vil du f\xE5r en hilsen fra din egen maskin.",initialCode:"print('Hei mitt navn er L\xD8RN')",solution:{solved:"",code:""}},{title:"Variabler av tall",description:"I matematikken l\xE6rer vi om ligninger med ukjente variabler der v\xE5r oppgave som oftest er \xE5 finne ut hva variabelen er lik. Dette fungerer litt annerledes i programmering hvor vi er sjefen. Vi bestemmer hva variabelen skal v\xE6re lik. I editoren s\xE5 ser du en variabel x som vi har satt lik 3. Pr\xF8v \xE5 bytt ut 3 med ditt favorittall og trykk p\xE5 kj\xF8r. Funksjonen print kan ta hvilke som helst variabler og printer fortsatt ut som om vi hadde byttet ut variabelen med verdien.",initialCode:`x = 3
print(x)`,solution:{solved:"",code:""}},{title:"Variabler av strenger",description:"Variabler kan ikke bare v\xE6re tall, men tekststrenger ogs\xE5. Trykk p\xE5 kj\xF8r og se resultatet.",initialCode:`x = 'Jeg heter x og er en variabel'
print(x)`,solution:{solved:"",code:""}},{title:"Uttrykk",description:"Under ser du et eksempel med to variabler x og y med en linje for \xE5 printe summen av disse variablene. Pr\xF8v deg frem med \xE5 trykke p\xE5 kj\xF8reknappen!",initialCode:`x = 50
y = 30
print(x + y)`,solution:{solved:"",code:""}},{title:"Kvadratroten",description:"Python er et utrolig sterkt spr\xE5k med masse biblioteker som gj\xF8r koding mye enklere for oss. F\xF8r vi bruker et bibliotek s\xE5 m\xE5 vi importere biblioteket som du ser i linje 1 i editoren. Et bibliotek, math, er en bibliotek med masse matematiske funksjoner. I editoren s\xE5 ser du bruken av math sin funksjon for \xE5 regne ut kvadratroten av et tall eller variabel som er mellom parantesene. Skriv et program som skriver ut kvadratroten av 36.",initialCode:`import math
x = 16
sqrtX = math.sqrt(x)
print(sqrtX)`,solution:{solved:6,code:`import math
x = 36
sqrtX = math.sqrt(x)
print('Kvadratroten til 36 er lik')
print(sqrtX)`}},{title:"Pytagoras",description:"Pytagoras sin l\xE6resetning handler om at summen av arealene til katetene i en rettvinklet trekant er lik arealet til hypotenusen. Skriv et program som regner og skriver ut hypotenusen til en trekant der katetene er lik 5 og 12.",initialCode:"",solution:{solved:13,code:`import math
kat1 = 5
kat2 = 12
hyp = math.sqrt(kat1*kat1+kat2*kat2)
print('Hypotenusen til en rettvinklet trekant med kateter 5 og 12 er lik')
print(hyp)`}}];export{e as default};
