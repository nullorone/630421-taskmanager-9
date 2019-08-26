import {getCardEditTaskMarkup} from "./cardEditTask";
import CardTask from "./cardTask";
import ButtonLoadMore from "./buttonLoadMore";
import {renderComponent} from "../utils/util";

const CardAmount = {
  BEGIN: 1,
  END: 8,
};

const ADDER_VALUE = 8;

let hiddenTasks;

const ButtonLoadMoreComponent = new ButtonLoadMore();

// Разметка доски с карточками задач
const getBoardTasksMarkup = (tasks) => {

  const CardTaskComponent = new CardTask();
  hiddenTasks = CardTaskComponent.render(tasks.slice(CardAmount.END));
  return `<section class="board container">
        <div class="board__tasks">
            ${getCardEditTaskMarkup(tasks[0])}
            ${CardTaskComponent.render(tasks.slice(CardAmount.BEGIN, CardAmount.END)).join(``)}
        </div>
        ${ButtonLoadMoreComponent.render()}
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

