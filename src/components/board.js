import {getCardEditTaskMarkup} from "./cardEditTask";
import {generateCardTask} from "./cardTask";
import {getButtonLoadMoreMarkup} from "./buttonLoadMore";


// Разметка доски с карточками задач
const getBoardTasksMarkup = (tasks) => `
    <section class="board container">
        <div class="board__tasks">
            ${getCardEditTaskMarkup()}
            ${generateCardTask(tasks)}
        </div>
        ${getButtonLoadMoreMarkup()}
    </section>
`;

export {getBoardTasksMarkup};

