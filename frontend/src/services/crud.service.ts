import { APISettings } from '../config.js';
import { apiFetch } from './api.service.js';

async function post(input: RequestInfo | URL, body: any) {
  APISettings.method = 'POST';
  APISettings.body = JSON.stringify(body);
  const data = await apiFetch(input, APISettings);
  return data.json();
}

async function get(input: RequestInfo | URL, params: any = '') {
  APISettings.method = 'GET';
  // APISettings.params = params;
  const data = await apiFetch(input + params);
  return data.json();
}

async function put(input: RequestInfo | URL, body: any) {
  APISettings.method = 'PUT';
  APISettings.body = JSON.stringify(body);
  const data = await apiFetch(input, APISettings);
  return data.json();
}

async function remove(input: RequestInfo | URL, body: any) {
  APISettings.method = 'DELETE';
  APISettings.body = JSON.stringify(body);
  const data = await apiFetch(input, APISettings);
  return data.json();
}
export { post, get, put, remove };
