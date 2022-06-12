import * as axios from 'axios';
export const baseURL = 'https://jsonplaceholder.typicode.com/todos/';

const todoAxios = axios.create({baseURL});
todoAxios.get('1').then(res => console.log(res));

export function getAll() {
    return fetch(baseURL).then(response => response.json());
}

export function getById(id) {
    return fetch(`${baseURL}/${id}`)
        .then(response => response.json());
}

export function removeById(id) {
    return fetch(`${baseURL}/${id}`, {method: "DELETE"})
        .then(response => response.json());
}

// --

export class TodoService {
    constructor (baseURL) {
        this.baseURL = baseURL;
    }

    getAll() {
        return fetch(this.baseURL).then(response => response.json());
    }

    getById(id) {
        return fetch(`${this.baseURL}/${id}`)
            .then(response => response.json());
    }

    removeById(id) {
        return fetch(`${this.baseURL}/${id}`, {method: "DELETE"})
            .then(response => response.json());
    }
}
