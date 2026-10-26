const TOKEN_KEY = "googledoko-token";

export function getToken() {
  return localStorage.getItem(TOKEN_KEY) || sessionStorage.getItem(TOKEN_KEY) || "";
}

export function setToken(token: string, remember: boolean) {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
  if (!token) {
    return;
  }
  if (remember) {
    localStorage.setItem(TOKEN_KEY, token);
  } else {
    sessionStorage.setItem(TOKEN_KEY, token);
  }
}

export function clearToken() {
  localStorage.removeItem(TOKEN_KEY);
  sessionStorage.removeItem(TOKEN_KEY);
}

const API_BASE = (import.meta.env.VITE_API_URL as string | undefined) || "http://localhost:4000";

async function request<T>(path: string, init: RequestInit = {}): Promise<T> {
  const headers = new Headers(init.headers);
  if (!headers.has("Content-Type") && init.body) {
    headers.set("Content-Type", "application/json");
  }
  const token = getToken();
  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }
  let response: Response;
  const targetUrl = path.startsWith("http") ? path : `${API_BASE}${path}`;
  try {
    response = await fetch(targetUrl, { ...init, headers });
  } catch {
    try {
      response = await fetch(path, { ...init, headers });
    } catch {
      throw new Error("Could not reach the GoogleDoko server. Make sure the API is running on port 4000.");
    }
  }
  const raw = (await response.json().catch(() => ({}))) as any;
  if (!response.ok) {
    const errorMsg = raw.error || raw.message || (raw.errors && JSON.stringify(raw.errors)) || "Request failed";
    throw new Error(errorMsg);
  }
  if (raw && typeof raw === "object" && "data" in raw && raw.data !== undefined) {
    if (typeof raw.data === "object" && raw.data !== null && !Array.isArray(raw.data)) {
      return { ok: raw.ok ?? raw.success ?? true, ...raw, ...raw.data } as T;
    }
    return raw.data as T;
  }
  return raw as T;
}

export const api = {
  products: () => request<AdminProduct[]>("/api/products"),
  resetPassword: (token: string, password: string) => request('/api/auth/reset', { method: 'POST', body: JSON.stringify({ token, password }) }),
  subscribe: (email: string) => request('/api/newsletter', { method: 'POST', body: JSON.stringify({ email }) }),
  support: (body: Record<string, string>) => request<{ id: number }>('/api/support', { method: 'POST', body: JSON.stringify(body) }),
  adminSupport: () => request<SupportMessage[]>('/api/admin/support'),
  adminSupportStatus: (id: number, status: string) => request(`/api/admin/support/${id}`, { method: 'PATCH', body: JSON.stringify({ status }) }),
  adminSubscribers: () => request<{ email: string; created_at: string }[]>('/api/admin/subscribers'),
  adminProductUpdate: (id: string, body: Partial<AdminProduct>) => request(`/api/admin/products/${id}`, { method: 'PATCH', body: JSON.stringify(body) }),
  vendorProducts: () => request<AdminProduct[]>('/api/vendor/products'),
  vendorSaveProduct: (id: string | null, body: Partial<AdminProduct>) => request(id ? `/api/vendor/products/${id}` : '/api/vendor/products', { method: id ? 'PUT' : 'POST', body: JSON.stringify(body) }),
  vendorRemoveProduct: (id: string) => request(`/api/vendor/products/${id}`, { method: 'DELETE' }),
  health: () => request<{ ok: boolean }>("/api/health"),
  login: (body: { identifier: string; password: string; expectedRole?: string }) =>
    request<SessionPayload>("/api/auth/login", { method: "POST", body: JSON.stringify(body) }),
  registerCustomer: (body: unknown) =>
    request<{ ok: boolean }>("/api/auth/register", { method: "POST", body: JSON.stringify(body) }),
  registerVendor: (body: unknown) =>
    request<{ ok: boolean }>("/api/auth/register-vendor", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  registerAdmin: (body: { fullName: string; email: string; password: string; securityKey: string }) =>
    request<SessionPayload>("/api/auth/register-admin", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  forgotPassword: (email: string) =>
    request<{ ok: boolean; delivery: string }>("/api/auth/forgot", { method: "POST", body: JSON.stringify({ email }) }),
  me: () => request<SessionPayload>("/api/auth/me"),
  updateProfile: (body: unknown) =>
    request<SessionPayload>("/api/auth/profile", { method: "PUT", body: JSON.stringify(body) }),
  changePassword: (current: string, next: string) =>
    request<{ ok: boolean }>("/api/auth/password", {
      method: "PUT",
      body: JSON.stringify({ current, next }),
    }),
  saveShop: (body: unknown) =>
    request<SessionPayload>("/api/me/shop", { method: "PUT", body: JSON.stringify(body) }),
  createOrder: (body: unknown) =>
    request<{ id: string; orders: unknown[] }>("/api/orders", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  getOrderById: (id: string) => request<any>(`/api/orders/${id}`),
  adminOverview: () => request<AdminOverview>("/api/admin/overview"),
  adminUsers: () => request<AdminUser[]>("/api/admin/users"),
  adminVendors: () => request<AdminVendor[]>("/api/admin/vendors"),
  adminVendorStatus: (userId: number, status: "approved" | "under_review" | "on_hold" | "rejected") =>
    request<{ ok: boolean }>(`/api/admin/vendors/${userId}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  adminCoupons: () => request<AdminCoupon[]>("/api/admin/coupons"),
  adminCreateCoupon: (body: Partial<AdminCoupon>) =>
    request<{ ok: boolean; id: number }>("/api/admin/coupons", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  adminToggleCoupon: (id: number, active: number) =>
    request<{ ok: boolean }>(`/api/admin/coupons/${id}/toggle`, {
      method: "PATCH",
      body: JSON.stringify({ active }),
    }),
  adminDeleteCoupon: (id: number) =>
    request<{ ok: boolean }>(`/api/admin/coupons/${id}`, { method: "DELETE" }),
  adminSettings: () => request<PlatformSettings>("/api/admin/settings"),
  adminUpdateSettings: (body: Partial<PlatformSettings>) =>
    request<{ ok: boolean; settings: PlatformSettings }>("/api/admin/settings", {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  adminOrders: () => request<AdminOrder[]>("/api/admin/orders"),
  adminOrderStatus: (id: string, status: string) =>
    request<{ ok: boolean }>(`/api/admin/orders/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
  adminProducts: () => request<AdminProduct[]>("/api/admin/products"),
  adminSaveProduct: (id: string | null, body: Partial<AdminProduct>) =>
    request<{ id: string }>(id ? `/api/admin/products/${id}` : '/api/admin/products', {
      method: id ? 'PUT' : 'POST',
      body: JSON.stringify(body),
    }),
  adminRemoveProduct: (id: string) =>
    request<{ ok: boolean }>(`/api/admin/products/${id}`, { method: 'DELETE' }),

  // Search
  search: (q: string, category?: string) => {
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (category) params.set("category", category);
    return request<AdminProduct[]>(`/api/search?${params.toString()}`);
  },

  // Wishlist (DB-persisted)
  getWishlist: () => request<AdminProduct[]>("/api/wishlist"),
  addToWishlist: (productId: string) => request<{ ok: boolean }>(`/api/wishlist/${productId}`, { method: "POST" }),
  removeFromWishlist: (productId: string) => request<{ ok: boolean }>(`/api/wishlist/${productId}`, { method: "DELETE" }),

  // Product Reviews
  getProductReviews: (productId: string) => request<ProductReview[]>(`/api/products/${productId}/reviews`),
  submitReview: (body: { productId: string; rating: number; title: string; body: string }) =>
    request<ProductReview>("/api/reviews", { method: "POST", body: JSON.stringify(body) }),

  // Image Upload
  uploadImage: async (file: File): Promise<{ ok: boolean; url: string }> => {
    const form = new FormData();
    form.append("image", file);
    const token = getToken();
    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(`${API_BASE}/api/upload`, { method: "POST", headers, body: form });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Upload failed");
    return data;
  },

  // Admin reviews
  adminReviews: () => request<AdminReview[]>("/api/admin/reviews"),
  adminDeleteReview: (id: number) => request<{ ok: boolean }>(`/api/admin/reviews/${id}`, { method: "DELETE" }),

  // Cart (DB-persisted)
  getCart: () => request<CartItem[]>("/api/cart"),
  addToCart: (productId: string, quantity = 1) =>
    request<CartItem[]>("/api/cart", { method: "POST", body: JSON.stringify({ productId, quantity }) }),
  updateCartItem: (productId: string, quantity: number) =>
    request<CartItem[]>(`/api/cart/${productId}`, { method: "PUT", body: JSON.stringify({ quantity }) }),
  removeFromCart: (productId: string) => request<CartItem[]>(`/api/cart/${productId}`, { method: "DELETE" }),
  clearCart: () => request<CartItem[]>("/api/cart", { method: "DELETE" }),

  // Addresses (DB-persisted)
  getAddresses: () => request<UserAddress[]>("/api/addresses"),
  addAddress: (body: Omit<UserAddress, "id">) =>
    request<UserAddress[]>("/api/addresses", { method: "POST", body: JSON.stringify(body) }),
  updateAddress: (id: string, body: Partial<UserAddress>) =>
    request<UserAddress[]>(`/api/addresses/${id}`, { method: "PUT", body: JSON.stringify(body) }),
  setDefaultAddress: (id: string) =>
    request<UserAddress[]>(`/api/addresses/${id}/default`, { method: "PATCH" }),
  deleteAddress: (id: string) => request<UserAddress[]>(`/api/addresses/${id}`, { method: "DELETE" }),

  // Rewards (DB-persisted)
  getRewards: () => request<{ points: number; log: RewardEntry[] }>("/api/rewards"),
  redeemPoints: (amount: number) =>
    request<{ points: number; log: RewardEntry[] }>("/api/rewards/redeem", { method: "POST", body: JSON.stringify({ amount }) }),

  // Profile photo upload
  uploadProfilePhoto: async (file: File): Promise<{ ok: boolean; photo: string }> => {
    const form = new FormData();
    form.append("photo", file);
    const token = getToken();
    const headers: Record<string, string> = {};
    if (token) headers["Authorization"] = `Bearer ${token}`;
    const res = await fetch(`${API_BASE}/api/auth/photo`, { method: "POST", headers, body: form });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Photo upload failed");
    return data;
  },

  // Settings, Coupons & Checkout Calculation
  getSettings: () => request<PlatformSettings>("/api/settings"),
  validateCoupon: (code: string, subtotal: number) =>
    request<CouponValidation>("/api/coupons/validate", {
      method: "POST",
      body: JSON.stringify({ code, subtotal }),
    }),
  calculateCheckout: (items: { productId: string; quantity: number }[], couponCode?: string) =>
    request<CheckoutCalculation>("/api/checkout/calculate", {
      method: "POST",
      body: JSON.stringify({ items, couponCode }),
    }),
};

export interface SessionUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  verified: boolean;
  rewardPoints: number;
  referralCode: string;
  photo: string;
  role: "customer" | "vendor" | "admin";
  vendor?: Record<string, unknown>;
}

export interface SessionPayload {
  token?: string;
  user: SessionUser;
  orders: unknown[];
  addresses: unknown[];
  reviews: unknown[];
  rewards: unknown[];
  points: number;
  notifications: unknown;
  language: string;
  wishlist: unknown[];
  cart: unknown[];
}

export interface AdminOverview {
  users: number;
  vendors: number;
  pendingVendors: number;
  products: number;
  orders: number;
  revenue: number;
}

export interface AdminUser {
  id: number;
  email: string;
  phone: string;
  role: string;
  first_name: string;
  last_name: string;
  location: string;
  created_at: string;
  verified: number;
}

export interface AdminVendor {
  user_id: number;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  business_name: string;
  vendor_type: string;
  location: string;
  district: string;
  category: string;
  status: string;
  created_at: string;
  address?: string;
  main_products?: string;
  description?: string;
  photo?: string;
  document_name?: string;
  product_count?: number;
}

export interface AdminCoupon {
  id: number;
  code: string;
  discount_type: "percentage" | "fixed";
  discount_value: number;
  min_order: number;
  expiry_date: string;
  times_used: number;
  active: number;
  created_at: string;
}

export interface PlatformSettings {
  delivery_fee: number;
  free_delivery_threshold: number;
  platform_commission: number;
  support_phone: string;
  support_email: string;
  announcement_banner: string;
  announcement_active: boolean;
}

export interface AdminOrder {
  delivery_address: string;
  recipient_name: string;
  recipient_phone: string;
  items: { name: string; quantity: number; price: number }[];
  id: string;
  email: string;
  first_name: string;
  last_name: string;
  date: string;
  status: string;
  total: number;
  payment_method: string;
  payment_status: string;
}

export interface SupportMessage { id: number; full_name: string; email: string; phone: string; address: string; inquiry: string; status: string; created_at: string; }

export interface AdminProduct {
  active: number;
  weight: string;
  image: string;
  description: string;
  rating: number;
  sold: string;
  id: string;
  name: string;
  category: string;
  price: number;
  stock: number;
  origin: string;
  seller: string;
}

export interface ProductReview {
  id: number;
  product_id: string;
  user_id: number;
  rating: number;
  title: string;
  body: string;
  created_at: string;
  first_name: string;
  last_name: string;
  photo: string;
}

export interface AdminReview {
  id: number;
  product_id: string;
  user_id: number;
  rating: number;
  title: string;
  body: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  product_name: string;
  product_image?: string;
}

export interface CartItem {
  id: string;
  name: string;
  weight: string;
  price: number;
  quantity: number;
  image: string;
  origin?: string;
  seller?: string;
}

export interface UserAddress {
  id: string;
  label: string;
  fullName: string;
  phone: string;
  province: string;
  city: string;
  area: string;
  street: string;
  postalCode: string;
  isDefault: boolean;
}

export interface RewardEntry {
  id: string;
  label: string;
  points: number;
  date: string;
}

export interface PlatformSettings {
  deliveryFee: number;
  freeDeliveryThreshold: number;
  supportPhone: string;
  supportEmail: string;
  announcement: string;
  marketplaceStatus: string;
}

export interface CouponValidation {
  valid: boolean;
  code: string;
  discountType: "percentage" | "fixed";
  discountValue: number;
  discountAmount: number;
  minOrder: number;
  message?: string;
  error?: string;
}

export interface CheckoutCalculationItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  weight: string;
  image: string;
  seller?: string;
  origin?: string;
  lineTotal: number;
  inStock: boolean;
  availableStock: number;
  error?: string;
}

export interface CheckoutCalculation {
  valid: boolean;
  items: CheckoutCalculationItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  coupon: {
    code: string;
    discountAmount: number;
    discountType: string;
    discountValue: number;
  } | null;
  freeDeliveryThreshold?: number;
  message?: string;
}

