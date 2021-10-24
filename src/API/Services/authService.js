import ApiInstance from "./../../config/intercepter";
import Api from "./../../config/api";

// login
export function loginApiFun(payload) {
  return ApiInstance.post(`${Api.login}`, payload);
}

// forgot password
export function forgotPasswordService(payload) {
  return ApiInstance.post(`${Api.forgotPassword}`, payload);
}

// reset Password
export function resetPasswordApiFun(payload) {
  return ApiInstance.post(`${Api.resetPassword}`, payload);
}

// reset Password
export function logoutApiFun(payload) {
  return ApiInstance.post(`${Api.logout}`, payload);
}