console.log("hex clan group project")

//variable to house repo data objects
const reposArr = [];

//render search bar to Dom
function renderSearchInput () {
  //get DOM elements
  const searchDiv = document.querySelector("#searchBar");
  searchDiv.innerHTML =
    `<div id="search">
    <div class="form-floating mb-3">
      <input type="text" class="form-control" id="searchInput" placeholder="Search Repositories">
      <label for="searchInput">Find a Repository</label>
    </div>
  </div>`
};
renderSearchInput();

//render repo form to DOM
function renderRepoForm () {

  //get DOM elements
  const repoAddDiv = document.querySelector("#repoFormDiv");

  repoAddDiv.innerHTML = 
    `<form id="repoform" class="row g-3">
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
      <button id="repoSubmitBtn" type="submit" class="btn btn-primary">Create Repository</button>
    </div>
  </form>`
};

renderRepoForm()

//render repositories to repository Div
function renderRepoCards(array) {
 
  const repoCardDiv = document.querySelector("#repoCards");
  let cardHtml = "";

  array.forEach((repoIndex) => {
    cardHtml +=
    `<div id="repoCard" class="card" style="width: 50rem;">
      <div class="card-body">
        <h5 class="card-title">${repoIndex.name}</h5>
        <p class="card-text">${repoIndex.description}</p>
        <button class="btn btn-outline-danger" id="delete--${repoIndex.id}">Delete</button>
      </div>
    </div>`
});

  repoCardDiv.innerHTML = cardHtml;
};




//add repo card function
const formEl = document.querySelector("#repoform")

function addRepo (event) {
  event.preventDefault();
    
  const newRepoObj = {
    name: document.querySelector("#inputName").value,
    description: document.querySelector("#descInput").value,
    id: reposArr.length +1
  };

  reposArr.push(newRepoObj);
  renderRepoCards(reposArr);
  console.log(reposArr)
  formEl.reset()
};

//add search function function
const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  const searchResult = reposArr.filter(repoIndex =>
    repoIndex.name.toLowerCase().includes(userInput)||
    repoIndex.description.toLowerCase().includes(userInput)
    );
    
    renderRepoCards(searchResult);
};

//event listeners section
document.querySelector("#repoSubmitBtn").addEventListener("click", addRepo);
document.querySelector("#searchInput").addEventListener("keyup", search);
