---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL BRC - Ghid Complet"
meta_description: "Ghid complet pentru instalații GPL BRC - componente, specificații tehnice, ECU și sisteme de injecție secvențială."
---

# Instalație GPL BRC - Ghid Complet

Sistemele GPL italiene de la BRC Gas Equipment reprezintă unul dintre cele mai instalate kit-uri în Europa. Fondată în 1979 la Cherasco, Cuneo, BRC a devenit lider de piață prin inovație constantă în sistemele de injecție secvențială a gazului lichefiat.

## Arhitectura Sistemului BRC Sequent

### ECU Central BRC Sequent 56

Unitatea de control electronică Sequent 56 constituie creierul sistemului. Procesorul de 32-bit gestionează 4 cilindri independent, cu procesare paralelă a injecțiilor. Frecventa de comunicație OBD-II este de 400 kbit/s pe linia CAN. Densitatea tranzistorilor de 14 nm permite un răspuns sub 1.5ms la variațiile de încărcare.

Pinout-ul ECU include:
- Pinii 1-4: Semnale injector GPL
- Pinii 5-8: Feedback debit injectoare
- Pinul 9: Senzor presiune GPL (0-5V)
- Pinul 10: Senzor temperatură GPL (PT1000)
- Pinul 11: Semnal rpm (negativ)
- Pinul 12: TPS (Throttle Position Sensor)
- Pinii 13-16: Comunicare OBD-II

Memoria flash de 256Kb stochează până la 10 hărți de injecție calibrate, selectabile automat în funcție de codul de eroare motor. Sistemul de autodetectare a erorilor integrează 47 coduri de diagnosticare conform standardului EOBD.

### Reductor de Presiune BRC Sequent

Reductorul utilizează doi diafragmi elastomerici din nitril cu duritate Shore 70A. Camera primară reducează presiunea de la 16-20 bar la 1.2-1.4 bar. Camera secundară stabilizează la 0.9-1.0 bar pentru injecție.

Specificații termice:
- Interval funcționare: -30°C la +70°C
- Sarcina termică maximă: 450 kJ/h la debit nominal
- Temperatura apei intrare: 85-95°C
- Debite aerisire: 10-15 l/min la 2000 rpm

Membrana de reglaj din silicon cu insert de sticlă asigură stabilitatea în timp. Întreținerea recomandată: verificarea diafragmelor la 50.000 km.
Valva electromagnetică de securitate intră în funcțiune când presiunea depășește 27 bar, timp de închidere: 8 ms.

### Rail de Injecție Sequent 24

Rail-ul construit din aluminiu EN-AW 6061 T6 integrează patru injectoare cu impedanță 2.4 ohmi. Debitul nominal: 2.3 g/s la 3 bar. Domeniul de control PWM: 2-10 ms, rezoluție 15 microsecunde.

Injectoarele folosind carcasă din PEEK (polimer imidic) cu rezistență termică la 180°C. Acele de închidere sunt din oțel inoxidabil 17-4PH, tratate la 44-46 HRC.

Densitatea de energie a bobinei: 28 mJ. Timpul de răspuns: tipic 0.8ms, maxim 1.2ms.

Filtrul de 34 microni din sinterizare de bronz asigură 100.000 km autonomie de funcționare fără înlocuire.

### Emulator BRC Sequent

Emulatorul simulăază semnalele injectoarelor benzină când motorul funcționează pe GPL. Modulul electronic procesează semnalul PWM injector benzină și transmite un semnal echivalent ECU-ului motor.

Specificatii emulator:
- Impedanță de ieșire: 12 ohmi
- Tensiune de operare: 9-16 V DC
- Temperatura operare: -40 la +85°C
- Curent consum: < 50 mA

Emulatorul recunoaște automat numărul de cilindri (2-8) din frecvența semnalului rpm. Funcția de autolearning se activează la primul start pe GPL.

## Configurare Software BRC

### Interfața Programare BRC

Software-ul BRC Sequent Tool permite configurarea detaliată a parametrilor ECU. Conexiunea USB 2.0 Full-Speed (480 Mbit/s) asigură transferul hărților în < 2 secunde.

Fereastra principală include cinci secțiuni:
1. Harta de injecție GPL (4x6 zone)
2. Corecția lambda OBD
3. Switch-over și timere
4. Diagnoză și erori
5. Autoadaptare și limiter

### Harta de Injecție GPL

Matricea 4x6 zone se bazează pe presiunea colectorului admisie (MAP) și turația motorului. Valorile sunt exprimate ca factor de creștere față de injectorul benzină.

Zonă 0 (ralanti): MAP < 0.3 bar, < 1500 rpm
Zona 1: MAP 0.3-0.5 bar, 1500-2500 rpm
Zona 2: MAP 0.5-0.7 bar, 2500-3500 rpm
Zona 3: MAP 0.7-0.9 bar, 3500-4500 rpm
Zona 4: MAP 0.9-1.1 bar, 4500-5500 rpm
Zona 5: MAP > 1.1 bar, > 5500 rpm

Factorul de corecție tipic pentru motoare moderne (post-2010): 1.15-1.25 în zona de cuplu, 1.05-1.10 la turații ridicate.

### Corecția Lambda OBD

Sistemul citește lambda probe (senzor de oxigen) prin linia CAN. Domeniul de corecție automată: +/- 15% față de harta bază.

Puncte de ajustare:
- Încărcare scăzută: +/- 8%
- Cuplu maxim: +/- 12%
- Turații înalte: +/- 6%

Sistemul învață tendințele de derapaj în timpul primelor 500 km după instalare.

### Autoadaptare BRC

Modulul autoadaptare învață 12 parametri:
1. Factor de debit injectoare
2. Variabilă de presiune GPL
3. Compensare temperatură GPL
4. Compenare temperatură aer
5. Corecție lambda per zonă
6. Tendință vârf cuplu
7. Tendință turații înalte
8. Mod switch-over
9. Timp de preumidificare
10. Timp de după umidificare
11. Limitator de încărcare
12. Tendință degetare

Fereastra autoadaptare afișează istoricul ultimelor 100 cicluri de învățare.

## Componente Specifice BRC

### Selector Comutator BRC

Comutatorul BRC cu display LCD de 128x64 pixeli monocrom. Indică:
- Nivelul GPL în 4 trepte (25%, 50%, 75%, 100%)
- Modul actual (benzină/GPL)
- Km parcurși pe GPL
- Temperatură GPL

Indicatorul de nivel se bazează pe senzorul de presiune GPL: 5.5 bar = gol, 7.5 bar = 75%, 9.5 bar = plin.

Tasta de comutare schimbă modul cu întârziere de 1.5 secunde pentru evitarea schimbării accidentale.

### Senzor de Nivel GPL

Senzorul inductiv 3-wire instalat pe butoiul GPL:
- Răspuns la presiune: 0.5-9 bar
- Consum la 12V: < 10 mA
- Interval temperatura: -40 la +125°C

Cablajul are o lungime standard de 2m, extensibil până la 4m prelungitoarele certificat BRC.

### Furtune GPL BRC

Furtunul de înaltă presiune (pompă și reductor) este din cauciuc armat cu plasă de nylon:
- Diametru interior: 6 mm
- Diametru exterior: 12 mm
- Presiune maximă: 35 bar
- Radius minim îndoire: 30 mm

Furtunul de joasă presiune (reductor și rail) este din cauciuc texturat:
- Diametru interior: 8 mm
- Diametru exterior: 14 mm
- Presiune maximă: 5 bar
- Radius minim îndoire: 50 mm

## Specificații per Capacitate Motor

### Motoare 1.0 - 1.4 Litri

Kit-ul BRC Sequent 24 pentru motoare mici include:
- Reductor cu debit maxim 50 kg/h
- Rail cu injectoare 2.3 g/s
- Emulator 2-4 cilindri

Domeniu de putere: 45-80 CP. Economie estimată: 45-50% față de benzină.

### Motoare 1.6 - 2.0 Litri

Kit-ul BRC Sequent 56 pentru motoare medii include:
- Reductor cu debit maxim 70 kg/h
- Rail cu injectoare 3.0 g/s
- Emulator 4-6 cilindri

Domeniu de putere: 90-150 CP. Economie estimată: 48-52% față de benzină.

### Motoare > 2.0 Litri

Kit-ul BRC Sequent DM pentru motoare mari include:
- Reductor dublu debit cu debit maxim 100 kg/h
- Rail cu injectoare 4.5 g/s
- Emulator 6-8 cilindri

Domeniu de putere: 160-300 CP. Economie estimată: 50-55% față de benzină.

## Diagnoză și Mentenanță

### Coduri de Eroare BRC

Codurile de eroare accesibile prin software:
- E01: Senzor presiune GPL defect
- E02: Senzor temperatură GPL defect
- E03: Injector GPL blocat
- E04: Emulator nefuncțional
- E05: Presiune GPL sub prag
- E06: Presiune GPL peste prag
- E07: Comunicare CAN eșuată
- E08: Hartă lipsă
- E09: Tensiune alimentare sub 9V
- E10: Tensiune alimentare peste 16V

Resetarea erorilor se face prin secțiunea "Diagnoză" a software-ului.

### Program de Mentenanță Recomandat

La 10.000 km:
- Verificare furtune
- Test funcțional comutator

La 30.000 km:
- Verificare presiune GPL
- Verificare corecții automate
- Curățare filtru injectoare

La 50.000 km:
- Înlocuire diafragme reductor
- Verificare funcțional injectoare
- Recalibrare ECU
