import { post } from "@/services/crud.service";

function readData(entityId: string, body: any = {}) {
  return post(`read/${entityId}`, {
    CurPage: 1,
    PageSize: 20,
    ...body,
  });
}
export { readData };
