const inputBox=document.getElementById("input");
const listitems=document.getElementById("list_container");


function AddTask(){
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else{
        let list=document.createElement("li");
        list.innerHTML = input.value;
        listitems.appendChild(list);
        let span= document.createElement('span');
        span.innerHTML = "\u00d7";
        list.appendChild(span);
    }
    input.value = "";
    SaveData();
}

listitems.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        SaveData();
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        SaveData();
    }
}, false);


function SaveData(){
    localStorage.setItem("data",listitems.innerHTML);
}

function ShowTask(){
    listitems.innerHTML = localStorage.getItem("data");
}
ShowTask();