// Constante pentru calculul intervalului
const BASE_INTERVALS = {
    synthetic: 15000,
    semisynthetic: 10000,
    mineral: 7500
};

const ADJUSTMENT_FACTORS = {
    turbo: 0.8,
    intensiveDriving: 0.7,
    highPower: 0.85
};

// Funcții de calcul
function calculateAnnualMileageFromInspections(inspections) {
    const sortedInspections = [...inspections]
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

    let totalDailyMileage = 0;
    let periods = 0;

    for (let i = 1; i < sortedInspections.length; i++) {
        const prevInspection = sortedInspections[i - 1];
        const currInspection = sortedInspections[i];

        const mileageDiff = Number(currInspection.mileage) - Number(prevInspection.mileage);
        const daysDiff = (new Date(currInspection.date).getTime() - new Date(prevInspection.date).getTime()) / (1000 * 60 * 60 * 24);

        if (daysDiff > 0) {
            totalDailyMileage += mileageDiff / daysDiff;
            periods++;
        }
    }

    const avgDailyMileage = periods > 0 ? totalDailyMileage / periods : 0;
    return avgDailyMileage * 365;
}

function calculateOilChangeIntervalKm(vehicleData) {
    let interval = BASE_INTERVALS[vehicleData.oilType];

    if (vehicleData.hasTurbo) {
        interval *= ADJUSTMENT_FACTORS.turbo;
    }

    if (vehicleData.intensiveDriving) {
        interval *= ADJUSTMENT_FACTORS.intensiveDriving;
    }

    if (Number(vehicleData.enginePower) > 150) {
        interval *= ADJUSTMENT_FACTORS.highPower;
    }

    return Math.round(interval / 100) * 100;
}

function generateFactors(vehicleData, interval) {
    const factors = [];

    factors.push({
        title: 'Tipul de Ulei',
        description: `Utilizarea unui ulei ${vehicleData.oilType === 'synthetic'
                ? 'sintetic permite un interval de bază de până la 15,000 km.'
                : vehicleData.oilType === 'semisynthetic'
                    ? 'semisintetic permite un interval de bază de până la 10,000 km.'
                    : 'mineral permite un interval de bază de până la 7,500 km.'
            }`
    });

    if (Number(vehicleData.enginePower) > 150) {
        factors.push({
            title: 'Putere Motor Ridicată',
            description: `Puterea motorului de ${vehicleData.enginePower}CP este considerată ridicată, ceea ce reduce intervalul de schimb cu 15% pentru a asigura protecția optimă.`
        });
    }

    if (vehicleData.hasTurbo) {
        factors.push({
            title: 'Motor Turbo',
            description: 'Prezența turbocompresorului reduce intervalul de schimb cu 20% datorită temperaturilor și presiunilor mai ridicate de operare.'
        });
    }

    if (vehicleData.intensiveDriving) {
        factors.push({
            title: 'Stil de Condus Intensiv',
            description: 'Stilul de condus intensiv reduce intervalul de schimb cu 30% pentru a compensa uzura accelerată a uleiului.'
        });
    }

    return factors;
}

// Funcții UI
function createInspectionFields(container, index) {
    const inspection = document.createElement('div');
    inspection.className = 'inspection-entry form-grid';
    inspection.innerHTML = `
        <div class="form-group">
            <label for="inspection${index}Date">Data Inspecției ${index + 1}</label>
            <input type="date" id="inspection${index}Date" class="inspection-date">
        </div>
        <div class="form-group">
            <label for="inspection${index}Mileage">Kilometraj</label>
            <input type="number" id="inspection${index}Mileage" class="inspection-mileage" min="0" placeholder="Ex: 30000">
        </div>
        ${index > 1 ? '<button class="remove-inspection">Șterge Inspecția</button>' : ''}
    `;
    container.appendChild(inspection);

    if (index > 1) {
        inspection.querySelector('.remove-inspection').addEventListener('click', () => {
            container.removeChild(inspection);
        });
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function () {
    const inspectionsBtn = document.getElementById('inspectionsBtn');
    const directBtn = document.getElementById('directBtn');
    const inspectionsForm = document.getElementById('inspectionsForm');
    const directEstimation = document.getElementById('directEstimation');
    const addInspectionBtn = document.getElementById('addInspection');
    const calculateBtn = document.getElementById('calculateBtn');
    const inspectionsContainer = document.querySelector('.inspections-container');

    // Inițializare cu două inspecții
    createInspectionFields(inspectionsContainer, 0);
    createInspectionFields(inspectionsContainer, 1);

    // Comutare între tipuri de estimare
    inspectionsBtn.addEventListener('click', () => {
        inspectionsBtn.classList.add('active');
        directBtn.classList.remove('active');
        inspectionsForm.classList.remove('hidden');
        directEstimation.classList.add('hidden');
    });

    directBtn.addEventListener('click', () => {
        directBtn.classList.add('active');
        inspectionsBtn.classList.remove('active');
        directEstimation.classList.remove('hidden');
        inspectionsForm.classList.add('hidden');
    });

    // Adăugare inspecție
    addInspectionBtn.addEventListener('click', () => {
        const currentCount = inspectionsContainer.children.length;
        if (currentCount < 3) {
            createInspectionFields(inspectionsContainer, currentCount);
        }
    });

    // Calculare rezultate
    calculateBtn.addEventListener('click', () => {
        const vehicleData = {
            carterCapacity: document.getElementById('carterCapacity').value,
            enginePower: document.getElementById('enginePower').value,
            engineCapacity: document.getElementById('engineCapacity').value,
            fuelConsumption: document.getElementById('fuelConsumption').value,
            oilType: document.getElementById('oilType').value,
            hasTurbo: document.getElementById('hasTurbo').checked,
            intensiveDriving: document.getElementById('intensiveDriving').checked
        };

        let annualMileage;
        if (directEstimation.classList.contains('hidden')) {
            // Folosește datele de la inspecții
            const inspections = Array.from(document.querySelectorAll('.inspection-entry')).map(entry => ({
                date: entry.querySelector('.inspection-date').value,
                mileage: entry.querySelector('.inspection-mileage').value
            }));
            annualMileage = calculateAnnualMileageFromInspections(inspections);
        } else {
            // Folosește estimarea directă
            annualMileage = Number(document.getElementById('annualMileage').value);
        }

        // Calculează intervalul
        const intervalKm = calculateOilChangeIntervalKm(vehicleData);
        const monthsUntilChange = Math.max(1, Math.round((intervalKm / annualMileage) * 12));

        // Calculează data următorului schimb
        const currentDate = new Date();
        const daysUntilChange = (intervalKm / (annualMileage / 365));
        const nextChangeDate = new Date(
            currentDate.getTime() + daysUntilChange * 24 * 60 * 60 * 1000
        ).toLocaleDateString('ro-RO', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        // Afișează rezultatele
        document.getElementById('results').classList.remove('hidden');
        document.getElementById('intervalResult').textContent = `${intervalKm.toLocaleString()} km`;
        document.getElementById('nextChangeResult').textContent = nextChangeDate;
        document.getElementById('monthsResult').textContent = `${monthsUntilChange} luni`;

        // Generează și afișează factorii
        const factors = generateFactors(vehicleData, intervalKm);
        const factorsContainer = document.getElementById('factorsResult');
        factorsContainer.innerHTML = factors.map(factor => `
            <div class="factor-item">
                <h4>${factor.title}</h4>
                <p>${factor.description}</p>
            </div>
        `).join('');
    });
});