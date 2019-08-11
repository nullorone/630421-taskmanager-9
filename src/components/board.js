import {getCardEditTaskMarkup} from "./cardEditTask";
import {generateCardTask} from "./cardTask";
import {getButtonLoadMoreMarkup} from "./buttonLoadMore";

const CARD_COUNT = 3;


// Разметка доски с карточками задач
const getBoardTasksMarkup = () => `
    <section class="board container">
        <div class="board__tasks">
            ${getCardEditTaskMarkup()}
            ${generateCardTask(CARD_COUNT)}
        </div>
        ${getButtonLoadMoreMarkup()}
    </section>
`;

export {getBoardTasksMarkup};

