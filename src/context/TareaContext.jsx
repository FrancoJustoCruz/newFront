import { createContext, useContext, useState } from "react";
import { 
  getMyTareasRequest, 
  getTareasAssignedRequest, 
  createTareaRequest, 
  getTareaRequest, 
  updateTareaRequest, 
  deleteTareaRequest 
} from "../api/tareas";

const TareaContext = createContext();

export const useTareas = () => {
  const context = useContext(TareaContext);

  if (!context) {
    throw new Error('useTareas must be used within TareaProvider');
  }
  return context;
};

export function TareaProvider({ children }) {
  const [tareas, setTareas] = useState([]);

  const getMyTareas = async () => {
    try {
      const res = await getMyTareasRequest();
      setTareas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTareasAssigned = async () => {
    try {
      const res = await getTareasAssignedRequest();
      setTareas(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const createTarea = async (tarea) => {
    try {
      const res = await createTareaRequest(tarea);
      setTareas([...tareas, res.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTarea = async (id) => {
    try {
      const res = await deleteTareaRequest(id);
      if (res.status === 204) {
        setTareas(tareas.filter(tarea => tarea._id !== id));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getTarea = async (id) => {
    try {
      const res = await getTareaRequest(id);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTarea = async (id, tarea) => {
    try {
      const res = await updateTareaRequest(id, tarea);
      setTareas(tareas.map(t => (t._id === id ? res.data : t)));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TareaContext.Provider
      value={{
        tareas,
        getMyTareas,
        getTareasAssigned,
        createTarea,
        deleteTarea,
        getTarea,
        updateTarea
      }}
    >
      {children}
    </TareaContext.Provider>
  );
}