import {getButtonControlMarkup} from "./components/buttonControl";
import {getCombineMainMarkup} from "./components/proxyMain";
import {renderComponent} from "./utils/util";

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

const renderLayout = () => {
  renderComponent(mainControl, getButtonControlMarkup());
  renderComponent(main, getCombineMainMarkup());
};

renderLayout();
