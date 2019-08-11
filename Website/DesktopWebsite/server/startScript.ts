import { Configuration } from "webpack";
import path from "path";
interface ISettings { PORT: number }

const UIPath        : string        = path.resolve(__dirname, "./../build")
const webpackPath   : string        = path.resolve(__dirname, "./../webpack.config.js")
const WebpackConfig : Configuration = require(webpackPath)
const SettingPath   : string        = path.resolve(__dirname, "./../Settings.json")
const Settings      : ISettings     = require(SettingPath)
const port          : number        = Settings.PORT
// Using the Server to run the UI
import { WebServer } from "./Web/Webserver"
WebServer.CreateInstance(UIPath, port, WebpackConfig)