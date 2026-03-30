import { log } from '../shared/logger.ts';

export class Storage {
  static #localStorageKey = 'Project';

  static #activeSource;

  static sync = (isInit) => {
    localStorage.setItem(
      this.#localStorageKey,
      JSON.stringify(this.#activeSource),
    );

    if (isInit?.pageLoad && !Object.keys(this.getLocalData().groups)[0]) {
      log('Initial localStorage object is created.');
    }
  };

  static syncSource = () => {
    const source = this.#activeSource;

    Object.keys(source.groups).forEach((key) => delete source[key]);
    Object.assign(source, this.getLocalData());
  };

  static clear = () => {
    localStorage.clear();
  };

  static setSource = (source) => {
    this.#activeSource = source;
  };

  static #getParse = (property) => {
    const localJSON = localStorage.getItem(this.#localStorageKey);

    if (!property) {
      return JSON.parse(localJSON);
    }
    return JSON.parse(localJSON)[property];
  };

  static getGroups = () => {
    return this.#getParse('groups');
  };

  static getGroup = (groupTitle) => {
    return this.getGroups()[groupTitle];
  };

  // To get the current state of .json in the localStorage
  static getLocalData = () => {
    return this.#getParse();
  };

  static getNote = (noteTitle) => {
    const groups = this.getGroups();

    for (let group in groups) {
      for (let note of this.getGroup(group)) {
        if (note.title === noteTitle) return note;
      }
    }
  };
}
