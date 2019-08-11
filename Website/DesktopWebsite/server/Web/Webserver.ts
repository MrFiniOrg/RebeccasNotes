import express from "express"
import webpack, { Configuration } from "webpack"
import webpackDevMiddleware, { Options as WebpackDevMiddlewareOptions } from  "webpack-dev-middleware"
import webpackHotMiddleware from "webpack-hot-middleware"
import path from "path"

export class WebServer {
    // #region Constructor
    ServerPath: string
    App: express.Express
    private constructor(ServerPath: string, port: number, WebpackConfig: Configuration) {
        this.ServerPath = ServerPath
        this.App = express()
        this.StartApp(port, WebpackConfig)
    }
    // #endregion
    
    // #region SINGLETON
    private static _WebServer: WebServer
    public static CreateInstance(ServerPath: string, port: number, WebpackConfig: Configuration) {
        if (this._WebServer === null || this._WebServer === undefined)
            this._WebServer = new WebServer(ServerPath, port, WebpackConfig)
        return this._WebServer
    }
    // #endregion

    // Function that starts the Application
    private StartApp(port: number, WebpackConfig: Configuration) {
        const compiler = webpack(WebpackConfig);

        //1. webpack-dev-middleware - Where the publicPath is Defined
        if(WebpackConfig && WebpackConfig.output && WebpackConfig.output.publicPath) {
            const middlewareOption : WebpackDevMiddlewareOptions = { publicPath: WebpackConfig.output.publicPath }
            this.App.use(webpackDevMiddleware(compiler, middlewareOption))
        }

        //2. webpack-hot-middleware
        this.App.use(webpackHotMiddleware(compiler))

        //3. app.use(express.static(“public”))
        this.App.use(express.static(this.ServerPath))

        //4. Serves the Static Content
        this.App.get("/", (req: any, res: any) => res.sendFile(path.resolve(this.ServerPath, "index.html")))
        // Last...
        this.App.listen(port, () => { console.log('App listening on port: ' + port) })
    }
}