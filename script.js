document.onselectstart = function(){return false;};

let ile=15;
let wyrazy=["słoń", "kaczka", "dywan"];

let los= Math.floor(Math.random()*wyrazy.length);
let zgadnij = wyrazy[los];
zgadnij=zgadnij.toUpperCase();

console.log(zgadnij);


let wyrazUp=[];
let wyrazDown=[];

function slowo(){
    document.getElementById("nad").innerHTML="";
    document.getElementById("pod").innerHTML="";

    let wyraz = document.getElementById("wyraz").value;
    wyraz=wyraz.toUpperCase();
    ile-=1;
    if(zgadnij==wyraz){
        let ilep = 15- ile;
        if( ilep== 1 ){
            document.getElementById("wynik").innerHTML="Brawo! Odgadłes w " + ilep+ " próbie! Wyraz: "+ zgadnij;
        }
        else{
            document.getElementById("wynik").innerHTML="Brawo! Odgadłes w " + ilep+ " próbach! Wyraz: "+ zgadnij;
        }

    }
    if(wyraz<zgadnij){
        wyrazUp.push(wyraz);

    }
    if(wyraz>zgadnij){
        wyrazDown.push(wyraz);
    }

    wyrazUp.sort();
    wyrazDown.sort();

    document.getElementById("nad").innerHTML=wyrazUp.join("<br>");
    document.getElementById("pod").innerHTML=wyrazDown.join("<br>");
    document.getElementById("wyraz").value="";
    document.getElementById("life").innerHTML=ile;

}