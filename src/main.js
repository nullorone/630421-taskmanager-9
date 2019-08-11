import buttonControl from "./components/buttonControl";
import combineMainMarkup from "./components/proxyMain";
import renderComponent from "./utils/util";

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

const renderLayout = () => {
  renderComponent(mainControl, buttonControl());
  renderComponent(main, combineMainMarkup());
};

renderLayout();
