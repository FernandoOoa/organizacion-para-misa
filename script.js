// Script for Liturgical Assignment Platform
// ------------------------------------------------------------
// Icon definitions (SVG strings) for each liturgical object
const liturgicalIcons = {
    caliz: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M50,75 C65,75 75,65 75,50 L75,20 C75,14 64,10 50,10 C36,10 25,14 25,20 L25,50 C25,65 35,75 50,75 Z M30,50 L30,22 C30,20 39,15 50,15 C61,15 70,20 70,22 L70,50 C70,60 61,68 50,68 C39,68 30,60 30,50 Z M45,75 L40,85 C35,85 25,87 25,90 L75,90 C75,87 65,85 60,85 L55,75 L45,75 Z"/></svg>`,
    copon: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M50,10 C40,10 30,12 30,15 L30,55 C30,65 39,72 50,72 C61,72 70,65 70,55 L70,15 C70,12 60,10 50,10 Z M35,18 C35,16 42,13 50,13 C58,13 65,16 65,18 L65,52 C65,58 58,63 50,63 C42,63 35,58 35,52 L35,18 Z M45,72 L40,82 C35,82 20,84 20,87 L80,87 C80,84 65,82 60,82 L55,72 Z"/></svg>`,
    vinajeras: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M25,15 L20,30 L20,70 C20,78 27,85 35,85 L40,85 L40,15 Z M25,20 L35,20 L35,78 C33,78 25,75 25,70 Z M60,15 L60,85 L65,85 C73,85 80,78 80,70 L80,30 L75,15 Z M65,20 L75,20 L75,30 L75,70 C75,73 67,78 65,78 Z M45,15 L55,15 L55,85 L45,85 Z"/></svg>`,
    lavabo: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M20,60 C20,80 30,90 50,90 C70,90 80,80 80,60 L20,60 Z M25,65 L75,65 C75,75 68,85 50,85 C32,85 25,75 25,65 Z M30,15 L15,15 L15,25 C15,35 25,40 30,45 Z M70,15 L85,15 L85,25 C85,35 75,40 70,45 Z"/></svg>`,
    platillo: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><circle cx="50" cy="50" r="40"/><circle cx="50" cy="50" r="25" fill="#f8fafc" stroke="currentColor" stroke-width="2"/></svg>`,
    libro: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M20,10 L20,90 L80,90 C85,90 90,85 90,80 L90,20 C90,15 85,10 80,10 Z M25,15 L80,15 C82,15 85,17 85,20 L85,78 C80,78 75,75 75,70 L25,70 Z M25,75 L75,75 C75,80 78,85 80,85 C80,87 82,90 80,90 L25,90 Z M45,30 L55,30 L55,40 L65,40 L65,50 L55,50 L55,60 L45,60 L45,50 L35,50 L35,40 L45,40 Z"/></svg>`,
    campana: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M50,10 C35,10 25,20 25,40 L25,70 C20,70 15,75 15,80 L85,80 C85,75 80,70 75,70 L75,40 C75,20 65,10 50,10 Z M30,40 C30,25 40,15 50,15 C60,15 70,25 70,40 L70,70 L30,70 Z M45,80 L40,85 C35,85 30,87 30,90 L70,90 C70,87 65,85 60,85 L55,80 L45,80 Z"/></svg>`,
    evangelio: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M20,40 L20,90 L80,90 L80,40 L50,10 L20,40 Z M25,42 L48,20 L75,42 L75,85 L25,85 Z M45,40 L55,40 L55,50 L65,50 L65,60 L55,60 L55,70 L45,70 L45,60 L35,60 L35,50 L45,50 Z"/></svg>`,
    incienso: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M50,10 L45,15 L55,15 Z M40,20 L35,25 L65,25 L60,20 Z M50,30 C35,30 25,40 25,60 L25,80 C25,85 35,90 50,90 C65,90 75,85 75,80 L75,60 C75,40 65,30 50,30 Z M30,60 C30,45 40,35 50,35 C60,35 70,45 70,60 L70,78 L30,78 Z M45,30 L35,15 L25,15 L35,30 Z M55,30 L65,15 L75,15 L65,30 Z M35,10 C40,10 42,15 40,20 Z M65,10 C60,10 58,15 60,20 Z"/></svg>`,
    cirial: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M50,10 L40,10 L40,30 C30,30 25,35 25,45 C25,55 30,60 40,60 L40,90 L60,90 L60,60 C70,60 75,55 75,45 C75,35 70,30 60,30 L60,10 L50,10 Z M45,30 L55,30 L55,55 L45,55 L45,30 Z"/></svg>`,
    isopo: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M50,10 C35,10 25,20 25,40 L25,50 C20,50 15,55 15,60 C15,65 20,70 25,70 L25,90 C25,95 35,100 50,100 C65,100 75,95 75,90 L75,70 C80,70 85,65 85,60 C85,55 80,50 75,50 L75,40 C75,20 65,10 50,10 Z M30,40 C30,25 40,15 50,15 C60,15 70,25 70,40 L70,50 C70,60 60,65 50,65 C40,65 30,60 30,50 Z"/></svg>`,
    cruz_alta: `<svg viewBox="0 0 100 100" class="lit-icon" fill="currentColor"><path d="M45,10 L55,10 L55,30 L75,30 L75,40 L55,40 L55,90 L45,90 L45,40 L25,40 L25,30 L45,30 Z"/></svg>`
};

// List of all possible objects with metadata
const allObjects = [
    { id: 'CruzAlta', name: 'Cruz Alta', order: 0, rules: 'solo_grandes', checked: false, category: 'solemne', icon: liturgicalIcons.cruz_alta },
    { id: 'Caliz', name: 'Cáliz', order: 1, rules: 'neutral', checked: true, category: 'normal', icon: liturgicalIcons.caliz },
    { id: 'Copon', name: 'Copón', order: 2, rules: 'neutral', checked: true, category: 'normal', icon: liturgicalIcons.copon },
    { id: 'Vinajeras', name: 'Vinajeras', order: 3, rules: 'vinajeras', checked: true, category: 'normal', icon: liturgicalIcons.vinajeras },
    { id: 'LavaboCombo', name: 'Piscina, Manutergio, Jarra', order: 4, rules: 'combo_lavabo', checked: true, category: 'normal', icon: liturgicalIcons.lavabo },
    { id: 'Platillo', name: 'Platillo', order: 5, rules: 'multiple', checked: true, category: 'normal', defaultQty: 2, icon: liturgicalIcons.platillo },
    { id: 'Libro', name: 'Libro', order: 7, rules: 'solo_grandes', checked: true, category: 'normal', icon: liturgicalIcons.libro },
    { id: 'Campanada1', name: 'Campanada 1', order: 8, rules: 'neutral', checked: true, category: 'normal', icon: liturgicalIcons.campana },
    { id: 'Campanada2y3', name: 'Campanadas 2 y 3', order: 9, rules: 'neutral', checked: true, category: 'normal', icon: liturgicalIcons.campana },
    { id: 'Evangelio', name: 'Acompañantes Evangelio', order: 10, rules: 'evangelio', checked: true, category: 'normal', icon: liturgicalIcons.evangelio },
    { id: 'IncensarioNaveta', name: 'Incensario y Naveta', order: 11, rules: 'solo_grandes_combo', checked: false, category: 'solemne', icon: liturgicalIcons.incienso },
    { id: 'Ciriales', name: 'Ciriales 1 y 2', order: 12, rules: 'solo_grandes_doble', checked: false, category: 'solemne', icon: liturgicalIcons.cirial },
    { id: 'Isopo', name: 'Isopo y Asetre (Agua bendita)', order: 13, rules: 'neutral', checked: false, category: 'solemne', icon: liturgicalIcons.isopo }
];

let kids = [];
let anonCounter = 1;
let assignOrder = 0;

// ------------------------------------------------------------
// UI initialization (populate object checkboxes)
window.onload = () => {
    const containerNormal = document.getElementById('objectsListNormal');
    const containerSolemne = document.getElementById('objectsListSolemne');
    allObjects.forEach(obj => {
        const extraInput = obj.rules === 'multiple' ? `
            <input type="number" id="qty_${obj.id}" value="${obj.defaultQty}" min="1" max="8">` : '';
        const html = `
            <div class="obj-item">
                <input type="checkbox" id="check_${obj.id}" value="${obj.id}" ${obj.checked ? 'checked' : ''}>
                ${obj.icon}
                <label for="check_${obj.id}">${obj.name}</label>
                ${extraInput}
            </div>`;
        if (obj.category === 'normal') {
            containerNormal.innerHTML += html;
        } else {
            containerSolemne.innerHTML += html;
        }
    });
};

// ------------------------------------------------------------
// Kid management
function addAnonymousKid(size) {
    kids.push({ name: `Monaguillo ${anonCounter++}`, size, tasks: [] });
    updateKidsUI();
}
function addKid() {
    let name = document.getElementById('kidName').value.trim();
    if (!name) {
        name = `Monaguillo ${anonCounter++}`;
    }
    const size = document.getElementById('kidSize').value;
    kids.push({ name, size, tasks: [] });
    updateKidsUI();
    document.getElementById('kidName').value = '';
}
function updateKidsUI() {
    const list = document.getElementById('kidsList');
    list.innerHTML = kids.map((k, i) => {
        const label = k.size === 'grande_incienso' ? 'Grande (Incienso)' : (k.size === 'grande' ? 'Grande' : 'Chico');
        const expertClass = k.size === 'grande_incienso' ? 'expert' : '';
        return `<span class="kid-tag ${expertClass}">${k.name} (${label}) <span style="cursor:pointer; margin-left:8px; font-weight:bold" onclick="kids.splice(${i},1);updateKidsUI()">×</span></span>`;
    }).join('');
}

// ------------------------------------------------------------
// Helper to pick the most suitable kid
function getFairKid(array) {
    if (array.length === 0) return null;
    array.sort((a, b) => {
        if (a.tasks.length !== b.tasks.length) return a.tasks.length - b.tasks.length;
        return (a.lastAssigned || 0) - (b.lastAssigned || 0);
    });
    const chosen = array[0];
    chosen.lastAssigned = ++assignOrder;
    return chosen;
}

// ------------------------------------------------------------
// Main assignment algorithm
function assignTasks() {
    if (kids.length === 0) {
        alert('Por favor, registra al menos un monaguillo.');
        return;
    }
    assignOrder = 0;
    kids.forEach(k => {
        k.tasks = [];
        k.lastAssigned = 0;
        k.locked = false;
        k.isIncensarioRestricted = false;
    });
    const selectedIds = Array.from(document.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
    let activeTasks = allObjects.filter(o => selectedIds.includes(o.id)).sort((a, b) => a.order - b.order);
    const hasCiriales = activeTasks.some(t => t.id === 'Ciriales');
    if (hasCiriales) {
        activeTasks = activeTasks.filter(t => t.id !== 'Evangelio');
    }
    if (hasCiriales && kids.length >= 6) {
        let largeKids = kids.filter(k => k.size === 'grande' || k.size === 'grande_incienso');
        if (largeKids.length < 2) largeKids = kids.filter(k => k.size === 'grande_incienso');
        if (largeKids.length < 2) largeKids = kids;
        const c1 = largeKids[largeKids.length - 1];
        const c2 = largeKids[largeKids.length - 2];
        c1.tasks.push('Cirial 1'); c1.locked = true;
        c2.tasks.push('Cirial 2'); c2.locked = true;
    }
    let incensarioGlobal = null;
    const hasIncensario = activeTasks.some(t => t.id === 'IncensarioNaveta');
    if (hasIncensario && kids.length >= 6) {
        const available = kids.filter(k => !k.locked);
        let experts = available.filter(k => k.size === 'grande_incienso');
        if (experts.length === 0) experts = available.filter(k => k.size === 'grande');
        if (experts.length === 0) experts = available;
        if (experts.length > 0) {
            incensarioGlobal = experts[0];
            incensarioGlobal.tasks.push('Incensario');
            incensarioGlobal.lastAssigned = ++assignOrder;
            incensarioGlobal.isIncensarioRestricted = true;
        }
    }
    const disponibles = kids.filter(k => !k.locked);
    const filterRestricted = arr => arr.filter(k => !k.isIncensarioRestricted);
    const grandes = disponibles.filter(k => k.size === 'grande' || k.size === 'grande_incienso');
    const chicos = disponibles.filter(k => k.size === 'chico');
    const todos = [...disponibles];
    activeTasks.forEach(task => {
        if (task.rules === 'multiple') {
            const maxQty = todos.length;
            let qty = parseInt(document.getElementById(`qty_${task.id}`).value) || 1;
            if (qty > maxQty) qty = maxQty;
            let candidatos = [...todos];
            for (let i = 0; i < qty; i++) {
                const grandesSin = candidatos.filter(k => k.size === 'grande' || k.size === 'grande_incienso');
                const kid = grandesSin.length > 0 ? getFairKid(grandesSin) : getFairKid(candidatos);
                if (kid) {
                    kid.tasks.push(qty > 1 ? `${task.name} ${i + 1}` : task.name);
                    candidatos = candidatos.filter(k => k !== kid);
                }
            }
        } else if (task.rules === 'solo_grandes') {
            let kid = getFairKid(filterRestricted(grandes));
            if (!kid) kid = getFairKid(filterRestricted(todos));
            if (kid) kid.tasks.push(task.name);
        } else if (task.rules === 'solo_grandes_combo') {
            if (incensarioGlobal) {
                let candidates = filterRestricted(todos).filter(k => !k.tasks.includes('Campanada 1') && !k.tasks.includes('Vinajeras (lleva y recoge)'));
                if (candidates.length === 0) candidates = filterRestricted(todos);
                const navKid = getFairKid(candidates);
                if (navKid) navKid.tasks.push('Naveta');
            } else {
                let expertos = filterRestricted(todos).filter(k => k.size === 'grande_incienso');
                if (expertos.length === 0) expertos = filterRestricted(grandes);
                if (expertos.length === 0) expertos = filterRestricted(todos);
                const incKid = getFairKid(expertos);
                if (incKid) incKid.tasks.push('Incensario');
                let candidates = filterRestricted(todos).filter(k => !k.tasks.includes('Campanada 1') && !k.tasks.includes('Vinajeras (lleva y recoge)') && k !== incKid);
                if (candidates.length === 0) candidates = filterRestricted(todos).filter(k => k !== incKid);
                const navKid = getFairKid(candidates);
                if (navKid) navKid.tasks.push('Naveta');
            }
        } else if (task.rules === 'solo_grandes_doble') {
            if (kids.length < 6) {
                const candidatos = filterRestricted(grandes);
                const c1 = getFairKid(candidatos);
                if (c1) c1.tasks.push('Cirial 1');
                const c2 = getFairKid(candidatos.filter(k => k !== c1)) || c1;
                if (c2 && c2 !== c1) c2.tasks.push('Cirial 2');
                else if (c1) c1.tasks.push('Cirial 2');
            }
        } else if (task.rules === 'evangelio') {
            const gSorted = [...filterRestricted(grandes)].sort((a, b) => a.tasks.length - b.tasks.length || (a.lastAssigned || 0) - (b.lastAssigned || 0));
            const cSorted = [...filterRestricted(chicos)].sort((a, b) => a.tasks.length - b.tasks.length || (a.lastAssigned || 0) - (b.lastAssigned || 0));
            const tSorted = [...filterRestricted(todos)].sort((a, b) => a.tasks.length - b.tasks.length || (a.lastAssigned || 0) - (b.lastAssigned || 0));
            if (gSorted.length >= 2) {
                gSorted[0].tasks.push('Evangelio 1'); gSorted[0].lastAssigned = ++assignOrder;
                gSorted[1].tasks.push('Evangelio 2'); gSorted[1].lastAssigned = ++assignOrder;
            } else if (cSorted.length >= 2) {
                cSorted[0].tasks.push('Evangelio 1'); cSorted[0].lastAssigned = ++assignOrder;
                cSorted[1].tasks.push('Evangelio 2'); cSorted[1].lastAssigned = ++assignOrder;
            } else if (tSorted.length >= 2) {
                tSorted[0].tasks.push('Evangelio 1'); tSorted[0].lastAssigned = ++assignOrder;
                tSorted[1].tasks.push('Evangelio 2'); tSorted[1].lastAssigned = ++assignOrder;
            } else if (tSorted.length === 1) {
                tSorted[0].tasks.push('Evangelio'); tSorted[0].lastAssigned = ++assignOrder;
            }
        } else if (task.rules === 'combo_lavabo') {
            const tSorted = [...filterRestricted(todos)].sort((a, b) => a.tasks.length - b.tasks.length || (a.lastAssigned || 0) - (b.lastAssigned || 0));
            if (tSorted.length === 1) {
                tSorted[0].tasks.push('Piscina, Manutergio y Jarra'); tSorted[0].lastAssigned = ++assignOrder;
            } else if (tSorted.length === 2) {
                tSorted[0].tasks.push('Piscina y Manutergio'); tSorted[0].lastAssigned = ++assignOrder;
                tSorted[1].tasks.push('Jarra'); tSorted[1].lastAssigned = ++assignOrder;
            } else if (tSorted.length >= 3) {
                tSorted[0].tasks.push('Piscina'); tSorted[0].lastAssigned = ++assignOrder;
                tSorted[1].tasks.push('Manutergio'); tSorted[1].lastAssigned = ++assignOrder;
                tSorted[2].tasks.push('Jarra'); tSorted[2].lastAssigned = ++assignOrder;
            }
        } else {
            const kid = getFairKid(filterRestricted(todos));
            if (kid) kid.tasks.push(task.rules === 'vinajeras' ? 'Vinajeras (lleva y recoge)' : task.name);
        }
    });
    renderResults();
}

// ------------------------------------------------------------
// Rendering of assignment results
function renderResults() {
    const container = document.getElementById('resultsContainer');
    const grid = document.getElementById('resultsBody');
    grid.innerHTML = kids.map((k, index) => {
        const label = k.size === 'grande_incienso' ? 'Grande (Incienso)' : (k.size === 'grande' ? 'Grande' : 'Chico');
        const badgeColor = k.size === 'chico' ? '#2b6cb0' : (k.size === 'grande' ? '#2f855a' : '#b45309');
        const badgeBg = k.size === 'chico' ? '#ebf8ff' : (k.size === 'grande' ? '#f0fff4' : '#fff9ed');
        const badgeBorder = k.size === 'chico' ? '#bee3f8' : (k.size === 'grande' ? '#c6f6d5' : '#fce8c5');
        const tasksHtml = k.tasks.length > 0 ?
            k.tasks.map(t => `
                <li class="draggable-task" draggable="true" ondragstart="drag(event)" data-task="${t}" data-kid-index="${index}">
                    <span class="drag-handle" style="cursor: grab; margin-right: 8px; color: #a0aec0; padding: 10px 10px 10px 0;">⣿</span> ${t}
                </li>`).join('')
            : '<li class="empty-task-placeholder"><em>Arrastra tareas aquí</em></li>';
        return `
            <div class="result-card">
                <div class="result-card-title" style="display: flex; justify-content: space-between; align-items: center;">
                    <span>${k.name}</span>
                    <span style="font-size: 0.75rem; padding: 4px 8px; border-radius: 12px; font-weight: 500; background-color: ${badgeBg}; color: ${badgeColor}; border: 1px solid ${badgeBorder};">${label}</span>
                </div>
                <div class="result-card-tasks">
                    <ul class="task-dropzone" data-kid-index="${index}" ondragover="allowDrop(event)" ondragleave="handleDragLeave(event)" ondrop="drop(event)">
                        ${tasksHtml}
                    </ul>
                </div>
            </div>`;
    }).join('');
    container.style.display = 'block';
    container.scrollIntoView({ behavior: 'smooth' });
}

// ------------------------------------------------------------
// Desktop drag‑and‑drop handlers
function allowDrop(ev) { ev.preventDefault(); ev.currentTarget.classList.add('drag-over'); }
function handleDragLeave(ev) { ev.currentTarget.classList.remove('drag-over'); }
function drag(ev) { ev.dataTransfer.setData('task', ev.target.dataset.task); ev.dataTransfer.setData('fromKidIndex', ev.target.dataset.kidIndex); }
function drop(ev) {
    ev.preventDefault();
    ev.currentTarget.classList.remove('drag-over');
    const task = ev.dataTransfer.getData('task');
    const fromKidIndex = parseInt(ev.dataTransfer.getData('fromKidIndex'));
    const toKidIndex = parseInt(ev.currentTarget.dataset.kidIndex);
    if (fromKidIndex === toKidIndex) return;
    const idx = kids[fromKidIndex].tasks.indexOf(task);
    if (idx > -1) kids[fromKidIndex].tasks.splice(idx, 1);
    kids[toKidIndex].tasks.push(task);
    renderResults();
}

// ------------------------------------------------------------
// Unified pointer drag‑and‑drop (mouse, touch, pen)
let pointerDragTask = null;
let pointerDragFromKidIndex = null;
let pointerStartX = 0;
let pointerStartY = 0;
let isPointerDragging = false;

// Start pointer interaction
document.addEventListener('pointerdown', ev => {
    const li = ev.target.closest('.draggable-task');
    if (!li) return;
    pointerDragTask = li.dataset.task;
    pointerDragFromKidIndex = parseInt(li.dataset.kidIndex);
    pointerStartX = ev.clientX;
    pointerStartY = ev.clientY;
    // Capture subsequent moves even if pointer leaves the element
    ev.target.setPointerCapture(ev.pointerId);
});

// Move pointer
document.addEventListener('pointermove', ev => {
    if (!pointerDragTask) return;
    if (!isPointerDragging) {
        if (Math.abs(ev.clientX - pointerStartX) > 8 || Math.abs(ev.clientY - pointerStartY) > 8) {
            isPointerDragging = true;
            const li = document.querySelector(`.draggable-task[data-task="${CSS.escape(pointerDragTask)}"][data-kid-index="${pointerDragFromKidIndex}"]`);
            if (!li) return;
            const rect = li.getBoundingClientRect();
            ghostElement = li.cloneNode(true);
            ghostElement.style.position = 'fixed';
            ghostElement.style.opacity = '0.9';
            ghostElement.style.pointerEvents = 'none';
            ghostElement.style.zIndex = '9999';
            ghostElement.style.width = rect.width + 'px';
            ghostElement.style.height = rect.height + 'px';
            ghostElement.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
            ghostElement.style.backgroundColor = 'var(--surface)';
            ghostElement.style.borderRadius = '8px';
            ghostElement.style.border = '1px solid var(--border)';
            document.body.appendChild(ghostElement);
        } else {
            return; // not enough movement yet
        }
    }
    ev.preventDefault();
    moveGhost(ev);
    const dropTarget = document.elementFromPoint(ev.clientX, ev.clientY);
    document.querySelectorAll('.task-dropzone.drag-over').forEach(el => el.classList.remove('drag-over'));
    if (dropTarget) {
        const dropzone = dropTarget.closest('.task-dropzone');
        if (dropzone) dropzone.classList.add('drag-over');
    }
});

// End pointer interaction
document.addEventListener('pointerup', ev => {
    if (ghostElement) { ghostElement.remove(); ghostElement = null; }
    if (isPointerDragging) {
        const dropTarget = document.elementFromPoint(ev.clientX, ev.clientY);
        const dropzone = dropTarget ? dropTarget.closest('.task-dropzone') : null;
        if (dropzone) {
            const toKidIndex = parseInt(dropzone.dataset.kidIndex);
            if (pointerDragFromKidIndex !== toKidIndex) {
                const idx = kids[pointerDragFromKidIndex].tasks.indexOf(pointerDragTask);
                if (idx > -1) {
                    kids[pointerDragFromKidIndex].tasks.splice(idx, 1);
                    kids[toKidIndex].tasks.push(pointerDragTask);
                    renderResults();
                }
            }
        }
    }
    // Reset state
    isPointerDragging = false;
    pointerDragTask = null;
    pointerDragFromKidIndex = null;
    document.querySelectorAll('.task-dropzone.drag-over').forEach(el => el.classList.remove('drag-over'));
});
