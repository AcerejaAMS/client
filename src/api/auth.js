import axios from './axios.js';

export const registerRequest = async (user) => axios.post(`/auth/register`, user);

export const loginRequest = async (user) => axios.post(`/auth/login`, user);

export const verifyTokenRequest = async () => axios.get(`/auth/verify`);

export const recuperarUsuario = (id) => axios.post(`/auth/${id}`);

export const visualizarPerfilAjeno = async (id) => axios.get(`/auth/ajeno/${id}`);