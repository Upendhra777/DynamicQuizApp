const questionBank = {
    math: {
        easy: [
            { q: "Which number comes next: 2, 4, 6, 8, ?", options: ["9", "10", "11", "12"], answer: "10" },
            { q: "Which number is even?", options: ["3", "7", "10", "9"], answer: "10" },
            { q: "Which shape has 4 equal sides?", options: ["Rectangle", "Triangle", "Square", "Circle"], answer: "Square" },
            { q: "Which is the largest number?", options: ["15", "9", "12", "18"], answer: "18" },
            { q: "Which number is a multiple of 5?", options: ["14", "21", "25", "33"], answer: "25" }
        ],

        medium: [
            { q: "Find the missing number: 5, 10, 20, ?, 80", options: ["30", "35", "40", "45"], answer: "40" },
            { q: "Which number is NOT a prime number?", options: ["11", "13", "15", "17"], answer: "15" },
            { q: "If a clock shows 3:00, how many degrees between hour and minute hand?", options: ["30°", "60°", "90°", "120°"], answer: "90°" },
            { q: "Which number is a perfect square?", options: ["20", "25", "27", "30"], answer: "25" },
            { q: "Which fraction is the largest?", options: ["1/4", "2/5", "3/8", "1/2"], answer: "1/2" }
        ],

        hard: [
            { q: "Find the odd one out: 2, 3, 5, 9, 11", options: ["2", "3", "9", "11"], answer: "9" },
            { q: "How many sides does a decagon have?", options: ["8", "9", "10", "12"], answer: "10" },
            { q: "Which number has exactly three factors?", options: ["4", "6", "8", "9"], answer: "4" },
            { q: "If today is Monday, what day will it be after 45 days?", options: ["Tuesday", "Wednesday", "Thursday", "Friday"], answer: "Thursday" },
            { q: "Which number is a perfect cube?", options: ["16", "27", "36", "49"], answer: "27" }
        ]
    },

    gk: {
        easy: [
            { q: "National flower of India?", options: ["Rose", "Lotus", "Lily", "Sunflower"], answer: "Lotus" },
            { q: "Capital of Maharashtra?", options: ["Nagpur", "Pune", "Mumbai", "Nashik"], answer: "Mumbai" },
            { q: "Which day is Independence Day?", options: ["Jan 26", "Aug 15", "Oct 2", "Nov 14"], answer: "Aug 15" },
            { q: "Largest continent?", options: ["Africa", "Europe", "Asia", "Australia"], answer: "Asia" },
            { q: "National bird of India?", options: ["Peacock", "Sparrow", "Eagle", "Parrot"], answer: "Peacock" }
        ],
        medium: [
            { q: "Who is known as the Iron Man of India?", options: ["Nehru", "Gandhi", "Sardar Patel", "Bose"], answer: "Sardar Patel" },
            { q: "Which planet is known as Red Planet?", options: ["Earth", "Venus", "Mars", "Jupiter"], answer: "Mars" },
            { q: "First Prime Minister of India?", options: ["Gandhi", "Nehru", "Patel", "Rajaji"], answer: "Nehru" },
            { q: "Largest desert in the world?", options: ["Sahara", "Gobi", "Kalahari", "Thar"], answer: "Sahara" },
            { q: "National currency of Japan?", options: ["Won", "Dollar", "Yen", "Peso"], answer: "Yen" }
        ],
        hard: [
            { q: "Who was the first President of India?", options: ["Rajendra Prasad", "Nehru", "Radhakrishnan", "Gandhi"], answer: "Rajendra Prasad" },
            { q: "Which country hosted 2020 Olympics?", options: ["China", "Japan", "Brazil", "France"], answer: "Japan" },
            { q: "Longest river in India?", options: ["Yamuna", "Ganga", "Godavari", "Narmada"], answer: "Ganga" },
            { q: "Currency of Russia?", options: ["Euro", "Ruble", "Peso", "Dinar"], answer: "Ruble" },
            { q: "Who discovered America?", options: ["Vasco da Gama", "Columbus", "Magellan", "Cook"], answer: "Columbus" }
        ]
    },

    science: {
        easy: [
            { q: "Boiling point of water?", options: ["90°C", "100°C", "110°C", "120°C"], answer: "100°C" },
            { q: "Which organ helps in breathing?", options: ["Heart", "Liver", "Lungs", "Kidney"], answer: "Lungs" },
            { q: "Which gas is essential for respiration?", options: ["Nitrogen", "Oxygen", "CO₂", "Hydrogen"], answer: "Oxygen" },
            { q: "Earth revolves around?", options: ["Moon", "Mars", "Sun", "Jupiter"], answer: "Sun" },
            { q: "Which part of plant makes food?", options: ["Root", "Stem", "Leaf", "Flower"], answer: "Leaf" }
        ],
        medium: [
            { q: "Vitamin C deficiency causes?", options: ["Rickets", "Scurvy", "Anemia", "Night Blindness"], answer: "Scurvy" },
            { q: "Which blood group is universal donor?", options: ["A", "B", "AB", "O"], answer: "O" },
            { q: "Speed of sound in air?", options: ["200 m/s", "330 m/s", "500 m/s", "1000 m/s"], answer: "330 m/s" },
            { q: "Which planet has rings?", options: ["Earth", "Mars", "Saturn", "Mercury"], answer: "Saturn" },
            { q: "Human brain is part of?", options: ["Digestive system", "Nervous system", "Respiratory system", "Circulatory system"], answer: "Nervous system" }
        ],
        hard: [
            { q: "SI unit of force?", options: ["Joule", "Pascal", "Newton", "Watt"], answer: "Newton" },
            { q: "pH value of pure water?", options: ["5", "6", "7", "8"], answer: "7" },
            { q: "Which metal is liquid at room temperature?", options: ["Iron", "Mercury", "Aluminum", "Silver"], answer: "Mercury" },
            { q: "Human chromosome pairs?", options: ["22", "23", "24", "46"], answer: "23" },
            { q: "Unit of electric current?", options: ["Volt", "Ampere", "Ohm", "Watt"], answer: "Ampere" }
        ]
    }
};


let questions = [];
let current = 0;
let score = 0;
let selectedAnswer = "";
let timer;
let timeLeft = 10;
let timeSpent = [];

function startQuiz() {
    let cat = document.getElementById("category").value;
    let diff = document.getElementById("difficulty").value;

    questions = questionBank[cat][diff];

    document.getElementById("homePage").style.display = "none";
    document.getElementById("quizPage").style.display = "block";

    loadQuestion();
}

function loadQuestion() {
    timeLeft = 10;
    document.getElementById("timer").innerText = timeLeft;

    let q = questions[current];
    document.getElementById("questionText").innerText = q.q;

    let output = "";
    q.options.forEach(opt => {
        output += `<div class="option" onclick="selectAns(this)">${opt}</div>`;
    });
    document.getElementById("optionsBox").innerHTML = output;

    startTimer();
}

function startTimer() {
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function selectAns(option) {
    selectedAnswer = option.innerText;

    document.querySelectorAll(".option")
        .forEach(o => o.style.background = "#f1f2f6");

    option.style.background = "#03fc41";
}

function nextQuestion() {
    clearInterval(timer);
    timeSpent.push(10 - timeLeft);

    if (selectedAnswer === questions[current].answer) score++;

    selectedAnswer = "";
    current++;

    if (current < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById("quizPage").style.display = "none";
    document.getElementById("resultPage").style.display = "block";

    document.getElementById("scoreText").innerHTML =
        `Correct: ${score} / ${questions.length} <br> Score: ${(score / questions.length * 100).toFixed(1)}%`;

    timeSpent.forEach((t, i) => {
        document.getElementById("timeList").innerHTML += `<li>Q${i + 1}: ${t} sec</li>`;
    });

    drawChart(score, questions.length - score);
}

function drawChart(correct, wrong) {
    let ctx = document.getElementById("chartCanvas").getContext("2d");
    let total = correct + wrong;

    let correctAngle = (correct / total) * 2 * Math.PI;
    let wrongAngle = (wrong / total) * 2 * Math.PI;

    ctx.beginPath();
    ctx.fillStyle = "green";
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 100, 0, correctAngle);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "red";
    ctx.moveTo(150, 150);
    ctx.arc(150, 150, 100, correctAngle, correctAngle + wrongAngle);
    ctx.fill();
}
