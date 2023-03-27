// question number-1;
let text=document.getElementById('text')
console.log(text.innerText);


// question number -2
 let item = document.getElementsByTagName("p");
 function suchi() {
   console.log(item[0].innerText);
 }

let box1=document.getElementByClassName('box')
connect.log('box1');

letQ4=document.getElementByTagName('h3');
let newtext="hello world";
Q4.innerText=newtext;
console.log(Q4.innertext);

let Q5=document.getElementByClassName('replace')
function sendme(){
    console.log(Q5[0]);
    Q5[0].innerText="Welcome to prebytes world";
}

//6.
let heading=document.getElementById('head').style.color="blue"
console.log(heading)



//7.
let parent=document.querySelector('.parent');
let btn=document.querySelector('button');
let count=0;
btn.addEventListener('click',()=>{
    if(count%2===0){
    parent.setAttribute('style','flex-direction:column');
    count++;
    console.log(count);
    }
    else{
        parent.setAttribute('style','flex-direction:row');
        count++;
        console.log(count);
    }
})

//9.
function D(){
    let time = new Date();
    let hours=time.getHours();
    let mins=time.getMinutes();
    let sec=time.getSeconds();

    let timeZone= '${hours} : ${mins} : ${sec}';
    input.innerText=timeZone;
}
setInterval(()=> {
    D();
},1000);

