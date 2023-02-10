const packages = [
{
  name: "Docker",
  desciption: "A software platform used for building applications based on containers — small and lightweight execution environments."

},
{
  name: "ApacheMaven",
  desciption: "A default package manager used for the Java programming language and the Java runtime environment."
},
{
  name: "NuGet",
  desciption: "A free and open source package manager used for the Microsoft development platforms including .NET."
},
{
  name: "RubyGems",
  desciption: "A standard format for distributing Ruby programs and libraries used for the Ruby programming language."
},
{
  name: "npm",
  desciption: "A package manager for JavaScript, included with Node.js. npm makes it easy for developers to share and reuse code."
},
{
  name: "Containers",
  desciption: "A single place for your team to manage Docker images and decide who can see and access your images."
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
      <p class="card-text">${package.desciption}</p>
      <a href="https://docs.github.com/en/packages" >Learn more</a>
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
