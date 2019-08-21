import {getCardEditTaskMarkup} from "./cardEditTask";
import {generateCardTask} from "./cardTask";
import {getButtonLoadMoreMarkup} from "./buttonLoadMore";

const CardAmount = {
  FIRST_BEGIN: 1,
  FIRST_END: 9,
};

// Разметка доски с карточками задач
const getBoardTasksMarkup = (tasks) => `
    <section class="board container">
        <div class="board__tasks">
            ${getCardEditTaskMarkup(tasks[0])}
            ${generateCardTask(tasks.slice(CardAmount.FIRST_BEGIN, CardAmount.FIRST_END))}
        </div>
        ${getButtonLoadMoreMarkup()}
    </section>
`;

export {getBoardTasksMarkup};

