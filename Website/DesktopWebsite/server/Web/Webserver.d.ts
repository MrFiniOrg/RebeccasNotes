import express from "express";
import { Configuration } from "webpack";
export declare class WebServer {
    ServerPath: string;
    App: express.Express;
    private constructor();
    private static _WebServer;
    static CreateInstance(ServerPath: string, port: number, WebpackConfig: Configuration): WebServer;
    private StartApp;
}
//# sourceMappingURL=Webserver.d.ts.map