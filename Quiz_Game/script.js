// === Floating Particle Effect ===
function createParticles() {
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles';
    document.body.appendChild(particlesContainer);

    // Create 50 floating particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position on the screen
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random floating animation speed and delay
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;

        particlesContainer.appendChild(particle);
    }
}

// Initialize particles when page loads
document.addEventListener('DOMContentLoaded', createParticles);

// === DOM Elements ===
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const categoryBtns = document.querySelectorAll('.category-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreDisplay = document.querySelector('#score span');
const progressBar = document.querySelector('.progress-bar');
const timerDisplay = document.getElementById('time');
const finalScore = document.getElementById('final-score');
const correctAnswers = document.getElementById('correct-answers');
const timeTaken = document.getElementById('time-taken');
const reviewContainer = document.getElementById('review-container');

// === Game State Variables ===
let selectedCategory = 'general';
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let correctCount = 0;
let timer = null;
let timeLeft = 30;
let totalTime = 0;
let userAnswers = [];

// === Category Selection Logic ===
categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedCategory = btn.getAttribute('data-category');
    });
});

// === Start Quiz Logic ===
startBtn.addEventListener('click', () => {
    if (!selectedCategory) selectedCategory = 'general';
    currentQuestions = [...questions[selectedCategory]];
    shuffleArray(currentQuestions); // Shuffle the questions randomly

    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    correctCount = 0;
    totalTime = 0;
    userAnswers = [];

    showScreen(quizScreen); // Switch to quiz screen
    showQuestion();         // Show first question
});

// === Display the Current Question ===
function showQuestion() {
    resetState();

    const q = currentQuestions[currentQuestionIndex];
    questionText.textContent = q.question;
    optionsContainer.innerHTML = '';

    q.options.forEach((option, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = option;
        btn.addEventListener('click', () => selectOption(btn, idx));
        optionsContainer.appendChild(btn);
    });

    scoreDisplay.textContent = score;
    updateProgressBar();
    startTimer();
}

// === Handle Option Selection ===
function selectOption(btn, idx) {
    stopTimer();

    const q = currentQuestions[currentQuestionIndex];
    const options = optionsContainer.querySelectorAll('.option');

    options.forEach((optionBtn, i) => {
        optionBtn.disabled = true;
        if (i === q.correct) optionBtn.classList.add('correct');
        if (i === idx && i !== q.correct) optionBtn.classList.add('wrong');
    });

    // Record user answer
    userAnswers.push({
        question: q.question,
        selected: idx,
        correct: q.correct,
        options: q.options
    });

    if (idx === q.correct) {
        score += 10;
        correctCount++;
    }

    scoreDisplay.textContent = score;
    nextBtn.classList.remove('hidden');
}

// === Move to Next Question or Show Results ===
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestions.length) {
        showQuestion();
        nextBtn.classList.add('hidden');
    } else {
        showResults();
    }
});

// === Timer Logic for Each Question ===
function startTimer() {
    timeLeft = 30;
    timerDisplay.textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.textContent = timeLeft;

        if (timeLeft <= 0) {
            stopTimer();
            selectOption(null, -1); // If no answer selected, simulate skip
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timer);
    totalTime += (30 - timeLeft); // Calculate time used for the question
}

// === Update Progress Bar ===
function updateProgressBar() {
    const percent = ((currentQuestionIndex) / currentQuestions.length) * 100;
    progressBar.style.width = percent + '%';
}

// === Show Results Summary ===
function showResults() {
    showScreen(resultsScreen);
    finalScore.textContent = score;
    correctAnswers.textContent = correctCount;
    timeTaken.textContent = totalTime;
    showReview(); // Show all answers
}

// === Show Answer Review ===
function showReview() {
    reviewContainer.innerHTML = '';

    userAnswers.forEach((ans, idx) => {
        const div = document.createElement('div');
        div.className = 'review-item ' + (ans.selected === ans.correct ? 'correct' : 'wrong');
        div.innerHTML = `<strong>Q${idx + 1}:</strong> ${ans.question}<br>
            <strong>Your answer:</strong> ${ans.selected >= 0 ? ans.options[ans.selected] : '<em>No answer</em>'}<br>
            <strong>Correct answer:</strong> ${ans.options[ans.correct]}`;
        reviewContainer.appendChild(div);
    });
}

// === Restart the Quiz ===
restartBtn.addEventListener('click', () => {
    showScreen(startScreen);
});

// === Utility Functions ===

// Show one screen at a time
function showScreen(screen) {
    [startScreen, quizScreen, resultsScreen].forEach(s => s.classList.add('hidden'));
    screen.classList.remove('hidden');
}

// Reset question state
function resetState() {
    nextBtn.classList.add('hidden');
    timerDisplay.textContent = 30;
    stopTimer();
}

// Shuffle array (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Pre-select default category
categoryBtns[0].classList.add('selected');
