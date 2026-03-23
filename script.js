let currentLevel = 0;

const levels = [
    {
        question: "ما هي السمنة لدى المراهقين؟",
        answers: [
            "زيادة طبيعية في الوزن",
            "تراكم الدهون بشكل مفرط",
            "نقص في الوزن"
        ],
        correct: 1
    },
    {
        question: "ما سبب زيادة السمنة؟",
        answers: [
            "النشاط البدني",
            "تناول الوجبات السريعة",
            "شرب الماء"
        ],
        correct: 1
    },
    {
        question: "ما أحد مخاطر السمنة؟",
        answers: [
            "القوة البدنية",
            "السكري",
            "زيادة التركيز"
        ],
        correct: 1
    }
];

// أصوات
const correctSound = new Audio("correct.mp3");
const wrongSound = new Audio("wrong.mp3");
const clapSound = new Audio("clap.mp3");

function loadLevel() {
    let level = levels[currentLevel];

    document.getElementById("question").innerText = level.question;

    let buttons = document.querySelectorAll("#choices button");
    buttons.forEach((btn, i) => {
        btn.innerText = level.answers[i];
    });

    document.getElementById("feedback").innerText = "";
    document.getElementById("nextBtn").style.display = "none";
}

function checkAnswer(choice) {
    let level = levels[currentLevel];

    if (choice === level.correct) {
        correctSound.play();
        clapSound.play();
        document.getElementById("feedback").innerText = "🎉 أحسنت! إجابة صحيحة";
        document.getElementById("nextBtn").style.display = "block";
    } else {
        wrongSound.play();
        document.getElementById("feedback").innerText = "❌ حاول مرة أخرى";
    }
}

function nextLevel() {
    currentLevel++;

    if (currentLevel < levels.length) {
        loadLevel();
    } else {
        document.getElementById("game").innerHTML = "🏆 مبروك! خرجت من جميع الغرف!";
    }
}

loadLevel();