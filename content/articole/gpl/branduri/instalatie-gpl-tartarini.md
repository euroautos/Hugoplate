---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL Tartarini - Istoric și Performanță"
meta_description: "Istoricul și performanța sistemelor GPL Tartarini - serie Sequential, specificații tehnice și evoluție."
---

# Instalație GPL Tartarini - Istoric și Performanță

Tartarini Auto este unul dintre cei mai vechi și mai respectați producători de sisteme GPL, fondat în 1970 la Bologna, Italia. Compania a pus bazele tehnologiei de injecție secvențială GPL în 1998 cu sistemul Sequential Phase 1, o inovație care a revoluționat industria.

## Istoricul Tartarini

### Epoca Mecanică (1970-1985)

Primii ani ai Tartarini au fost dedicați sistemelor mecanice de admisie GPL. Sistemul TB-80 din 1978 a fost unul dintre primele mixere electronice integrate:

- Mixer cu supapă fluture controlată electronic
- Reductor cu diafragm dublu
- Emulator mecanic pentru carburator

Specificatii TB-80:
- Debit: 25 kg/h
- Presiune reductor: 0.8 bar
- Interval turații: 800-4500 rpm

### Epoca Electronică (1985-1998)

În 1985, Tartarini a lansat primul sistem electronic complet, TB-100 E:
- ECU electronic cu microprocesor 8-bit
- Emulator electronic pentru injectoare
- Switch electronic benzină/GPL

TB-100 E avea 16 coduri de diagnoză și era primul sistem cu autodetectare a numărului de cilindri (2-6).

### Sequential Phase 1 (1998)

Sistemul Sequential Phase 1 a introdus injecția secvențială completă. ECU-ul procesa semnalul injector benzină și genera semnalul pentru injectoarele GPL cu precizie milisecundă:

- Procesor Motorola 68HC11
- Memorie: 32 Kb
- Rezoluție injector: 0.1 ms
- Harta de injecție: 3x3 zone

Acest sistem a permis mașinilor cu injecție multipoint să funcționeze pe GPL fără pierdere semnificativă de putere.

### Sequential Phase 2 (2005)

Phase 2 a adus comunicarea OBD-II și corecția automată lambda:
- Procesor Infineon C167CR
- CAN a 500 kbit/s
- Hartă 4x5 zone
- Corecție automată +/- 10%

Sistemul a devenit standardul în Italia pentru mașinile Euro 4.

### Era Modernă (2012-Prezent)

Odată cu introducerea standardului Euro 6, Tartarini a lansat seria Sequential Platinum:
- Procesor dual-core
- Memorie 512 Kb
- CAN FD
- Harta 6x6 zone
- Corecție automată +/- 20%

În 2018, grupul Tartarini s-a unit cu Stag sub denumirea Stag-Tartarini Group, unificând liniile de producție și cercetare.

## Sistemul Sequential Platinum

### ECU Sequential Platinum D5

ECU-ul modern Sequential Platinum are cel mai puternic procesor din categoria GPL:

Specificații procesor:
- Dual-core: Cortex-A9 la 1.2 GHz (sisteme avansate)
- Cortex-M4F la 180 MHz (real-time)
- Procesori dedicati pentru injecție

Memorie:
- Flash: 1 Mb
- RAM: 256 Kb
- EEPROM: 16 Kb

Densitate tranzistori: 5.2 miliard la 28 nm.

Comunicare:
- CAN a 1 Mbit/s (ISO 11898-1:2015)
- CAN FD a 5 Mbit/s
- LIN a 20 kbit/s

Securitate conform ISO 21434 (automotive cybersecurity).

### Pinout Platinum

Configurația pini ECU:
- A1-A8: Injector GPL 1-8
- B1-B8: Injector benzină (direct)
- C1-C4: Senzor MAP (multiplex)
- C5: Senzor TPS
- C6: Senzor RPM
- C7: Senzor presiune GPL
- C8: Senzor temperatură GPL
- D1-D4: CAN H/L (2+ CAN FD)
- E1: 12V constant
- E2: Ground
- E3: Key-on
- E4: Start motor

### Reductor Platinum 600

Reductorul modern Tartarini:
- Interval funcționare: -35 la +85°C
- Debit: 70 kg/h (max 100 kg/h cu kit twin)
- Presiune ieșire: 0.85-1.05 bar
- Diafragm: Triple membrană din EPDM

Membrana are:
- Duritate Shore: 60A
- Armătură: Plasă poliamidă
- Durabilitate: 150.000 km

Valva electromagnetică:
- Consum: 10W la 12V
- Timp închidere: 6 ms
- Protecție la 27 bar

### Rail Platinum 6S

Rail-ul pentru 6 cilindri:
- Material: Aliaj 6082-T6
- Lungime: 380 mm
- Diametru: 38 mm
- Greutate: 520 g

Injectoare:
- Impedanță: 3.4 ohmi
- Debit: 3.8 g/s la 2.5 bar
- PWM: 1.5-12 ms
- Rezoluție: 8 microsecunde
- Timp răspuns: 0.9ms tipic

Filtru integrat de 20 microni (înlocuibil la 120.000 km).

## Configurare Software

### Interfață Tartarini Tool

Software-ul Tartarini Tool versiunea 5.2+ rulează pe:
- Windows 10/11
- macOS 12+
- Linux (Debian 11+, Ubuntu 22.04+, Fedora 36+)

Conectare USB-C la 10 Gbit/s (USB 3.2 Gen 2).

### Hartă de Injecție

Matricea 6x6 Platinum:
- Axă X: 600-6000 rpm (interval 900)
- Axă Y: 0.15-1.25 bar MAP (interval 0.2)

Valori de 70-165% față de benzină. Interpolare bicubică.

### Autoadaptare

Sistemul învață 16 parametri:
1. Factor debit injector
2. Variabilă presiune GPL
3. Compensare T GPL
4. Compensare T aer
5. Corecție presiune atmosferică
6. Corecție lambda per zonă
7. Tendință vârf cuplu
8. Tendință turații înalte
9. Tendință pre-umidificare
10. Tendință post-umidificare
11. Limiter încărcare electrică
12. Limiter temperatură GPL
13. Limiter presiune GPL
14. Tendință switch
15. Tendință degetare
16. Tendință după-umidificare

Fereastra autoadaptare afișează graficul ultimelor 100 de puncte.

## Selector Platinum

### Comutator Platinum Pro

Comutatorul Platinum Pro are display OLED 2 inch, 360x360 pixeli:
- Full color (16.7 milioane culori)
- Contrast 1000:1
- Unghi vizibil: 160°
- Protecție IP68

Funcții:
- Nivel GPL în 5 trepte
- Modul actual
- Km GPL total și partiu
- Temperatura GPL
- Erori active
- Istoric erori ultimele 20 de cicluri

### Senzor de Nivel

Senzorul Platinum inductiv 4-wire:
- Interval presiune: 0-12 bar
- Precizie: +/- 1%
- Consum: 4-10 mA
- Rezoluție digitală: 12-bit

Lungime cablu de 2.5m, extensibil la 4m.

## Motoare Accesate

### Motoare Mici 1.0-1.4L

Sistemul Sequential Platinum Lite 4S-40:
- Reductor 40 kg/h
- Rail 4 cilindri
- Putere: 50-90 CP
- Economie: 47-53%

### Motoare Medii 1.4-2.2L

Sistemul Sequential Platinum Standard 4S-65:
- Reductor 65 kg/h
-Rail 4 cilindri
- Putere: 95-165 CP
- Economie: 49-57%

### Motoare Mari > 2.2L

Sistemul Sequential Platinum Twin 6S-110:
- Reductor dual 110 kg/h
- Rail 6 cilindri
- Putere: 170-350 CP
- Economie: 51-60%

## Mentenanță și Diagnoză

### Coduri de Eroare

Coduri Platinum:
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
- E15: Tensiune >32V
- E16: Securitate - certificare invalidă

### Program Mentenanță

La 10.000 km:
- Verificare furtune
- Test funcțional selector

La 30.000 km:
- Verificare presiune GPL
- Testare răspuns injector

La 60.000 km:
- Înlocuire filtr injector
- Verificare diafragme

La 120.000 km:
- Înlocuire diafragme
- Recalibrare completă ECU
- Testare completă sistem

La 180.000 km:
- Înlocuire injectoare
- Verificare completă circuit GPL
