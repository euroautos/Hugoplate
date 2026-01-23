---
layout: know
type: know
na10:
  stage: KNOW
  awareness: problem_aware
title: "Sistem DPF FAP: Temperatură Regenerare 550-650°C și Coduri Eroare"
meta_description: "Ghid tehnic DPF/FAP: temperatură regenerare 550-650°C, cicluri active/pasive/forțată, coduri P2002/P242F/P2458, durată viață 150.000-250.000 km, probleme common."
date: 2025-01-22
tags: ["DPF", "FAP", "filtru particule", "regenerare DPF", "întreținere auto"]
---

# Sistem DPF/FAP: lumina filtru particule, pierdere putere, fum dens

Indicatorul portocaliu aprins pe bord. Mașina nu răspunde la accelerare, motorul se opriște la ralanti. Fum dens la evacuare după condus intensiv.

Cele trei semne indică sistemul de filtrare a particulelor înfundat sau în proces de regenerare. DPF (Diesel Particulate Filter) sau FAP (Filtre à Particules) reține 99% din particulele dăunătoare emise de motoarele diesel - dar cu un preț de funcționare și întreținere.

Să înțelegem cum funcționează, când se regenerează, și ce probleme pot apărea.

## Principiu: filtrarea particulelor carbon

Motoarele diesel emit particule fine de carbon (soot). Fără filtru, aceste particule ajung direct în atmosferă - dăunătoare pentru sănătate.

DPF-ul e un filtru ceramic:

| Caracteristică | Detalii tehnice |
|---------------|----------------|
| Material | Cordierită (ceramică poroasă) |
| Celule | 200-600 celule per inch pătrat (CPSI) |
| Porozitate | 60-80% spațiu gol pentru circulație gaze |
| Diametru | 100-180mm (în funcție de motor) |
| Lungime | 300-500mm |
| Capacitate reținere | 100-200g de particule înainte de regenerare |

Procesul filtrării: Gazele de evacuare trec prin pereții poroși - particulele carbon se rețin în „canalele" filtrului, iar gazele curățate trec prin pereții ceramică.

## Regenerarea: cum se curăță DPF-ul

Particulele se rețin în filtru. Dacă nu se curăță, filtru se înfundă complet în 8-10 zile de condus normal. Soluția: **regenerarea** - arderea particulelor la temperatură ridicată.

### Temperatură regenerare

| Faza regenerare | Temperatură | Durată |
|----------------|-----------|--------|
| Încălzire inițială | 400-500°C | 2-3 minute |
| Regenerare activă | 550-650°C | 5-10 minute |
| Încălzire în coborâtre | 400-500°C | 2-3 minute |

Regenerarea completă consumă aproximativ 10-20% din combustibilul în acele 10-15 minute.

### Tipuri regenerare

**1. Regenerare pasivă (automată în condus normal)**

Condiții necesare:
- Viteză constantă >60 km/h pe 20+ minute
- RPM motor 2000-3000
- Sarcina motor 30-70%
- Dacă aceste condiții sunt îndeplinite, particulele se ard automat

Regenerarea pasivă: 10-20% din ciclurile de regenerare

**2. Regenerare activă (automată la nivel critică)**

Cum se declanșează:
- DPF-grad de umplere >70-80%
- Cote OBD indică contrapresiune ridicată
- ECU decide automat regenerare activă

Cum ECU obține temperatura:
- Injecții post-combustie (combustibil injectat în timpul curse de evacuare)
- Avans timing injecție
- Creștere turbo
- Posibil: creștere ralanti pentru 10-15 minute după oprire

Regenerarea activă: 80-90% din toate ciclurile

**3. Regenerare forțată (manuală, la service)**

Când e necesară:
- Condus preponderent urban (fără pasivă, filtru se înfundă)
- Temperatura sistem de răcire nu ajunge la normal
- Senzori DPF defectează
- Regenerări active eșuate

Proces la service:
1. Conectare tester OBD
2. Creștere ralenti la 2000-2500 rpm
3. Control temperatură evacuare la 600-650°C
4. Monitorizare 15-20 minute
5. Verificare cote post-regenerare

## Probleme DPF și diagnostic

### Filtru înfundat: simptome

| Simptom | Descriere | Urgență |
|---------|----------|---------|
| Pierdere putere | Motor revede dar mașină nu accelerează | Medie |
| Motor se opriște la ralanti | ECU protejează motor | Înaltă |
| Consum crescut | 10-20% în plus | Medie |
| Fum dens la evacuare | Negru sau cenușiu | Înaltă |
| Lumina DPF / FAP | indicator portocaliu | Medie |
| Lumina check engine | Dacă problemă critica | Înaltă |

### Temperatura de evacuare prea mică

Dacă temperatura evacuare nu ajunge la 300-350°C:
- Condus urban preponderent
- Ralenti lungi (încălzire în fața școli, așteptare semafoare)
- Trageți remorcă excesivă pentru măreșină motor

Rezultat: filtru se înfundă în 5-7 zile vs 30-40 zile la condus autostradă.

### Coduri eroare OBD

| Cod | Descriere | Ce indica |
|-----|-----------|----------|
| P2002 | Efficiency BELOW THRESHOLD (Bank 1) | Filtru înfundat sau senzor defect |
| P242F | FILTER REGENERATION REQUIRED | Filtru la capacitate maximă |
| P2458 | DIFFERENTIAL PRESSURE SENSOR | Sensor presiune DPF defect |
| P2463 | EXHAUST GAS RECIRCULATION SENSOR | Sensor EGR afectat |
| P244A | PARTICULATE FILTER CAPACITY MAX | Filtru la limită |

### Senzori care monitorizează DPF

**1. Senzor de presiune diferențial (Delta P)**

Măsoară diferența de presiune:
- Înainte de filtru: presiune ridicată (gazele se încetinesc)
- După filtru: presiune scăzută (gazele curățate)

Diferența = câtă particule sunt reținute în filtru.

| Delta P | Grad umplere DPF | Acțiune |
|---------|------------------|---------|
| <5 kPa | Curat | Funcționare normală |
| 5-10 kPa | 30-50% umplere | Regenerare pasivă posibilă |
| 10-15 kPa | 60-70% umplere | Regenerare activă necesară |
| 15-20+ kPa | 80%+ umplere | CRITICĂ - Service urgent |

**2. Senzon temperatura evacuare (pre și post DPF)**

Verifică că temperatura ajunge la 550-650°C în timpul regenerării.

**3. Sensor O2 (post-DPF)**



Măsoară calitatea gazelor de evacuare - verificați că regenerarea e completă.

## Întreținere: prelungiți viața DPF

### Condus pentru regenerare la timp

Rulează la autostradă minim 20-30 minute săptămânal la 100-120 km/h:
- Menține temperatura sistem evacuare
- Permite regenerare pasivă
- Extinde viața DPF cu 30-40%

### Combustibil de calitate

Combustibil slab:
- Crește nivelul de particule
- Reduce eficiența regenerării
- Întreține filtru mai rapid

Combustibil de calitate: diesel cu sulf <10 ppm (EURO5+)
- Particule mai puține
- Regenerare mai eficientă
- Viață DPF mai lungă

### Ulei motor sulfat

Ulei motor cu conținut sulf >0.3%:
- Creați particule în exces
- Deteriorează filtru ceramic

Ulei motor LOW SAPS (S=0.05%): obligatoriu pentru diesel cu DPF. Acest tip de ulei:
- Reduce particule evacuate
- Protejează filtru
- Întreține viață DPF

## Regenerare forțată: când și cum

### Când e necesară

Indicatorul pentru serviciu:
- Lumina DPF / FAP aprinsă continuă
- Pierdere putere evidentă
- Temperatura evacuare <250°C la OBD
- Delta P >12-15 kPa împreună cu semne putere slabă

### Regenerare la service: pași

1. Conectare OBD tester
2. Verificare temperatură sistem răcire (trebuie să fie 90-95°C)
3. Creștere ralenti la 2000-2500 rpm
4. Monitorizare temperatura evacuare până la 550-650°C
5. Menține temperatura 10-15 minute (în funcție de grad umplere)
6. Monitorizare Delta P - trebuie să scadă la 5-8 kPa
7. Verificare completă Delta P <5 kPa înainte de a opri motor

### Regenerare la drum: măsura de urgență

Dacă mașina se opriște din cauza DPF înfundat:
1. Nu opriți motorul
2. Creșteți ralenti la 2500-3000 rpm
3. Conduceți la drum fluid 15-20 km
4. Mențineți RPM 2000-3000
5. Temperatura evacuare va crește la 400-500°C
6. Filtrul se va degaza pe măsură ce temperatura crește
7. Dacă lumina dispare, continuați drumul normal

## Viață DPF: câți km dura

| Condus | Durată viață | Explicație |
|-------|-------------|------------|
| Autostradă 80% | 250.000+ km | Regenerare pasivă domină |
| Mixt 50/50 | 180.000-220.000 km | Balanță pasivă/activă |
| Urban 80% | 120.000-160.000 km | Activ domină, uzare mai rapidă |
| Urban 100% | 80.000-120.000 km | Maxim uzare, viață minimă |

Filtrul ceramic se depreciază prin:
- Cramelizare particule (se întăresc, devin imposibil de ars)
- Deteriorare structurală (crăpături la 180.000+ km)
- Uzare senzori (presiune, temperatură)

## Înlocuire DPF: costuri și considerări

### Filtru nou vs Filtru curățat

| Opțiune | Cost | Viață ulterioră | Candidează |
|--------|------|----------------|-----------|
| DPF OEM (original) | 800-2000€ | 200.000+ km | Mașini <100.000 km |
| DPF aftermarket | 400-800€ | 120.000-180.000 km | Mașini 150.000+ km |
| DPF curățat (serviciu) | 200-500€ | 60.000-100.000 km | Soluție temporară |
| DPF șters (ECU) | 200-400€ | N/A | Ilegal, în plus ITP |

**Atenție:** Ștergerea DPF din ECU e ilegală în majoritatea țărilor UE. ITP-ul va detecta DPF absent sau șters.

### Proces înlocuire

1. Oprire motor și răcire completă (30+ minute)
2. Scoatere senzori (3-5 senzori în total)
3. Scoatere DPF (două flanșe la ambele extremități)
4. Instalare DPF nou cu garnituri noi
5. Conectare senzori noi
6. Resetare ECU pentru adaptare
7. Test drive pentru verificare completă

## Ce urmează: servodirecție - cum controlul direcției se conectează la puterea motorului

DPF-ul filtrează particulele din evacuare. Servodirecția controlează direcția mașinii. Cele două sunt sisteme separat dar ambele critică: evacuarea proastă reduce eficiența motorului și crește consumul, iar servodirecția proastă transformă puterea motorului în manevrare greoaie.

Cititi articolul nostru despre servodirecție pentru a înțelegere cum directia se asistă (presiune 70-100 bar, cuplu 20-80 Nm), diferitele tipuri (hidraulică, electrică, electrohidraulică), și cum simptomele de pompe direcție uzate și probleme de ulei direcție afectează controlul și comfortul.
