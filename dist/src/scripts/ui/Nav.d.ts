interface NavigationInter {
    add(input: string, options?: {
        sync: boolean;
    }): void;
    sync(): void;
}
export declare class Navigation implements NavigationInter {
    private container;
    constructor(container: HTMLUListElement);
    add(input: string, options?: {
        sync: boolean;
    }): void;
    sync(): void;
}
export {};
//# sourceMappingURL=Nav.d.ts.map