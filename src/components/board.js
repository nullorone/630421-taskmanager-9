import {getCardEditTaskMarkup} from "./cardEditTask";
import {generateCardTask} from "./cardTask";
import {getButtonLoadMoreMarkup} from "./buttonLoadMore";
import {renderComponent} from "../utils/util";

const CardAmount = {
  BEGIN: 1,
  END: 8,
};

const ADDER_VALUE = 8;

let hiddenTasks;

// Разметка доски с карточками задач
const getBoardTasksMarkup = (tasks) => {
  hiddenTasks = generateCardTask(tasks.slice(CardAmount.END));
  return `<section class="board container">
        <div class="board__tasks">
            ${getCardEditTaskMarkup(tasks[0])}
            ${generateCardTask(tasks.slice(CardAmount.BEGIN, CardAmount.END)).join(``)}
        </div>
        ${getButtonLoadMoreMarkup()}
    </section>`;
};


const onButtonLoadMoreClick = () => {
  const board = document.querySelector(`.board`);
  const boardTasks = document.querySelector(`.board__tasks`);
  if (hiddenTasks.length > CardAmount.END) {
    renderComponent(boardTasks, hiddenTasks.slice(CardAmount.BEGIN - 1, CardAmount.END).join(``));
    CardAmount.BEGIN += ADDER_VALUE;
    CardAmount.END += ADDER_VALUE;
  } else {
    renderComponent(boardTasks, hiddenTasks.slice(CardAmount.BEGIN - 1).join(``));
    board.removeChild(document.querySelector(`.load-more`));
  }
};

export {getBoardTasksMarkup, onButtonLoadMoreClick};

