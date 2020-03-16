import startServer from "../server/config/server";

/**
 * @function setup the environment host where to go on testing session
 */

export const setup = async () => {
    const app = await startServer();
    const x = app.request.originalUrl;
    // tslint:disable-next-line: one-variable-per-declaration
    const y: any[] | any | any = x;
    const port = y.port;
    process.env.TEST_HOST = `http://127.0.0.1:${port}`;
};
