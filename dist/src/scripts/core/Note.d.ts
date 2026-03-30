export class Note extends Services {
    static create: (noteMeta: any) => Note;
    static push: (targetNote: any, targetGroup: any) => void;
    static delete: (targetGroup: any, targetNote: any) => void;
    static rename: (targetGroup: any, targetNote: any, newName: any) => void;
    static getTimeLeft: (targetNote: any) => string;
    constructor({ title, description, dueDate, priority }: {
        title: any;
        description: any;
        dueDate: any;
        priority: any;
    });
    dueDate: any;
    title: any;
    description: any;
    priority: any;
}
import { Services } from "./Services.js";
//# sourceMappingURL=Note.d.ts.map