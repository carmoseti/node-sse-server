import http from "http"
import {RequestPaths} from "./config/request"
import {writeEvent} from "./util/response"

const port: number = 9080;

const server = http.createServer((request, response) => {
    /*console.log(request.method);
    console.log(request.url);
    console.log(request.statusCode);
    console.log(request.statusMessage);
    console.log(request.rawHeaders);*/

    /*response.statusCode = 200
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Hello World!!!</h1>')*/

    console.log(request.url);

    if (request.url === RequestPaths.sseTest) {
        response.statusCode = 200
        response.setHeader('Content-Type', 'text/event-stream')
        response.setHeader('Cache-Control', 'no-cache')
        response.setHeader('Connection', 'keep-alive')
        response.setHeader('Access-Control-Allow-Origin', '*')

        writeEvent(response, 'INITIATE_ACK', JSON.stringify({
            eventName: 'INITIATE_ACK',
            message: 'SSE connection initiated successfully',
            time: new Date().getTime()
        }))

        setInterval(() => {
            writeEvent(response, 'TIME_INTERVAL', JSON.stringify({
                eventName: 'TIME_INTERVAL',
                message: `Current server time: ${new Date().toString()}`,
                time: new Date().getTime()
            }))
        }, 1000)
    }
});

server.listen(port, () => {
    console.log(`SSE Server started and running at port ${port}`)
});