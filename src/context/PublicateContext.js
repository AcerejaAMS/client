import { createContext, useContext, useState } from "react";
import {
  createPublicateRequest,
  deletePublicateRequest,
  getPublicatePropia,
  getPublicateAjena,
  updatePublicateRequest,
} from "../api/publicacion.js";

const PublicateContext = createContext();

export const usePublicates = () => {
  const context = useContext(PublicateContext);
  if (!context) throw new Error("usePublicates must be used within a PublicateProvider");
  return context;
};

export function PublicateProvider({ children }) {
  const [publicates, setPublicates] = useState([]);

  const getPublicate = async () => {
    const res = await getPublicatePropia();
    console.log(res)
    setPublicates(res.data);
  };

  const deletePublicate = async (id) => {
    try {
      const res = await deletePublicateRequest(id);
      if (res.status === 204) setPublicates(publicates.filter((publicate) => publicate._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createPublicate = async (publicate) => {
    try {
      const res = await createPublicateRequest(publicate);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getPublicateA = async (id) => {
    try {
      const res = await getPublicateAjena(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updatePublicate = async (id, publicate) => {
    try {
      await updatePublicateRequest(id, publicate);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <PublicateContext.Provider
      value={{
        publicates,
        getPublicateA,
        deletePublicate,
        createPublicate,
        getPublicate,
        updatePublicate,
      }}
    >
      {children}
    </PublicateContext.Provider>
  );
}
