console.log("hex clan group project")


import { renderToDom } from "/utils/renderOnDOm.js";
import { footer } from "/components/footer.js";
import { navbar } from "/components/navbar.js";


/* const cardsOnDom = (array) => {
  let domString = ""
  for (const pinned of array) {
    domString +=
    `<div class="row">
        <div class="col-sm-6 mb-3 mb-sm-0">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Special title treatment</h5>
              <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        </div>
      </div>`
  }
}
*/

// Always at bottom of page
const showNavs = () => {
  renderToDom("#navBar", navbar);
  renderToDom("#footer", footer);
};

showNavs();
