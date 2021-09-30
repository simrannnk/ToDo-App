let input=document.querySelector(".task-input");
let ul=document.querySelector(".task-list");

function deleteTask(e){
    e.currentTarget.remove();
}
input.addEventListener("keypress",function(e){
    if(e.key=="Enter"){
    let task=input.value;
    if(!task)
    {
        alert("error- Adding empty task");
        return;
    }
    input.value=""
    let li=document.createElement("li");
    li.innerText=task;
    ul.appendChild(li);
    li.addEventListener("dblclick",deleteTask);
    //to insert list item on top
    //ul.insertBefore(li,ul.firstChild);  
    
}

})