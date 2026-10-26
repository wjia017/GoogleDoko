export interface RewardEntry {
  id: string;
  label: string;
  points: number;
  date: string;
}

export const defaultRewardHistory: RewardEntry[] = [
  { id: "rw-1", label: "Order Reward", points: 50, date: "Sep 18, 2026" },
  { id: "rw-2", label: "Review Reward", points: 30, date: "Sep 19, 2026" },
  { id: "rw-3", label: "Redeemed", points: -100, date: "Sep 12, 2026" },
  { id: "rw-4", label: "Order Reward", points: 80, date: "Sep 8, 2026" },
  { id: "rw-5", label: "Order Reward", points: 60, date: "Sep 4, 2026" },
  { id: "rw-6", label: "Welcome Bonus", points: 200, date: "Aug 20, 2026" },
];
