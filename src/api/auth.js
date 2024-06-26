import axios from './axios.js';

export const registerRequest = (user) => axios.post(`/auth/register`, user);

export const loginRequest = (user) => axios.post(`/auth/login`, user);

export const verifyTokenRequest = async (user) => axios.get(`/auth/verify`);

export const recuperarUsuario = (id) => axios.post(`/auth/${id}`)
