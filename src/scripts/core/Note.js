import { formatDistanceToNowStrict } from "date-fns";
import { Services } from "./Services.js";
import { Storage } from "./StorageAPI.js";

export class Note extends Services {
  constructor({ title, description, dueDate, priority }) {
    super();

    this.dueDate = dueDate;
    this.title = title;
    this.description = description;
    this.priority = priority;
  };

  static create = (noteMeta) => new Note(noteMeta);

  static push = (targetNote, targetGroup) => {
    super.getGroup(targetGroup).push(targetNote);

    Storage.sync();
  };

  static delete = (targetGroup, targetNote) => {
    const index = targetGroup.indexOf(targetNote);
    targetGroup.splice(index, 1);
    clearInterval(targetNote.time.intervalID);
    
    Storage.sync();
  };

  static rename = (targetGroup, targetNote, newName) => {
    super.getNote(targetGroup, targetNote).title = newName;

    Storage.sync();
  };

  static getTimeLeft = (targetNote) => {
    return formatDistanceToNowStrict(targetNote.dueDate)
  };
};