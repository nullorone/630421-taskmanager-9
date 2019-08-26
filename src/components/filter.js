import {checkRepeatingTask} from "../utils/util";

export default class Filter {
  constructor() {
    this._taskAllCount = false;
    this._taskOverdueCount = false;
    this._taskTodayCount = false;
    this._taskFavoriteCount = false;
    this._taskRepeatingCount = false;
    this._taskTagsCount = false;
    this._taskArchiveCount = false;
  }

  _generateCountTask(title, count) {
    return {
      title,
      count,
    };
  }

  generateCountValues(tasks) {
    let countTaskValue;
    for (const task of tasks) {
      countTaskValue = this._countValues(task);
    }
    return countTaskValue;
  }

  _countValues(task) {
    this._taskAllCount += Boolean(task);
    this._taskOverdueCount += (task.dueDate < Date.now());
    this._taskTodayCount += (task.dueDate === Date.now());
    this._taskFavoriteCount += task.isFavorite;
    this._taskRepeatingCount += checkRepeatingTask(task.repeatingDays);
    this._taskTagsCount += task.tags.size;
    this._taskArchiveCount += task.isArchive;
    return [
      this._generateCountTask(`All`, this._taskAllCount),
      this._generateCountTask(`Overdue`, this._taskOverdueCount),
      this._generateCountTask(`Today`, this._taskTodayCount),
      this._generateCountTask(`Favorites`, this._taskFavoriteCount),
      this._generateCountTask(`Repeating`, this._taskRepeatingCount),
      this._generateCountTask(`Tags`, this._taskTagsCount),
      this._generateCountTask(`Archive`, this._taskArchiveCount),
    ];
  }

  render(tasks) {
    const countFilters = this.generateCountValues(tasks);
    return `<section class="main__filter filter container">
  ${countFilters.map(({title, count}) => `
        <input
          type="radio"
          id="filter__${title}"
          class="filter__input visually-hidden"
          name="filter"
        />
        <label for="filter__${title}" class="filter__label">
          ${title} <span class="filter__${title}-count">${count}</span></label
        >`).join(``)}
    </section>`;
  }
};
