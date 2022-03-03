import axios from 'axios'

const API = axios.create({ baseURL: 'http://192.168.100.18:5000' })
// const API = axios.create({ baseURL: 'https://linky-mern.herokuapp.com/' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req
});

export const signin = (data) => API.post('/register', data)
export const signup = (data) => API.post('/login', data)
export const getData = () => API.get('/')
export const addLink = (data) => API.post('/link', data)
export const editLink = (data) => API.put(`/link/${data._id}`, data)
export const deleteLink = (data) => API.delete(`/link/${data._id}`, { data: { author: data.author } })
export const editUser = (data) => API.put(`/user/${data._id}`, data)
export const getProfile = (data) => API.get(`/${data}`)