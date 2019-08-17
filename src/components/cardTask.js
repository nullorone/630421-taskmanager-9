import {getMockTask, getFilterData} from "../data";
import {checkRepeatingTask} from "../utils/util";


// Разметка карточки задачи
const getCardTaskMarkUp = ({
  description = `Example default task with default color.`,
  dueDate,
  repeatingDays,
  tags,
  color,
  isFavorite,
  isArchive}) => `
    <article class="card card--${color} ${checkRepeatingTask(repeatingDays) ? `card--repeat` : ``}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive ${isArchive ? `card__btn--disabled` : ``}">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites ${isFavorite ? `card__btn--disabled` : ``}"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${new Date(dueDate).toDateString()}</span>
                    <span class="card__time">${new Date(dueDate).toTimeString().slice(0, 5)}</span>
                  </p>
                </div>
              </div>

              <div class="card__hashtag">
                <div class="card__hashtag-list">
                    ${[...tags].map((tag) => `<span class="card__hashtag-inner">
                            <span class="card__hashtag-name">
                                #${tag}
                            </span>
                        </span>`).join(``)}
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </article>
`;

const mockTasks = [];
let filterCounts;

const combineTask = (task) => {
  mockTasks.push(task);
  filterCounts = getFilterData(task);
  return getCardTaskMarkUp(task);
};

// Рендерим карточку задачи указанное количество раз. По умолчанию рендерится 1 карточка
const generateCardTask = (cardTaskCount = 1) => {
  let cardTaskMarkup = ``;
  for (let i = 0; i < cardTaskCount; i++) {
    cardTaskMarkup += combineTask(getMockTask());
  }
  return cardTaskMarkup;
};

export {generateCardTask};

