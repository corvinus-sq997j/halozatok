if (localStorage.getItem("nDiakAz") === null) {
    localStorage.setItem('nDiakAz', 12)
}
let nvarDiakAz = parseInt(localStorage.getItem("nDiakAz"));
function init() {
    diakokSzama();
    diakKulcs(2);
    rekordListazas();
    fetch('/diak/all')
        .then(response => response.json())
        .then(data => kiiratás(data)

    );
    
    
    document.getElementById("addButton").addEventListener("click", () => {

        //Ezt az objektumot fogjuk átküldeni
        let data = {
            DiakAz: nvarDiakAz,
            Nev: document.getElementById("diakText").value,
            Szulido: document.getElementById("bdayText").value
        }

        console.log(data);
        
        fetch("api/diak",
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(x => {
                if (x.ok) {
                    alert("Siker");
                    nvarDiakAz++;
                    localStorage.setItem("nDiakAz", nvarDiakAz);
                    init();


                }
                else {
                    alert("Kudarc");
                }
            });

    });
    document.getElementById("diakazButton").addEventListener("click", () => {

        //Ezt az objektumot fogjuk átküldeni
        let data = {
            diakText: document.getElementById("diakazText").value
        }


        fetch("api/diak",
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(x => {
                if (x.ok) {
                    //alert("Siker");

                }
                else {
                    alert("Kudarc");
                    //console.log(x.statusText);
                }
            });

    });
}
function kiiratás(lista) {
    console.log(lista)
    for (var i = 0; i < lista.length; i++) {
        let újElem = document.createElement("div");
        újElem.innerText = lista[i];
        document.getElementById("eredmeny").appendChild(újElem);
    }
}


function diakokSzama() {
    fetch("diak/count")
        .then(result => result.text())
        .then(n => {
            document.getElementById("count").innerText =
            "2. feladat, a rekordok száma a táblában: /diak/count = " + parseInt(n) })
    
}



function diakKulcs(azonosito) {
    fetch(`/diak/${azonosito}`)
        .then(result => result.text())
        .then(n => {
            document.getElementById("lekerdezes").innerText = n
        })

}

function rekordListazas() {
    fetch("api/diak")
        .then(result => result.text())
        .then(n => {
            document.getElementById("listazas").innerText = n
                
        })

}
document.addEventListener("DOMContentLoaded", init)
