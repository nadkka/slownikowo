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

    for (let i=0; i<wyrazUp.length; i++){
        for(let x=0; x<wyrazUp[i].length; x++){
            if(zgadnij.charAt(x)==wyrazUp[i].charAt(x)){
                document.getElementById("nad").innerHTML+="<a class='poprawna'>"+ wyrazUp[i].charAt(x) + "</a>";
            }
            else{
                document.getElementById("nad").innerHTML+="<a class='zwykla'>"+ wyrazUp[i].charAt(x) + "</a>";
            }

        }
        document.getElementById("nad").innerHTML +="<br>";
        document.getElementById("wyraz").value="";

    }

    for (let i=0; i<wyrazDown.length; i++){
        for(let x=0; x<wyrazDown[i].length; x++){
            if(zgadnij.charAt(x)==wyrazDown[i].charAt(x)){
                document.getElementById("pod").innerHTML+="<a class='poprawna'>"+ wyrazDown[i].charAt(x) + "</a>";
            }
            else{
                document.getElementById("pod").innerHTML+="<a class='zwykla'>"+ wyrazDown[i].charAt(x) + "</a>";
            }

        }
        document.getElementById("pod").innerHTML +="<br>";
        document.getElementById("wyraz").value="";

    }

    /*document.getElementById("nad").innerHTML=wyrazUp.join("<br>");
    document.getElementById("pod").innerHTML=wyrazDown.join("<br>");
    document.getElementById("wyraz").value="";*/
    document.getElementById("life").innerHTML=ile;

    if(ile<1){
        document.getElementById("wynik").innerHTML="Zagadkowe słowo: "+ zgadnij;

    }
if(ile<0){
    window.location.reload();
}


}