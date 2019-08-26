import ButtonControl from "./components/buttonControl";
import {renderComponent} from "./utils/util";
import Search from "./components/search";
import Filter from "./components/filter";
import {getBoardTasksMarkup, onButtonLoadMoreClick} from "./components/board";
import {getMockTask} from "./data";

const CARD_COUNT = 35;

const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

const tasks = new Array(CARD_COUNT).fill(``).map(getMockTask);

const SearchComponent = new Search();
const FilterComponent = new Filter();
const ButtonControlComponent = new ButtonControl();

const renderLayout = () => {
  renderComponent(mainControl, ButtonControlComponent.render());
  renderComponent(main, (SearchComponent.render() + FilterComponent.render(tasks) + getBoardTasksMarkup(tasks)));
};

renderLayout();

const buttonLoadMore = document.querySelector(`.load-more`);
if (buttonLoadMore) {
  buttonLoadMore.addEventListener(`click`, onButtonLoadMoreClick);
}
