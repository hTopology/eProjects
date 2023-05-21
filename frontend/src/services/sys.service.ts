import { APISettings } from '@/config';
import { apiFetch } from './api.service';

async function isAuthenticatedUser(body: any) {
  // APISettings.headers.set('Content-Type', 'application/json; charset=UTF-8');
  APISettings.body = JSON.stringify(body);
  const data = await apiFetch('system/isAuthenticatedUser', APISettings);
  return data.json();
}

//APISettings.headers.set('Content-Type', 'multipart/form-data');
//APISettings.headers.set('Authorization', 'Bearer '+APISettings.token);
export { isAuthenticatedUser };
