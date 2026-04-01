// Game Data
const gameData = {
    easy: [
        {
            riddle: "I'm red, round, and shiny.\nYou can hold me in your hand.\nI grow on trees.\nWhat am I?",
            answer: "Apple",
            image: "assets/images/apple.jpg",
            choices: [
                { text: "Apple", emoji: "🍎" },
                { text: "Orange", emoji: "🍊" },
                { text: "Banana", emoji: "🍌" },
                { text: "Grape", emoji: "🍇" }
            ]
        },
        {
            riddle: "I have a handle and a spout.\nI boil water for your tea.\nWhen I whistle, water's ready!\nWhat am I?",
            answer: "Kettle",
            image: "assets/images/kettle.jpg",
            choices: [
                { text: "Kettle", emoji: "🫖" },
                { text: "Cup", emoji: "☕" },
                { text: "Bowl", emoji: "🥣" },
                { text: "Teapot", emoji: "🍵" }
            ]
        },
        {
            riddle: "I'm soft and fluffy.\nI sleep on your bed.\nYou hug me when you're sad.\nWhat am I?",
            answer: "Teddy bear",
            image: "assets/images/teddy.jpg",
            choices: [
                { text: "Teddy bear", emoji: "🧸" },
                { text: "Pillow", emoji: "🛏️" },
                { text: "Scarf", emoji: "🧣" },
                { text: "Glove", emoji: "🧤" }
            ]
        },
        {
            riddle: "I have hands but no fingers.\nI have a face but no eyes.\nI tell you when to wake up!\nWhat am I?",
            answer: "Clock",
            image: "assets/images/clock.jpg",
            choices: [
                { text: "Clock", emoji: "⏰" },
                { text: "Watch", emoji: "⌚" },
                { text: "Moon", emoji: "🌙" },
                { text: "Sun", emoji: "☀️" }
            ]
        },
        {
            riddle: "I jump and hop and say 'ribbit!'\nI live in ponds and gardens.\nI'm green and have long legs.\nWhat am I?",
            answer: "Frog",
            image: "assets/images/frog.jpg",
            choices: [
                { text: "Frog", emoji: "🐸" },
                { text: "Grasshopper", emoji: "🦗" },
                { text: "Crocodile", emoji: "🐊" },
                { text: "Lizard", emoji: "🦎" }
            ]
        },
        {
            riddle: "I have many teeth but I never bite.\nI help you brush your teeth.\nPull me back and forth!\nWhat am I?",
            answer: "Toothbrush",
            image: "assets/images/toothbrush.jpg",
            choices: [
                { text: "Toothbrush", emoji: "🪥" },
                { text: "Fork", emoji: "🍴" },
                { text: "Spoon", emoji: "🥄" },
                { text: "Comb", emoji: "🪮" }
            ]
        },
        {
            riddle: "I have a crown but I'm not a king.\nI'm yellow and curved.\nMonkeys love to eat me.\nWhat am I?",
            answer: "Banana",
            image: "assets/images/banana.jpg",
            choices: [
                { text: "Banana", emoji: "🍌" },
                { text: "Pineapple", emoji: "🍍" },
                { text: "Mango", emoji: "🥭" },
                { text: "Lemon", emoji: "🍋" }
            ]
        },
        {
            riddle: "I have wings but I'm not a plane.\nI fly in the sky at night.\nI light up the dark!\nWhat am I?",
            answer: "Firefly",
            image: "assets/images/firefly.jpg",
            choices: [
                { text: "Firefly", emoji: "✨" },
                { text: "Butterfly", emoji: "🦋" },
                { text: "Bird", emoji: "🐦" },
                { text: "Plane", emoji: "✈️" }
            ]
        },
        {
            riddle: "I'm round like a ball.\nI bounce, bounce, bounce!\nYou kick me in a game.\nWhat am I?",
            answer: "Football",
            image: "assets/images/football.jpg",
            choices: [
                { text: "Football", emoji: "⚽" },
                { text: "Basketball", emoji: "🏀" },
                { text: "Tennis", emoji: "🎾" },
                { text: "Pool ball", emoji: "🎱" }
            ]
        },
        {
            riddle: "I have a tail.\nI chase cats in the yard.\nI say 'woof woof!'\nWhat am I?",
            answer: "Dog",
            image: "assets/images/dog.jpg",
            choices: [
                { text: "Dog", emoji: "🐕" },
                { text: "Cat", emoji: "🐈" },
                { text: "Fox", emoji: "🦊" },
                { text: "Wolf", emoji: "🐺" }
            ]
        },
        {
            riddle: "I have four legs and say 'meow'.\nI like catching mice.\nWhat am I?",
            answer: "Cat",
            image: "assets/images/cat.jpg",
            choices: [
                { text: "Cat", emoji: "🐱" },
                { text: "Dog", emoji: "🐕" },
                { text: "Rabbit", emoji: "🐰" },
                { text: "Tiger", emoji: "🐯" }
            ]
        },
        {
            riddle: "I am an animal.\nI have a long trunk and big ears.\nWhat am I?",
            answer: "Elephant",
            image: "assets/images/elephant.jpg",
            choices: [
                { text: "Elephant", emoji: "🐘" },
                { text: "Giraffe", emoji: "🦒" },
                { text: "Hippo", emoji: "🦛" },
                { text: "Rhino", emoji: "🦏" }
            ]
        },
        {
            riddle: "I am a big yellow star.\nI give you light and keep you warm.\nWhat am I?",
            answer: "Sun",
            image: "assets/images/sun.jpg",
            choices: [
                { text: "Sun", emoji: "☀️" },
                { text: "Moon", emoji: "🌙" },
                { text: "Star", emoji: "⭐" },
                { text: "Cloud", emoji: "☁️" }
            ]
        },
        {
            riddle: "I have seven colors.\nYou can see me in the sky after the rain.\nWhat am I?",
            answer: "Rainbow",
            image: "assets/images/rainbow.jpg",
            choices: [
                { text: "Rainbow", emoji: "🌈" },
                { text: "Cloud", emoji: "☁️" },
                { text: "Sun", emoji: "☀️" },
                { text: "Bird", emoji: "🐦" }
            ]
        },
        {
            riddle: "What falls in winter but never gets hurt?",
            answer: "Snow",
            image: "assets/images/snow.jpg",
            choices: [
                { text: "Snow", emoji: "❄️" },
                { text: "Rain", emoji: "🌧️" },
                { text: "Ice", emoji: "🧊" },
                { text: "Wind", emoji: "💨" }
            ]
        },
        {
            riddle: "What has to be broken before you can use it or eat it?",
            answer: "Egg",
            image: "assets/images/egg.jpg",
            choices: [
                { text: "Egg", emoji: "🥚" },
                { text: "Nut", emoji: "🥜" },
                { text: "Apple", emoji: "🍎" },
                { text: "Banana", emoji: "🍌" }
            ]
        },
        {
            riddle: "I am cold and sweet.\nYou love eating me in the summer.\nWhat am I?",
            answer: "Ice cream",
            image: "assets/images/ice-cream.jpg",
            choices: [
                { text: "Ice cream", emoji: "🍦" },
                { text: "Cake", emoji: "🎂" },
                { text: "Candy", emoji: "🍬" },
                { text: "Chocolate", emoji: "🍫" }
            ]
        },
        {
            riddle: "What starts with T, ends with T,\nand has T (tea) in it?",
            answer: "Teapot",
            image: "assets/images/teapot.jpg",
            choices: [
                { text: "Teapot", emoji: "🫖" },
                { text: "Table", emoji: "🪑" },
                { text: "Tent", emoji: "⛺" },
                { text: "Toast", emoji: "🍞" }
            ]
        },
        {
            riddle: "I am tall when I am young,\nand I am short when I am old.\nWhat am I?",
            answer: "Pencil",
            image: "assets/images/pencil.jpg",
            choices: [
                { text: "Pencil", emoji: "✏️" },
                { text: "Pen", emoji: "🖊️" },
                { text: "Crayon", emoji: "🖍️" },
                { text: "Ruler", emoji: "📏" }
            ]
        },
        {
            riddle: "What has legs, but cannot walk?",
            answer: "Table",
            image: "assets/images/table.jpg",
            choices: [
                { text: "Table", emoji: "🪑" },
                { text: "Chair", emoji: "🪑" },
                { text: "Bed", emoji: "🛏️" },
                { text: "Shelf", emoji: "🗄️" }
            ]
        },
        {
            riddle: "I have a tail and a head,\nbut no body.\nWhat am I?",
            answer: "Coin",
            image: "assets/images/coin.jpg",
            choices: [
                { text: "Coin", emoji: "🪙" },
                { text: "Button", emoji: "🔘" },
                { text: "Ring", emoji: "💍" },
                { text: "Ball", emoji: "⚽" }
            ]
        }
    ],
    medium: [
        { riddle: "I'm red, round, and shiny.\nI grow on trees.\nWhat am I?", answer: "APPLE", letters: "P P A E L" },
        { riddle: "I boil water for your tea.\nI have a handle and spout.\nWhat am I?", answer: "KETTLE", letters: "T T E L E K" },
        { riddle: "I'm soft and fluffy.\nYou hug me when sad.\nWhat am I?", answer: "TEDDY", letters: "D D Y E T" },
        { riddle: "I tell you when to wake up!\nI have hands but no fingers.\nWhat am I?", answer: "CLOCK", letters: "C C L K O" },
        { riddle: "I say 'ribbit!' and jump.\nI'm green with long legs.\nWhat am I?", answer: "FROG", letters: "G R O F" },
        { riddle: "I help you brush your teeth.\nI have many teeth.\nWhat am I?", answer: "BRUSH", letters: "H S B R U" },
        { riddle: "Monkeys love to eat me.\nI'm yellow and curved.\nWhat am I?", answer: "BANANA", letters: "A A N N B A" },
        { riddle: "I light up the night.\nI have wings but not a plane.\nWhat am I?", answer: "FIREFLY", letters: "Y F R F L E I" },
        { riddle: "You kick me in a game.\nI bounce, bounce!\nWhat am I?", answer: "FOOTBALL", letters: "L L A B T O O F" },
        { riddle: "I say 'woof woof!'\nI chase cats.\nWhat am I?", answer: "DOG", letters: "G O D" },
        { riddle: "I say 'meow' and catch mice.\nWhat am I?", answer: "CAT", letters: "T A C" },
        { riddle: "I have a long trunk and big ears.\nWhat am I?", answer: "ELEPHANT", letters: "T N A H P E L E" },
        { riddle: "I give you light and keep you warm.\nWhat am I?", answer: "SUN", letters: "N U S" },
        { riddle: "I have seven colors in the sky.\nWhat am I?", answer: "RAINBOW", letters: "W O B N I A R" },
        { riddle: "I fall in winter but never get hurt.\nWhat am I?", answer: "SNOW", letters: "W O N S" },
        { riddle: "Break me before you eat me.\nWhat am I?", answer: "EGG", letters: "G G E" },
        { riddle: "Cold and sweet, eat me in summer.\nWhat am I?", answer: "ICECREAM", letters: "M A E R C E C I" },
        { riddle: "Starts with T, ends with T, has tea in it.\nWhat am I?", answer: "TEAPOT", letters: "T O P A E T" },
        { riddle: "Tall when young, short when old.\nWhat am I?", answer: "PENCIL", letters: "L I C N E P" },
        { riddle: "I have legs but cannot walk.\nWhat am I?", answer: "TABLE", letters: "E L B A T" },
        { riddle: "I have a tail and head, but no body.\nWhat am I?", answer: "COIN", letters: "N I O C" }
    ]
};

// Sticker Collection - Expanded pool for true randomness
const stickerPool = [
    "🦁", "🚀", "🌈", "🎂", "🐶", "🌸", "⭐", "🍕", "🎸", "🎈",
    "🌙", "🦋", "🦄", "🌟", "🎨", "🎭", "🎪", "🎬", "🎤", "🎧",
    "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", "🐷",
    "🐸", "🐙", "🐵", "🐔", "🐧", "🐦", "🦆", "🦅", "🦉", "🦇",
    "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜",
    "⚽", "🏀", "🏈", "⚾", "🎾", "🏐", "🏉", "🎱", "🏓", "🏸",
    "🎰", "🎲", "🎯", "🏆", "🎖️", "🏅", "🥇", "🥈", "🥉", "🏵️",
    "🎪", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎹", "🥁", "🎷",
    "🎺", "🎸", "🎻", "🪕", "🎮", "🎰", "🎲", "🧩", "🧸", "🪀"
];

// Get random sticker with weighted rarity
function getRandomSticker() {
    const rand = Math.random();
    let pool;
    
    // 70% common, 20% uncommon, 10% rare
    if (rand < 0.7) {
        pool = stickerPool.slice(0, 40); // Common
    } else if (rand < 0.9) {
        pool = stickerPool.slice(40, 70); // Uncommon
    } else {
        pool = stickerPool.slice(70); // Rare
    }
    
    return pool[Math.floor(Math.random() * pool.length)];
}

// Game State
let currentLevel = '';
let currentQuestion = 0;
let score = 0;
let stickers = [];
let jumbleAnswer = [];
let gameCompleted = false;
let shuffledQuestions = []; // Store shuffled questions

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    feedback: document.getElementById('feedback-screen'),
    store: document.getElementById('store-screen'),
    collection: document.getElementById('collection-screen')
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupEventListeners();
    loadProgress();
});

function setupEventListeners() {
    // Level selection
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => startGame(btn.dataset.level));
    });

    // Game controls
    document.getElementById('replay-btn').addEventListener('click', playRiddleAudio);
    document.getElementById('next-btn').addEventListener('click', nextQuestion);
    document.getElementById('check-btn').addEventListener('click', checkJumbleAnswer);
    document.getElementById('reset-btn').addEventListener('click', resetJumble);
    document.getElementById('open-all-btn').addEventListener('click', openAllStickers);
    document.getElementById('view-collection-btn').addEventListener('click', showCollection);
    document.getElementById('play-again-btn').addEventListener('click', () => switchScreen('start'));
    document.getElementById('change-level-btn').addEventListener('click', () => switchScreen('start'));

    // Exit modal
    document.getElementById('continue-btn').addEventListener('click', hideExitModal);
    document.getElementById('leave-btn').addEventListener('click', leaveGame);

    // Before unload warning
    window.addEventListener('beforeunload', (e) => {
        if (currentLevel && !gameCompleted) {
            e.preventDefault();
            e.returnValue = 'You will lose your progress!';
        }
    });
}

function switchScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Shuffle array helper
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startGame(level) {
    currentLevel = level;
    currentQuestion = 0;
    score = 0;
    gameCompleted = false;
    stickers = [];
    
    // Shuffle questions for random order
    shuffledQuestions = shuffleArray(gameData[level]);

    // Update UI
    document.getElementById('level-indicator').textContent = 
        level === 'easy' ? '⭐ Easy Level' : '🎯 Medium Level';
    document.getElementById('easy-mode').classList.toggle('hidden', level !== 'easy');
    document.getElementById('medium-mode').classList.toggle('hidden', level !== 'medium');

    switchScreen('game');
    loadQuestion();
}

function loadQuestion() {
    const data = shuffledQuestions[currentQuestion];
    
    // Update progress
    document.getElementById('progress').textContent = `Question ${currentQuestion + 1}/10`;
    document.getElementById('score').textContent = `Score: ${score}`;
    
    // Show riddle
    document.getElementById('riddle-text').textContent = data.riddle;
    
    if (currentLevel === 'easy') {
        setupEasyMode(data);
    } else {
        setupMediumMode(data);
    }

    // Play audio (placeholder - would use TTS)
    setTimeout(playRiddleAudio, 500);
}

function setupEasyMode(data) {
    const buttons = document.querySelectorAll('.choice-btn');
    
    // Shuffle choices so answer is not always first
    const shuffledChoices = shuffleArray(data.choices);
    
    buttons.forEach((btn, index) => {
        const choice = shuffledChoices[index];
        // Check if we have an image for this choice
        const choiceKey = choice.text.toLowerCase().replace(/ /g, '-');
        // Map choice key to image filename (some don't match exactly)
        const imageMap = {
            'apple': 'apple',
            'kettle': 'kettle',
            'teddy-bear': 'teddy',
            'clock': 'clock',
            'frog': 'frog',
            'toothbrush': 'toothbrush',
            'banana': 'banana',
            'firefly': 'firefly',
            'football': 'football',
            'dog': 'dog',
            'cat': 'cat',
            'elephant': 'elephant',
            'sun': 'sun',
            'rainbow': 'rainbow',
            'snow': 'snow',
            'egg': 'egg',
            'ice-cream': 'ice-cream',
            'teapot': 'teapot',
            'pencil': 'pencil',
            'table': 'table',
            'coin': 'coin'
        };
        const imageFile = imageMap[choiceKey];
        
        if (imageFile) {
            btn.querySelector('.choice-img').src = `assets/images/${imageFile}.jpg`;
            btn.querySelector('.choice-img').style.display = 'block';
            btn.querySelector('.choice-emoji').style.display = 'none';
        } else {
            // No image, show large emoji instead
            btn.querySelector('.choice-img').style.display = 'none';
            btn.querySelector('.choice-emoji').style.display = 'block';
            btn.querySelector('.choice-emoji').textContent = choice.emoji;
        }
        
        btn.querySelector('.choice-text').textContent = choice.text;
        btn.classList.remove('correct', 'wrong');
        btn.disabled = false;
        
        btn.onclick = () => checkAnswer(choice.text, data.answer, btn);
    });
}

function setupMediumMode(data) {
    jumbleAnswer = [];
    const slotsContainer = document.querySelector('.answer-slots');
    const poolContainer = document.querySelector('.letter-pool');
    
    // Create answer slots
    slotsContainer.innerHTML = '';
    for (let i = 0; i < data.answer.length; i++) {
        const slot = document.createElement('div');
        slot.className = 'letter-slot';
        slot.dataset.index = i;
        slotsContainer.appendChild(slot);
    }
    
    // Create letter tiles
    poolContainer.innerHTML = '';
    const letters = data.letters.split(' ');
    letters.forEach((letter, index) => {
        const tile = document.createElement('button');
        tile.className = 'letter-tile';
        tile.textContent = letter;
        tile.dataset.index = index;
        tile.dataset.letter = letter;
        tile.onclick = () => selectLetter(tile);
        poolContainer.appendChild(tile);
    });
}

function selectLetter(tile) {
    if (tile.classList.contains('used')) return;
    
    const data = gameData[currentLevel][currentQuestion];
    if (jumbleAnswer.length >= data.answer.length) return;
    
    jumbleAnswer.push({
        letter: tile.dataset.letter,
        tileIndex: tile.dataset.index
    });
    
    tile.classList.add('used');
    updateJumbleSlots();
}

function updateJumbleSlots() {
    const slots = document.querySelectorAll('.letter-slot');
    slots.forEach((slot, index) => {
        if (index < jumbleAnswer.length) {
            slot.textContent = jumbleAnswer[index].letter;
            slot.classList.add('filled');
        } else {
            slot.textContent = '';
            slot.classList.remove('filled');
        }
    });
}

function resetJumble() {
    jumbleAnswer = [];
    document.querySelectorAll('.letter-tile').forEach(tile => {
        tile.classList.remove('used');
    });
    updateJumbleSlots();
}

function checkJumbleAnswer() {
    const data = shuffledQuestions[currentQuestion];
    const userAnswer = jumbleAnswer.map(j => j.letter).join('');
    
    if (userAnswer === data.answer) {
        showFeedback(true, data);
    } else {
        showFeedback(false, data);
    }
}

function checkAnswer(selected, correct, btn) {
    const isCorrect = selected.toLowerCase() === correct.toLowerCase();
    
    if (isCorrect) {
        btn.classList.add('correct');
        score += 10;
    } else {
        btn.classList.add('wrong');
    }
    
    // Disable all buttons
    document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);
    
    // Use shuffledQuestions to get correct data
    setTimeout(() => showFeedback(isCorrect, shuffledQuestions[currentQuestion]), 500);
}

// Preload images to avoid showing previous image
const preloadedImages = {};

function preloadImage(src) {
    if (!src || preloadedImages[src]) return Promise.resolve();
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
            preloadedImages[src] = true;
            resolve();
        };
        img.onerror = () => resolve();
        img.src = src;
    });
}

async function showFeedback(isCorrect, data) {
    switchScreen('feedback');
    
    const emoji = document.getElementById('feedback-emoji');
    const title = document.getElementById('feedback-title');
    const img = document.getElementById('answer-img');
    const text = document.getElementById('answer-text');
    
    // Clear previous image immediately
    img.src = '';
    img.style.opacity = '0';
    
    if (isCorrect) {
        emoji.textContent = '🎉';
        title.textContent = 'Correct!';
        title.classList.remove('wrong');
        createConfetti();
        playSound('correct');
    } else {
        emoji.textContent = '💪';
        title.textContent = 'Not quite...';
        title.classList.add('wrong');
        playSound('wrong');
    }
    
    text.textContent = `It's ${data.answer}!`;
    
    // Preload and show new image
    if (data.image) {
        await preloadImage(data.image);
        img.src = data.image;
        img.alt = data.answer;
        img.style.opacity = '1';
    }
}

function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion >= 10) {
        completeGame();
    } else {
        switchScreen('game');
        loadQuestion();
    }
}

function completeGame() {
    gameCompleted = true;
    switchScreen('store');
    
    // Calculate stickers
    const stickerCount = Math.ceil(score / 20);
    document.getElementById('final-score-val').textContent = score;
    document.getElementById('sticker-count').textContent = stickerCount;
    
    // Star rating
    const stars = Math.ceil(score / 20);
    document.getElementById('star-rating').textContent = '⭐'.repeat(stars);
    
    // Rating text
    let rating = '';
    if (score === 100) rating = '🌟 Legendary!';
    else if (score >= 80) rating = '⭐ Excellent!';
    else if (score >= 60) rating = '👍 Good Job!';
    else if (score >= 40) rating = '💪 Keep Trying!';
    else rating = '🌱 Nice Try!';
    document.getElementById('rating-text').textContent = rating;
    
    // Create mystery boxes
    const boxesContainer = document.getElementById('sticker-boxes');
    boxesContainer.innerHTML = '';
    for (let i = 0; i < stickerCount; i++) {
        const box = document.createElement('div');
        box.className = 'mystery-box';
        box.textContent = '🎁';
        boxesContainer.appendChild(box);
    }
    
    // Save progress
    saveProgress();
}

function openAllStickers() {
    const stickerCount = parseInt(document.getElementById('sticker-count').textContent);
    const resultsContainer = document.getElementById('sticker-results');
    const boxesContainer = document.getElementById('sticker-boxes');
    
    resultsContainer.innerHTML = '';
    
    // Animate each box opening
    const boxes = boxesContainer.querySelectorAll('.mystery-box');
    
    boxes.forEach((box, index) => {
        setTimeout(() => {
            // Random sticker for this box - truly random each time!
            const randomSticker = getRandomSticker();
            stickers.push(randomSticker);
            
            // Create opening animation
            box.classList.add('opening');
            box.innerHTML = '🎁';
            
            // After box shake, reveal sticker
            setTimeout(() => {
                box.innerHTML = '';
                box.classList.remove('opening');
                box.classList.add('opened');
                
                // Create sticker element with pop animation
                const stickerEl = document.createElement('div');
                stickerEl.className = 'sticker-reveal';
                stickerEl.textContent = randomSticker;
                box.appendChild(stickerEl);
                
                // Add to results
                const resultEl = document.createElement('div');
                resultEl.className = 'sticker-item';
                resultEl.textContent = randomSticker;
                resultsContainer.appendChild(resultEl);
                
                // Sparkle effect
                createSparkles(box);
                
            }, 600); // Wait for box shake animation
            
        }, index * 800); // Stagger each box opening
    });
    
    // Show results after all boxes opened
    setTimeout(() => {
        document.getElementById('sticker-reveal').classList.remove('hidden');
        document.getElementById('open-all-btn').classList.add('hidden');
        playSound('win');
        saveProgress();
    }, stickerCount * 800 + 1000);
}

// Sparkle effect for box opening
function createSparkles(element) {
    const colors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
    
    for (let i = 0; i < 8; i++) {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        sparkle.style.cssText = `
            position: absolute;
            width: 10px;
            height: 10px;
            background: ${colors[Math.floor(Math.random() * colors.length)]};
            border-radius: 50%;
            pointer-events: none;
            left: 50%;
            top: 50%;
        `;
        
        const angle = (i / 8) * Math.PI * 2;
        const distance = 50 + Math.random() * 30;
        const tx = Math.cos(angle) * distance;
        const ty = Math.sin(angle) * distance;
        
        sparkle.style.animation = `sparklePop 0.6s ease-out forwards`;
        sparkle.style.setProperty('--tx', `${tx}px`);
        sparkle.style.setProperty('--ty', `${ty}px`);
        
        element.appendChild(sparkle);
        setTimeout(() => sparkle.remove(), 600);
    }
}

function showCollection() {
    switchScreen('collection');
    
    // Update total
    const allStickers = JSON.parse(localStorage.getItem('riddleMaster_stickers') || '[]');
    document.getElementById('total-stickers').textContent = allStickers.length;
    
    // Show album
    const album = document.getElementById('sticker-album');
    album.innerHTML = '';
    
    stickerPool.forEach(sticker => {
        const slot = document.createElement('div');
        slot.className = 'album-slot';
        if (allStickers.includes(sticker)) {
            slot.textContent = sticker;
        } else {
            slot.classList.add('empty');
        }
        album.appendChild(slot);
    });
    
    // Show profile stickers
    const profile = document.getElementById('profile-stickers');
    if (allStickers.length > 0) {
        profile.innerHTML = '';
        allStickers.slice(-5).forEach(sticker => {
            const el = document.createElement('span');
            el.className = 'sticker-item';
            el.textContent = sticker;
            profile.appendChild(el);
        });
    }
}

// Exit handling
function showExitModal() {
    document.getElementById('exit-modal').classList.remove('hidden');
}

function hideExitModal() {
    document.getElementById('exit-modal').classList.add('hidden');
}

function leaveGame() {
    // Reset everything
    score = 0;
    currentQuestion = 0;
    currentLevel = '';
    gameCompleted = false;
    hideExitModal();
    switchScreen('start');
}

// Confetti effect
function createConfetti() {
    const container = document.getElementById('confetti-container');
    container.innerHTML = '';
    
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dfe6e9'];
    
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        container.appendChild(confetti);
    }
    
    setTimeout(() => container.innerHTML = '', 3000);
}

// Audio placeholders
function playRiddleAudio() {
    // Would use TTS API here
    console.log('Playing riddle audio...');
}

function playSound(type) {
    // Would play actual sound files
    console.log('Playing sound:', type);
}

// LocalStorage
function saveProgress() {
    const existing = JSON.parse(localStorage.getItem('riddleMaster_stickers') || '[]');
    const combined = [...new Set([...existing, ...stickers])];
    localStorage.setItem('riddleMaster_stickers', JSON.stringify(combined));
}

function loadProgress() {
    // Load saved stickers, high scores, etc.
    console.log('Loading progress...');
}
