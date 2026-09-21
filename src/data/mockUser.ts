export interface MockUser {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string;
  verified: boolean;
  rewardPoints: number;
  referralCode: string;
  photo: string;
  password: string;
}

export const defaultMockUser: MockUser = {
  firstName: "Lahana",
  lastName: "Lawaju",
  email: "lahana.lawaju@gmail.com",
  phone: "+977 980-123-4567",
  location: "Kathmandu, Nepal",
  verified: true,
  rewardPoints: 320,
  referralCode: "LAHANA320",
  photo: "",
  password: "password123",
};
