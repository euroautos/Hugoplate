---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL Prins - Tehnologie Holland"
meta_description: "Sistemele GPL Prins din Olanda - tehnologie VSI, specificații tehnice și caracteristici performante."
---

# Instalație GPL Prins - Tehnologie Holland

Prins Autogas Systems este unul dintre cei mai importanți producători de GPL din Olanda. Fondată în 1966 la Velp, Prins a devenit recunoscut for sistemul său de injecție directă a GPL în motor (Direct Injection), o tehnologie unică pe piață.

## Sistemul VSI (Vapor Sequential Injection)

Sistemul VSI este soluția mainstream de la Prins, bazată pe injecția secvențială în vapori.

### Arhitectura VSI

Sistemul este modular, cu 7 componente principale:
1. ECU VSI 3.0
2. Reductor Vaporiser
3. RailInjector
4. Emulator
5. Selector
6. Furtune de joasă presiune
7. Furtune de înaltă presiune

### ECU VSI 3.0

Unitatea de control Prins VSI 3.0 are procesor NXP i.MX 6Dual:

Specificații:
- Procesor: Cortex-A9 dual-core la 1.0 GHz
- Real-time: Cortex-M4F la 180 MHz
- Memorie flash: 1 Gb
- RAM: 512 Mb
- EEPROM: 32 Kb

Comunicare:
- CAN a 500 kbit/s (ISO 11898)
- LIN a 20 kbit/s
- FlexRay a 10 Mbit/s (opțional)

ECU-ul suportă 20 protocoale OBD-II: KWP2000, ISO 9141-2, ISO 15765-4, și altele.

### Pinout VSI 3.0

Configurația pini:
- A1-A8: Injector GPL 1-8
- B1-B4: Injector benzină direct
- C1-C4: Senzor MAP/O2 (multiplex)
- C5: Senzor TPS
- C6: Senzor RPM
- C7: Senzor presiune GPL
- C8: Senzor temperatură GPL
- D1-D4: CAN H/L (2+ FlexRay)
- E1: 12V constant
- E2: Ground
- E3: Key-on
- E4: Start/Stop signal

### Reductor Vaporiser 500

Reductorul Prins Vaporiser:
- Interval funcționare: -30 la +80°C
- Debit: 60 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Triple membrană din HNBR

Membrana HNBR (cârlig nitrilic hidrogenat) are:
- Rezistență chimică superioară la GPL
- Duritate Shore: 70A
- Armătură: Plasă de kevlar
- Durabilitate: 120.000 km

Valva electromagnetică cu consum 11W la 12V.

### RailInjector VSI

Rail-ul Prins RailInjector are un design compact:
- Lungime: 320 mm (4S) / 410 mm (6S)
- Diametru: 35 mm
- Greutate: 480 g

Injectoare:
- Impedanță: 3.2 ohmi
- Debit: 3.2 g/s la 2.2 bar
- PWM: 1.8-11.5 ms
- Rezoluție: 10 microsecunde
- Timp răspuns: 1.0ms tipic, 1.4ms maxim

Filtru integrat de 35 microni (durată viață 100.000 km).

## Sistemul DI (Direct Injection)

### Arhitectura DI

Sistemul Direct Injection de la Prins injecția GPL direct în camera de combustie, în sistem port fuel injection. Acest lucru elimină pierderile de vapori și permite o gestionare mai precisă a amestecului.

Specificații DI:
- Presiune injecție: 3-5 bar
- Debit injecție: până la 80 kg/h
- Rata EGR: 0 (sistemul prin injectie are emisii reduse la ralanti)

### Injector DI V4

Injectorul DI V4 funcționează mai rece decât injectoarele conventionale:
- Impedanță: 1.8 ohmi
- Debit: 2.8 g/s la 3.5 bar
- PWM: 2-9 ms
- Răspuns: 0.7ms tipic

Injectorul are carcasă din carbon composite rezistent la 220°C.

## Configurare Software

### Prins Diag Tool

Software-ul Prins Diag Tool versiunea 3.0+:
- Suport Windows 10/11, macOS 12+, Linux
- Conexiune USB-C la 5 Gbit/s
- Interfață în 15 limbi

Funcții principale:
1. Hartă de injecție
2. Autoadaptare
3. Test injector
4. Diagnoză completă
5. Actualizare firmware
6. Export/Import hărți

### Harta de Injecție DI

Matricea 5x5 pentru DI:
- Axă X: 800-4800 rpm (interval 1000)
- Axă Y: 0.2-1.0 bar MAP (interval 0.2)

Valori de 75-145% față de benzină. Interpolare spline cubică.

### Harta de Injecție VSI

Matricea 5x6 pentru VSI:
- Axă X: 1000-5000 rpm (interval 1000)
- Axă Y: 0.3-1.3 bar MAP (interval 0.2)

Valori de 80-155% față de benzină.

### Autoadaptare

Sistemul învață 12 parametri:
1. Factor debit injectoare
2. Variabilă presiune GPL
3. Compensare T GPL
4. Compensare T aer
5. Corecție presiune atmosferică
6. Corecție lambda per zonă
7. Tendință vârf cuplu
8. Tendință turații înalte
9. Tendință switch
10. Tendință pre/post-umidificare
11. Limiter încărcare electrică
12. Limiter temperatură GPL

## Selector Prins

### Comutator VSI Pro

Comutatorul VSI Pro are display IPS 1.8 inch, 480x360 pixeli:
- 16 milion culori
- Contrast 1300:1
- Unghi vizibil: 178°
- Protecție IP69K

Funcții:
- Nivel GPL în 5 trepte
- Modul actual
- Km GPL
- Temperatura GPL
- Erori active
- Istoric erori ultimele 15 cicluri

### Senzor de Nivel

Senzorul Prins Level Sensor:
- Interval presiune: 0-11 bar
- Precizie: +/- 1.5%
- Consum: 8-16 mA
- Rezoluție: 12-bit

Lungime cablu de 2.5m.

## Motoare Accesate

### Motoare Mici 1.0-1.4L

Sistemul VSI 4S-40:
- Reductor 40 kg/h
- Rail 4 cilindri
- Putere: 55-85 CP
- Economie: 48-54%

### Motoare Medii 1.4-2.0L

Sistemul VSI 4S-60 / 6S-60:
- Reductor 60 kg/h
- Rail 4 sau 6 cilindri
- Putere: 95-155 CP
- Economie: 50-57%

### Motoare Mari > 2.0L

Sistemul VSI DI 6S-90:
- Injectie directă DI
- Rail 6 cilindri
- Putere: 165-300 CP
- Economie: 52-60%

## Mentenanță și Diagnoză

### Coduri de Eroare

Coduri Prins:
- P0001: Senzor presiune GPL
- P0002: Senzor temperatură GPL
- P0201: Injector 1 defect
- P0202: Injector 2 defect
- P0203: Injector 3 defect
- P0204: Injector 4 defect
- P0205: Injector 5 defect
- P0206: Injector 6 defect
- P0207: Emulator defect
- P0208: Presiune GPL sub prag
- P0209: Presiune GPL peste prag
- P0210: Comunicare CAN eșuată
- P0211: Hartă lipsă
- P0212: Tensiune <9V
- P0213: Tensiune >32V

### Program Mentenanță

La 20.000 km:
- Verificare furtune
- Test funcțional selector

La 40.000 km:
- Verificare presiune GPL
- Testare răspuns injector

La 80.000 km:
- Înlocuire filtr injector
- Verificare diafragme

La 120.000 km:
- Înlocuire diafragme
- Recalibrare ECU

La 160.000 km:
- Înlocuire injectoare
- Verificare completă sistem
