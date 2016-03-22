import {Request} from 'superagent';

const HEADERS = {
    'Accept': 'application/json',
    'X-USER-TOKEN': '123456'
};

export function get(url) {
    return Request.get(url).set(HEADERS);
}
    
export function post(url) {
    return Request.post(url).set(HEADERS);
}
    
export function put(url) {
    return Request.put(url).set(HEADERS);
}
    
export function delete(url) {
    return Request.delete(url).set(HEADERS);
}

module.exports = {
    get, post, put, delete
};