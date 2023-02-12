import { renderToDom } from "/utils/renderOnDOm.js";
import { footer } from "/components/footer.js";
import { mainMenu } from "/components/navbar.js";

// Always at bottom of page
const showNavs = () => {
  renderToDom("#navBar", mainMenu);
  renderToDom("#footer", footer);
};

const startApp = () => {
  showNavs();
};

startApp();
