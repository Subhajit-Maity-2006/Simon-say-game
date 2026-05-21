let gameseq=[];
let userseq=[];

let sterted=false;
let level=0;

let btns=["yellow","red","purple","green"];

let h2 =document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(sterted==false){
        console.log("game is started");
        sterted=true;

        levelup();
    }
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout( function(){
        btn.classList.remove("flash");
    },250)
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function(){
        btn.classList.remove("userflash");
    },250)
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText =`Level ${level}`;

    let randidx = Math.floor(Math.random() * 3);
    let radncolor=btns[randidx];
    let randbtn =document.querySelector(`.${radncolor}`);
    gameseq.push(radncolor);
    gameflash(randbtn);

}

function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML =`Game over! your score was <b>${level}</b><br> press any key to stert `;
        document.querySelector("body").style.backgroundcolor="red";
       setTimeout(function(){
         document.querySelector("body").style.backgroundcolor="white";
       }, 150);
        reset();
    }
}


function btnpress(){
    let btn=this;
    userflash(btn);
    usercolor=btn.getAttribute("id");
    userseq.push(usercolor);

    checkans(userseq.length-1);
}

let allbtn=document.querySelectorAll(".btn");
for(btn of allbtn){
    btn.addEventListener("click",btnpress);
}
function reset(){
    sterted=false;
    gameseq=[];
    userseq=[];
    level=0;
}
