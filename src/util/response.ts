import {ServerResponse} from "http"

export const writeEvent = (serverResponse: ServerResponse,
                           eventName: string,
                           data: string) => {
    const eventId: number = Math.random() * 100000000000000000

    serverResponse.write(`event: ${eventName}\n`, 'utf-8')
    serverResponse.write(`id: ${eventId}\n`, 'utf-8')
    serverResponse.write(`data: ${data}\n\n`, 'utf-8')

    // HANDLED IN Front End for now
    // serverResponse.write(`retry: ${retryMilliseconds}\n\n`, 'utf-8')
}