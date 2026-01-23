---
layout: know
type: know
na10:
  stage: KNOW
  awareness: problem_aware
title: "Sistem de Aprindere Motor: Bujii, Bobine și Diagnostic Scânteie Slabă"
meta_description: "Ghid tehnic sistem aprindere: interval schimb bujii 30.000-100.000 km, gap bujii 0.6-1.1mm, diagnostic bobine aprindere, simptome scânteie slabă."
date: 2025-01-22
tags: ["bujii", "bobine aprindere", "aprindere motor", "distribuitor", "electronică auto"]
---

# Sistem de Aprindere Motor: tremurat la mers, lumină check engine, motor oprit la ralanti

Motorul tremură neregulat când îi lăsați la ralenti. Acumulatorul se descarcă rapid. Lumina check engine pe bord. Motorul nu mai pornește deloc.

Cele patru semne indică același lucru: sistemul de aprindere nu produce scânteia necesită arderii combustibilului. Fiecare cilindru care nu se aprinde înseamnă combustibil neardent în cameră - care se evaporă în ulei și evacuare, distrugând ambele sisteme în timp.

Sistemul de aprindere e simplu ca principiu, dar critică pentru funcționare.

## Scânteia: ce e și cum funcționează

Procesul în 6 milisecunde:
1. Senzorul poziție arbore cotit detectează momentul exact
2. Unitatea de control (ECU) trimite semnal la bobina
3. Bobina crește tensiunea de la 12V la 15.000-40.000V
4. Tensiunea trece prin sârma bujiei la electrodul central
5. Sâmbata sări de la electrodul central la lateral (sau de la vârf la masă)
6. Scânteia aprinde amestecul aer-combustibil

**Tensiune necesită:**
- 12.000-15.000V: standard pentru motoare moderne
- 25.000-35.000V: pentru motoare cu raport de comprimare ridicat
- 10.000-12.000V: sisteme vechi cu contact mecanic

## Componentele sistemului de aprindere

### Bujii: generatorul scântei

Bujia standard are:

| Componentă | Funcție | Durată de viață |
|-----------|---------|----------------|
| Electrod central | Conduce tensiunea înaltă la Țeavă | 100.000+ km |
| Electrod lateral | Masa pentru scânteia | Depravat, uzare normală |
| Izolator ceramică | Isolează tensiunea ridicată | 60.000-100.000 km |
| Filet metalic | Șurubează în chiulasa | 2-3 montări max |

**Gap-ul bujiei:** distanța dintre electrodul central și lateral (sau între ele)

| Tip bujie | Gap-ul corect | Efect gap greșit |
|----------|---------------|----------------|
| Standard | 0.8-1.0 mm | Mic: scânteie prea slabă, Mare: scânteia nu sare |
| Iridium | 0.6-0.8 mm | Sensibil la gap înexact |
| Platină | 0.8-1.0 mm | Gap mic nu afectează drastic |
| Dublu-platină | 0.9-1.1 mm | Gap stabil mai mult timp |

**Simptome bujie uzată:**
- Scânteia slabă, intermitentă
- Tremurat la ralenti (motor „misfire")
- Consum crescut de carburant (5-15%)
- Motorul se opriște când îl lăsați la ralenti
- Lumini check engine cu cod P0300-P0304 (misfire)

### Tipuri de bujii: ce alegeți

| Tip | Vârf bujie | Interval schimb | Avantaj |
|-----|-----------|----------------|---------|
| Standard (Nikel) | Vârf unic | 30.000-40.000 km | Cel mai ieftin |
| Platină | Vârf platina | 60.000-90.000 km | Durată mai bună |
| Iridium | Vârf iridium | 100.000+ km | Scânteia cea mai puternică |
| Dublu-platină | Vârf platina pe ambele | 90.000-120.000 km | Performanță constantă |

**Recomandare:**
- Motoare de bază (motor vechi <100.000 km): Bujii Platina
- Motoare performante: Bujii Iridium
- Motoare turbo: Iridium sau Dublu-platină

### Bobine de aprindere: transformatorul de tensiune

Bobina transformă 12V în 15.000-40.000V:

| Tip motor | Tensiune bobină | Bobină per cilindru sau bloc |
|-----------|----------------|----------------------------|
| Motoare mici/vechi | 15.000-20.000V | Bloc bobină (1-2 bobine pentru 4 cilindri) |
| Motoare moderne | 25.000-35.000V | Bobină individuală per cilindru (COP) |
| Performanță | 35.000-40.000V | Individuală, cu senzor integrat |

**Simptome bobină uzată sau defectă:**
- Misfire intermitent pe anumit cilindru
- Motorul se opriște sarcină puternică
- Scânteia slabă evidentă (bujia extrasă și aproape de masă nu produce scânteie vizibilă)
- Lumina check engine cu cod P0350-P0362
- Consum excesiv de carburant (încercare motor de a compensa)

**Diagnostic simplu bobină:**

1. Scoateți bobina suspectă
2. Conectați o bujie veche la capăt
3. Puneți bujie aproape de masă motor (nu direct pe ea)
4. Porniți motor
5. Dacă scânteia e slabă, galbenă sau absentă → bobină uzată
6. Schimbați doar bobina uzată, nu celelalte (probabil în stare bună)

**Test alternativ:**
- Verificați rezistența bobinei cu multimetru
- Rezistența primară: 0.5-1.5 ohm
- Rezistența secundară: 6.000-15.000 ohm
- Dacă rezistența devine infinită → bobină deschisă

### Distribuitor: sistemul clasic (mai puțin comun acum)

Motoarele vechi (pre-2000) folosesc distribuitorul cu:

| Componentă | Funcție | Durată de viață |
|-----------|---------|----------------|
| Rotor | Distribuie scânteia la bujii | 60.000-100.000 km |
| Capac | Încasează bobina și contacte | 40.000-80.000 km |
| Contacte | Întreruptor pentru semnal | 20.000-40.000 km |
| Avans vacuum | Avansează scânteia la sarcină | Deteriorează după 80.000 km |

**Simptome distribuitor uzat:**
- Scânteia slabă generală nu per cilindru
- Motorul nu revede la sarcină
- Avans incorect (verificat with tester avans vacuum)
- Zgomot electrical în habitaclo

## Diagnostic: probleme comune și coduri

### Misfire (cilindru care nu se aprinde)

Coduri check engine obișnuite:
- **P0300**: Misfire detectat aleator (multiple cilindri)
- **P0301**: Misfire cilindru 1
- **P0302**: Misfire cilindru 2
- **P0303**: Misfire cilindru 3
- **P0304**: Misfire cilindru 4
- ... până la P0308 pentru motoare V8

**Cauze în ordinea probabilității:**
1. Bujie uzată (verificați gap și depuneri)
2. Bobină uzată pe acel cilindru
3. Sârmă bujii defectă (ruptă sau circuit scurt)
4. Injector furnizând combustibil insuficient

### Scânteia slabă: cum o identificați

**Test vizual scânteia:**
1. Scoateți bujiile (una câte una, nu toate simultan)
2. Conectați sârma și puneți bujie aproape de masă metalică (2-3 mm de distanță)
3. Porniți motor doar 2-3 secunde
4. Scânteia normală: albastră-white, puternică, clară
5. Scânteia slabă: galbenă, slabă, sau nu sare deloc

**Limita test:** Aceasta test e periculos dacă motorul funcționează cu mult timp fără buji în - poate crea condensare și daune electrice. Limitați la 2-3 secunde.

### Bujii cu depuneri: ce înseamnă culorile

| Culoare depuneri | Cauză | Solucion |
|-----------------|-------|----------|
| Urme ulei negru | Ulei în camera ardere | Verificați segmente, garnituri supape |
| Ceară galbenă | Combustibil slab calitate | Schimb combustibil, verificare injectoare |
| Albă cenușie | Amestec prea slab | Verificați O2 sensori |
| Negre lucioase | Amestec prea bogat sau bujie prea rece | Verificați injectoare, schimb la grad termic mai cald |
| Roșă-rugină | Aditivi din combustibil | Schimb combustibil, poate trece cu timp |

### Sârme bujii: circuite electrice

Sârmele transportă scânteia de la bobină la bujie:

| Tip sârmă | Izolație | Durată de viață |
|----------|---------|----------------|
| Silicon standard | 3-4mm | 60.000-100.000 km |
| Magnețic | 1.5-2mm | 80.000-120.000 km |
| Spiralate | Variabilă | 100.000+ km |

**Simptome sârmă defectă:**
- Misfire intermitent pe un cilindru cu bujie și bobină bune
- Scânteia slabă doar pe anumite cilindri
- Sârmă caldă la atingere scurtă după pornire motor (încărcare excesivă)

**Test sârmă:**
- Test rezistenta cu multimetru (de obicei 1,000-10,000 ohm)
- Test continuitate la fiecare capăt
- Înlocuire dacă sârmă e moale sau crăpată la izolație

## Interval de schimb și întreținere

### Bujii: când să le schimbați

| Tip bujie | Interval km | Interval ani |
|----------|-------------|--------------|
| Standard (Nikel) | 30.000-40.000 km | 2-3 ani |
| Platină | 60.000-90.000 km | 4-5 ani |
| Iridium | 100.000-120.000 km | 6-8 ani |
| Dublu-platină | 90.000-120.000 km | 5-7 ani |

**Scurtați intervalul dacă:**
- Conduceți urban (începe-oprire frecvent)
- Folosiți combustibil de calitate slabă
- Motorul are 150.000+ km fără schimb bujii anterioare
- Faceți scurt distanțe (<5 km) când motorul se oprește înainte de a ajunge complet cald

### Bobine: când să înlocuiți

Bobinele nu au interval de schimb standard. Inspectați-le la:
- Primele semne de misfire (check engine)
- 120.000-150.000 km pentru bobine COP individuale
- 80.000-100.000 km pentru bobine bloc

Înlocuiți doar bobina uzată, nu set complet. Bobinele care nu au dat probleme probabip sunt în stare bună.

### Sârme bujii: verificare periodică

Inspectați sârmele la 40.000-60.000 km:
- Verificați izolația pentru crăpături sau uzură
- Testați continuitatea
- Înlocuiți dacă sârmă e moale la îndoire sau crăpată la izolație

## Prevenire: măsuri simple

### Verificare anuală

1. Inspectați bujiile pentru depuneri (dacă accesibil)
2. Verificați sârmele bujii pentru crăpături în izolație
3. Testați scurtea scânteielor cu tester vizual la schimba bujii

### Schimb combustibil de calitate

Combustibil slab:
- Creează depuneri pe buji
- Deprima scânteia
- Crește interval de schimb bujii cu 30%

Combustibil de calitate superioară:
- Menține bujii curate
- Protejează injectoarele
- Economie suplimentară de 2-5%

## Ce urmează: turbosuflant - cum scânteia și turbină lucrează împreună

Scânteia aprinde combustibilul care generează puterea care rotește turbina. Turbina crește efficiency combustibilului cu 15-20% prin comprimare suplimentară. Cele două sisteme sunt conectate indirect dar critică - funcționarea optimă a unuia necesită funcționarea corectă a celuilalt.

Cititi articolul nostru despre turbosuflantă pentru a înțelege cum turbinele care se rotesc la 80.000-200.000 rpm comprimă aerul pe care scânteia îl aprinde, și cum diagnoseze problemele turbosuflantă (lag, boost insuficient).

Sistem de Ungere Motor Presiune Optimă și Simptome Pompă Uzată
Sistem de Aprindere Motor Bujii Bobine și Diagnostic Scânteie Slăbă
Turbosuflantă Auto Funcționare
Suspensie Auto Componente și Funcționare
Sistem DPF FAP Filtru Particule
Direcție și Servodirecție Sistem
Catalizator Auto Funcționare
Valvulă EGR Funcții și Probleme
Sistem Evacuare Auto
