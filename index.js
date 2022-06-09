const myForm = document.getElementById("add-todo-form");
const todoList = document.getElementById("todo-list");

const onAdd = (e) => {
  e.preventDefault();
  // construct a FormData object, which fires the formdata event
  const formData = new FormData(e.target);
  console.log(formData);
  // formdata gets modified by the formdata event
  console.log(formData.get("todo-title")); // foo
  console.log(formData.get("todo-description")); // bar// FOO

  const title = formData.get("todo-title");
  const description = formData.get("todo-description");

  addTodoCard(title, description);

  myForm.reset();
};

function addTodoCard(title, description) {
  const todoItemContainer = document.createElement("div");
  todoItemContainer.classList.add("todo-item");

  const todoHeader = document.createElement("div");
  todoHeader.classList.add("todo-item-header");

  const todoItemTitleArea = document.createElement("div");
  todoItemTitleArea.classList.add("title-area");

  //checkbox
  const checkboxContainer = document.createElement("div");
  checkboxContainer.classList.add("round");

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("id", "checkbox");

  const checkboxLabel = document.createElement("label");
  checkboxLabel.setAttribute("for", "checkbox");

  checkboxContainer.append(checkbox);
  checkboxContainer.append(checkboxLabel);

  // h4
  const h4 = document.createElement("h4"); //add here title
  h4.innerText = title;
  //append h4 & round to title-area
  todoItemTitleArea.append(checkboxContainer);
  todoItemTitleArea.append(h4);

  todoHeader.append(todoItemTitleArea);

  // icons
  const iconsContainer = document.createElement("div");
  const editIcon = document.createElement("i");
  editIcon.classList.add("fa", "fa-pencil");
  const deleteIcon = document.createElement("i");
  deleteIcon.classList.add("fa", "fa-trash");

  iconsContainer.append(editIcon);
  iconsContainer.append(deleteIcon);

  todoHeader.append(iconsContainer);

  const separator = document.createElement("div");
  separator.classList.add("separator");

  const todoDescription = document.createElement("p");
  todoDescription.innerText = description;

  // append header
  todoItemContainer.append(todoHeader);
  // append description
  todoItemContainer.append(separator);
  todoItemContainer.append(todoDescription);

  todoList.append(todoItemContainer);
}

myForm.addEventListener("submit", onAdd);
