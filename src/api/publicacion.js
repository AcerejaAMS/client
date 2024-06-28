import axios from "./axios";

export const getPublicatePropia = async () => axios.get("/publicacion/propia");

export const createPublicateRequest = async (publicate) => axios.post("/publicacion", publicate);

export const updatePublicateRequestLike = async (publicate) =>
  axios.put(`/publicacion/like/${publicate._id}`, publicate);

export const updatePublicateRequestDisLike = async (publicate) =>
  axios.put(`/publicacion/dislike/${publicate._id}`, publicate);

export const deletePublicateRequest = async (id) => axios.delete(`/publicacion/${id}`);

export const getPublicateAjena = () => axios.get(`/publicacion/ajena`);

export const getPublicateNoticia = () => axios.get(`/publicacion/noticia`);
