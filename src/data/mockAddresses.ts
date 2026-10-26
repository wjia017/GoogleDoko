export interface MockAddress {
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

export const defaultMockAddresses: MockAddress[] = [
  {
    id: "addr-home",
    label: "Home",
    fullName: "Lahana Lawaju",
    phone: "+977 980-123-4567",
    province: "Bagmati",
    city: "Kathmandu",
    area: "Baneshwor",
    street: "Devkota Marg, House 12",
    postalCode: "44600",
    isDefault: true,
  },
  {
    id: "addr-office",
    label: "Office",
    fullName: "Lahana Lawaju",
    phone: "+977 980-765-4321",
    province: "Bagmati",
    city: "Lalitpur",
    area: "Jawalakhel",
    street: "Pulchowk Road, Office 4",
    postalCode: "44700",
    isDefault: false,
  },
];
