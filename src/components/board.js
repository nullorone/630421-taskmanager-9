import cardEditTask from "./cardEditTask";
import cardTask from "./cardTask";
import buttonLoadMoreMarkup from "./buttonLoadMore";

const CARD_COUNT = 3;


// Разметка доски с карточками задач
const getBoardTasksMarkup = () => `
    <section class="board container">
        <div class="board__tasks">
            ${cardEditTask()}
            ${cardTask(CARD_COUNT)}
        </div>
        ${buttonLoadMoreMarkup()}
    </section>
`;

export default getBoardTasksMarkup;
