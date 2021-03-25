let kérdések;
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
    //console.log("k:" + kérdések.length)
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
    //console.log(kérdések.length);
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
    
    
    

}
