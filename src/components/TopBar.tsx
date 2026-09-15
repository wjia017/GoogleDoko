import { Globe2, ChevronDown } from "lucide-react";

function TopBar() {
  return (
    <div className="top-bar">
      <div className="top-bar-content">
        <div className="top-bar-links">
          <span>Track Order</span>
          <span>Help & Support</span>

          <span className="language">
            <Globe2 size={16} />
            English
            <ChevronDown size={14} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default TopBar;