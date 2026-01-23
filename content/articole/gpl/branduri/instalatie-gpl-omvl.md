---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL OMVL - Sisteme GPL"
meta_description: "Sistemele GPL OMVL Italia - modele Dream, R90/E80 și caracteristici tehnice complete."
---

# Instalație GPL OMVL - Sisteme GPL

OMVL (Officine Meccaniche Venete Liquefied Gas) este unul dintre cei mai mari producători de sisteme GPL din Europa. Fondată în 1980 la Rovigo, Italia, OMVL este cunoscută pentru sistemul său R90/E80, primul sistem de injecție secvențială capabil să funcționeze pe o gamă largă de motoare.

## Sistemul Dream E2

### Arhitectura Dream E2

Sistemul Dream E2 reprezintă generația a doua a sistemelor de injecție secvențială OMVL. Arhitectura tipărește integrarea ECU-ului și emulatorului într-un singur modul.

Specificații ECU Dream E2:
- Procesor STMicroelectronics SPC560P50L6
- Core: Power Architecture e200z4 la 80 MHz
- Memorie flash: 512 Kb
- RAM: 64 Kb
- EEPROM: 8 Kb

Comunicare:
- CAN a 500 kbit/s
- LIN a 20 kbit/s

Protecție conform IP65 și ISO 26262 (functional safety).

### Pinout Dream E2

Configurația pini:
- A1-A4: Injector GPL 1-4
- B1-B4: Injector benzină direct
- C1-C4: Senzor MAP/O2 multiplex
- C5: Senzor TPS
- C6: Senzor RPM
- C7: Senzor presiune GPL
- C8: Senzor temperatură GPL
- D1-D2: CAN H/L
- E1: 12V constant
- E2: Ground
- E3: Key-on
- E4: Start/Stop

### Reducer Dream

Reducerul Dream este construit pentru durabilitate:
- Interval funcționare: -30 la +75°C
- Debit: 65 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Double-membrană din NBR (nitril butadien cauciuc)

Membrana NBR are:
- Rezistență chimică la GPL
- Duritate Shore: 70A
- Armătură: Plasă de poliester
- Durabilitate: 120.000 km

Valva electromagnetică cu consum 9.5W la 12V.

### Rail Dream 6S

Rail-ul pentru 6 cilindri:
- Material: Aliaj 6082-T6
- Lungime: 360 mm
- Diametru: 36 mm
- Greutate: 500 g

Injectoare:
- Impedanță: 3.5 ohmi
- Debit: 3.5 g/s la 2.3 bar
- PWM: 1.6-11 ms
- Rezoluție: 9 microsecunde
- Timp răspuns: 1.1ms tipic

Filtru integrat de 30 microni (înlocuibil la 100.000 km).

## Sistemul R90/E80

### Arhitectura R90

Sistemul R90 este soluția completă pentru benzina, integrând ECU, emulator și modul injector într-un singur dispozitiv modular.

Specificații:
- Procesor NXP MPC5643L
- Core: Power Architecture e200z4 a 60 MHz
- Memorie flash: 256 Kb
- RAM: 32 Kb

Sistemul suportă:
- 2-6 cilindri
- Injecție sefventială
- OBD-II autoadaptare

### Reducer R90

Reducerul R90 este compatibil cu mașini de până la 2.5 litri:
- Interval funcționare: -30 la +70°C
- Debit: 55 kg/h
- Presiune ieșire: 0.85-1.05 bar
- Diafragm: Single-membrană din HNBR

Valva electromagnetică cu consum 8.5W la 12V.

### Rail R90 4S

Injectoarele R90 sunt identice cu cele Dream:
- Impedanță: 3.5 ohmi
- Debit: 3.5 g/s la 2.3 bar
- Timp răspuns: 1.1ms tipic

## Sistemul E80

### Arhitectura E80

Sistemul E80 este versiunea economică a OMVL, proiectată pentru motoare de până la 2.0 litri. Este o soluție "all-in-one" cu ECU, emulator și rail într-un singur modul.

Specificații:
- Procesor STMicro STM32F207RGT6
- Core: Cortex-M3 a 120 MHz
- Memorie flash: 128 Kb
- RAM: 32 Kb

Comunicare:
- CAN a 125 kbit/s
- LIN a 20 kbit/s

### Reducer E80

Reducerul E80 este compact:
- Interval funcționare: -30 la +70°C
- Debit: 45 kg/h
- Presiune ieșire: 0.9-1.1 bar
- Diafragm: Single-membrană din NBR

Valva electromagnetică cu consum 7.5W la 12V.

## Configurare Software

### OMVL Easy Config

Software-ul OMVL Easy Config versiunea 2.5+:
- Suport Windows 10/11, macOS 11+, Linux
- Conexiune USB-C la 480 Mbit/s
- Interfață în 12 limbi

Funcții principale:
1. Hartă de injecție
2. Autoadaptare
3. Test injector
4. Diagnoză completă
5. Actualizare firmware

### Hartă de Injecție Dream E2

Matricea 5x5:
- Axă X: 1000-5000 rpm (interval 1000)
- Axă Y: 0.2-1.0 bar MAP (interval 0.2)

Valori de 80-150% față de benzină. Interpolare cubică.

### Harta de Injecție R90/E80

Matricea 4x4:
- Axă X: 2000-5000 rpm (interval 1000)
- Axă Y: 0.3-0.9 bar MAP (interval 0.2)

Valori de 85-145% față de benzină. Interpolare liniară.

### Autoadaptare

Sistemul învață 8 parametri:
1. Factor debit injectoare
2. Variabilă presiune GPL
3. Compensare T GPL
4. Compensare T aer
5. Corecție presiune atmosferică
6. Corecție lambda per zonă
7. Tendință vârf cuplu
8. Tendință turații înalte

## Selector Dream

### Comutator Dream Eco

Comutatorul Dream Eco are display LCD 128x64:
- Monocrom, contrast 10:1
- Protecție IP65
- Tastă cu întârziere 1.5 secunde

Funcții:
- Nivel GPL în 4 trepte
- Modul actual
- Km GPL
- Temperatura GPL

### Senzor de Nivel

Senzorul OMVL Level Sensor:
- Interval presiune: 0.5-10 bar
- Precizie: +/- 2%
- Consum: 10-18 mA
- Rezoluție: 10-bit

Lungime cablu de 2m.

## Motoare Accesate

### Motoare Mici 1.0-1.4L

Sistemul E80 4S-35:
- Reducer 35 kg/h
- Rail 4 cilindri
- Putere: 50-80 CP
- Economie: 48-54%

### Motoare Medii 1.4-2.0L

Sistemul R90 4S-55:
- Reducer 55 kg/h
- Rail 4 cilindri
- Putere: 90-150 CP
- Economie: 50-56%

### Motoare Mari > 2.0L

Sistemul Dream E2 6S-80:
- Reducer 80 kg/h
- Rail 6 cilindri
- Putere: 160-280 CP
- Economie: 52-59%

## Mentenanță și Diagnoză

### Coduri de Eroare

Coduri OMVL:
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

La 100.000 km:
- Înlocuire diafragme
- Recalibrare ECU

La 150.000 km:
- Înlocuire injectoare
- Verificare completă sistem
