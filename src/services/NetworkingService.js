import { map } from 'rxjs/operators';
import { buildEndpointURL } from "./config";

const AjaxMethod = {
    GET: 'GET',
    POST: 'POST',
    PATCH: 'PATCH',
}

export class NetworkingService {
    TIMEOUT_IN_MS = 30000;

    constructor(baseUrl, ajax) {
        this.baseUrl = baseUrl;
        this.ajax = ajax;
    }

    getJSON(endpoint, headers) {
        const url = buildEndpointURL(this.baseUrl, endpoint);

        return this.request(url, AjaxMethod.GET, headers).pipe(map(({response}) => response));
    }

    request(url, method, headers, body) {
        return this.ajax({url, method, body, headers, timeout: 30000});
    }
}