import ApiInstance from "./../../config/intercepter";
import Api from "./../../config/api";

// login
export function getUserList(payload) {
  return ApiInstance.get(`${Api.getUserList}?iStatus=${payload.iStatus}`);
}