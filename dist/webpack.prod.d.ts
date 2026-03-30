declare const _default: {
    entry: {
        app: string;
    };
    plugins: import("html-webpack-plugin")[];
    output: {
        filename: string;
        path: any;
        clean: boolean;
    };
    devServer: {
        watchFiles: string[];
    };
    resolve: {
        extensions: string[];
    };
    devtool: string;
    module: {
        rules: ({
            test: RegExp;
            use: string[];
            include: any[];
            type?: never;
        } | {
            test: RegExp;
            use: string[];
            include?: never;
            type?: never;
        } | {
            test: RegExp;
            type: string;
            use?: never;
            include?: never;
        })[];
    };
};
export default _default;
//# sourceMappingURL=webpack.prod.d.ts.map