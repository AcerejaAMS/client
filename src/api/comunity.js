import axios from "./axios";

export const getComunitysRequest = async () => axios.get("/comunity/sugerencia");

export const createComunityRequest = async (Comunity) => axios.post("/comunity", Comunity);

export const updateComunityRequestEnt = async (Comunity) =>
  axios.put(`/comunity/entrar/${Comunity._id}`, Comunity);

export const updateComunityRequestSal = async (Comunity) =>
  axios.put(`/comunity/salir/${Comunity._id}`, Comunity);

export const deleteComunityRequest = async (id) => axios.delete(`/comunity/${id}`);

export const getComunityRequest = async () => axios.get(`/comunity/dentro`);