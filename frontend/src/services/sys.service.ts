import { APISettings } from "@/config";
import { apiFetch } from "./api.service";

async function isAuthenticatedUser(body: any) {
  APISettings.body = JSON.stringify(body);
  const data = await apiFetch("system/isAuthenticatedUser", APISettings);
  return data.json();
}

//APISettings.headers.set('Content-Type', 'multipart/form-data');
//APISettings.headers.set('Authorization', 'Bearer '+APISettings.token);
export { isAuthenticatedUser };
