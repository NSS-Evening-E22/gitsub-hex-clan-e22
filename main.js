import { renderToDom } from "/utils/renderOnDOm.js";
import { footer } from "/components/footer.js";
import { navbar } from "/components/navbar.js";

const showNavs = () => {
  renderToDom("#navBar", navbar);
  renderToDom("#footer", footer);
};

showNavs();
