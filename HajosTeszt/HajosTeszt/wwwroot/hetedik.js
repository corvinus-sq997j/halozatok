///*let kérdések;
//let n = 1;

//function letöltés() {
//    fetch('/questions.json')
//        .then(response => response.json())
//        .then(data => letöltésBefejeződött(data)
//        );

//}

//function letöltésBefejeződött(d) {
//    console.log("Sikeres letöltés")
//    console.log(d)
//    kérdések = d;
    
//}

//function lepesKezel(lepes) {
//    (async () => {
//        const res = await fetch('/questions.json');
//        const json = await res.json();
//        const length = json.length;

//        if (lepes === "vissza") {
//            if (n - 1 < 0) {
//                n = length - 1;
//                kérdésMegjelenítés(n);
//            } else {
//                n = n - 1;
//                kérdésMegjelenítés(n);
//            }

//        } else if (lepes === "elore") {
//            if (n + 1 > length) {
//                n = 0;
//                kérdésMegjelenítés(n);
//            } else {
//                n = n + 1;
//                kérdésMegjelenítés(n);
//            }

//        }
//    })();
//}

//async function kérdésMegjelenítés(k) {
//    (async () => {
//        const res = await fetch('/questions.json');
//        const json = await res.json();
//        document.getElementById("kérdés_szöveg").innerText = json[k].questionText;
//        document.getElementById("válasz1").innerText = json[k].answer1;
//        document.getElementById("válasz2").innerText = json[k].answer2;
//        document.getElementById("válasz3").innerText = json[k].answer3;
//        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + json[k].image
//        console.log("n:" + k);
//    })();
    

//}

//async function valaszKezel(valasz) {
//    letöltés();
    
//    let v = valasz;
//    let helyes = kérdések[n].correctAnswer;
//    console.log("helyes:" + helyes);
//    document.getElementById("válasz" + helyes).style.backgroundColor = "green";
//    for (var i = 1; i < kérdések.length+1; i++) {
//        if (i !== helyes) {
//            document.getElementById("válasz" + i).style.backgroundColor = "red";
//        }
//    }
//}

//window.onload = () => {
//    letöltés();
    
//    kérdésMegjelenítés(n);
//    document.getElementById("vissza").addEventListener('click', () => lepesKezel("vissza"));
//    document.getElementById("elore").addEventListener('click', () => lepesKezel("elore"));
//    document.getElementById("válasz1").addEventListener('click', () => valaszKezel(1));
//    document.getElementById("válasz2").addEventListener('click', () => valaszKezel(2));
//    document.getElementById("válasz3").addEventListener('click', () => valaszKezel(3));
    
//}*/
///*let kérdések;
//let n = 5;
//let kérdésSzám*/

//var jóVálasz;
//var questionId = 5
//var hotList = [];           //Az éppen gyakoroltatott kérdések listája 
//var questionsInHotList = 3; //Ez majd 7 lesz, teszteléshez jobb a 3. 
//var displayedQuestion;      //A hotList-ből éppen ez a kérdés van kint
//var numberOfQuestions;      //Kérdések száma a teljes adatbázisban
//var nextQuestion = 1;       //A következő kérdés száma a teljes listában
//var timeoutHandler;

///*fetch('/questions/1')
//    .then(response => response.json())
//    .then(data => kérdésMegjelenítés(data)
//);*/

///*function letöltés() {
//    fetch('/questions.json')
//        .then(response => response.json())
//        .then(data => letöltésBefejeződött(data)
//        );

//}

//function letöltésBefejeződött(d) {
//    console.log("Sikeres letöltés")
//    console.log(d)
//    kérdések = d;

//}*/

///*function kérdésBetöltés(id) {
//    fetch(`/questions/${id}`)
//        .then(válaszfeldolgozás)
//        .then(kérdésMegjelenítés)
        
//}*/

//function init() {
//    for (var i = 0; i < questionsInHotList; i++) {
//        let q = {
//            question: {},
//            goodAnswers: 0
//        }
//        hotList[i] = q;
//    }

//    //Első kérdések letöltése
//    for (var i = 0; i < questionsInHotList; i++) {
//        kérdésBetöltés(nextQuestion, i);
//        nextQuestion++;
//    }
//}

//function kérdésBetöltés(questionNumber, destination) {
//    fetch(`/questions/${questionNumber}`)
//        .then(
//            result => {
//                if (!result.ok) {
//                    console.error(`Hibás letöltés: ${response.status}`)
//                }
//                else {
//                    return result.json()
//                }
//            }
//        )
//        .then(
//            q => {
//                hotList[destination].question = q;
//                hotList[destination].goodAnswers = 0;
//                console.log(`A ${questionNumber}. kérdés letöltve a hot list ${destination}. helyére`)
//                if (displayedQuestion == undefined && destination == 0) { //!!!!!!!!!!!!!
//                    displayedQuestion = 0;
//                    kérdésMegjelenítés();
//                }
//            }
//        );
//}


///*function kérdésBetöltés(id) {
//    fetch(`/questions/${id}`)
//        .then(response => {
//            if (!response.ok) {
//                console.error(`Hibás válasz: ${response.status}`)
//            }
//            else {
//                kérdésMegjelenítés(response.json())
//            }
//        })
//}  
//*/

//function válaszfeldolgozás(válasz) {
//    if (!válasz.ok) {
//        console.error(`Hibás válasz: ${response.status}`)
//    }
//    else {
//        return válasz.json()
//    }
//}



//function kérdésMegjelenítés() {
//    //if (!kérdés) return; //Ha undefined a kérdés objektum, nincs mit tenni
//    let kérdés = hotList[displayedQuestion].question;
//    console.log(kérdés);
//    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
//    document.getElementById("válasz1").innerText = kérdés.answer1
//    document.getElementById("válasz2").innerText = kérdés.answer2
//    document.getElementById("válasz3").innerText = kérdés.answer3
//    jóVálasz = kérdés.correctAnswer;
//    if (kérdés.image) {
//        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
//        document.getElementById("kép1").classList.remove("rejtett")
//    }
//    else {
//        document.getElementById("kép1").classList.add("rejtett")
//    }
//    //Jó és rossz kérdések jelölésének levétele
//    document.getElementById("válasz1").classList.remove("jó", "rossz");
//    document.getElementById("válasz2").classList.remove("jó", "rossz");
//    document.getElementById("válasz3").classList.remove("jó", "rossz");
//}

//function előre() {
//    clearTimeout(timeoutHandler)
//    displayedQuestion++;
//    if (displayedQuestion == questionsInHotList) displayedQuestion = 0;
//    kérdésMegjelenítés()
//}

//function vissza() {
//    questionId--;
//    kérdésBetöltés(questionId)
//}

///*function kérdésekSzáma() {
//    fetch(`questions/count`)
//        .then(response => {
//            if (!response.ok) {
//                console.error(`Hibás válasz: ${response.status}`)
//            }
//            else {
//                return response.json()
//            }
//        })
//        .then(data => { kérdésSzám = parseInt(data) });
//}

//async function valaszKezel(valasz) {
//    letöltés();
        

//    let v = valasz;
//    let helyes = kérdések[n].correctAnswer;
//    console.log("helyes:" + helyes);
//    document.getElementById("válasz" + helyes).style.backgroundColor = "green";
//    for (var i = 1; i < kérdések.length + 1; i++) {
//        if (i !== helyes) {
//            document.getElementById("válasz" + i).style.backgroundColor = "red";
//        }
//    }
//}

//function lepesKezel(lepes) {
//    (async () => {
//        const res = await fetch('/questions.json');
//        const json = await res.json();
//        const length = json.length;

//        if (lepes === "vissza") {
//            if (n - 1 < 0) {
//                n = length - 1;
//                kérdésBetöltés(n);
//            } else {
//                n = n - 1;
//                kérdésBetöltés(n);
//            }

//        } else if (lepes === "elore") {
//            if (n + 1 > length) {
//                n = 0;
//                kérdésBetöltés(n);
//            } else {
//                n = n + 1;
//                kérdésBetöltés(n);
//            }

//        }
//    })();
//}*/

//function választás(n) {
//    timeoutHandler = setTimeout(előre, 3000);

//    if (n != jóVálasz) {
//        console.log(n);
//        document.getElementById(`válasz${n}`).classList.add("rossz");
//        document.getElementById(`válasz${jóVálasz}`).classList.add("jó");
//    }
//    else {
//        document.getElementById(`válasz${jóVálasz}`).classList.add("jó");
//    }
//    //document.getElementById(`válasz${n}`).style.pointerEvents = "none"

//}

//function utolso_ellenorzes() {

//}

//window.onload = function (e) {
//    console.log("Oldal betöltve...");
//    document.getElementById("elore_gomb").onclick = előre;
//    document.getElementById("vissza_gomb").onclick = vissza;
//    kérdésBetöltés(questionId)
//    //választás(questionId)
//    document.getElementById("válasz1").addEventListener('click', () => választás(1));
//    document.getElementById("válasz2").addEventListener('click', () => választás(2));
//    document.getElementById("válasz3").addEventListener('click', () => választás(3));
//}

