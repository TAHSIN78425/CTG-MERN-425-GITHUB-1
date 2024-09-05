
function addValue(){

const taskInput=document.getElementById("Task-input");
const taskValue=taskInput.value;

if(taskValue==""){
    alert("Input Needed")
}
//ADD TASK
const taskList=document.getElementById("tasklist");
const li=document.createElement("li");
const span=document.createElement("span");
span.textContent=taskValue;
//Edit button
const Edit=document.createElement("button");
Edit.textContent="Edit";
Edit.classList.add("edit");

Edit.addEventListener('click',function(){

const newTask=prompt("Edit Task",span.textContent)
span.textContent=newTask;

});
//Delete Button
const Delete=document.createElement("button");
Delete.textContent="Delete";
Delete.classList.add("delete");
Delete.addEventListener('click',function(){

taskList.removeChild(li);

});
//cOMPLETED
const completed=document.createElement("button");
completed.textContent="✅";
completed.classList.add("completed");
completed.addEventListener('click',function(){

li.classList.toggle('done');

});


li.appendChild(span);
li.appendChild(Edit);
li.appendChild(Delete);
li.appendChild(completed);
taskList.appendChild(li);
taskInput.value="";

};


document.getElementById("add-task").addEventListener('click', addValue);


document.getElementById("Task-input").addEventListener('keypress',function(e){

if(e.code=="Enter"){


    addValue();
}


})