import axios from "axios";
import { config } from "../config";

export function getTodos() {
  return axios.get(`${config.api_host}/api/v1/todos`);
}

export function getOneTodo(id) {
  return axios.get(`${config.api_host}/api/v1/todos/${id}`);
}

export function deleteTodo(id) {
  return axios.delete(`${config.api_host}/api/v1/todos/${id}`);
}

export function createTodos(data) {
  return axios.post(`${config.api_host}/api/v1/todos`, data);
}

export function updateTodos(id, payload) {
  return axios.put(`${config.api_host}/api/v1/todos/${id}`, payload);
}