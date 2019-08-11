"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const webpack_1 = __importDefault(require("webpack"));
const webpack_dev_middleware_1 = __importDefault(require("webpack-dev-middleware"));
const webpack_hot_middleware_1 = __importDefault(require("webpack-hot-middleware"));
const path_1 = __importDefault(require("path"));
class WebServer {
    constructor(ServerPath, port, WebpackConfig) {
        this.ServerPath = ServerPath;
        this.App = express_1.default();
        this.StartApp(port, WebpackConfig);
    }
    static CreateInstance(ServerPath, port, WebpackConfig) {
        if (this._WebServer === null || this._WebServer === undefined)
            this._WebServer = new WebServer(ServerPath, port, WebpackConfig);
        return this._WebServer;
    }
    // #endregion
    // Function that starts the Application
    StartApp(port, WebpackConfig) {
        const compiler = webpack_1.default(WebpackConfig);
        //1. webpack-dev-middleware - Where the publicPath is Defined
        if (WebpackConfig && WebpackConfig.output && WebpackConfig.output.publicPath) {
            const middlewareOption = { publicPath: WebpackConfig.output.publicPath };
            this.App.use(webpack_dev_middleware_1.default(compiler, middlewareOption));
        }
        //2. webpack-hot-middleware
        this.App.use(webpack_hot_middleware_1.default(compiler));
        //3. app.use(express.static(“public”))
        this.App.use(express_1.default.static(this.ServerPath));
        //4. Serves the Static Content
        this.App.get("/", (req, res) => res.sendFile(path_1.default.resolve(this.ServerPath, "index.html")));
        // Last...
        this.App.listen(port, () => { console.log('App listening on port: ' + port); });
    }
}
exports.WebServer = WebServer;
//# sourceMappingURL=Webserver.js.map