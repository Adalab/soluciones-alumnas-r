'use strict';

const taskListEl = document.querySelector('.js-task-list');
const resultEl = document.querySelector('.js-result');

const tasks = [
    { name: "Recoger setas en el campo", completed: true },
    { name: "Comprar pilas", completed: true },
    { name: "Poner una lavadora de blancos", completed: true },
    {
        name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
        completed: false,
    },
];

//Following steps

let completedTasks = '';
let uncompletedTasks = '';

function paintTask(){
    let listItem = '';
    for (let i=0; i<tasks.length; i++){
        if (tasks[i].completed === true){
            listItem = `<li class="task line-through">${tasks[i].name}</li>`;
            const labelElementChecked = `<label><input class="checkbox" id="${i}" checked type="checkbox" value="completed"/>Completed</label>`;
            listItem += labelElementChecked;
            completedTasks++;
        }else{
            listItem = `<li class="task">${tasks[i].name}</li>`;
            const labelElement = `<label><input class="checkbox" id="${i}" type="checkbox" value="completed"/>Completed</label>`;
            listItem += labelElement;
            uncompletedTasks++;
            }
        taskListEl.innerHTML += listItem;  
        }
        resultEl.innerHTML = `Tienes ${tasks.length} tareas. ${completedTasks} completadas y ${uncompletedTasks} por realizar.`;  
}

paintTask();

const inputList = document.querySelectorAll('.checkbox');

const taskList = document.querySelectorAll('.task');

console.log(inputList);


for (let i=0; i<inputList.length; i++){
    inputList[i].addEventListener('change',(event)=>{
        if(event.currentTarget.checked){
            taskList[i].classList.add('line-through');
            uncompletedTasks--;
            completedTasks++;
            tasks[i].completed = true;
            console.log(tasks);
        }else{
            taskList[i].classList.remove('line-through');
            uncompletedTasks++;
            completedTasks--;
            tasks[i].completed = false;
            console.log(tasks);
        }
        resultEl.innerHTML = `Tienes ${tasks.length} tareas. ${completedTasks} completadas y ${uncompletedTasks} por realizar.`;  
    });  
}

        














//Using console.log
/*
console.log(`Hay ${tasks.length} tareas`);

function nameTasks(){
    for (let i=0; i<tasks.length; i++){
    console.log(`La tarea ${i} corresponde a ${tasks[i].name}`); 
    }
}

nameTasks();

function deleteCompleted (){
    for (let i=0; i<tasks.length; i++){
        if (tasks[i].completed === true){
        console.log(`La tarea ${tasks[i].name} está finalizada.`);
        }
    }
}

deleteCompleted();

function showStatus(){
    for (let i=0; i<tasks.length; i++){
        if (tasks[i].completed === true){
        console.log(`La tarea ${tasks[i].name} está completa.`);
        }else{
            console.log(`La tarea ${tasks[i].name} está incompleta.`);
        }
    }
}

showStatus();
*/