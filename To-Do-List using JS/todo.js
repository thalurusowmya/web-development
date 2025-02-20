let btn = document.querySelector("button");
let ul=document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let item= document.createElement("li");
    item.innerText=inp.value;

    let delbtn= document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    ul.appendChild(item);
    console.log(inp.value);
    inp.value="";
});

ul.addEventListener("click", function(event){
    // console.log(event.target);
    if(event.target.nodeName == "BUTTON"){
        let listitem = event.target.parentElement;
        listitem.remove();
        // console.log(listitem);
        console.log("deleted");
    }
    // console.log("button clicked");
});


// let delbtns=document.querySelectorAll(".delete");
// for (delbtn of delbtns){
//     delbtn.addEventListener("click", function(){
//         // console.log("element deleted");
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }
