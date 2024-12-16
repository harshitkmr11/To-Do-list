const addTask = document.getElementById("addBtn");
const taskList = document.getElementById("list-Area");
const inputVal = document.getElementById("input-field");

function add() {
  const newTask = document.createElement("li");

  taskList.appendChild(newTask);
  newTask.textContent = inputVal.value;
  inputVal.value = "";
  dltTask(newTask);
}

function dltTask(newTask) {
  const dltBtn = document.createElement("button");
  dltBtn.textContent = "DELETE";
  newTask.appendChild(dltBtn);
  dltBtn.onclick = ()=>{
    newTask.remove();
  }
}
addTask.addEventListener("click", add);
