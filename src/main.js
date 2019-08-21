import {getButtonControlMarkup} from "./components/buttonControl";
import {renderComponent} from "./utils/util";
import {getSearchMarkup} from "./components/search";
import {getFilterMarkup} from "./components/filter";
import {getBoardTasksMarkup} from "./components/board";

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

const renderLayout = () => {
  renderComponent(mainControl, getButtonControlMarkup());
  renderComponent(main, (getSearchMarkup() + getFilterMarkup() + getBoardTasksMarkup()));
};

renderLayout();
