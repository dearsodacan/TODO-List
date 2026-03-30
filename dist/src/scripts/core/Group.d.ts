export class Group extends Services {
    static create: (name: any) => {
        groupName: any;
        groupArray: never[];
    };
    static push: ({ groupName, groupArray }: {
        groupName: any;
        groupArray: any;
    }) => void;
    static delete: (groupName: any) => void;
    static getUUID: (targetGroup: any) => any;
    static rename: (targetName: any, newName: any) => void;
}
import { Services } from './Services.js';
//# sourceMappingURL=Group.d.ts.map