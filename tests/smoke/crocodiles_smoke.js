import http from 'k6/http';
import { check } from 'k6';
import getUserJSON from '../../resources/helperJSON.js';
import opt from '../../resources/crocodiles_smoke_options.js';

const url_base = __ENV.BASE_URL;
export const options = opt();

export default function () {
   
    const users = getUserJSON();
    const res = http.get(url_base + users);

    check(res, {
        'Status 200': (r) => r.status === 200,
    })
}