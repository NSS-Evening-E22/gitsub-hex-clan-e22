console.log("hex clan group project")

//variable to house repo data objects
const repos = [];


//render repo form to DOM
function renderRepoForm () {
  console.log("testing");

  //get DOM elements
  const repoAddDiv = document.querySelector("#repoFormDiv");

  repoAddDiv.innerHTML = 
    `<form id="repoform" class="row g-3">
    <div class="col-12">
      <label for="repoName" class="form-label">Repository Name<span id="required">*</span></label>
      <input type="text" class="form-control" id="inputAddress">
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

//add repo card function
function addRepo() {
  console.log("button tester!");
  const repoCardDiv = document.querySelector("#repoCards")


}
document.querySelector("#repoSubmitBtn").addEventListener("click", console.log("idiot"));
