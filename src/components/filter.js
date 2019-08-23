import {checkRepeatingTask} from "../utils/util";

let taskAllCount = false;
let taskOverdueCount = false;
let taskTodayCount = false;
let taskFavoriteCount = false;
let taskRepeatingCount = false;
let taskTagsCount = false;
let taskArchiveCount = false;

const generateCountTask = (title, count) => ({
  title,
  count,
});

const generateCountValues = (tasks) => {
  let countTaskValue;
  for (const task of tasks) {
    countTaskValue = countValues(task);
  }
  return countTaskValue;
};

const countValues = (task) => {
  taskAllCount += Boolean(task);
  taskOverdueCount += (task.dueDate < Date.now());
  taskTodayCount += (task.dueDate === Date.now());
  taskFavoriteCount += task.isFavorite;
  taskRepeatingCount += checkRepeatingTask(task.repeatingDays);
  taskTagsCount += task.tags.size;
  taskArchiveCount += task.isArchive;
  return [
    generateCountTask(`All`, taskAllCount),
    generateCountTask(`Overdue`, taskOverdueCount),
    generateCountTask(`Today`, taskTodayCount),
    generateCountTask(`Favorites`, taskFavoriteCount),
    generateCountTask(`Repeating`, taskRepeatingCount),
    generateCountTask(`Tags`, taskTagsCount),
    generateCountTask(`Archive`, taskArchiveCount),
  ];
};

// Разметка фильтров
const getFilterMarkup = (countFilterValues) => `
  <section class="main__filter filter container">
  ${countFilterValues.map(({title, count}) => `
        <input
          type="radio"
          id="filter__${title}"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__${title}" class="filter__label">
          ${title} <span class="filter__${title}-count">${count}</span></label
        >`).join(``)}
    </section>
`;

export {getFilterMarkup, generateCountValues};
