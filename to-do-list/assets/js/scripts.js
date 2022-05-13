const form = document.getElementById("task-form");
const taskList = document.getElementById("tasks");
let contador = 1;

function recuperaDados() {
  for (let i = 1; i <= localStorage.length; i++) {
    addTask(localStorage.getItem(i));
    contador++;
  }
}
recuperaDados();

form.onsubmit = function (e) {
  e.preventDefault();
  const inputField = document.getElementById("task-input");
  if (!inputField.value || inputField.value == null) {
    alert("Adicione uma tarefa");
  } else {
    addTask(inputField.value);
    armazena(contador, inputField.value);
    form.reset();
    contador++;
  }
};

function addTask(description) {
  const taskContainer = document.createElement("div");
  const newTask = document.createElement("input");
  const taskLabel = document.createElement("label");
  const taskDescriptionNode = document.createTextNode(description);

  newTask.setAttribute("type", "checkbox");
  newTask.setAttribute("name", description);
  newTask.setAttribute("id", description);

  taskLabel.setAttribute("for", description);
  taskLabel.appendChild(taskDescriptionNode);

  taskContainer.classList.add("task-item");
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(taskLabel);

  taskList.appendChild(taskContainer);
}

function armazena(id, dados) {
  localStorage.setItem(id, dados);
}
