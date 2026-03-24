let keys = 0;
let currentLevel = 0;
window.addEventListener("DOMContentLoaded", () => {

    const video = document.getElementById("introVideo");
    const startBtn = document.getElementById("startBtn");

    // تشغيل الصوت بعد أول نقرة


    // عند انتهاء الفيديو يظهر زر البداية
    video.onended = () => {
        startBtn.style.display = "block";
    };

});
function startVideo(){

    const video = document.getElementById("introVideo");
    const overlay = document.getElementById("playOverlay");
    const startBtn = document.getElementById("startBtn");

    video.muted = false; // مهم

    video.play().then(() => {

        overlay.style.display = "none";

        video.onended = () => {
            startBtn.style.display = "block";
        };

    }).catch(() => {
        alert("اضغط مرة أخرى لتشغيل الصوت");
    });
}

// أول نقرة في الصفحة تفعل الصوت
document.body.addEventListener("click", () => {
    video.muted = false;
}, { once: true });

// 🎬 الفيديو
const introVideo = document.getElementById("introVideo");
const startBtn = document.getElementById("startBtn");

introVideo.onended = () => {
    startBtn.style.display = "block";
};

// 🔊 الأصوات
const clickSound = new Audio("assets/sounds/click.mp3");
const correctSound = new Audio("assets/sounds/correct.mp3");
const wrongSound = new Audio("assets/sounds/wrong.mp3");
const clapSound = new Audio("assets/sounds/clap.mp3");

// تشغيل الصوت
function playSound(sound){
    sound.currentTime = 0;
    sound.play().catch(()=>{});
}

// 🔀 خلط
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.5);
}

// 🎮 الأسئلة
const levels = [

{
question:"أيٌّ من العادات التالية يسبب زيادة في الوزن على المدى الطويل؟",
image:"assets/images/q1.png",
feedback:"لأن السعرات الحرارية في المشروبات السكرية تتراكم دون الإحساس بالشبع.",
answers: shuffle([
{text:"تناول وجبة كبيرة مرة أسبوعياً", correct:false},
{text:"المشي لمدة 10 دقائق يومياً", correct:false},
{text:"النوم 8 ساعات يومياً", correct:false},
{text:"شرب المشروبات الغازية يومياً", correct:true}
])
},

{
question:"لماذا قد يزداد وزن مراهق أسرع من صديقه رغم تناولهما نفس الكمية؟",
image:"assets/images/q2.png",
feedback:"بسبب اختلاف معدل الأيض وقدرة الجسم على تخزين الدهون.",
answers: shuffle([
{text:"بسبب نوع الملابس", correct:false},
{text:"لأن جسمه يخزن الدهون بشكل أكبر", correct:true},
{text:"بسبب قلة شرب الماء", correct:false},
{text:"بسبب الحظ", correct:false}
])
},

{
question:"أيٌّ من الخيارات التالية يُعدّ خداعاً صحياً؟",
image:"assets/images/q3.png",
feedback:"لأن العصائر الطبيعية تحتوي على كميات عالية من السكر عند الإفراط فيها.",
answers: shuffle([
{text:"عصير البرتقال الطبيعي بكثرة", correct:true},
{text:"الماء", correct:false},
{text:"تفاحة", correct:false},
{text:"الخضروات", correct:false}
])
},

{
question:"لماذا قد يؤدي قلة النوم إلى زيادة الوزن؟",
image:"assets/images/q4.png",
feedback:"لأنه يزيد هرمونات الجوع ويقلل الشعور بالشبع.",
answers: shuffle([
{text:"لأنه يمنع الأكل", correct:false},
{text:"لأنه يغير هرمونات الجوع", correct:true},
{text:"لأنه يقلل الحركة فقط", correct:false},
{text:"لا علاقة له", correct:false}
])
},

{
question:"أي نمط حياة يُعد أكثر خطراً للإصابة بالسمنة؟",
image:"assets/images/q5.png",
feedback:"لأن الجلوس الطويل يؤثر سلباً حتى مع وجود نشاط رياضي.",
answers: shuffle([
{text:"ممارسة الرياضة ساعة ثم الجلوس طوال اليوم", correct:true},
{text:"المشي طوال اليوم", correct:false},
{text:"النوم مبكراً", correct:false},
{text:"شرب الماء بكثرة", correct:false}
])
},

{
question:"هل ممارسة الرياضة بعد تناول وجبة سريعة تلغي السعرات؟",
image:"assets/images/q6.png",
feedback:"الرياضة تساعد ولكنها لا تلغي السعرات بالكامل.",
answers: shuffle([
{text:"نعم تماماً", correct:false},
{text:"لا، تقلل جزءاً فقط", correct:true},
{text:"يعتمد على الوقت", correct:false},
{text:"نعم مع شرب الماء", correct:false}
])
},

{
question:"لماذا يختلف الناس في سرعة فقدان الوزن؟",
image:"assets/images/q7.png",
answers: shuffle([
{text:"الحظ", correct:false},
{text:"الجينات والعادات", correct:true},
{text:"الطول", correct:false},
{text:"لون البشرة", correct:false}
])
},

{
question:"أي سلوك يساعد أكثر في تقليل السمنة؟",
image:"assets/images/q8.png",
answers: shuffle([
{text:"الحرمان من الأطعمة المفضلة", correct:false},
{text:"التوازن واعتدال الكميات", correct:true},
{text:"الصيام الطويل", correct:false},
{text:"تناول وجبة واحدة يومياً", correct:false}
])
},

{
question:"متى يكون الجوع حقيقياً؟",
image:"assets/images/q9.png",
answers: shuffle([
{text:"عند اشتهاء نوع معين من الطعام", correct:false},
{text:"عند تقبل أي طعام متاح", correct:true},
{text:"عند الشعور بالملل", correct:false},
{text:"عند مشاهدة إعلان", correct:false}
])
},

{
question:"ما الخيار الأفضل للمراهقين؟",
image:"assets/images/q10.png",
answers: shuffle([
{text:"اتباع حمية قاسية", correct:false},
{text:"تقليل الطعام مع زيادة الحركة", correct:true},
{text:"منع الكربوهيدرات تماماً", correct:false},
{text:"تناول وجبة واحدة فقط", correct:false}
])
},

{
question:"لماذا تسبب الوجبات السريعة زيادة الوزن؟",
image:"assets/images/q11.png",
answers: shuffle([
{text:"لأنها لذيذة", correct:false},
{text:"لأنها عالية السعرات وقليلة الشبع", correct:true},
{text:"لأنها غالية", correct:false},
{text:"لأنها حارة", correct:false}
])
},

{
question:"أيٌّ من العبارات التالية خاطئة؟",
image:"assets/images/q12.png",
feedback:"السمنة لها أسباب متعددة وليست بسبب الكسل فقط.",
answers: shuffle([
{text:"الرياضة تساعد", correct:false},
{text:"النوم مهم", correct:false},
{text:"السمنة سببها الكسل فقط", correct:true},
{text:"التغذية مهمة", correct:false}
])
},

{
question:"أي نشاط يحرق سعرات حرارية أكثر؟",
image:"assets/images/q13.png",
answers: shuffle([
{text:"الجلوس", correct:false},
{text:"النوم", correct:false},
{text:"الوقوف والحركة", correct:true},
{text:"استخدام الهاتف", correct:false}
])
},

{
question:"ما أفضل خطوة أولى لتحسين الصحة؟",
image:"assets/images/q14.png",
answers: shuffle([
{text:"اتباع حمية قاسية", correct:false},
{text:"زيادة الحركة اليومية", correct:true},
{text:"إيقاف الأكل", correct:false},
{text:"تناول أدوية للتخسيس", correct:false}
])
},

{
question:"أي عامل نفسي قد يسبب زيادة الوزن؟",
image:"assets/images/q15.png",
feedback:"الأكل العاطفي مرتبط بالتوتر.",
answers: shuffle([
{text:"التوتر", correct:true},
{text:"السعادة", correct:false},
{text:"النوم", correct:false},
{text:"الدراسة", correct:false}
])
}

];

// ▶️ بدء اللعبة
function startGame() {
    document.getElementById("intro").style.display = "none";
    document.getElementById("game").style.display = "block";
    loadLevel();
}

// تحميل السؤال
function loadLevel() {

    let level = levels[currentLevel];
    let progress = ((currentLevel+1)/levels.length)*100;

    document.getElementById("game").innerHTML = `
<div id="homeBtn" onclick="goHome()">🏠</div>

<div id="progressText">
    المرحلة ${currentLevel + 1} / ${levels.length}
</div>

<div id="progressBar">
    <div id="progressFill" style="width:${progress}%"></div>
</div>



<div class="question-box">

    <img src="${level.image}" class="question-image">

    <p class="question-text">${level.question}</p>

</div>

<div id="choices"></div>

<p id="feedback"></p>

<button id="nextBtn">➜</button>
`;

    let choicesDiv = document.getElementById("choices");

    level.answers.forEach(ans => {

        let btn = document.createElement("button");
        btn.innerText = ans.text;

        btn.onclick = () => {
            playSound(clickSound);

            btn.style.transform = "scale(0.95)";

            setTimeout(()=>{
                btn.style.transform = "";

                if (ans.correct) success();
                else fail();
            },150);
        };

        choicesDiv.appendChild(btn);
    });
}

// ✅ نجاح
function success(){

    playSound(correctSound);

    keys++;

    let level = levels[currentLevel];

document.getElementById("feedback").innerText =
"✅ إجابة صحيحة! " + (level.feedback || "");

    // ⭐ نجوم
    for(let i=0;i<5;i++){
        let star=document.createElement("div");
        star.innerText="⭐";
        star.className="star";
        star.style.left=Math.random()*80+"%";
        star.style.top="60%";

        document.body.appendChild(star);

        setTimeout(()=>star.remove(),1000);
    }

    const nextBtn = document.getElementById("nextBtn");

nextBtn.classList.add("show");

nextBtn.onclick = () => {

    playSound(clickSound);

    currentLevel++;

    if(currentLevel < levels.length){
        animateTransition(loadLevel);
    } else {
        winGame();
    }
};
}

// ❌ خطأ
function fail(){
    playSound(wrongSound);

    const game = document.getElementById("game");

    game.classList.add("shake");

    setTimeout(()=>{
        game.classList.remove("shake");
    },400);

    document.getElementById("feedback").innerText="❌ حاول مرة أخرى";
}

// 🎉 الفوز
function winGame(){

    playSound(clapSound);

    document.getElementById("game").innerHTML = `
        <h1>🏆 مبروك!</h1>
        <p>جمعت ${keys} مفاتيح!</p>
        <button class="restartBtn" onclick="restartGame()">↻</button>
    `;
}

// 🏠 رجوع
function goHome(){
    playSound(clickSound);

    currentLevel = 0;
    keys = 0;

    document.getElementById("game").style.display = "none";
    document.getElementById("intro").style.display = "block";
}

// 🔁 إعادة
function restartGame(){
    currentLevel = 0;
    keys = 0;
    loadLevel();
}
function animateTransition(callback){

    const game = document.getElementById("game");

    game.classList.add("fade-out");

    setTimeout(()=>{
        callback();
        game.classList.remove("fade-out");
        game.classList.add("fade-in");

        setTimeout(()=>{
            game.classList.remove("fade-in");
        },300);

    },300);
}
