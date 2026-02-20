// ==================== БАЗА ДАННЫХ ПРЕДМЕТОВ ====================
const subjectsByClass = {
    1: ['Математика', 'Русский язык', 'Окружающий мир'],
    2: ['Математика', 'Русский язык', 'Окружающий мир'],
    3: ['Математика', 'Русский язык', 'Окружающий мир'],
    4: ['Математика', 'Русский язык', 'Окружающий мир'],
    5: ['Математика', 'Русский язык', 'Литература', 'История', 'География', 'Биология'],
    6: ['Математика', 'Русский язык', 'Литература', 'История', 'География', 'Биология'],
    7: ['Алгебра', 'Геометрия', 'Русский язык', 'Литература', 'История', 'География', 'Биология', 'Физика'],
    8: ['Алгебра', 'Геометрия', 'Русский язык', 'Литература', 'История', 'География', 'Биология', 'Физика', 'Химия'],
    9: ['Алгебра', 'Геометрия', 'Русский язык', 'Литература', 'История', 'География', 'Биология', 'Физика', 'Химия'],
    10: ['Алгебра', 'Геометрия', 'Русский язык', 'Литература', 'История', 'География', 'Биология', 'Физика', 'Химия'],
    11: ['Алгебра', 'Геометрия', 'Русский язык', 'Литература', 'История', 'География', 'Биология', 'Физика', 'Химия']
};

// ==================== БАЗА ШАБЛОНОВ ЗАДАНИЙ ====================
// Пример структуры заданий - добавьте свои конкретные задания по необходимости
const taskDatabase = {
    // ==================== МАТЕМАТИКА ====================
    'Математика': {
        'default': {
            test: [
                // Примеры заданий с выбором ответа
                { text: 'Пример задания по теме (введите свой текст)', answer: 'A', options: ['A', 'B', 'C', 'D'] },
                { text: 'Пример: Вычислите (свой пример)', answer: 'ответ', options: ['вариант A', 'вариант B', 'вариант C', 'вариант D'] }
            ],
            independent: [
                { text: 'Пример задания для самостоятельной работы', answer: 'Ответ/Решение' }
            ],
            control: [
                { text: 'Пример контрольного задания №1', answer: 'Ответ' },
                { text: 'Пример контрольного задания №2', answer: 'Ответ' }
            ]
        }
    },
    // ==================== АЛГЕБРА ====================
    'Алгебра': {
        'default': {
            test: [
                { text: 'Пример задания по алгебре', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по алгебре', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== ГЕОМЕТРИЯ ====================
    'Геометрия': {
        'default': {
            test: [
                { text: 'Пример задания по геометрии', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по геометрии', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== ФИЗИКА ====================
    'Физика': {
        'default': {
            test: [
                { text: 'Пример задания по физике', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по физике', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== ХИМИЯ ====================
    'Химия': {
        'default': {
            test: [
                { text: 'Пример задания по химии', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по химии', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== РУССКИЙ ЯЗЫК ====================
    'Русский язык': {
        'default': {
            test: [
                { text: 'Пример задания по русскому языку', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по русскому языку', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== БИОЛОГИЯ ====================
    'Биология': {
        'default': {
            test: [
                { text: 'Пример задания по биологии', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по биологии', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== ИСТОРИЯ ====================
    'История': {
        'default': {
            test: [
                { text: 'Пример задания по истории', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по истории', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== ГЕОГРАФИЯ ====================
    'География': {
        'default': {
            test: [
                { text: 'Пример задания по географии', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по географии', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== ЛИТЕРАТУРА ====================
    'Литература': {
        'default': {
            test: [
                { text: 'Пример задания по литературе', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания по литературе', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    },
    // ==================== ОКРУЖАЮЩИЙ МИР ====================
    'Окружающий мир': {
        'default': {
            test: [
                { text: 'Пример задания', answer: 'ответ', options: ['A', 'B', 'C', 'D'] }
            ],
            independent: [
                { text: 'Пример задания', answer: 'ответ' }
            ],
            control: [
                { text: 'Пример контрольного задания', answer: 'ответ' }
            ]
        }
    }
};

// ==================== ФУНКЦИИ ГЕНЕРАЦИИ ====================

// Найти задания по теме с учётом класса
function findTasksForTopic(classLevel, subject, topic, type) {
    const topicLower = topic.toLowerCase();
    const classKey = classLevel + 'класс';
    
    // 1. Ищем в базе с учётом класса
    if (taskDatabase[subject]) {
        // Сначала ищем по классу
        if (taskDatabase[subject][classKey]) {
            const classTasks = taskDatabase[subject][classKey];
            for (const [key, tasks] of Object.entries(classTasks)) {
                if (key === 'default') continue;
                if (topicLower.includes(key) || key.includes(topicLower)) {
                    return tasks[type] || tasks['test'] || tasks['independent'];
                }
            }
        }
        
        // Потом ищем универсальные для предмета
        for (const [key, tasks] of Object.entries(taskDatabase[subject])) {
            if (key === 'default' || key.includes('класс')) continue;
            if (topicLower.includes(key) || key.includes(topicLower)) {
                return tasks[type] || tasks['test'] || tasks['independent'];
            }
        }
        
        // Ищем по ключевым словам
        const keywords = topicLower.split(/[\s,.-]+/).filter(k => k.length > 2);
        for (const keyword of keywords) {
            for (const [key, tasks] of Object.entries(taskDatabase[subject])) {
                if (key === 'default' || key.includes('класс')) continue;
                if (key.includes(keyword)) {
                    return tasks[type] || tasks['test'] || tasks['independent'];
                }
            }
        }
    }
    
    // 2. Ищем в default для любого предмета
    for (const [subj, data] of Object.entries(taskDatabase)) {
        for (const [key, tasks] of Object.entries(data)) {
            if (key === 'default') continue;
            if (topicLower.includes(key) || key.includes(topicLower)) {
                return tasks[type] || tasks['test'] || tasks['independent'];
            }
        }
    }
    
    return null;
}

// Генерация уникальных заданий для всех вариантов
function generateUniqueTasksGlobal(classLevel, subject, topic, type, count, variantIndex = 0) {
    let tasks = findTasksForTopic(classLevel, subject, topic, type);
    
    if (!tasks || tasks.length === 0) {
        tasks = generateUniversalTasks(topic, type, count * 10);
    }
    
    // Копируем и перемешиваем
    let shuffled = shuffleArray([...tasks]);
    
    // Чем больше индекс варианта, тем больше перемешиваний для разнообразия
    for (let i = 0; i < variantIndex * 10; i++) {
        shuffled = shuffleArray(shuffled);
    }
    
    // Берём нужное количество заданий
    const result = shuffled.slice(0, count);
    
    // Если заданий меньше чем нужно - добавляем универсальные
    if (result.length < count) {
        const universal = generateUniversalTasks(topic, type, count - result.length);
        result.push(...universal.slice(0, count - result.length));
    }
    
    return shuffleArray(result);
}

// Генерация уникальных заданий - повторение только 1 раз если мало заданий
function generateUniqueTasks(classLevel, subject, topic, type, count, variantIndex = 0) {
    let tasks = findTasksForTopic(classLevel, subject, topic, type);
    
    if (!tasks || tasks.length === 0) {
        tasks = generateUniversalTasks(topic, type, count);
    }
    
    // Перемешиваем исходный массив
    let shuffled = shuffleArray([...tasks]);
    
    // Дополнительное перемешивание для разных вариантов
    if (variantIndex > 0) {
        for (let i = 0; i < variantIndex * 5; i++) {
            shuffled = shuffleArray(shuffled);
        }
    }
    
    const result = [];
    const usedTexts = new Set();
    
    // Первый проход - добавляем уникальные задания
    for (const task of shuffled) {
        if (result.length >= count) break;
        if (!usedTexts.has(task.text)) {
            result.push(task);
            usedTexts.add(task.text);
        }
    }
    
    // Если мало заданий - можно повторить только ОДИН раз
    if (result.length < count && shuffled.length > 0) {
        const uniqueOriginal = new Set(shuffled.map(t => t.text));
        
        // Второй проход - добавляем задания которых ещё не было (можно 1 раз повторить)
        for (const task of shuffled) {
            if (result.length >= count) break;
            if (!usedTexts.has(task.text)) {
                result.push(task);
                usedTexts.add(task.text);
            }
        }
    }
    
    // Если всё ещё мало - добавляем универсальные
    if (result.length < count) {
        const more = generateUniversalTasks(topic, type, count - result.length);
        for (const task of more) {
            if (result.length >= count) break;
            if (!usedTexts.has(task.text)) {
                result.push(task);
                usedTexts.add(task.text);
            }
        }
    }
    
    // Финальное перемешивание
    return shuffleArray(result);
}

// Генерация универсальных заданий (генерирует уникальные задания с разными числами)
function generateUniversalTasks(topic, type, count) {
    // Генерируем задания динамически с разными числами
    const tasks = [];
    const operations = ['+', '-', '×', ':'];
    
    for (let i = 0; i < count; i++) {
        const op = operations[Math.floor(Math.random() * operations.length)];
        let a = Math.floor(Math.random() * 90) + 10;
        let b = Math.floor(Math.random() * 9) + 2;
        let answer, question;
        
        switch(op) {
            case '+':
                answer = a + b;
                question = `${a} + ${b} = ?`;
                break;
            case '-':
                if (a < b) [a, b] = [b, a];
                answer = a - b;
                question = `${a} - ${b} = ?`;
                break;
            case '×':
                a = Math.floor(Math.random() * 20) + 2;
                b = Math.floor(Math.random() * 9) + 2;
                answer = a * b;
                question = `${a} × ${b} = ?`;
                break;
            case ':':
                b = Math.floor(Math.random() * 8) + 2;
                answer = Math.floor(Math.random() * 10) + 2;
                a = b * answer;
                question = `${a} : ${b} = ?`;
                break;
        }
        
        // Создаём неправильные ответы
        const wrongAnswers = [answer + Math.floor(Math.random() * 5) + 1, 
                            answer - Math.floor(Math.random() * 5) - 1,
                            answer + Math.floor(Math.random() * 3) + 3];
        
        const options = shuffleArray([answer, ...wrongAnswers.filter(a => a > 0)].slice(0, 4));
        
        if (type === 'test') {
            tasks.push({
                text: `${i + 1}. ${question}`,
                answer: String(answer),
                options: options.map(String)
            });
        } else {
            tasks.push({
                text: `${i + 1}. ${question}`,
                answer: String(answer)
            });
        }
    }
    
    return tasks;
}

// Перемешивание массива (Fisher-Yates)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// ==================== БАЗА ДАННЫХ ИСПОЛЬЗОВАННЫХ ЗАДАНИЙ ====================
// Загружаем использованные задания из localStorage
let globalUsedTasks = new Set(JSON.parse(localStorage.getItem('usedTasks') || '[]'));

// Сохраняем использованные задания в localStorage
function saveUsedTasks() {
    localStorage.setItem('usedTasks', JSON.stringify([...globalUsedTasks]));
}

// Очистить историю использованных заданий
function clearUsedTasks() {
    if (confirm('Очистить историю использованных заданий? Все задания снова будут доступны.')) {
        globalUsedTasks = new Set();
        saveUsedTasks();
        alert('✅ История очищена!');
    }
}

// ==================== СОХРАНЕНИЕ ВАРИАНТОВ ====================
let savedWorksheets = JSON.parse(localStorage.getItem('savedWorksheets') || '[]');

function saveCurrentWorksheet() {
    const data = {
        id: Date.now(),
        date: new Date().toLocaleDateString('ru-RU'),
        classLevel: classSelect.value,
        subject: subjectSelect.value,
        topic: lessonTopic.value,
        section: sectionNum.value,
        name: lessonName.value,
        type: workType.value,
        taskCount: taskCount.value,
        variantCount: variantCount.value,
        content: outputContent.innerHTML,
        answers: generatedAnswers
    };
    
    savedWorksheets.push(data);
    localStorage.setItem('savedWorksheets', JSON.stringify(savedWorksheets));
    renderSavedList();
    alert('✅ Вариант сохранён!');
}

function deleteSavedWorksheet(id) {
    if (confirm('Удалить этот вариант?')) {
        savedWorksheets = savedWorksheets.filter(w => w.id !== id);
        localStorage.setItem('savedWorksheets', JSON.stringify(savedWorksheets));
        renderSavedList();
    }
}

function loadSavedWorksheet(id) {
    const worksheet = savedWorksheets.find(w => w.id === id);
    if (worksheet) {
        outputContent.innerHTML = worksheet.content;
        outputSection.style.display = 'block';
        outputSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function renderSavedList() {
    const list = document.getElementById('savedList');
    
    if (!list) return;
    
    if (savedWorksheets.length === 0) {
        list.innerHTML = '<p class="empty-message">У вас пока нет сохранённых вариантов</p>';
        return;
    }
    
    list.innerHTML = savedWorksheets.map(w => `
        <div class="saved-item">
            <div class="saved-info">
                <strong>${w.subject}</strong> - ${w.topic}<br>
                <small>${w.date} | ${w.classLevel} класс | ${w.variantCount} вар.</small>
            </div>
            <div class="saved-actions">
                <button onclick="loadSavedWorksheet(${w.id})">📖 Открыть</button>
                <button onclick="deleteSavedWorksheet(${w.id})" class="delete-btn">🗑️</button>
            </div>
        </div>
    `).join('');
}

// ==================== DOM ====================
const classSelect = document.getElementById('classSelect');
const subjectSelect = document.getElementById('subjectSelect');
const lessonTopic = document.getElementById('lessonTopic');
const sectionNum = document.getElementById('sectionNum');
const lessonName = document.getElementById('lessonName');
const workType = document.getElementById('workType');
const taskCount = document.getElementById('taskCount');
const variantCount = document.getElementById('variantCount');
const generatorForm = document.getElementById('generatorForm');
const outputSection = document.getElementById('outputSection');
const outputContent = document.getElementById('outputContent');
const editBtn = document.getElementById('editBtn');
const printBtn = document.getElementById('printBtn');
const newBtn = document.getElementById('newBtn');
const saveBtn = document.getElementById('saveBtn');

let generatedAnswers = [];

// Переключение вкладок
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const tabId = this.dataset.tab;
        
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.getElementById(tabId + '-tab').classList.add('active');
        
        if (tabId === 'saved') {
            renderSavedList();
        }
    });
});

// Обновление предметов
classSelect.addEventListener('change', function() {
    const classLevel = parseInt(this.value);
    const subjects = subjectsByClass[classLevel] || [];
    
    subjectSelect.innerHTML = '<option value="">Выберите предмет</option>';
    subjects.forEach(subject => {
        const option = document.createElement('option');
        option.value = subject;
        option.textContent = subject;
        subjectSelect.appendChild(option);
    });
    subjectSelect.disabled = false;
});

generatorForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const selectedClass = parseInt(classSelect.value);
    const subject = subjectSelect.value;
    const topic = lessonTopic.value;
    const section = sectionNum.value;
    const name = lessonName.value;
    const type = workType.value;
    const count = parseInt(taskCount.value);
    const variants = parseInt(variantCount.value);
    
    // Находим все доступные задания
    let allTasks = findTasksForTopic(selectedClass, subject, topic, type);
    if (!allTasks || allTasks.length === 0) {
        allTasks = generateUniversalTasks(topic, type, 50);
    }
    
    // Перемешиваем все задания
    let shuffledAll = shuffleArray([...allTasks]);
    
    // Если заданий меньше чем нужно на все варианты - добавляем универсальные
    const totalNeeded = count * variants;
    while (shuffledAll.length < totalNeeded) {
        shuffledAll = shuffledAll.concat(generateUniversalTasks(topic, type, 10));
    }
    shuffledAll = shuffleArray(shuffledAll);
    
    let html = '';
    let allAnswers = [];
    let usedInSession = new Set(); // Отслеживаем использованные в этой сессии
    
    for (let v = 1; v <= variants; v++) {
        const variantLetter = getVariantLetter(v);
        
        // Выбираем задания которые ещё НЕ использовались в этой сессии
        const availableTasks = shuffledAll.filter(t => !usedInSession.has(t.text));
        
        // Если мало - берём любые
        const tasksForVariant = availableTasks.length >= count 
            ? shuffleArray(availableTasks).slice(0, count)
            : shuffleArray(shuffledAll).slice(0, count);
        
        // Добавляем в использованные
        tasksForVariant.forEach(t => usedInSession.add(t.text));
        
        html += generateWorksheetHTML(selectedClass, subject, topic, section, name, type, tasksForVariant, v, variantLetter);
        allAnswers.push({ variant: v, letter: variantLetter, answers: tasksForVariant.map(t => t.answer) });
    }
    
    outputContent.innerHTML = html;
    outputSection.style.display = 'block';
    generatedAnswers = allAnswers;
    outputSection.scrollIntoView({ behavior: 'smooth' });
});

function getVariantLetter(num) {
    const letters = 'АБВГДЕЁЖЗИКЛМНОПРСТУФХЦЧШЩЭЮЯ';
    return letters[(num - 1) % letters.length];
}

function generateWorksheetHTML(classLevel, subject, topic, section, name, type, tasks, variantNum, variantLetter) {
    const typeNames = {
        'test': 'Тест',
        'independent': 'Самостоятельная работа',
        'control': 'Контрольная работа'
    };
    
    let sectionInfo = section ? `<div class="worksheet-info"><strong>§ / Пункт:</strong> ${section}</div>` : '';
    
    let html = `
        <div class="worksheet">
            <div class="worksheet-header">
                <div class="worksheet-title">${typeNames[type]} - Вариант ${variantLetter}</div>
                <div class="worksheet-info"><strong>Предмет:</strong> ${subject}</div>
                <div class="worksheet-info"><strong>Класс:</strong> ${classLevel}</div>
                <div class="worksheet-info"><strong>Тема:</strong> ${topic}</div>
                ${sectionInfo}
                <div class="worksheet-info"><strong>Урок:</strong> ${name}</div>
                <div class="worksheet-info"><strong>Дата:</strong> ${new Date().toLocaleDateString('ru-RU')}</div>
            </div>
            <ul class="task-list">
    `;
    
    tasks.forEach((task, index) => {
        const cleanText = task.text.replace(/^\d+\.\s*/, '');
        
        if (type === 'test' && task.options) {
            let optionsHTML = task.options.map((opt, i) => `
                <div class="test-option">
                    <input type="radio" name="v${variantLetter}_t${index}" id="v${variantLetter}_t${index}_${i}">
                    <label for="v${variantLetter}_t${index}_${i}">${opt}</label>
                </div>
            `).join('');
            
            html += `
                <li class="task-item">
                    <span class="task-text">${index + 1}. ${cleanText}</span>
                    ${task.textFull ? `<div class="task-text-full"><em>${task.textFull}</em></div>` : ''}
                    <div class="test-options">${optionsHTML}</div>
                </li>
            `;
        } else {
            html += `
                <li class="task-item">
                    <span class="task-text">${index + 1}. ${cleanText}</span>
                    ${task.textFull ? `<div class="task-text-full"><em>${task.textFull}</em></div>` : ''}
                </li>
            `;
        }
    });
    
    html += `
            </ul>
            <div class="answer-section">
                <h3>Ответы - Вариант ${variantLetter} (для учителя)</h3>
                <ul class="answer-list">
    `;
    
    tasks.forEach((task, index) => {
        html += `<li class="answer-item">${index + 1}. ${task.answer}</li>`;
    });
    
    html += `
                </ul>
            </div>
        </div>
    `;
    
    return html;
}

// Кнопки
let isEditing = false;

editBtn.addEventListener('click', function() {
    isEditing = !isEditing;
    outputContent.contentEditable = isEditing;
    editBtn.textContent = isEditing ? '💾 Сохранить' : '✏️ Редактировать';
    if (!isEditing) outputContent.blur();
    else outputContent.focus();
});

printBtn.addEventListener('click', () => window.print());
saveBtn.addEventListener('click', saveCurrentWorksheet);

newBtn.addEventListener('click', () => {
    outputSection.style.display = 'none';
    generatorForm.reset();
    subjectSelect.innerHTML = '<option value="">Сначала выберите класс</option>';
    subjectSelect.disabled = true;
});

// Инициализация
renderSavedList();
