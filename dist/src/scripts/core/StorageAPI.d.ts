export class Storage {
    static #localStorageKey: string;
    static #activeSource: any;
    static sync: (isInit: any) => void;
    static syncSource: () => void;
    static clear: () => void;
    static setSource: (source: any) => void;
    static #getParse: (property: any) => any;
    static getGroups: () => any;
    static getGroup: (groupTitle: any) => any;
    static getLocalData: () => any;
    static getNote: (noteTitle: any) => any;
}
//# sourceMappingURL=StorageAPI.d.ts.map