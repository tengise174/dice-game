// Тоглогчийн ээлжийг хадгалах хувьсагч
var activePlayer = 0;

// Тоглогчдийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];

//тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгалах хувьсагч
var roundScore = 0;

//Шооны аль талаараа буусныг хадгалах хувьсагч
var diceNumber = Math.random();

// Програм эхлэхэд бэтлгэе
document.getElementById("score-0").textContent = "0";
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

var diceDom = document.querySelector(".dice");

diceDom.style.display = "none";


// Шоог шидэх эвент листенер
document.querySelector(".btn-roll").addEventListener("click", function () {
    //1-6 дотор санамсаргүй нэг тоо гаргаж авна
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    //Шооны зургийг гаргаж ирнэ
    diceDom.style.display = "block";
    //Буусан санамсаргүй тоонд харгалзах шооны зургийг вэб дээр гаргаж ирнэ
    diceDom.src = "dice-" + diceNumber + ".png";

    // Буусан тоо нь 1-ээс ялгаатай бол идэвхтэй тыоглогчийн ээлжийн оноог өөрчилнө
    if (diceNumber !== 1) {
        //1-ээс ялгаатай тоо буух үед
        roundScore = roundScore + diceNumber;
        document.getElementById("current-" + activePlayer).textContent = roundScore;

    } else {
        //1 буусан тул тоглогчийн ээлжийг солино.
        switchToNextPlayer();
    }

});

document.querySelector(".btn-hold").addEventListener("click", function () {
    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

    //Хожсон эсэхийг шалгах
    if (scores[activePlayer] >= 10) {
        document.getElementById("name-" + activePlayer).textContent = "WINNER!!!";
        document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
        document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
    } else {
        switchToNextPlayer();
    }
})


document.querySelector(".btn-new").addEventListener("click", function () {
    alert("good");
})

function switchToNextPlayer() {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;

    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    //Улаан цэгийг шилжүүлэх
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");

    diceDom.style.display = "none";
}





