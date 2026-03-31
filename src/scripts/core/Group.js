import { Storage } from './StorageAPI.js';
import { Services } from './Services.js';

export class Group extends Services {
  static create = (name) => ({
    groupName: name,
    groupArray: [],
  });

  static push = ({ groupName, groupArray }) => {
    super.getGroups()[groupName] = groupArray;
    Storage.sync();
  };

  static delete = (groupName) => {
    delete super.getGroups()[groupName];

    Storage.sync();
  };

  static getUUID = (targetGroup) => targetGroup.UUID;

  static rename = (targetName, newName) => {
    const targetObject = super.getGroups();

    console.log(targetObject);
    
    debugger
    Object.defineProperty(targetObject, newName, {
      value: targetObject[targetName],

      configurable: true,
      enumerable: true,
      writable: true,
    });

    delete targetObject[targetName];

    Storage.sync();
  };
}
