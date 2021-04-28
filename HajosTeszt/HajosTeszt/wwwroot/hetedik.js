/*let kérdések;
let n = 1;

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );

}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;
    
}

function lepesKezel(lepes) {
    (async () => {
        const res = await fetch('/questions.json');
        const json = await res.json();
        const length = json.length;

        if (lepes === "vissza") {
            if (n - 1 < 0) {
                n = length - 1;
                kérdésMegjelenítés(n);
            } else {
                n = n - 1;
                kérdésMegjelenítés(n);
            }

        } else if (lepes === "elore") {
            if (n + 1 > length) {
                n = 0;
                kérdésMegjelenítés(n);
            } else {
                n = n + 1;
                kérdésMegjelenítés(n);
            }

        }
    })();
}

async function kérdésMegjelenítés(k) {
    (async () => {
        const res = await fetch('/questions.json');
        const json = await res.json();
        document.getElementById("kérdés_szöveg").innerText = json[k].questionText;
        document.getElementById("válasz1").innerText = json[k].answer1;
        document.getElementById("válasz2").innerText = json[k].answer2;
        document.getElementById("válasz3").innerText = json[k].answer3;
        document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + json[k].image
        console.log("n:" + k);
    })();
    

}

async function valaszKezel(valasz) {
    letöltés();
    
    let v = valasz;
    let helyes = kérdések[n].correctAnswer;
    console.log("helyes:" + helyes);
    document.getElementById("válasz" + helyes).style.backgroundColor = "green";
    for (var i = 1; i < kérdések.length+1; i++) {
        if (i !== helyes) {
            document.getElementById("válasz" + i).style.backgroundColor = "red";
        }
    }
}

window.onload = () => {
    letöltés();
    
    kérdésMegjelenítés(n);
    document.getElementById("vissza").addEventListener('click', () => lepesKezel("vissza"));
    document.getElementById("elore").addEventListener('click', () => lepesKezel("elore"));
    document.getElementById("válasz1").addEventListener('click', () => valaszKezel(1));
    document.getElementById("válasz2").addEventListener('click', () => valaszKezel(2));
    document.getElementById("válasz3").addEventListener('click', () => valaszKezel(3));
    
}*/
let kérdések;
let n = 5;
let kérdésSzám

/*fetch('/questions/1')
    .then(response => response.json())
    .then(data => kérdésMegjelenítés(data)
);*/

function letöltés() {
    fetch('/questions.json')
        .then(response => response.json())
        .then(data => letöltésBefejeződött(data)
        );

}

function letöltésBefejeződött(d) {
    console.log("Sikeres letöltés")
    console.log(d)
    kérdések = d;

}

function kérdésBetöltés(id) {
    fetch(`/questions/${id}`)
        .then(válaszfeldolgozás)
        .then(kérdésMegjelenítés)
        
}



function válaszfeldolgozás(válasz) {
    if (!válasz.ok) {
        console.error(`Hibás válasz: ${response.status}`)
    }
    else {
        return válasz.json()
    }
}

function kérdésMegjelenítés(kérdés) {
    console.log(kérdés);
    document.getElementById("kérdés_szöveg").innerText = kérdés.questionText
    document.getElementById("válasz1").innerText = kérdés.answer1
    document.getElementById("válasz2").innerText = kérdés.answer2
    document.getElementById("válasz3").innerText = kérdés.answer3
    document.getElementById("kép1").src = "https://szoft1.comeback.hu/hajo/" + kérdés.image;
}

function kérdésekSzáma() {
    fetch(`questions/count`)
        .then(response => {
            if (!response.ok) {
                console.error(`Hibás válasz: ${response.status}`)
            }
            else {
                return response.json()
            }
        })
        .then(data => { kérdésSzám = parseInt(data) });
}

async function valaszKezel(valasz) {
    letöltés();
        

    let v = valasz;
    let helyes = kérdések[n].correctAnswer;
    console.log("helyes:" + helyes);
    document.getElementById("válasz" + helyes).style.backgroundColor = "green";
    for (var i = 1; i < kérdések.length + 1; i++) {
        if (i !== helyes) {
            document.getElementById("válasz" + i).style.backgroundColor = "red";
        }
    }
}

function lepesKezel(lepes) {
    (async () => {
        const res = await fetch('/questions.json');
        const json = await res.json();
        const length = json.length;

        if (lepes === "vissza") {
            if (n - 1 < 0) {
                n = length - 1;
                kérdésBetöltés(n);
            } else {
                n = n - 1;
                kérdésBetöltés(n);
            }

        } else if (lepes === "elore") {
            if (n + 1 > length) {
                n = 0;
                kérdésBetöltés(n);
            } else {
                n = n + 1;
                kérdésBetöltés(n);
            }

        }
    })();
}

window.onload = () => {

    kérdésBetöltés(5);
    
    //window.alert("sometext");

    document.getElementById("vissza").addEventListener('click', () => lepesKezel("vissza"));
    document.getElementById("elore").addEventListener('click', () => lepesKezel("elore"));
    document.getElementById("válasz1").addEventListener('click', () => valaszKezel(1));
    document.getElementById("válasz2").addEventListener('click', () => valaszKezel(2));
    document.getElementById("válasz3").addEventListener('click', () => valaszKezel(3));

 }

