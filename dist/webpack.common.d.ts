declare namespace _default {
    namespace entry {
        let app: string;
    }
    let plugins: HtmlWebpackPlugin[];
    namespace output {
        let filename: string;
        let path: any;
        let clean: boolean;
    }
    namespace devServer {
        let watchFiles: string[];
    }
    namespace resolve {
        let extensions: string[];
    }
    let devtool: string;
    namespace module {
        let rules: ({
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
    }
}
export default _default;
import HtmlWebpackPlugin from 'html-webpack-plugin';
//# sourceMappingURL=webpack.common.d.ts.map