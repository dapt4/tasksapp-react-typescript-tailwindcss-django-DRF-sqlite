import axios from "axios";
import { UseFormType } from "../types/UseFormType";

const tasksApi = axios.create({
  baseURL: "http://localhost:8000/tasks/api/v1/tasks/",
});

export const getAllTasks = () => tasksApi.get("/");

export const getTask = (taskId: string) => tasksApi.get("/" + taskId);

export const createTask = (task: UseFormType) => tasksApi.post("/", task);

export const deleteTask = (taskId: string) => tasksApi.delete("/" + taskId);

export const updateTask = (taskId: string, task:UseFormType) => tasksApi.put(`/${taskId}/`, task);
