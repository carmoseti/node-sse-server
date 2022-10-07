import {ServerResponse} from "http";

export const writeEvent = (clientResponse: ServerResponse,
                           eventName: string,
                           data: string) => {
    const eventId: number = Math.random() * 100000000000000000

    clientResponse.write(`event: ${eventName}\n`, 'utf-8')
    clientResponse.write(`id: ${eventId}\n`, 'utf-8')
    clientResponse.write(`data: ${data}\n\n`, 'utf-8')

    // HANDLED IN Front End for now
    // clientResponse.write(`retry: ${retryMilliseconds}\n\n`, 'utf-8')
}