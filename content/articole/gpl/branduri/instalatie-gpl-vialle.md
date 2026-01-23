---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL Vialle - Injecție Secvențială"
meta_description: "Sistemele GPL Vialle Olanda - modele LPS, LPi și specificații tehnice complete pentru injecție secvențială."
---

# Instalație GPL Vialle - Injecție Secvențială

Vialle Autogas Systems este un producător olandez de GPL fondat în 1950 la Assen. Compania este unică pe piață prin sistemul său LPi (Liquid Petroleum Injection), care injecția GPL direct în lichid, eliminând reductorul tradițional.

## Sistemul LPS (Vapor Sequential System)

### Arhitectura LPS

Sistemul LPS este soluția mainstream de la Vialle, bazată pe injecția vapori de GPL.

Specificații ECU LPS 4.0:
- Procesor NXP i.MX RT1064
- Core: Cortex-M7 a 600 MHz
- Memorie flash: 2 Mb
- RAM: 512 Kb
- EEPROM: 8 Kb

Comunicare:
- CAN a 500 kbit/s
- CAN FD a 5 Mbit/s
- LIN a 20 kbit/s

Protecție conform IP69K (rezistentă la spălat cu jet de înaltă presiune).

### Pinout LPS 4.0

Configurația pini:
- A1-A8: Injector GPL 1-8
- B1-B8: Injector benzină direct
- C1-C4: Senzor MAP/O2 multiplex
- C5: Senzor TPS
- C6: Senzor RPM
- C7: Senzor presiune GPL
- C8: Senzor temperatură GPL
- D1-D4: CAN H/L (2+ CAN FD)
- E1: 12V constant
- E2: Ground
- E3: Key-on
- E4: Start/Stop

### Reducer Vialle 600

Reducerul Vialle este construit pentru fiabilitate:
- Interval funcționare: -35 la +85°C
- Debit: 65 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Triple-membrană din EPDM + NBR

Membrana compozită are:
- Rezistență chimică superioară
- Duritate Shore: 75A
- Armătură: Plasă de kevlar și nylon
- Durabilitate: 150.000 km

Valva electromagnetică cu consum 10.5W la 12V.

### Rail LPS 6S

Rail-ul pentru 6 cilindri:
- Material: Aliaj 6082-T6 anodizat
- Lungime: 370 mm
- Diametru: 37 mm
- Greutate: 510 g

Injectoare:
- Impedanță: 3.3 ohmi
- Debit: 3.4 g/s la 2.3 bar
- PWM: 1.7-11.5 ms
- Rezoluție: 9 microsecunde
- Timp răspuns: 1.1ms tipic

Filtru integrat de 30 microni (înlocuibil la 100.000 km).

## Sistemul LPi (Liquid Petroleum Injection)

### Arhitectura LPi

Sistemul LPi este unic în industrie: injecția GPL direct din butoi, în stare lichidă. Acest lucru elimină:
- Reductorul tradițional
- Furtunele de înaltă presiune
- Pierderile de temperatură

Specificații:
- Presiune injecție: 10-12 bar
- Debit injecție: până la 100 kg/h
- Temperatura GPL: -10 la +5°C (încălzit prinInjector)

### Injector LPi V4

Injectorul LPi V4 funcționează la presiune înaltă:
- Impedanță: 2.5 ohmi
- Debit: 2.2 g/s la 11 bar (lichid)
- PWM: 1.8-9 ms
- Răspuns: 0.8ms tipic
- Presiune maximă: 15 bar

Injectorul are carcasă din carbon fiber composite rezistent la 250°C.

### Pompă GPL LPi

Pompă GPL LPi este instalată în butoi:
- Debit: până la 120 kg/h
- Presiune: 12-15 bar
- Consum: 120W la 12V
- Interval temperatura: -30 la +50°C

Pompă este submersibilă și are durabilitate de 100.000 km.

## Selector Vialle

### Comutator LPS Pro

Comutatorul LPS Pro are display OLED 1.5 inch, 128x128 pixeli:
- Full color
- Contrast infinit (negru perfect)
- Unghi vizibil: 170°
- Protecție IP67

Funcții:
- Nivel GPL în 5 trepte
- Modul actual
- Km GPL
- Temperatura GPL
- Avertismente

### Senzor de Nivel

Senzorul Vialle LevelSensor:
- Interval presiune: 0-14 bar
- Precizie: +/- 1%
- Consum: 6-14 mA
- Rezoluție: 12-bit

Lungime cablu de 2.5m.

## Motoare Accesate

### Motoare Mici 1.0-1.4L

Sistemul LPS 4S-40:
- Reducer 40 kg/h
- Rail 4 cilindri
- Putere: 55-85 CP
- Economie: 50-56%

### Motoare Medii 1.4-2.0L

Sistemul LPS 4S-60 / 6S-60:
- Reducer 60 kg/h
- Rail 4 sau 6 cilindri
- Putere: 95-155 CP
- Economie: 52-58%

### Motoare Mari > 2.0L

Sistemul LPS 6S-90 + LPi:
- Reducer 90 kg/h / Pompă LPi
- Rail 6 cilindri
- Putere: 165-320 CP
- Economie: 54-62%

## Mentenanță și Diagnoză

### Coduri de Eroare

Coduri Vialle:
- E01: Senzor presiune GPL
- E02: Senzor temperatură GPL
- E03: Injector GPL 1
- E04: Injector GPL 2
- E05: Injector GPL 3
- E06: Injector GPL 4
- E07:Injector GPL 5
- E08: Injector GPL 6
- E09: Emulator injector
- E10: Presiune GPL sub prag
- E11: Presiune GPL peste prag
- E12: Comunicare CAN eșuată
- E13: Hartă lipsă
- E14: Tensiune <9V
- E15: Tensiune >32V

### Program Mentenanță

La 15.000 km:
- Verificare furtune
- Test funcțional selector

La 45.000 km:
- Verificare presiune GPL
- Testare răspuns injector

La 90.000 km:
- Înlocuire filtr injector
- Verificare diafragme

La 120.000 km:
- Înlocuire diafragme
- Recalibrare ECU

La 180.000 km:
- Înlocuire injectoare
- Verificare completă sistem
