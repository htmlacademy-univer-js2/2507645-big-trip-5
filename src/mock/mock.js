import { getRandomArrayElement } from '../utils/common.js';

export const COLORS_LIST = ['red', 'green', 'blue'];

const mockTasks = [
  {
    description: 'Сделать домашку',
    dueDate: null,
    repeating: {
      mo: false,
      tu: false,
      we: true,
      th: false,
      fr: false,
      sa: true,
      su: false,
    },
    color: getRandomArrayElement(COLORS_LIST),
    isArchive: false,
    isFavorite: true,
  },
  {
    description: 'Завести кота',
    dueDate: null,
    repeating: {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false,
    },
    color: getRandomArrayElement(COLORS_LIST),
    isArchive: false,
    isFavorite: false,
  },
  {
    description: 'Купить доллары',
    dueDate: new Date('2014-01-01'),
    repeating: {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false,
    },
    color: getRandomArrayElement(COLORS_LIST),
    isArchive: true,
    isFavorite: false,
  },
  {
    description: 'Пройти интенсив на соточку',
    dueDate: new Date('2023-06-26'),
    repeating: {
      mo: false,
      tu: false,
      we: false,
      th: false,
      fr: false,
      sa: false,
      su: false,
    },
    color: getRandomArrayElement(COLORS_LIST),
    isArchive: false,
    isFavorite: true,
  },
];

function getRandomTask() {
  return getRandomArrayElement(mockTasks);
}

export { getRandomTask };
