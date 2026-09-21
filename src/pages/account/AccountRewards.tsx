import AccountShell from "../../components/account/AccountShell";
import { useAccount } from "../../context/AccountContext";

function AccountRewards() {
  const { points, rewards, redeemPoints } = useAccount();

  return (
    <AccountShell title="Reward Points">
      <div className="account-points-hero">
        <span>Current Points</span>
        <strong>{points}</strong>
        <button
          type="button"
          className="account-btn"
          onClick={() => redeemPoints(100)}
        >
          Redeem 100 points
        </button>
      </div>

      <h3 className="account-section-title">History</h3>
      <ul className="account-reward-list">
        {rewards.map((entry) => (
          <li key={entry.id}>
            <span>
              {entry.points > 0 ? "+" : ""}
              {entry.points} {entry.label}
            </span>
            <small>{entry.date}</small>
          </li>
        ))}
      </ul>
    </AccountShell>
  );
}

export default AccountRewards;
