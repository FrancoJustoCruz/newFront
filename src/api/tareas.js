import axios from "./axios";

// Obtener todas las tareas del profesor autenticado
export const getMyTareasRequest = async () => axios.get("/tareas");

// Obtener todas las tareas asignadas al estudiante autenticado
export const getTareasAssignedRequest = async () => axios.get("/tareas/tareasAssigned");

// Crear una nueva tarea (solo profesores)
export const createTareaRequest = async (tarea) => axios.post("/tareas", tarea);

// Obtener una tarea específica por su ID
export const getTareaRequest = async (id) => axios.get(`/tareas/${id}`);

// Actualizar una tarea específica por su ID (solo profesores)
export const updateTareaRequest = async (tarea) => axios.patch(`/tareas/${tarea._id}`, tarea);

// Eliminar una tarea específica por su ID (solo profesores)
export const deleteTareaRequest = async (id) => axios.delete(`/tareas/${id}`);