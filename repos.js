// import { renderToDom } from "/utils/renderOnDOm.js";

//variable to house repo data objects
const reposArr = [];

//render search bar to Dom
function renderSearchInput() {
  //get DOM elements
  const searchDiv = document.querySelector("#searchBar");
  searchDiv.innerHTML = `<div id="search">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="searchInput" placeholder="Search Repositories">
      <label for="searchInput">Find a Repository</label>
    </div>
  </div>`;
}

//render repo form to DOM
function renderRepoForm() {
  //get DOM elements
  const repoAddDiv = document.querySelector("#repoFormDiv");

  repoAddDiv.innerHTML = `<form id="repoform" class="row g-3">
    <div class="col-12">
      <label for="repoName" class="form-label">Repository Name<span id="required">*</span></label>
      <input type="text" class="form-control" id="inputName">
      <p>Great repository names are short and memorable.</p>
    </div>
    
    <div class="col-12">
      <label for="repoDescription" class="form-label">Description</label><label class="form-label">(optional)</label>
      <textarea class="form-control" id="descInput" rows="3"></textarea>
    </div>
      
    <div class="col-12">
      <button id="repoSubmitBtn" type="submit" class="btn btn-success">Create Repository</button>
    </div>
  </form>`;
}

//render repositories to repository Div
function renderRepoCards(array) {
  const repoCardDiv = document.querySelector("#repoCards");
  let cardHtml = "";

  array.forEach((repoIndex) => {
    cardHtml += `<div id="repoCard" class="card" style="width: 50rem;">
      <div class="mainCardBody">
        <div class="card-body">

          <div id="cardBodyTop">
            <h5 class="card-title">${repoIndex.name}</h5>
            <button id="star" type="button" class="btn btn-primary btn-sm" data-bs-toggle="button"><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg> Star</button>
          </div>
          
          <p class="card-text">${repoIndex.description}</p>
          <button class="btn btn-outline-danger btn-sm" id="delete--${repoIndex.id}">Delete</button>
        </div>
       
       
          
       
      </div> 
      

      <div id="icon-div">
        <p><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z"></path></svg> JavaScript</p>
        <p><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg> 8</p>
        <p><svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16"><path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16ZM6 6.928a1.75 1.75 0 1 0-1 0V7.5A1.5 1.5 0 0 0 6.5 9h1v1.072a1.75 1.75 0 1 0 1 0V9h1A1.5 1.5 0 0 0 11 7.5v-.572a1.75 1.75 0 1 0-1 0V7.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5Z"></path></svg> 33</p>
      </div>

    </div>`;
  });

  repoCardDiv.innerHTML = cardHtml;
}

//add repo card function
const formEl = document.querySelector("#repoform");

function addRepo(event) {
  event.preventDefault();

  const newRepoObj = {
    name: document.querySelector("#inputName").value,
    description: document.querySelector("#descInput").value,
    id: reposArr.length + 1,
  };

  reposArr.push(newRepoObj);
  renderRepoCards(reposArr);
  console.log(reposArr);
  formEl.reset();
}

//add search function function
const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  const searchResult = reposArr.filter(
    (repoIndex) =>
      repoIndex.name.toLowerCase().includes(userInput) ||
      repoIndex.description.toLowerCase().includes(userInput)
  );

  renderRepoCards(searchResult);
};

//delete added repo function
const removeRepo = (event) => {
  if (event.target.id.includes("delete")) {
    const [, id] = event.target.id.split("--");
    const indexOfRepo = reposArr.findIndex((repo) => repo.id === Number(id));
    reposArr.splice(indexOfRepo, 1);
    renderRepoCards(reposArr);
  }
};

const start = () => {
  renderSearchInput();
  renderRepoForm();

  //event listeners section
  document.querySelector("#repoSubmitBtn").addEventListener("click", addRepo);
  document.querySelector("#searchInput").addEventListener("keyup", search);
  document.querySelector("#repoCards").addEventListener("click", removeRepo);
};

start();
