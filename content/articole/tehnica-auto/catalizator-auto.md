---
layout: know
type: know
na10:
  stage: KNOW
  awareness: problem_aware
title: "Catalizator Auto: Temperatură 300-900°C și Test Eficiență OBD"
meta_description: "Ghid tehnic catalizator: temperatură funcționare 300-900°C, celule 200-600 CPSI, metale prețioase Pt/Pd/Rh, diagnostic有效率 (P0420, P0430), simptome înfundat."
date: 2025-01-22
tags: ["catalizator", "convertor catalitic", "simptome catalizator", "întreținere auto"]
---

# Catalizator Auto: lumina check engine, pierdere putere, miros puternic evacuare

Lumina check engine se aprinde. Accelerarea pare întreruptă, motorul revede dar mașinănu accelerează. Un miros puternic, ca de ouă stricate sau benzină arsă, iese din evacuare.

Cele trei semne indică probleme cu catalizatorul (convertorul catalitic). Această componentă, care costă 300-1000€+ din cauza metalelor prețioase, reduce gazele nocive cu 90-95% - dar poate se înfundă în 80.000-120.000 km.

Să înțelegem cum funcționează, cum se diagnostică, și ce opțiuni există.

## Principiu: conversie chimică a gazelor nocive

Catalizator transformă gazele nocive în substanțe mai puțin periculoase:

| Gaz intrare | Gaz ieșire | Reacție chimică |
|-------------|-----------|----------------|
| CO (monoxid de carbon) | CO2 (dioxid de carbon) | Oxidare: CO + 1/2 O2 → CO2 |
| HC (hidrocarburi) | CO2 + H2O | Oxidare: HC + O2 → CO2 + H2O |
| NOx (oxizi de azot) | N2 + O2 | Reducere: 2NO2 → N2 + 2O2 |

Temperatura necesită pentru reacții:
- 300-400°C: oxidarea parțială începe
- 400-600°C: fereastra optimă (convertor lucrează cel mai bine)
- 600-900°C: funcționare la putere mare
- >950°C: începe deteriorarea structurii

## Structura catalizator

### Carcasă exterioră

| Element | Material | Diametru | Durată de viață |
|---------|---------|----------|----------------|
| Corp principal | Oțel inoxidabil | 100-180mm | Întreaga viață mașină |
| Flanșe intrare/ieșire | Oțel inoxidabil | - | Pot necesita garnituri la 80.000 km |
| Termoprotecție | Ceramic + metal | - | Dacă vizibil deteriorat, timp de înlocuire |

### Structura internă (bricks)

Matricea de ceramică cu celule:

| Celule per inch (CPSI) | Flux gaz | Utilizare |
|----------------------|---------|-----------|
| 200 CPSI | Flux mare | Motoare mari, diesel |
| 300 CPSI | Flux mediu | Standart cele mai comune |
| 400 CPSI | Flux îngust | Mașini mici, benzină |
| 600 CPSI | Flux mic | Sport, high performance |

CPSI mai mare = suprafață mai mare = conversie mai eficientă = flux mai mic = posibil contrapresiune excesivă

### Strat catalitic (washcoat)

Suprafața activă care conține metale prețioase:

| Metal prețios | Funcție | Cantitate (obisnuită) |
|--------------|---------|-------------------|
| Pt (Platină) | Oxidare CO, HC | 1-4 grame |
| Pd (Paladiu) | Oxidare CO, HC | 2-5 grame |
| Rh (Rodiu) | Reducere NOx | 0.1-0.5 grame |
| Ce (Ceriu) | O2 storage (buffer) | 4-8 grame |
| Zr (Zirconiu) | Stabilizare termic | 1-3 grame |

Metale prețioase = cost ridicat (300-1000€+)
Structura ceramică = durată viață 120.000-180.000 km

## Diagnostic OBD: cum detectă ECU

### Senzori O2 (oxigen)

Sistemul folosește 2 senzori O2:

| Senzor | Locație | Funcție |
|--------|---------|---------|
| O2 înainte de catalizator | Colector evacuare | Măsoară O2 în gaze raw |
| O2 după catalizator | Dupa țeavă evacuare | Măsoară O2 în gaze tratate |

Diferența de oxigen înainte și după indică eficiență catalizatorului.

### Test eficiență (OBD)

ECU testează catalizator la fiecare condus de 20-30 km:

1. Compară O2 înainte și după catalizator
2. Dacă diferențele e <15% (înlocuță normal e 30%+)
3. Catalizator e considerat inefficace
4. Lumina check engine se aprinde

Coduri eroare comune:
- **P0420**: Catalyst System Efficiency BELOW THRESHOLD Bank 1
- **P0430**: Catalyst System Efficiency BELOW THRESHOLD Bank 2
- **P0421**: Warm Up Catalyst Efficiency Below Threshold Bank 1

## Simptome catalizator înfundat

### Pierdere putere

| Severitate | Simptom | Cauza |
|-----------|---------|-------|
| Ușoară | Accelerare întreruptă 5-10% | Flux gaz comprimat |
| Medie | Pierdere 15-25% putere max | Celule infundate |
| Severă | Motor nu urcă peste 2000 rpm | Blocaj aproape complet |

Cauza fundamentala: contrapresiune ridicată (1.5-2.5 bar vs 0.5-0.8 bar normal)

### Consum crescut

Catalizator înfundat:
- Crește consum 8-15 (uneori până la 25%)
- Motor revede mai mult pentru aceeași putere
- Combustibil neardent în evacuare datorită contrapresiunii

### Funcționare slabă motor

Simptome interrelaționate:
- Tremurat la ralenti
- Motor se opriște la frânare
- Lumina check engine
- Miros din evacuare (nu complet arzătoare)

### Aspect vizibil

Dacă vizibil:
- Carcase umflată/deformată (încălzare excesivă)
- Crăpături vizibile în carcasă
- Condensare pe exterior (dacă condus scurt)
- Zgomot de „metal pe metal" (matricea mobilă înăuntru)

## Cauze deteriorare catalizator

### Condus la temperatura înaltă excesivă

| Situație | Temperatura | Consecință |
|----------|-----------|------------|
| Condus cu motor aprins (coast down) | 1200°C+ | Matrice ceramică se scufundă |
| Fapt multiple sărituri | 1000-1100°C | Strat catalitic se depreciază |
| Combustibil slab | 950-1050°C | Depuneri pe celule |
| Overbogă (turbo) | 900-1000°C | În mod normal OK |

### Combustibil slab sau contaminat

Combustibil de slabă calitate:
- Creați particule care se rețin
- Plumb (în țări non-EU) distruge metale prețioase
- Aditivi excesiv (cei de tip „octane booster") se pot acumula

### Ulei motor prea mult în evacuare

Cauze ulei în evacuare:
- Segmente piston uzat
- Garnituri supape uzate
- Turbosuflantă cu uzare
- Piston rupt

Ulei + 600°C = depuneri negre pe celule = înfundare rapidă (5.000-10.000 km)

### Impacturi mecanice

Obiecte (pietre, ramuri) lovesc țeava evacuare:
- Șoc direct la catalizator
- Matrice ceramică se crăpă
- Blocare parțială + zgomot interior

## Diagnostic complet: pași

### Pasul 1: Coduri OBD

Conectați tester OBD:
- Verificați codurile P0420/P0430
- Identificați bank-ul problematic (1 sau 2)
- Verificați coduri senzori O2 (cauză sau consecință)

Uneori senzur O2 uzat → cod P0420, dar catalizator e OK.

### Pasul 2: Contrapresiune evacuare

Test presiune contrapresiune:
1. Conectați manometru în țeavă evacuare
2. Motor la 2000 rpm
3. Contrapresiune normală: <0.5 bar
4. Contrapresiune ridicată: >1.0 bar = înfundate
5. Contrapresiune critică: >2.0 bar = blocare completă

### Pasul 3: Test temperatura

Măsoară temperatura înainte și după:
- Înainte: 400-500°C la 3000 rpm
- După: 50-100°C mai ridicat (conversie generate căldură)
- Dacă diferență <30°C = conversie slabă

### Pasul 4: Inspectie vizibilă

Verificați:
- Carcase deformată sau umflată
- Crăpături în carcasă
- Condensare anormală
- Mobil interior (matricea se deplasează)

## Întreținere: măsuri preventive

### Evitați condus cu motor încălzit excesiv

Reguli simple:
1. Nu porniți motorul cu oprire bruscă înainte de a opri
2. Reduceți viteză înainte de a opri motor
3. În loc să coborâți la 120km/h în neutru, mențineți viteza cu motor activ
4. Nu conduceți la ralenti îndelungat (>10 minute) însoțit

### Combustibil de calitate

Combustibil de bună calitate:
- Mai puține particule
- Reacție catalitică mai eficientă
- Durată viață catalizator +30-50%

### Ulei motor LOW SAPS

Ulei cu content sulf <0.05% (LOW SAPS):
- Reduce evacuare particule
- Protejează catalizator
- Obligatoriu pentru diesel cu DPF

### Identificați probleme motor înainte de a afecta catalizator

Simptome care necesită reparație imediată:
- Motor care consumă ulei excesiv (>1 litru/1000 km)
- Fum (neconsistent cu normal)
- Tremurat motor neregulat

Probleme motor → depuneri în catalizator → înfundare în 5.000-20.000 km

## Înlocuire: opțiuni și considerări

### OEM vs Aftermarket

| Opțiune | Cost | Viață | Garanție |
|--------|------|--------|----------|
| OEM (original) | 700-1800€+ | 150.000-200.000 km | 2-3 ani |
| Aftermarket standard | 350-700€ | 80.000-120.000 km | 1-2 ani |
| Racing / Performance | 800-1200€ | 100.000-150.000 km | 1 an |
| Universale | 200-400€ | 40.000-60.000 km | 6 luni |

**Atenție:** Universale nu au O2 sensor integrat. Dacă mașina are O2 integrat în catalizator → universale nu funcționează.

### DPF + Catalizator integrat

Multe diesel moderne au catalizator integrat cu DPF. Înlocuire = unitate completă, cost ridicat (800-2000€).

### DPF / catalizator „șters" (ECU ilegal)

Încă legală în unele țări non-UE:
- Cod P0420 șters din ECU
- Lumina check engine nu vine
- Fum ne filtrat, gaz nociv ne redus
- ITP va detecta
- Cost cod șters: 200-400€

**Răspuns:** Nu recomand. E ilegală, dăunătoare mediu, plus probleme ITP.

## Ce urmează: valvulă EGR - cum motorul recirculează gaze

Catalizatorreduce gazele nocive din evacuare. EGR recirculează o parte din gazele înapoi în motor pentru reducere NOx. Cele două sisteme lucrează împreună în sistemul de control emișii - dar EGR-ul poate crea probleme distincte (blocare deschis/închisă, coduri P0400) de care catalizatorul nu e responsabil.

Cititi articolul nostru despre valvulă EGR pentru a înțelegere cum recircularea gazelor (10-15% din evacuare) reduce NOx but crește consum și poate crea probleme (blocare, curățire necesară) pe care le diagnosticăm prin coduri P0400-P0402 și verifică funcționare.