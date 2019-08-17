import {getRandomValueOfProps, getRandomBoolean, getShuffleArray, checkRepeatingTask} from "./utils/util";

const TASK_DESCRIPTIONS = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const DAY_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;
const TAGS = [`homework`, `theory`, `practice`, `intensive`, `keks`];
const TAGS_MAX_COUNT = 3;
const TASK_COLORS = [`black`, `yellow`, `blue`, `green`, `pink`];


const getMockTask = () => ({
  description: TASK_DESCRIPTIONS[getRandomValueOfProps(TASK_DESCRIPTIONS.length)],
  dueDate: Date.now() + 1 + getRandomValueOfProps(DAY_IN_WEEK) * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND,
  repeatingDays: {
    'Mo': false,
    'Tu': false,
    'We': getRandomBoolean(),
    'Th': false,
    'Fr': false,
    'Sa': false,
    'Su': false,
  },
  tags: new Set(getShuffleArray(TAGS).slice(0, getRandomValueOfProps(TAGS_MAX_COUNT))),
  color: TASK_COLORS[getRandomValueOfProps(TASK_COLORS.length)],
  isFavorite: getRandomBoolean(),
  isArchive: getRandomBoolean(),
});

let taskCount = false;
let taskOverdueCount = false;
let taskTodayCount = false;
let taskFavoriteCount = false;
let taskRepeatingCount = false;
let taskTagsCount = false;
let taskArchiveCount = false;

const getFilterData = (task) => {
  const filters = Array.of({
    title: `All`,
    count: taskCount += Boolean(task),
  },
  {
    title: `Overdue`,
    count: taskOverdueCount += (task.dueDate < Date.now()),
  },
  {
    title: `Today`,
    count: taskTodayCount += (task.dueDate === Date.now()),
  },
  {
    title: `Favorites`,
    count: taskFavoriteCount += task.isFavorite,
  },
  {
    title: `Repeating`,
    count: taskRepeatingCount += checkRepeatingTask(task.repeatingDays),
  },
  {
    title: `Tags`,
    count: taskTagsCount += task.tags.size,
  },
  {
    title: `Archive`,
    count: taskArchiveCount += task.isArchive,
  });
  return filters;
};

export {getMockTask, getFilterData};
