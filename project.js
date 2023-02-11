import { renderToDom } from "/utils/renderOnDOm.js";
const projectSubmit = document.querySelector("#projectSubmit");
const projectList = [];

// ### FORM SUBMIT
projectSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const project = document.querySelector("#projectName").value;
  const description = document.querySelector("#description").value;

  let projectObject = {
    id: projectList.length + 1,
    name: project,
    content: description,
  };

  let mySerializedList = JSON.stringify(projectObject);
  localStorage.setItem(`proj${projectObject.id}`, mySerializedList);

  projectList.push(projectObject);
  createTableEntry(projectList);
  document.querySelector("form").reset();
});

// ### CREATE TABLE ENTRY
const createTableEntry = (array) => {
  let htmlString = "";

  array.forEach((item) => {
    if (item != null) {
      htmlString += `
    <tr>
          <td>${item.name}</td>
          <td>${item.content}</td>
          <td><button id="delete--${item.id}" class="btn btn-sm btn-dark">Remove</button>
        </tr>`;
    }
  });

  renderToDom("#tableBody", htmlString);
};

// ### REMOVE Project ###
const removeButton = document.querySelector("#tableBody");

removeButton.addEventListener("click", (e) => {
  if (e.target.id.includes("delete")) {
    const [, itemId] = e.target.id.split("--");
    let removeproject = projectList.findIndex(
      (project) => project.id === Number(itemId)
    );
    projectList.splice(removeproject, 1)[0];

    localStorage.removeItem(`proj${itemId}`);
  }

  createTableEntry(projectList);
});

//  ### LOAD TASKS FROM LOCAL STORAGE
const getFromLocalStorage = () => {
  if (localStorage.length > 0) {
    for (let i = 0; i < localStorage.length; i++) {
      let savedItem = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log(savedItem);
      projectList.push(savedItem);
    }
    createTableEntry(projectList);
  }
};

//  ### Allow sorting of project list
const sorting = () => {
  const sortName = document.querySelector("#sortName");

  sortName.addEventListener("click", () => {
    projectList.sort((a, b) =>
      a.name > b.name ? 1 : a.name === b.name ? 1 : -1
    );
    createTableEntry(projectList);
  });
};

// ### Show Hide Form
const newProjectButton = document.querySelector("#newProjectButton");
// *** A way to toggle a class on and off on an element ***
newProjectButton.addEventListener("click", () => {
  const toggleShow = document.querySelector(".hideForm");
  toggleShow.classList.toggle("showForm");
});

sorting();
getFromLocalStorage();
