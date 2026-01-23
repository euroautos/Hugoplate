---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL Lovato - Ghid Diagnoză"
meta_description: "Ghid complet de diagnoză pentru instalațiile GPL Lovato - sisteme Smart, Fast, și coduri de eroare."
---

# Instalație GPL Lovato - Ghid Diagnoză

Fondată în 1964 la Torino, Lovato Gas a devenit unul dintre principalii producători de sisteme GPL din lume. Sistemul lor Smart este cel mai popular în Italia pentru instalările de origine (factory-fitted). În 2022, compania a fost achiziționată de grupul Landi Renzo, unind tehnologiile celor două branduri.

## Sistemul Lovato Smart

### Arhitectura Smart OIS

OIS (Omni Integrated System) este arhitectura modulară aLovato. ECU-ul principal (OMNI) este conectat la un modul injector separat prin CAN.

Specificații ECU Lovato OMNI:
- Procesor Infineon XC2365A
- Memorie flash: 384 Kb
- Frecvență procese: 80 MHz
- CAN a 500 kbit/s

Modulele injector (OIS) se pot conecta în serie până la 4 module, fiecare gestionând patru cilindri. Adresa modulelor este configurată prin jumperi.

### Modul Injector Lovato OIS

Modulul injector are integrat în rail GPL. Are propriul procesor dedicat la gestionarea a 4 injectoare.

Specificații:
- Procesor NXP S08QE
- Memorie de 8 Kb
- Tensiune op: 9-16 V
- Putere consum: 2W per cilindru

Rail-ul Lovato OIS utiliz:
- Injectoare 3.5 ohmi
- Debit 2.6 g/s la 2 bar
- PWM: 1.5-10 ms, rezoluție 12 microsecunde

Diagnostica modulului:
- Testare injector individual
- Testare curcuit deschis/închis
- Testare impedanță bobină

## Sistemul Lovato Fast

### ECU Fast 1.31

ECU Fast este un sistem compact dedicat pentru mașinile sub 2.0 litri. Are un singur procesor care gestionează tot sistemul.

Specificații:
- Procesor STMicro STM32F030
- Memorie 64 Kb
- CAN a 125 kbit/s (opțional)
- LIN a 20 kbit/s (standard)

ECU Fast are integrat emulator și redirecțional injector benzină într-un singur modul.

### Reductor Fast 500

Reductorul Lovato Fast 500 are un singur diafragm:
- Interval op: -30 la +70°C
- Debit: 40 kg/h
- Presiune ieșire: 0.9-1.1 bar

Valva electromagnetică 12V, 8W. Filtur la intrare de 25 microni.

## Interfață Software Lovato

### Lovato Easy Connect

Software-ul Lovato Easy Connect versiunea 3.5+ permite:
- Configurare completă ECU
- Testare componente
- Descărcare/încărcare hărți
- Actualizare firmware

Conectare USB Type-C la 480 Mbit/s. Suport pentru Windows 10/11, macOS, și Linux.

### Fereastra Principală

Interfața are 6 pagini principale:
1. Hartă GPL
2. Corecții
3. Motor
4. Injectoare
5. Emulator
6. Diagnoză

### Hartă de Injecție

Matricea 5x5 a lovato:
- Axă X: 1000 la 5000 rpm (câte 1000)
- Axă Y: 0.2 la 1.0 bar MAP (câte 0.2)

Valoare se exprimă ca procent din injector benzină. Interval 80-140%.

## Diagnoză Sistemă

### Tipuri de Testare

Lovato Easy Connect oferă 4 tipuri de test:

**Test static**: Verifică impedanțe
- Injector GPL: 3.0-3.8 ohmi
- Injector benzină: 12-16 ohmi
- Emulator: 10-14 ohmi (per cilindru)

**Test dinamic**: Injecția GPL pe loc
- Testare debit individual
- Testare răspuns injector
- Testare stabilitate presiune

**Test functional**: Simulare rulaj
- Testare switch-over
- Testare corecții
- Testare fail-safe

**Test erori**: Citiere coduri
- Coduri active
- Coduri istoric
- Clear erori

### Coduri de Eroare Lovato Smart

Coduri critice:
- P0100: Senzor MAP
- P0105: Senzor MAP circuit deschis
- P0102: Senzor MAP scurt la sol

Coduri injector GPL:
- P0201: Injector cilindru 1 defect
- P0202: Injector cilindru 2 defect
- P0203: Injector cilindru 3 defect
- P0204: Injector cilindru 4 defect

Coduri presiune GPL:
- P0107: Senzor presiune GPL scurt la sol
- P0108: Senzor presiune GPL circuit deschis
- P0109: Senzor presiune GPL semnal nul

Coduri temperatură:
- P0112: Senzor temperatură GPL scurt la sol
- P0113: Senzor temperatură GPL circuit deschis

Coduri emulator:
- P0206: Emulator injector 1
- P0207: Emulator injector 2
- P0208: Emulator injector 3
- P0209: Emulator injector 4

Coduri comunicare:
- P0601: ECU - eroare memorie
- P0606: ECU - eroare procesor
- P1600: Comunicare CAN eșuată

### Coduri de Eroare Lovato Fast

Coduri specifice Fast:
- E01: Senzor presiune GPL defect
- E02: Senzor temperatură GPL defect
- E03: Injector GPL blocat
- E04: Senzor TPS defect
- E05: Presiune GPL sub prag
- E06: Presiune GPL peste prag
- E07: Tensiune alimentare <9V
- E08: Tensiune alimentare >16V
- E09: Comunicare FAIL-SAFE

## Selector Lovato

### Comutator Smart

Comutatorul Lovato Smart OIS are display LCD 128x64:
- Nivel GPL în 4 trepte
- Modul actual
- Km GPL
- Avertismente

Tastă pentru switch cu întârziere de 1.8 secunde.

### Senzor de Nivel

Senzorul de nivel Lovato în 3 fire:
- Interval presiune: 0.5-9 bar
- Precizie: +/- 2.5%
- Consum: < 15 mA

Calibrare factory pentru butoane standard 25-50L.

## Motoare Accesate

### Motoare Mici 1.0-1.4L

Lovato Fast 1.31:
- Reductor 40 kg/h
- Rail 4 cilindri
- Putere: 50-80 CP

### Motoare Medii 1.4-2.0L

Lovato Smart OIS 4S-50:
- Reductor 55 kg/h
- Rail 4 cilindri
- Putere: 90-140 CP

### Motoare Mari > 2.0L

Lovato Smart OIS 6S-80:
- Reductor 80 kg/h
- Rail 6 cilindri
- Putere: 150-250 CP

## Mentenanță

### Program Recomandat

La 10.000 km:
- Verificare furtune
- Test funcțional comutator

La 30.000 km:
- Testare injector
- Verificare presiune GPL

La 50.000 km:
- Înlocuire filtru
- Verificare reductor

La 80.000 km:
- Înlocuire diafragme
- Recalibrare ECU
