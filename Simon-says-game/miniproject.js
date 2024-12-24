let gameseq=[];
let userseq=[];
let btns=["yellow", "red", "green", "blue"];
let started=false;
let level=0;
let h2=document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("game started");
        started =true;
        levelUp();
    } 
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp(){
    userseq =[];
    level++;
    h2.innerText = `Level ${level}`; 

    let raninx = Math.floor(Math.random()*3);
    let randColor = btns[raninx];
    let ranbtn=document.querySelector(`.${randColor}`);
    // console.log(raninx);
    // console.log(randColor);
    // console.log(ranbtn);

    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(ranbtn);
}

function checkAns(idx){
    // console.log("curr level:", level);
    // let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        // console.log("same value");
        if(userseq.length==gameseq.length){
            setTimeout(levelUp, 500);
        }
    } else {
        h2.innerHTML = `Game Over! Your Score was <b>${level}</b> <br> Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        }, 150);
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn=this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started =false;
    gameseq=[];
    userseq=[];
    level=0;
}