// Acess
const inputTask = document.getElementById('texto-tarefa');
const btnTask = document.getElementById('criar-tarefa');
const btnDelDoneTask = document.getElementById('remover-finalizados');
const btnDelAll = document.getElementById('apaga-tudo');
const btnMoveUp = document.getElementById('mover-cima');
const btnMoveDown = document.getElementById('mover-baixo');
const btnDellSelected = document.getElementById('remover-selecionado');
const taskList = document.getElementById('lista-tarefas');
const selectedLi = document.getElementsByClassName('selected-li');
const selLiClass = 'selected-li';
const selLiCLassQuery = '.selected-li';
const selLiClasses = 'selected-li completed';
const selLiClasInverted = 'completed selected-li';
const btnSave = document.getElementById('salvar-tarefas');

function paintLi(e) {
  if (selectedLi !== []) {
    for (let i = 0; i < selectedLi.length; i += 1) {
      selectedLi[i].classList.remove(selLiClass);
    }
  }
  e.target.classList.add(selLiClass);
}
function doOrUndoTask(e) {
  if (e.target.className === selLiClasses || e.target.className === selLiClasInverted) {
    e.target.classList.remove('completed');
  } else {
    e.target.classList.add('completed');
  }
}

function addTask() {
  const taskText = inputTask.value;
  const newTask = document.createElement('li');

  newTask.innerText = taskText;
  newTask.addEventListener('click', paintLi);
  newTask.addEventListener('dblclick', doOrUndoTask);
  inputTask.value = '';
  taskList.appendChild(newTask);
}

function delDoneTask() {
  const completed = document.querySelectorAll('.completed');

  for (let i = 0; i < completed.length; i += 1) {
    completed[i].parentNode.removeChild(completed[i]);
  }
}

function delSelTask() {
  const selected = document.querySelector(selLiCLassQuery);
  selected.parentNode.removeChild(selected);
}

function dellAllTasks() {
  taskList.innerHTML = '';
}

function moveTaskUp() {
  const myLi = document.querySelector(selLiCLassQuery);
  if (myLi && myLi.previousSibling) {
    myLi.parentNode.insertBefore(myLi, myLi.previousSibling);
  }
}

function moveTaskDown() {
  const myLi = document.querySelector(selLiCLassQuery);
  if (myLi && myLi.nextSibling) {
    myLi.parentNode.insertBefore(myLi.nextSibling, myLi);
  }
}

function saveTasks() {
  const objOl = [];
  const allLi = document.getElementsByTagName('li');
  for (let i = 0; i < allLi.length; i += 1) {
    const obj = {
      text: allLi[i].innerHTML,
      class: allLi[i].className,
    };
    objOl.push(obj);
  }
  localStorage.setItem('savedTasks', JSON.stringify(objOl));
}

function recreateTasks(text, classe) {
  const newTask = document.createElement('li');

  newTask.innerText = text;
  newTask.className = classe;
  newTask.addEventListener('click', paintLi);
  newTask.addEventListener('dblclick', doOrUndoTask);
  taskList.appendChild(newTask);
}
function loadTasks() {
  const getTasks = localStorage.getItem('savedTasks');
  const tasksObj = JSON.parse(getTasks);
  if (getTasks) {
    for (let i = 0; i < tasksObj.length; i += 1) {
      recreateTasks(tasksObj[i].text, tasksObj[i].class);
    }
  }
}

window.addEventListener('load', () => {
  btnTask.addEventListener('click', addTask);
  btnDelDoneTask.addEventListener('click', delDoneTask);
  btnDelAll.addEventListener('click', dellAllTasks);
  btnMoveUp.addEventListener('click', moveTaskUp);
  btnMoveDown.addEventListener('click', moveTaskDown);
  btnDellSelected.addEventListener('click', delSelTask);
  btnSave.addEventListener('click', saveTasks);
  loadTasks();
});
