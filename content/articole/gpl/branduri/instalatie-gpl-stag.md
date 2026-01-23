---
layout: "know"
type: "know"
na10: { stage: "KNOW" }
title: "Instalație GPL Stag - Specificații Tehnice"
meta_description: "Specificații tehnice complete pentru instalațiile GPL Stag - sisteme de injecție, modele ECU și componente."
---

# Instalație GPL Stag - Specificații Tehnice

Sistemele GPL Stag (acum parte a grupului Tartarini) reprezintă cea mai recentă generație de sisteme de injecție gaz lichefiat din Italia. Anul 2018 a marcat unificarea sub brandul Stag cu integrarea tehnologiilor Tartarini și a infrastructurii de producție din Parma.

## Serie Diesel 300 Premium

Sistemul Stag 300 Premium este proiectat exclusiv pentru sistemul Common Rail diesel. Arhitectura integrată include unitatea de control (ECU) și emulatorul într-un singur modul.

### ECU Stag 300 Premium D1.26

Unitatea de control diesel are procesor ARM Cortex-M4 la 120 MHz cu FPU hardware. Memoria flash de 512 Kb stochează 8 hărți de injecție independente. Bus-ul CAN la 500 kbit/s permite comunicarea cu protocoalele CAN 2.0A și CAN 2.0B.

Specificații principale:
- Interval tensiune: 9-32 V DC
- Curent consum: 150 mA la repaus, 450 mA funcționare
- Temperatura operare: -40 la +85°C
- Protecție conform IP67

Pinul C15 conectează la linia CAN H, C16 la CAN L. Pinul A4 este pentru semnalul rpm (alternativ). Pinul B1-B4 controlează injectoarele GPL, B5-B8 sunt pentru feedback-ul debitometrului.

### Reductor Stag Diesel 400

Reductorul diesel are un singur diafragm elastic din EPDM cu armătură de cauciuc natural. Camera de admisie reglează presiunea între 0.9 și 1.1 bar.

Specificații termice:
- Interval funcționare: -30°C la +80°C
- Sarcina termică: 550 kJ/h la debit tipic
- Temperatura gazului ieșire: 0-5°C la 90°C apă
- Debit maxim: 80 kg/h

Membrana are o duritate Shore 65A și o grosime de 1.2 mm. Întreținerea recomandată: verificare la 60.000 km, înlocuire la 120.000 km.

Valva de securitate se deschide la 30 bar, timp de acțiune: 7 ms. Filtrul de alimentare de 25 microni din sinterizare bronz este la intrare.

### Rail Stag Diesel 8/9

Rail-ul construit din aliaj Zicral (Zinc, Aluminiu, Cupru) integrează patru sau șase injectoare cu debit variable. Debitul nominal este reglabil între 2.5 și 4.5 g/s la 2.5 bar.

Injectoarele au:
- Bobină 12 ohmi cu fioțe de cupru emailat
- Carcasă din POM (poliacetal) rezistent la 150°C
- Ace din oțel 17-4PH cu tratament Nitrox

Domeniul de injecție PWM: 1.5-10 ms, rezoluție 10 microsecunde. Răspunsul injectorului: 1.0ms tipic, 1.5ms maxim.

Filtru integrat de 40 microni - durata de viață: 150.000 km.

## Seria Benzină 300 Premium

Sistemul de benzină Stag 300 Premium este complet separat de seria diesel, având o arhitectură specifică injecției indirectă de benzină.

### ECU Stag 300 Premium B2.18

Unitatea pentru benzină folosește procesor STMicroelectronics STM32F103C8T6 (Cortex-M3 la 72 MHz). Memoria de 256 Kb permite stocarea a 6 hărți de injecție calibrate.

Comunicarea LIN la 20 kbit/s este standard, dar comunicația CAN este opțională. Bus-ul OBD-II funcționează pe protocolul standard K-Line.

Specificații electrice:
- Interval tensiune: 9-16 V DC
- Curent consum: 120 mA repaus, 350 mA activ
- Temperatură operare: -40 la +125°C (componentă)
- Protecție conform IP65

Pinout pentru injector GPL:
- Pinii 1-4: Semnal injector GPL (sink)
- Pinii 5-8: Semnal injector benzină (source)
- Pinii 9-12: Senzor MAP integrat
- Pinul 13: Senzor TPS
- Pinul 14: Senzor RPM
- Pinul 15: Ground
- Pinul 16: 12V constant

### Reductor Stag 300

Reductorul de benzină utilizează doi diafragmi din butadien-cauciuc cu armătură textilă. Camera primară reducează de la 20 bar la 1.5 bar, camera secundară la 0.9-1.0 bar.

Specificații:
- Interval funcționare: -30°C la +80°C
- Debit aerisire: 8-12 l/min la 2000 rpm
- Temperatură gaz ieșire: -5/+5°C la 85°C apă
- Debit: până la 60 kg/h

Valva electromagnetică are consum 12W la 12V. Timp de închidere: 6ms.

### Rail Benzină 4S și 6S

Rail-urile pentru benzina sunt de tip 4S (4 cilindri) și 6S (6 cilindri). Injectoarele au impedanță 3.5 ohmi și debit constant de 2.8 g/s la 2 bar.

Specificații injector:
- Carcasă din PEEK imidic
- Densitate bobină: 22 mJ
- Timp răspuns: 1.2ms tipic

Filtru de 25 microni înlocuibil la 80.000 km.

## Configurare Software Stag

### Interfața Stag Tool

Software-ul Stag Tool (versiune 4.2+) rulează pe Windows 10/11 și Linux. Conexiunea prin USB Type-C la 480 Mbit/s.

Interfața include:
1. Harta GPL (4x5 zone)
2. Corecții automate
3. Configurare switch
4. Test injectare
5. Diagnoză

### Harta de Injecție

Matricea 4x5 bazată pe:
- Axă X: Turații (1000, 2000, 3000, 4000, 5000 rpm)
- Axă Y: MAP (0.3, 0.5, 0.7, 0.9 bar)

Valorile se reglează într-un interval de 0.8-1.3 față de benzină. Sistemul interpolare liniară între puncte.

### Corecții automate

Sistemul are 4 corecții automatizate:
1. Corecție temepratură GPL
2. Corecție Încărcare electrică
3. Corecție presiune atmosferică
4. Corecție lambda (dacă senzor disponibil)

Fereastra autoadaptare afișează istoricul ultimelor 50 de cicluri.

## Selector Stag Dashboard

### Comutator Digital

Comutatorul digital are display TFT de 1.3 inch, 128x64 pixeli cu 16 culori. Indică:
- Modul (Benzină/GPL/Inactiv)
- Nivel GPL în 5 trepte (20%, 40%, 60%, 80%, 100%)
- Km pe GPL
- Erori active

Tactil cu o sensibilitate de 15 gf. Comutarea cu întârziere de 1.2 secunde.

### Senzor de Nivel

Senzorul de nivel inductiv cu 3 fire:
- Interval presiune: 0.5-10 bar
- Precizie: +/- 2%
- Consum: < 8 mA la 12V

Instalare pe răcire GPL (butoi). Calibrarea factory pentru butoane de 25-60 litri.

## Motoare Accesate

### Motoare Mic (1.0-1.6L)

Sistemul Stag 300 Basic 4S-25:
- Reductor cu debit 40 kg/h
- Rail 4 cilindri
- Putere: 50-90 CP
- Economie: 45-55%

### Motoare Medii (1.6-2.2L)

Sistemul Stag 300 Premium 4S-50/6S-60:
- Reductor cu debit 55 kg/h
- Rail 4 sau 6 cilindri
- Putere: 100-150 CP
- Economie: 48-58%

### Motoare Mari (>2.2L)

Sistemul Stag 350 Premium 6S-80:
- Reductor dual debit 80 kg/h
- Rail 6 cilindri
- Putere: 160-250 CP
- Economie: 50-60%

## Diagnoză Stag

### Coduri de Eroare (ECU Diesel)

Coduri diesel specifice:
- E01: Senzor presiune GPL
- E02: Senzor temperatură GPL
- E03:Injector GPL blocat
- E04: Senzor rpm
- E05: Senzor TPS
- E06: Debitometru GPL
- E07: Comutare fail-safe

### Coduri de Eroare (ECU Benzină)

Coduri benzină specific:
- E11: Senzor MAP
- E12: Senzor TPS
- E13: Emulator injectoare
- E14: Injector benzină blocat

### Mentenanță

Program recomandat:
- La 15.000 km: Vizual
- La 45.000 km: Verificare reductor
- La 80.000 km: Înlocuire filtre
- La 120.000 km: Înlocuire diafragme
