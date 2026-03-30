export class Services {
  static #source;
  
  static #groups;

  static setSource = (sourceObject) => {
    Services.#source = sourceObject;
    Services.#groups = sourceObject.groups;
   };

  static getSource = () => this.#source;

  static getGroup = (groupName) => this.#groups[groupName];
  
  static getGroups = () => this.#groups;

  static getNote = (noteTitle) => {
    const groups = this.getGroups();
    
    for (let group in groups) {
      for (let note of this.getGroup(group)) {
        if (note.title === noteTitle) return note;
      };
    };
  };
};