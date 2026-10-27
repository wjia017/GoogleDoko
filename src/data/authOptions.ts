export const VENDOR_TYPES = [
  "Farmer",
  "Local Producer",
  "Merchant / Seller",
  "Local Business",
] as const;

export const PRODUCT_CATEGORIES = [
  "Fruits",
  "Vegetables",
  "Crops",
  "Seeds",
  "Plants",
  "Herbs",
  "Spices",
  "Grains",
  "Pulses",
  "Nuts",
  "Mushrooms",
  "Honey",
  "Traditional Foods",
  "Local Specialty Products",
  "Other",
] as const;

export const VENDOR_LOCATIONS = [
  "Kathmandu",
  "Lalitpur",
  "Bhaktapur",
  "Pokhara",
  "Chitwan",
  "Ilam",
  "Mustang",
  "Jumla",
  "Dolpa",
  "Taplejung",
  "Dhankuta",
  "Sunsari",
  "Damak",
  "Kavre",
  "Sindhupalchok",
  "Other",
] as const;

export const NEPAL_DISTRICTS = [
  "Achham",
  "Arghakhanchi",
  "Baglung",
  "Baitadi",
  "Bajhang",
  "Bajura",
  "Banke",
  "Bara",
  "Bardiya",
  "Bhaktapur",
  "Bhojpur",
  "Chitwan",
  "Dadeldhura",
  "Dailekh",
  "Dang",
  "Darchula",
  "Dhading",
  "Dhankuta",
  "Dhanusha",
  "Dolakha",
  "Dolpa",
  "Doti",
  "Eastern Rukum",
  "Gorkha",
  "Gulmi",
  "Humla",
  "Ilam",
  "Jajarkot",
  "Jhapa",
  "Jumla",
  "Kailali",
  "Kalikot",
  "Kanchanpur",
  "Kapilvastu",
  "Kaski",
  "Kathmandu",
  "Kavrepalanchok",
  "Khotang",
  "Lalitpur",
  "Lamjung",
  "Mahottari",
  "Makwanpur",
  "Manang",
  "Morang",
  "Mugu",
  "Mustang",
  "Myagdi",
  "Nawalparasi East",
  "Nawalparasi West",
  "Nuwakot",
  "Okhaldhunga",
  "Palpa",
  "Panchthar",
  "Parbat",
  "Parsa",
  "Pyuthan",
  "Ramechhap",
  "Rasuwa",
  "Rautahat",
  "Rolpa",
  "Rupandehi",
  "Salyan",
  "Sankhuwasabha",
  "Saptari",
  "Sarlahi",
  "Sindhuli",
  "Sindhupalchok",
  "Siraha",
  "Solukhumbu",
  "Sunsari",
  "Surkhet",
  "Syangja",
  "Tanahun",
  "Taplejung",
  "Terhathum",
  "Udayapur",
  "Western Rukum",
] as const;

export type AccountRole = "customer" | "vendor" | "admin";
export type VendorReviewStatus = "under_review" | "approved";

export interface VendorProfile {
  businessName: string;
  vendorType: string;
  location: string;
  district: string;
  address: string;
  category: string;
  mainProducts: string;
  description: string;
  photo: string;
  documentName: string;
  status: VendorReviewStatus;
  banner?: string;
  hours?: string;
  sundayHours?: string;
  storeEmail?: string;
  storePhone?: string;
  facebook?: string;
  instagram?: string;
  servedCategories?: Record<string, boolean>;
  settings?: VendorStoreSettings;
}

export interface VendorStoreSettings {
  orderAlerts: boolean;
  stockAlerts: boolean;
  reviewAlerts: boolean;
  payoutAlerts: boolean;
  emailAlerts: boolean;
  smsAlerts: boolean;
  publicStore: boolean;
  autoAccept: boolean;
  cashOnDelivery: boolean;
  esewa: boolean;
  khalti: boolean;
  fulfillment: string;
}

export interface AuthAccount {
  email: string;
  password: string;
  role: AccountRole;
  firstName: string;
  lastName: string;
  phone: string;
  location: string;
  photo: string;
  vendor?: VendorProfile;
}

export const DEMO_CUSTOMER_EMAIL = "lahana.lawaju@gmail.com";
export const DEMO_VENDOR_EMAIL = "vendor@googledoko.com";
export const DEMO_PASSWORD = "password123";
