import axios from "./axios";

export const getPublicatePropia = async () => axios.get("/publicacion/propia");

export const createPublicateRequest = async (publicate) => axios.post("/publicacion", publicate);

export const updatePublicateRequest = async (publicate) =>
  axios.put(`/publicacion/${publicate._id}`, publicate);

export const deletePublicateRequest = async (id) => axios.delete(`/publicacion/${id}`);

export const getPublicateAjena = async () => axios.post(`/publicacion/ajena`);
