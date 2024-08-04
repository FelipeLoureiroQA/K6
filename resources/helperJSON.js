import { SharedArray } from 'k6/data';

let data = new SharedArray('ler dados', function () {
    return JSON.parse(open('../data/user_data.json'));
});

export default function getUserJSON() {
    let users = data[Math.floor(Math.random() * data.length)].id;
    return users;
}