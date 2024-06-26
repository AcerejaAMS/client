import axios from "./axios";

export const getComunitysRequest = async () => axios.get("/comunidad");

export const createComunityRequest = async (Comunity) => axios.post("/comunidad", Comunity);

export const updateComunityRequest = async (Comunity) =>
  axios.put(`/comunidad/${Comunity._id}`, Comunity);

export const deleteComunityRequest = async (id) => axios.delete(`/comunidad/${id}`);

export const getComunityRequest = async (id) => axios.get(`/comunidad/${id}`);