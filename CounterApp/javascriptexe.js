let al = document.getElementById("count-el");
let prescore = document.getElementById("prev");
let num = 0;

function increase(){
    num += 1;
    al.innerText = num;
}

function decrease(){
    if (num>0){
        num -= 1;
        al.innerText = num;
    }
    else (alert ("Invalid Input"))
}  

function save(){
    if (num>0){
        let lave = num + "-";
        prescore += lave;
        al.innerText = 0;
        num = 0
    }
    else (alert ("Invalid Input"))
}