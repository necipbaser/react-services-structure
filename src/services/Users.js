import {post, get, postJson, postFormData} from "./Request";


const apiUrl = process.env.REACT_APP_API_URL;
export const getUsers = ()=> get( apiUrl + 'users');
export const getUserById = (id)=> get(apiUrl + `users/${id}`)
export const newUserJson = data => postJson(apiUrl + 'posts',data)
export const newUserFormData = data => postFormData(apiUrl + 'posts',data)