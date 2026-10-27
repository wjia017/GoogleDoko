import { useAccount, AccountProvider } from "./AccountContext";

export { useAccount as useAuth, AccountProvider as AuthProvider };
export * from "./AccountContext";
export default useAccount;
