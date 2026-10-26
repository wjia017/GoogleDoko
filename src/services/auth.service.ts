import { api, clearToken } from "../api/client";

export const authService = {
  login: api.login,
  register: api.registerCustomer,
  registerVendor: api.registerVendor,
  getProfile: api.me,
  updateProfile: api.updateProfile,
  changePassword: api.changePassword,
  forgotPassword: api.forgotPassword,
  resetPassword: api.resetPassword,
  uploadPhoto: api.uploadProfilePhoto,
  logout: () => {
    clearToken();
    try {
      localStorage.removeItem("googledoko-user");
      localStorage.removeItem("googledoko-cart");
      localStorage.removeItem("googledoko-wishlist");
    } catch {
      // Ignore storage cleanup errors
    }
  },
};

export default authService;
