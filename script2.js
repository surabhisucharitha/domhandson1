let body=document.querySelector('body');
let randomNumber=Math.floor(Math.random()*100);
let b=document.getElementByTagName("b");
let ga5=document.getElementById("game5");
let ga6=document.getElementById("game6");
let ga7=document.getElementById("game7");
let ga8=document.getElementById("game8");
let count=100;
ga7.addEventListener('click',()=>{
    if(randomNumber < parseInt(ga6.value)){
        ga8.innerText="Guess is High"
        count--;
        b[1].innerHTML=count;
    }
    else if(randomNumber>parseInt(ga6.value)){
        ga8.innerText="Guess is low";
        count--;
        b[1].innerHTML=count;
    }
    else{
        ga8.innerText="correct Guess Tou Won..!";
        count--;
        ga5.innerText=randomNumber;
        b[2].innerText=count;
        body.setAttribute("style","background-color:green");
    }
})