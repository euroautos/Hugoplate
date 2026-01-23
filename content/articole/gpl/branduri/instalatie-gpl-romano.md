---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL Romano - Sistem GPL Performant"
meta_description: "Sistemele GPL Romano - modele Evo, Specific și caracteristici tehnice pentru instalații performante."
---

# Instalație GPL Romano - Sistem GPL Performant

Romano Autogas este un producător român de GPL fondat în 2006 la Cluj-Napoca. Compania s-a specializat în sisteme de injecție secvențială pentru piața est-europeană, devenind cunoscută pentru sistemul său Evo cu preț competitiv și fiabilitate ridicată.

## Sistemul Evo

### Arhitectura Evo

Sistemul Romano Evo este soluția principală a producătorului, cu caracteristici echivalente sistemelor italien de nivel mediu.

Specificații ECU Evo 3.0:
- Procesor STMicro STM32F407VGT6
- Core: Cortex-M4F a 168 MHz
- Memorie flash: 1 Mb
- RAM: 192 Kb
- EEPROM: 16 Kb

Comunicare:
- CAN a 500 kbit/s
- LIN a 20 kbit/s
- UART a 921.6 kbit/s

Protecție conform IP65 și ISO 7637 (electrical transients).

### Pinout Evo 3.0

Configurația pini:
- A1-A8: Injector GPL 1-8
- B1-B4: Injector benzină direct
- C1-C4: Senzor MAP multiplex
- C5: Senzor TPS
- C6: Senzor RPM
- C7: Senzor presiune GPL
- C8: Senzor temperatură GPL
- D1-D2: CAN H/L
- E1: 12V constant
- E2: Ground
- E3: Key-on
- E4: Start/Stop

### Reducer Evo

Reducerul Romano Evo este robust:
- Interval funcționare: -30 la +75°C
- Debit: 55 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Double-membrană din NBR

Membrana NBR are:
- Rezistență chimică la GPL
- Duritate Shore: 65A
- Armătură: Plasă de poliester
- Durabilitate: 100.000 km

Valva electromagnetică cu consum 9W la 12V.

### Rail Evo 4S

Rail-ul pentru 4 cilindri:
- Material: Aliaj 6061-T6
- Lungime: 300 mm
- Diametru: 33 mm
- Greutate: 420 g

Injectoare:
- Impedanță: 3.4 ohmi
- Debit: 3.2 g/s la 2.2 bar
- PWM: 1.8-10.5 ms
- Rezoluție: 10 microsecunde
- Timp răspuns: 1.2ms tipic

Filtru integrat de 35 microni (înlocuibil la 80.000 km).

## Sistemul Specific

### Arhitectura Specific

Sistemul Specific este soluția de bază Romano, proiectată pentru motoare de până la 1.6 litri. Este o soluție economică cu caracteristici completă.

Specificații:
- Procesor STMicro STM32F103
- Core: Cortex-M3 a 72 MHz
- Memorie flash: 64 Kb
- RAM: 20 Kb

Comunicare:
- CAN a 125 kbit/s
- LIN a 20 kbit/s

### Reducer Specific

Reducerul Specific este compact:
- Interval funcționare: -30 la +70°C
- Debit: 35 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Single-membrană din NBR

Valva electromagnetică cu consum 7.5W la 12V.

### Rail Specific 4S

Injectoarele Specific sunt simplifcate:
- Impedanță: 3.5 ohmi
- Debit: 3.0 g/s la 2.1 bar
- Timp răspuns: 1.3ms tipic

## Sistemul Turbo

### Arhitectura Turbo

Sistemul Turbo este soluția premium pentru motoare cu turbocharger:

Specificații:
- Procesor NXP SPC560P50L6
- Core: Power Architecture e200z4 a 80 MHz
- Memorie flash: 512 Kb
- RAM: 64 Kb
- EEPROM: 8 Kb

Comunicare:
- CAN a 500 kbit/s
- CAN FD a 4 Mbit/s
- LIN a 20 kbit/s

### Reducer Turbo

Reducerul Turbo este pentru motoare performante:
- Interval funcționare: -35 la +85°C
- Debit: 75 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Triple-membrană din HNBR

Valva electromagnetică cu consum 10W la 12V.

### Rail Turbo 6S

Injectoarele Turbo sunt de înaltă performanță:
- Impedanță: 3.1 ohmi
- Debit: 3.6 g/s la 2.3 bar
- PWM: 1.6-11.5 ms
- Rezoluție: 9 microsecunde
- Timp răspuns: 1.1ms tipic

Filtru integrat de 25 microni (durată viață 100.000 km).

## Selector Romano

### Comutator Evo Eco

Comutatorul Evo Eco are display LCD 128x64:
- Monocrom, contrast 9:1
- Protecție IP65
- Unghi vizibil: 130°

Funcții:
- Nivel GPL în 4 trepte
- Modul actual
- Km GPL

### Senzor de Nivel

Senzorul Romano LevelSensor:
- Interval presiune: 0.5-10 bar
- Precizie: +/- 2.5%
- Consum: 14-22 mA
- Rezoluție: 10-bit

Lungime cablu de 2m.

## Motoare Accesate

### Motoare Mici 1.0-1.4L

Sistemul Specific 4S-30:
- Reducer 30 kg/h
- Rail 4 cilindri
- Putere: 50-75 CP
- Economie: 46-53%

### Motoare Medii 1.4-2.0L

Sistemul Evo 4S-50:
- Reducer 50 kg/h
- Rail 4 cilindri
- Putere: 80-145 CP
- Economie: 48-55%

### Motoare Mari > 2.0L

Sistemul Turbo 6S-80:
- Reducer 80 kg/h
- Rail 6 cilindri
- Putere: 150-280 CP
- Economie: 50-58%

## Mentenanță și Diagnoză

### Coduri de Eroare

Coduri Romano:
- E01: Senzor presiune GPL
- E02: Senzor temperatură GPL
- E03: Injector GPL 1
- E04: Injector GPL 2
- E05: Injector GPL 3
- E06: Injector GPL 4
- E07: Injector GPL 5
- E08: Injector GPL 6
- E09: Emulator injector
- E10: Presiune GPL sub prag
- E11: Presiune GPL peste prag
- E12: Comunicare CAN eșuată
- E13: Hartă lipsă
- E14: Tensiune <9V
- E15: Tensiune >16V

### Program Mentenanță

La 10.000 km:
- Verificare furtune
- Test funcțional selector

La 25.000 km:
- Verificare presiune GPL
- Testare răspuns injector

La 50.000 km:
- Înlocuire filtr injector
- Verificare diafragme

La 100.000 km:
- Înlocuire diafragme
- Recalibrare ECU

La 120.000 km:
- Înlocuire injectoare
- Verificare completă sistem
