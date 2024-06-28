import { createContext, useContext, useState } from "react";
import {
  createComunityRequest,
  deleteComunityRequest,
  getComunitysRequest,
  getComunityRequest,
  updateComunityRequest,
} from "../api/comunity.js";

const ComunityContext = createContext();

export const useComunitys = () => {
  const context = useContext(ComunityContext);
  if (!context) throw new Error("useComunitys must be used within a ComunityProvider");
  return context;
};

export function ComunityProvider({ children }) {
  const [comunitys, setComunitys] = useState([]);

  const getComunitys = async () => {
    const res = await getComunitysRequest();
    setComunitys(res.data);
  };

  const getComunity = async () => {
    const res = await getComunityRequest();
    setComunitys(res.data);
  };

  const createComunity = async (comunity) => {
    try {
      const res = await createComunityRequest(comunity);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComunity = async (id) => {
    try {
      const res = await deleteComunityRequest(id);
      if (res.status === 204) setComunitys(comunitys.filter((comunity) => comunity._id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const updateComunity = async (id, comunity) => {
    try {
      await updateComunityRequest(id, comunity);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ComunityContext.Provider
      value={{
        comunitys,
        getComunitys,
        deleteComunity,
        createComunity,
        getComunity,
        updateComunity,
      }}
    >
      {children}
    </ComunityContext.Provider>
  );
}

