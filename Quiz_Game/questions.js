// A JavaScript object that holds all quiz questions, grouped by category
const questions = {
    // === General Knowledge Category ===
    general: [
        {
            question: "What is the capital of France?",
            options: ["London", "Berlin", "Paris", "Madrid"],
            correct: 2  // Index of the correct answer in the options array (Paris)
        },
        {
            question: "Which planet is known as the Red Planet?",
            options: ["Venus", "Mars", "Jupiter", "Saturn"],
            correct: 1  // Mars
        },
        {
            question: "What is the largest ocean on Earth?",
            options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
            correct: 3  // Pacific Ocean
        },
        {
            question: "Who painted the Mona Lisa?",
            options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
            correct: 2  // Leonardo da Vinci
        },
        {
            question: "What is the chemical symbol for gold?",
            options: ["Ag", "Fe", "Au", "Cu"],
            correct: 2  // Au
        }
    ],

    // === Science Category ===
    science: [
        {
            question: "What is the hardest natural substance on Earth?",
            options: ["Gold", "Iron", "Diamond", "Platinum"],
            correct: 2  // Diamond
        },
        {
            question: "What is the process by which plants make their food?",
            options: ["Respiration", "Photosynthesis", "Digestion", "Fermentation"],
            correct: 1  // Photosynthesis
        },
        {
            question: "What is the main component of the Sun?",
            options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
            correct: 2  // Hydrogen
        },
        {
            question: "What is the SI unit of electric current?",
            options: ["Volt", "Watt", "Ampere", "Ohm"],
            correct: 2  // Ampere
        },
        {
            question: "What is the atomic number of carbon?",
            options: ["6", "12", "14", "16"],
            correct: 0  // 6
        }
    ],

    // === History Category ===
    history: [
        {
            question: "In which year did World War II end?",
            options: ["1943", "1945", "1947", "1950"],
            correct: 1  // 1945
        },
        {
            question: "Who was the first President of the United States?",
            options: ["Thomas Jefferson", "John Adams", "George Washington", "Benjamin Franklin"],
            correct: 2  // George Washington
        },
        {
            question: "The Great Wall of China was built during which dynasty?",
            options: ["Ming", "Qin", "Han", "Tang"],
            correct: 1  // Qin Dynasty
        },
        {
            question: "Who discovered America in 1492?",
            options: ["Vasco da Gama", "Christopher Columbus", "Marco Polo", "Ferdinand Magellan"],
            correct: 1  // Christopher Columbus
        },
        {
            question: "The Industrial Revolution began in which country?",
            options: ["France", "Germany", "United States", "Great Britain"],
            correct: 3  // Great Britain
        }
    ]
};
