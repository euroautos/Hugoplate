---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL AG Zenit - Instrucțiuni Tehnice"
meta_description: "Instrucțiuni tehnice complete pentru sistemele GPL AG - modele Zenit, componente și specificații."
---

# Instalație GPL AG Zenit - Instrucțiuni Tehnice

AG Gas System înființată în 1914 la Milano este unul dintre cei mai vechi producători de sisteme GPL din Europa. Sistemul Zenit Direct (acum integrat în seria Zenit) a revoluționat piață în 2008 prin injecția directă a GPL în colectorul de admisie.

## Sistemul Zenit Direct

### Arhitectura Zenit Direct

Sistemul Zenit Direct elimină reductorul tradițional. GPL-ul este injecat direct din butoi prin injecția de înaltă presiune.

Specificații:
- Presiune injecție: 5-7 bar
- Debit injecție: până la 100 kg/h
- Temperatura gazului: 0-20°C (încălzit prin carcase)

Această arhitectură reduce pierderile de presiune și permite o injecție mai precisă.

### Injector Zenit DPI

Injectorul DPI (Direct Pressure Injection) funcționează la 6 bar:
- Impedanță: 2.4 ohmi
- Debit: 3.5 g/s
- PWM: 2-8 ms

Injectorul este construit din:
- Carcasă: PEEK (polieter-eter-cetonă)
- Ace: Oțel 17-4PH
- Bobină: Cupru emailat și rășină epoxidică

Durabilitate estimată: 200.000 km.

### Rail Zenit Direct 6S

Rail-ul pentru 6 cilindri are înălțime redusă pentru montaj spațial compact:
- Lungime: 350 mm
- Diametru: 32 mm
- Greutate: 450 g

Filtrul integrat de 30 microni se înlocuiește la 100.000 km.

## Sistemul Zenit 4.0

### ECU Zenit 4.0

Unitatea de control Zenit 4.0 are procesor dual-core:
- Core 1: Gestionare injecție GPL (Cortex-M4F la 120 MHz)
- Core 2: Gestionare emulator și OBD-II (Cortex-M0+ la 48 MHz)

Memorie:
- Flash: 512 Kb
- RAM: 128 Kb
- EEPROM: 8 Kb

Densitate tranzistori: 2.4 miliard, tehnologie 28 nm.

Comunicare CAN a 500 kbit/s cu suport CAN FD.

### Pinout Zenit 4.0

Pinul I/O:
- A1-A4: Injector GPL 1-4
- B1-B4: Injector GPL 5-8 (dacă aplicație)
- C1-C4: Injector benzină (direct)
- D1-D4: Senzor MAP (diverse)
- E1: Senzor TPS
- E2: Senzor RPM
- E3: Senzor presiune GPL
- E4: Senzor temperatură GPL
- F1-F2: CAN H/L
- G1: 12V constant
- G2: Ground

### Reductor Zenit 500

Reductorul pentru sistemele indirecte:
- Interval funcționare: -30 la +75°C
- Debit: 55 kg/h
- Presiune ieșire: 0.8-1.0 bar

Diafragm elastic din butadien-cauciuc cu armătură din textil de poliamidă.

## Configurare Software AG

### Interfață AG Tool

Software-ul AG Tool versiunea 2.8+ rulează pe toate platformele majore:
- Windows 10/11
- macOS 10.15+
- Ubuntu 20.04+

Conexiune USB 3.0 la 5 Gbit/s.

### Hartă de Injecție

Matricea 6x6 a AG:
- Axă X: 800-5500 rpm (câte 800)
- Axă Y: 0.2-1.2 bar MAP (câte 0.2)

Valori de 70-150% față de benzină. Interpolare cubică între puncte.

### Corecții automate

Sistemul învață 8 parametri:
1. Factor debit injectoare
2. Compensare temperatură GPL
3. Compensare temperatură aer
4. Corecție presiune atmosferică
5. Tendință cuplu
6. Tendință turații înalte
7. Tendință switch
8. Tendință după-umidificare

Fereastra autoadaptare afișează graficul ultimelor 50 de puncte.

## Selector Zenit

### Comutator Zenit Eco

Comutatorul Zenit Eco are display TFT 1.54 inch, 240x240 pixeli:
- 256 culori
- Protecție IP67
- Touch cu sensitivitate 10 gf

Indică:
- Modul
- Nivel GPL în 5 trepte
- Temperatura GPL
- Avertismente

### Senzor de Nivel

Senzorul inductiv AG 3-wire:
- Interval presiune: 0-10 bar
- Precizie: +/- 1.5%
- Consum: 6-12 mA

Lungime cablu de 2m, extensibil la 3.5m.

## Motoare Accesate

### Motoare Mici 1.0-1.4L

Sistemul Zenit Lite 4S-35:
- Reductor 35 kg/h
- Rail 4 cilindri
- Putere: 50-85 CP
- Economie: 45-52%

### Motoare Medii 1.4-2.0L

Sistemul Zenit 4.0 4S-60:
- Reductor 60 kg/h
- Rail 4 cilindri
- Putere: 90-150 CP
- Economie: 48-55%

### Motoare Mari > 2.0L

Sistemul Zenit Direct 6S-100:
- Injecție directă DPI
- Rail 6 cilindri
- Putere: 160-300 CP
- Economie: 50-60%

## Mentenanță

### Program Recomandat

La 10.000 km:
- Verificare furtune de înaltă presiune
- Test funcțional selector

La 35.000 km:
- Verificare presiune GPL
- Testare răspuns injector

La 60.000 km:
- Înlocuire filtr injector
- Verificare diafragme

La 100.000 km:
- Înlocuire diafragme
- Recalibrare ECU
- Verificare completă sistem

### Diagnoză

Coduri de eroare AG:
- E01: Senzor presiune GPL
- E02: Senzor temperatură GPL
- E03: Injector GPL blocat
- E04: Emulator nefuncțional
- E05: Presiune GPL sub prag
- E06: Presiune GPL peste prag
- E07: Comunicare CAN eșuată
- E08: Harta absentă
- E09: Tensiune sub 9V
- E10: Tensiune peste 32V

Resetarea erorilor prin software.
