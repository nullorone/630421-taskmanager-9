import {getButtonControlMarkup} from "./components/buttonControl";
import {renderComponent} from "./utils/util";
import {getSearchMarkup} from "./components/search";
import {getFilterMarkup, generateCountValues} from "./components/filter";
import {getBoardTasksMarkup} from "./components/board";
import {getMockTask} from "./data";

const CARD_COUNT = 3;

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

const tasks = new Array(CARD_COUNT).fill(``).map(getMockTask);
console.log(tasks)
const renderLayout = () => {
  renderComponent(mainControl, getButtonControlMarkup());
  renderComponent(main, (getSearchMarkup() + getFilterMarkup(generateCountValues(tasks)) + getBoardTasksMarkup(tasks)));
};

renderLayout();
