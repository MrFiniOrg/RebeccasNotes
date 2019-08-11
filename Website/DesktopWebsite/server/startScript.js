"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const UIPath = path_1.default.resolve(__dirname, "./../build");
const webpackPath = path_1.default.resolve(__dirname, "./../webpack.config.js");
const WebpackConfig = require(webpackPath);
const SettingPath = path_1.default.resolve(__dirname, "./../Settings.json");
const Settings = require(SettingPath);
const port = Settings.PORT;
// Using the Server to run the UI
const Webserver_1 = require("./Web/Webserver");
Webserver_1.WebServer.CreateInstance(UIPath, port, WebpackConfig);
//# sourceMappingURL=startScript.js.map