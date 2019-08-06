// eslint-disable-next-line strict
const main = document.querySelector(`.main`);
const mainControl = document.querySelector(`.main__control`);

const MAIN_CONTROLS_LABELS = [
  [`+ ADD NEW TASK`, `control__new-task`],
  [`TASKS`, `control__task`],
  [`STATISTICS`, `control__statistic`]];
const MAIN_FILTERS = [
  [`filter__all`, `All`, 13, `checked`],
  [`filter__overdue`, `Overdue`, 0, `disabled`],
  [`filter__today`, `Today`, 0, `disabled`],
  [`filter__favorites`, `Favorites`, 1],
  [`filter__repeating`, `Repeating`, 1],
  [`filter__tags`, `Tags`, 1],
  [`filter__archive`, `Archive`, 115]];

// Получаем секцию с необходимым компонентом
const getSectionComponent = (sectionClassNames = ``, insertMarkup = ``, sectionContainer = true) => `<section class="${sectionClassNames} ${sectionContainer ? `container` : ``}">${insertMarkup}</section>`;

// Получаем разметку пункта главного меню
const getMainControlItem = (nameItem = ``, itemId = ``) => {
  return `
    <input
      type="radio"
      name="control"
      id="${itemId}"
      class="control__input visually-hidden"
    />
    <label for="control__new-task" class="control__label ${itemId === `control__new-task` ? `control__label--new-task` : ``}"
      >${nameItem}</label
    >
  `;
};

// Генерируем разметку меню
const generateMainControl = (controlLabels) => {
  let markupItems = [];
  for (let i = 0; i < controlLabels.length; i++) {
    const controlLabelsName = controlLabels[i][0];
    const controlLabelsId = controlLabels[i][1];
    markupItems.push(getMainControlItem(controlLabelsName, controlLabelsId));
  }
  return markupItems.join(``);
};

// Получение разметку компонента - поиск
const getSearchMarkup = (placeholder = `START TYPING — SEARCH BY WORD, #HASHTAG OR DATE`, label = `Search`) => {
  return `
      <input
          type="text"
          id="search__input"
          class="search__input"
          placeholder="${placeholder}"
        />
        <label class="visually-hidden" for="search__input">${label}</label>
    `;
};

// Получаем разметку компонента - фильтр
const getFilterMarkup = (filterId = ``, labelName = ``, filterValue = ``, status = ``) => {
  return `
    <input
        type="radio"
        id="${filterId}"
        class="filter__input visually-hidden"
        name="filter"
        ${status}
    />
    <label for="${filterId}" class="filter__label">${labelName}<span class="${filterId}-count">${filterValue}</span></label
    >
  `;
};

// Генерируем компоненты фильтра
const generateMainFilter = (filterItems) => {
  let markupItems = [];
  for (let i = 0; i < filterItems.length; i++) {
    const filterItemId = filterItems[i][0];
    const filterItemLabel = filterItems[i][1];
    const filterItemValue = filterItems[i][2];
    const filterItemStatus = filterItems[i][3] || ``;
    markupItems.push(getFilterMarkup(filterItemId, filterItemLabel, filterItemValue, filterItemStatus));
  }
  return markupItems.join(``);
};

// Получаем разметку компонента кнопки - load more
const getLoadMoreMarkup = () => `<button class="load-more" type="button">load more</button>`;

// Добавляем компоненты в разметку
const addComponents = () => {
  mainControl.insertAdjacentHTML(`beforeend`, getSectionComponent(`control__btn-wrap`, generateMainControl(MAIN_CONTROLS_LABELS), false));
  main.insertAdjacentHTML(`beforeend`, getSectionComponent(`main__search search`, getSearchMarkup()));
  main.insertAdjacentHTML(`beforeend`, getSectionComponent(`main__filter filter`, generateMainFilter(MAIN_FILTERS)));



  main.insertAdjacentHTML(`beforeend`, getLoadMoreMarkup());
};

addComponents();
