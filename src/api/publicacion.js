import axios from "./axios";

export const getPublicatesRequest = async () => axios.get("/publicacion");

export const createPublicateRequest = async (publicate) => axios.post("/publicacion", publicate);

export const updatePublicateRequest = async (publicate) =>
  axios.put(`/publicacion/${publicate._id}`, publicate);

export const deletePublicateRequest = async (id) => axios.delete(`/publicacion/${id}`);

export const getPublicateRequest = async (id) => axios.get(`/publicacion/${id}`);
