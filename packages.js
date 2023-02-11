const packages = [
{
  id: 1,
  name: "Docker",
  description: "A software platform used for building applications based on containers — small and lightweight execution environments."

},
{
  id: 2,
  name: "ApacheMaven",
  description: "A default package manager used for the Java programming language and the Java runtime environment."
},
{
  id: 3,
  name: "NuGet",
  description: "A free and open source package manager used for the Microsoft development platforms including .NET."
},
{
  id: 4,
  name: "RubyGems",
  description: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
},
{
  id: 5,
  name: "npm",
  description: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."
},
{
  id: 6,
  name: "Containers",
  description: "A single place for your team to manage Docker images and decide who can see and access your images."
},
];

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv =document.querySelector(divId);
  
  selectedDiv.innerHTML=htmlToRender
};

const package = document.querySelector("#package");

const cardsOnDom = (array) => {
  let domString = "";
  for ( const package of array) {
    domString += 
    `<div class="card" style="width:18rem;">
    <div class="card-body">
      <h5 class="card-title">${package.name}</h5>
      <p class="card-text">${package.description}</p>
      <a class="btn" href="https://docs.github.com/en/packages" role ="button" >Learn more</a>
      <button class="btn btn-danger" id="delete--${package.id}">Delete
    </div>
  </div>`
  }
  renderToDom ("#package",domString);
};
 cardsOnDom(packages);

 const startApp = () => {
  cardsOnDom(packages);

 }
 startApp();
//======SEARCH======
 const search = (event) => {
  const userInput = event.target.value.toLowerCase();
  console.log(userInput);
  const searchResult = packages.filter(index => 
   index.name.toLowerCase().includes(userInput) ||
    index.description.toLowerCase().includes(userInput) 
 )
   cardsOnDom(searchResult);
  }
 
  document.querySelector('#searchInput').addEventListener('keyup', search)
//===================

//========= FORM ADDS NEW PROJECT ========
const form = document.querySelector('form')

const addNewPackage = (event) => {
  event.preventDefault();
const name =document.querySelector("#name");
const description =document.querySelector("#description");

const addPackage ={
  name: name.value,
  description: description.value,
};

  packages.push(addPackage);

  cardsOnDom(packages);
  form.reset();
};

const submitButton = document.querySelector("#form-submit");
submitButton.addEventListener('click',addNewPackage);
cardsOnDom(packages)
//===================
