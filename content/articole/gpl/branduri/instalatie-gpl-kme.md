---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL KME - Tehnologie Poloneză"
meta_description: "Sistemele GPL KME Polonia - modele Diego, Silver și specificații tehnice complete."
---

# Instalație GPL KME - Tehnologie Poloneză

KME (Krakowski Mechaniczny Ekwipunek) este cel mai important producător de GPL din Polonia. Fondat în 1991 la Cracovia, KME s-a specializat în sisteme de injecție secvențială pentru piața est-europeană, devenind competitiv și pe piețele de vest din 2010.

## Sistemul Diego Silver

### Arhitectura Diego Silver

Sistemul Diego Silver este cel mai vândut produs KME, cunoscut pentru robustețe și simplicitate.

Specificații ECU Diego Silver:
- Procesor Renesas RL78/F13
- Core: RL78 la 32 MHz
- Memorie flash: 256 Kb
- RAM: 16 Kb
- EEPROM: 4 Kb

Comunicare:
- CAN a 500 kbit/s
- LIN a 20 kbit/s

Protecție conform IP67 și ISO 11452 (EMC).

### Pinout Diego Silver

Configurația pini:
- A1-A4: Injector GPL 1-4
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

### Reducer Diego

Reducerul Diego este construit pentru condiții dificile:
- Interval funcționare: -35 la +80°C
- Debit: 55 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Single-membrană din EPDM

Membrana EPDM (etiilenă propilenă dien monomer) are:
- Rezistență la condiții extreme
- Duritate Shore: 65A
- Armătură: Plasă de nylon
- Durabilitate: 100.000 km

Valva electromagnetică cu consum 9W la 12V.

### Rail Diego 6S

Rail-ul pentru 6 cilindri:
- Material: Aliaj 6061-T6
- Lungime: 350 mm
- Diametru: 35 mm
- Greutate: 480 g

Injectoare:
- Impedanță: 3.2 ohmi
- Debit: 3.3 g/s la 2.2 bar
- PWM: 1.7-10.5 ms
- Rezoluție: 11 microsecunde
- Timp răspuns: 1.2ms tipic

Filtru integrat de 35 microni (înlocuibil la 80.000 km).

## Sistemul Silver

### Arhitectura Silver

Sistemul Silver este soluția economică de la KME, proiectată pentru motoare de până la 2.0 litri. Este o soluție compactă cu ECU și emulator integrate.

Specificații:
- Procesor STMicro STM32F103
- Core: Cortex-M3 a 72 MHz
- Memorie flash: 64 Kb
- RAM: 8 Kb

Comunicare:
- CAN a 125 kbit/s
- LIN a 20 kbit/s

### Reducer Silver

Reducerul Silver este optimizat pentru eficiență:
- Interval funcționare: -30 la +75°C
- Debit: 45 kg/h
- Presiune ieșire: 0.85-1.05 bar
- Diafragm: Single-membrană din NBR

Valva electromagnetică cu consum 8W la 12V.

### Rail Silver 4S

Injectoarele Silver sunt ușor mai mici:
- Impedanță: 3.5 ohmi
- Debit: 3.0 g/s la 2.1 bar
- Timp răspuns: 1.3ms tipic

## Sistemul Gold

### Arhitectura Gold

Sistemul Gold este soluția premium de la KME, cu caracteristici avansate.

Specificații:
- Procesor NXP SPC560P50L6
- Core: Power Architecture e200z4 a 80 MHz
- Memorie flash: 512 Kb
- RAM: 64 Kb
- EEPROM: 8 Kb

Comunicare:
- CAN a 500 kbit/s cu CAN FD
- LIN a 20 kbit/s
- FlexRay a 5 Mbit/s (opțional)

### Reducer Gold

Reducerul Gold este pentru motoare mari:
- Interval funcționare: -35 la +85°C
- Debit: 75 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Triple-membrană din HNBR

Valva electromagnetică cu consum 10W la 12V.

### Rail Gold 6S

Injectoarele Gold sunt de înaltă performanță:
- Impedanță: 3.0 ohmi
- Debit: 3.8 g/s la 2.4 bar
- PWM: 1.5-12 ms
- Rezoluție: 8 microsecunde
- Timp răspuns: 1.0ms tipic

Filtru integrat de 20 microni (durată viață 120.000 km).

## Selector KME

### Comutator Diego Eco

Comutatorul Diego Eco are display LCD 128x64:
- Monocrom, contrast 8:1
- Protecție IP65
- Unghi vizibil: 140°

Funcții:
- Nivel GPL în 4 trepte
- Modul actual
- Km GPL
- Avertismente

### Senzor de Nivel

Senzorul KME Level Sensor:
- Interval presiune: 0.5-10 bar
- Precizie: +/- 2.5%
- Consum: 12-20 mA
- Rezoluție: 10-bit

Lungime cablu de 2m.

## Motoare Accesate

### Motoare Mici 1.0-1.4L

Sistemul Silver 4S-35:
- Reducer 35 kg/h
- Rail 4 cilindri
- Putere: 50-80 CP
- Economie: 47-53%

### Motoare Medii 1.4-2.0L

Sistemul Diego Silver 4S-55:
- Reducer 55 kg/h
- Rail 4 cilindri
- Putere: 90-150 CP
- Economie: 49-56%

### Motoare Mari > 2.0L

Sistemul Gold 6S-80:
- Reducer 80 kg/h
- Rail 6 cilindri
- Putere: 160-300 CP
- Economie: 51-59%

## Mentenanță și Diagnoză

### Coduri de Eroare

Coduri KME:
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

La 30.000 km:
- Verificare presiune GPL
- Testare răspuns injector

La 50.000 km:
- Înlocuire filtr injector
- Verificare diafragme

La 80.000 km:
- Înlocuire diafragme
- Recalibrare ECU

La 120.000 km:
- Înlocuire injectoare
- Verificare completă sistem
