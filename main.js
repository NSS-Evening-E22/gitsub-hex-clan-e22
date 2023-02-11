console.log("hex clan group project")

const pinned = [
  {
    name: "gatsby-workshop",
    language: "JavaScript",
    discription: "This workshop covers the fundamentals of developing fast, accessible sites with Gatsby, a React framework, and dive deep into the building blocks you'll need to build your own custon Gatsby sites."
  },
  {
    name: "React-Ladies",
    language: "HTML",
    discription: "We're a group of women and non-binary React.Js enthusiasts in New York city (and beyond)."
  },
  {
    name: "getting-started-with-open-source",
    language: "CSS",
    discription: "This is a presentation on Getting Started With Open Source"
  }
];


import { renderToDom } from "/utils/renderOnDOm.js";
import { footer } from "/components/footer.js";
import { navbar } from "/components/navbar.js";


//renders cards onto page
 const cardsOnDom = (array) => {
  let domString = ""
  for (const pinned of array) {
    domString +=
    `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <div class="flexRow">
          <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg> <a href="url" class="breakText">${pinned.name}</a></h5>
        </div>
        <div class="flexRow">
          <p class="card-text">${pinned.discription}</p>
        </div>
        <div class="flexRow">
          <p class="card-link"><svg class="language-${pinned.language}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 18a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"></path></svg> ${pinned.language}</p>
          <p class="card-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path></svg> 84</p>
          <p class="card-link"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" width="16" height="16" fill="currentColor"><path d="M15 3a3 3 0 0 1-5.175 2.066l-3.92 2.179a2.994 2.994 0 0 1 0 1.51l3.92 2.179a3 3 0 1 1-.73 1.31l-3.92-2.178a3 3 0 1 1 0-4.133l3.92-2.178A3 3 0 1 1 15 3Zm-1.5 10a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 13Zm-9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 4.5 8Zm9-5a1.5 1.5 0 1 0-3.001.001A1.5 1.5 0 0 0 13.5 3Z"></path></svg> 36</p>
        </div>
      </div>
    </div>`
  }
  renderToDom("#cards", domString);
}

//create new pinned

const createPinned = (event) => {
  event.preventDefault();

  let name = document.querySelector('#inputProjectBoardName');
  console.log(name.toString());
  name = name.value.toString().replace(/\s+/g, '-');
  const discription = document.querySelector('#exampleFormControlTextarea1');

  const newPinned = {
    name: name,
    discription: discription.value,
    language: document.querySelector('#language').value
  };

  pinned.push(newPinned);
  cardsOnDom(pinned);
  document.querySelector('#inputProjectBoardName').value = '';
  document.querySelector('#language').value = '';
  document.querySelector('#exampleFormControlTextarea1').value = '';
};



const createBtn = document.querySelector('#createBtn');
createBtn.addEventListener('click', createPinned);



const startApp = () => {
  cardsOnDom(pinned);
};

startApp();

// Always at bottom of page
const showNavs = () => {
  renderToDom("#navBar", navbar);
  renderToDom("#footer", footer);
};

showNavs();
