//console.log("minta fut!")

function pasc(n) {
    var result = [];
    result[0] = [1];
    result[1] = [1, 1];
    for (var row = 2; row < n; row++) {
        result[row] = [1];
        for (var col = 1; col <= row - 1; col++) {
            result[row][col] = result[row - 1][col] + result[row - 1][col - 1];
            result[row].push(1);
        }
    }
    return result;
}

window.onload = () => {
    console.log("betöltődött")
    let hova = document.getElementById("pascal")
    //console.log(hova.id)
    for (var s = 0; s < 10; s++) {
        
        //új div létrehozása az új sornak
        let sor = document.createElement("div");
        //új div osztálylistájához add hozzá a "sor"-t
        sor.classList.add("egymás_mellé")
        //új div-et add hozzá a "pascal" gyermekeihez
        hova.appendChild(sor)
        for (var o = 0; o <= 10; o++) {
            //új div létrehozása az új elemnek
            //var div2 = document.createElement("div");
            //új elem div osztálylistájához add hozzá az "elem"-et
           // div2.classList.add("elem")
            //teszteléshet .innerHTML = `${sor}:${oszlop}`
            //div2.innerHTML = `${sor}:${oszlop}`
            //új elem div-et vedd fel a sor elemei közé
            //document.getElementById("sor").appendChild(div2)
            let szám = document.createElement("div")
            sor.appendChild(szám)
            let a = pasc(10)[s][o]
            console.log(a)
            if (a === undefined) {
                szám.innerText = Array(s).fill('\xa0').join('')
            }
            else {
                szám.innerText = a
            }
            
            szám.classList.add("doboz")
            szám.style.color = `rgb(${255 / 10 * s},0,${255 / 10 * o})`
            
        }
    }
}

var faktorialis = function (n) {
    let er = 1;
    for (var i = 2; i <= n; i++) {
        er = er * i;
    }
    return er;
}

for (var i = 0; i < 10; i++) {
    //console.log(`${i} : ${faktorialis(i)}`)

}

function számítás() {
    let n = document.getElementById("nTb").value
    let n2 = parseInt(n)
    if (n2) {
        // alert(n)
        let er = faktorialis(n)
        document.getElementById("eredményDiv").innerText = er
    }
    else {
        document.getElementById("eredményDiv").innerText = "?"
    }
   
}