export interface User {
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
  role: "admin" | "vendor" | "customer";
  vendor?: Record<string, unknown>;
  shop?: Record<string, unknown>;
}

export type UserRole = "admin" | "vendor" | "customer";
