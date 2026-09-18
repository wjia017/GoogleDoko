import {
    MapPin,
    Lock,
    Heart,
    Tag,
    ShoppingBag,
    Truck,
    PackageCheck,
    UserRound,
    MapPinned,
    Gift,
    CircleHelp,
    LogOut,
    ChevronRight,
    Bell,
    Globe,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
    return (
        <>
            <Navbar />

            <main className="profile-page">

                {/* ========================================
              PAGE HEADING
          ======================================== */}

                <div className="profile-container">

                    <div className="profile-heading">
                        <h1>Your profile</h1>
                    </div>


                    {/* ========================================
                PROFILE MAIN CARD
            ======================================== */}

                    <section className="profile-main-card">

                        {/* ========================================
                  PROFILE HEADER
              ======================================== */}

                        <div className="profile-user-header">

                            <div className="profile-avatar">
                                <div className="profile-avatar-placeholder"></div>
                            </div>

                            <div className="profile-user-info">

                                <h2>Lahana Lawaju</h2>

                                <div className="profile-location">
                                    <MapPin size={20} fill="currentColor" />
                                    <span>Kathmandu, Nepal</span>
                                </div>

                                <div className="verified-customer">
                                    <span className="verified-icon">✓</span>
                                    <span>Verified Customer</span>
                                </div>

                            </div>

                        </div>


                        {/* ========================================
                  PROFILE STATS
              ======================================== */}

                        <div className="profile-stats">

                            {/* Total Orders */}
                            <div className="profile-stat">

                                <ShoppingBag size={24} />

                                <strong>24</strong>

                                <span>Total Orders</span>

                                <button type="button">
                                    View all →
                                </button>

                            </div>


                            <div className="profile-stat-divider"></div>


                            {/* Wishlist */}
                            <div className="profile-stat">

                                <Heart size={24} />

                                <strong>12</strong>

                                <span>Wishlist</span>

                                <button type="button">
                                    View all →
                                </button>

                            </div>


                            <div className="profile-stat-divider"></div>


                            {/* Address */}
                            <div className="profile-stat">

                                <MapPin size={24} />

                                <strong>Address</strong>

                                <button type="button">
                                    Manage →
                                </button>

                            </div>


                            <div className="profile-stat-divider"></div>


                            {/* Reward Points */}
                            <div className="profile-stat">

                                <Tag size={24} />

                                <strong>Rs 320</strong>

                                <span>Reward Points</span>

                                <button type="button">
                                    Redeem →
                                </button>

                            </div>

                        </div>


                        {/* ========================================
                  LOWER CONTENT
              ======================================== */}

                        <div className="profile-lower-grid">

                            {/* ========================================
                    LEFT COLUMN
                ======================================== */}

                            <div className="profile-left-column">

                                {/* My Orders */}
                                <section className="profile-box orders-box">

                                    <div className="profile-box-heading">

                                        <h3>My Orders</h3>

                                        <button type="button">
                                            View All Orders
                                            <ChevronRight size={17} />
                                        </button>

                                    </div>


                                    <div className="order-status-grid">

                                        {/* Pending */}
                                        <div className="order-status-item">

                                            <div className="status-icon pending">
                                                <PackageCheck size={23} />
                                                <span className="status-count">1</span>
                                            </div>

                                            <span>Pending</span>

                                        </div>


                                        {/* Processing */}
                                        <div className="order-status-item">

                                            <div className="status-icon processing">
                                                <ShoppingBag size={23} />
                                                <span className="status-count">1</span>
                                            </div>

                                            <span>Processing</span>

                                        </div>


                                        {/* Shipped */}
                                        <div className="order-status-item">

                                            <div className="status-icon shipped">
                                                <Truck size={23} />
                                                <span className="status-count">1</span>
                                            </div>

                                            <span>Shipped</span>

                                        </div>


                                        {/* Out for Delivery */}
                                        <div className="order-status-item">

                                            <div className="status-icon out-delivery">
                                                <Truck size={22} />
                                            </div>

                                            <span>Out for Delivery</span>

                                        </div>


                                        {/* Delivered */}
                                        <div className="order-status-item">

                                            <div className="status-icon delivered">
                                                <PackageCheck size={23} />
                                            </div>

                                            <span>Delivered</span>

                                        </div>

                                    </div>

                                </section>


                                {/* Personal Menu */}
                                <section className="profile-box profile-menu-box">

                                    <ProfileMenuItem
                                        icon={<UserRound size={22} />}
                                        title="Personal Information"
                                        description="Manage your name,email and phone number"
                                    />

                                    <ProfileMenuItem
                                        icon={<MapPinned size={22} />}
                                        title="Addresses"
                                        description="Manage your delivery addresses"
                                    />

                                    <ProfileMenuItem
                                        icon={<Gift size={22} />}
                                        title="My Reviews"
                                        description="See your review and setting"
                                    />

                                    <ProfileMenuItem
                                        icon={<CircleHelp size={22} />}
                                        title="About Us"
                                        description="Learn more about our mission"
                                    />

                                    <ProfileMenuItem
                                        icon={<LogOut size={22} />}
                                        title="Log Out"
                                        description="Log out all sessions"
                                    />

                                </section>

                            </div>


                            {/* ========================================
                    RIGHT COLUMN
                ======================================== */}

                            <div className="profile-right-column">

                                {/* Account Settings */}
                                <section className="account-settings-box">

                                    <h3>Account Settings</h3>


                                    <AccountSettingItem
                                        icon={<Lock size={21} />}
                                        title="Change Password"
                                    />

                                    <AccountSettingItem
                                        icon={<Bell size={21} />}
                                        title="Notification Settings"
                                    />

                                    <AccountSettingItem
                                        icon={<Globe size={21} />}
                                        title="Language"
                                    />


                                    <div className="account-setting-row">

                                        <div className="account-setting-icon">
                                            <span className="dark-mode-dot"></span>
                                        </div>

                                        <span>Dark Mode</span>

                                        <div className="dark-mode-toggle">
                                            <span></span>
                                        </div>

                                    </div>

                                </section>


                                {/* Invite Friends */}
                                <section className="invite-box">

                                    <div className="invite-content">

                                        <h3>Invite Friends and get rewards</h3>

                                        <p>
                                            Invite friends and earn rewards points
                                        </p>

                                        <button type="button">
                                            Invite Now
                                        </button>

                                    </div>

                                    <div className="invite-image">
                                        🎁
                                    </div>

                                </section>

                            </div>

                        </div>

                    </section>

                </div>

            </main>

            <Footer />
        </>
    );
}


/* ========================================
   PROFILE MENU ITEM
======================================== */

interface ProfileMenuItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

function ProfileMenuItem({
    icon,
    title,
    description,
}: ProfileMenuItemProps) {
    return (
        <button
            type="button"
            className="profile-menu-item"
        >

            <div className="profile-menu-icon">
                {icon}
            </div>

            <div className="profile-menu-text">

                <strong>{title}</strong>

                <span>{description}</span>

            </div>

            <ChevronRight
                className="profile-menu-arrow"
                size={20}
            />

        </button>
    );
}


/* ========================================
   ACCOUNT SETTING ITEM
======================================== */

interface AccountSettingItemProps {
    icon: React.ReactNode;
    title: string;
}

function AccountSettingItem({
    icon,
    title,
}: AccountSettingItemProps) {
    return (
        <button
            type="button"
            className="account-setting-row"
        >

            <div className="account-setting-icon">
                {icon}
            </div>

            <span>{title}</span>

            <ChevronRight size={20} />

        </button>
    );
}


export default Profile;