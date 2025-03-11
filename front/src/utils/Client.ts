interface RequestData {
    method: string | undefined,
    path: string | undefined,
    body: BodyInit | null | undefined,
    headers: object | undefined
};

export default class Client {
    static request({ method = 'GET', path, body, headers = {} }: Partial<RequestData>): Promise<any> {
        if (!path) {
            throw new Error('A path is required to make a request');
        }

        return fetch(path, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            },
            body: body
        })
    }
}

export class BackendClient extends Client
{
    static request({ method = 'GET', path, body, headers = {} }: Partial<RequestData>): Promise<any> {
        return super.request({
            method,
            path: (this.apiUrl() ?? '') + (path ?? ''),
            body,
            headers: {
                'Authorization': `bearer ${this.token()}`,
                ...headers
            }
        })
    }

    static apiUrl(): string | undefined {
        return process.env.NEXT_PUBLIC_BACK_END_URL;
    }

    static token(): string | undefined {
        return process.env.NEXT_PUBLIC_BACK_END_TOKEN;
    }
}