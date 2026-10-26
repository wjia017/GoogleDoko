import { api } from "../api/client";

export const productService = {
  getAll: api.products,
  getReviews: api.getProductReviews,
  createReview: api.submitReview,
  search: api.search,
};

export default productService;
