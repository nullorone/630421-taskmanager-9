import {getButtonControlMarkup} from "./components/buttonControl";
import {renderComponent} from "./utils/util";
import {getSearchMarkup} from "./components/search";
import {getFilterMarkup, generateCountValues} from "./components/filter";
import {getBoardTasksMarkup, onButtonLoadMoreClick} from "./components/board";
import {getMockTask} from "./data";

const CARD_COUNT = 35;

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

const tasks = new Array(CARD_COUNT).fill(``).map(getMockTask);

const renderLayout = () => {
  renderComponent(mainControl, getButtonControlMarkup());
  renderComponent(main, (getSearchMarkup() + getFilterMarkup(generateCountValues(tasks)) + getBoardTasksMarkup(tasks)));
};

renderLayout();

const buttonLoadMore = document.querySelector(`.load-more`);
if (buttonLoadMore) {
  buttonLoadMore.addEventListener(`click`, onButtonLoadMoreClick);
}
