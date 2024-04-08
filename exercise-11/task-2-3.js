const tasks = [
  {
    id: "1138465078061",
    completed: false,
    text: "Посмотреть новый урок по JavaScript",
  },
  {
    id: "1138465078062",
    completed: false,
    text: "Выполнить тест после урока",
  },
  {
    id: "1138465078063",
    completed: false,
    text: "Выполнить ДЗ после урока",
  },
];

const taskList = document.createElement("div");
taskList.classList.add("tasks-list");

tasks.forEach((task) => {
  const taskItem = document.createElement("div");
  taskItem.setAttribute("data-task-id", task.id);
  taskItem.innerHTML = `
    <div class="task-item__main-container">
      <div class="task-item__main-content">
        <form class="checkbox-form">
          <input
            class="checkbox-form__checkbox"
            type="checkbox"
            id=${task.id}
          />
          <label for=${task.id}></label>
        </form>
        <span class="task-item__text">
          ${task.text}
        </span>
      </div>
      <button
        class="task-item__delete-button default-button delete-button"
        data-delete-task-id="5"
      >
        Удалить
      </button>
    </div>
  `;

  taskList.append(taskItem);
});

document.body.append(taskList);

const taskForm = document.createElement("form");
taskForm.classList.add("create-task-block");
taskForm.innerHTML = `
  <input placeholder="Task" class="create-task-block__input"/>
  <button type="submit">Submit</button>
`;
document.body.append(taskForm);

taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const input = document.querySelector(".create-task-block__input");
  const taskText = input.value.trim();

  if (taskText) {
    const newTask = {
      id: Date.now().toString(),
      completed: false,
      text: taskText,
    };

    tasks.push(newTask);

    const newTaskItem = document.createElement("div");
    newTaskItem.setAttribute("data-task-id", newTask.id);
    newTaskItem.innerHTML = `
      <div class="task-item__main-container">
        <div class="task-item__main-content">
          <form class="checkbox-form">
            <input
              class="checkbox-form__checkbox"
              type="checkbox"
              id=${newTask.id}
            />
            <label for=${newTask.id}></label>
          </form>
          <span class="task-item__text">
            ${newTask.text}
          </span>
        </div>
        <button
          class="task-item__delete-button default-button delete-button"
          data-delete-task-id="5"
        >
          Удалить
        </button>
      </div>
    `;

    taskList.append(newTaskItem);
    input.value = "";
  }
});
