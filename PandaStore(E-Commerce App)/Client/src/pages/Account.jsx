import React, { useState, useEffect } from "react";
import "../css/Account.css";
import Dropdown from "react-bootstrap/Dropdown";
import UserProfile from "./UserProfile"; // Assuming UserProfile is in the same directory
import Navbar from "../components/navbar";
const Account = () => {
  const [settings, setSettings] = useState({
    receiveNotifications: true,
    darkMode: false,
    language: "English",
  });

  const [changePassword, setChangePassword] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isChangePasswordVisible, setChangePasswordVisible] = useState(false);

  useEffect(() => {
    // Add logic for handling account details using cookies or other methods
  }, []); // Empty dependency array to run only once on mount

  const handleNotificationToggle = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      receiveNotifications: !prevSettings.receiveNotifications,
    }));
  };

  const handleDarkModeToggle = () => {
    setSettings((prevSettings) => ({
      ...prevSettings,
      darkMode: !prevSettings.darkMode,
    }));
  };

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    setSettings((prevSettings) => ({
      ...prevSettings,
      language: newLanguage,
    }));
  };

  const toggleChangePassword = () => {
    setChangePasswordVisible((prevVisible) => !prevVisible);
  };

  const handlePasswordInputChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    setChangePassword((prevPassword) => ({
      ...prevPassword,
      [field]: value,
    }));
  };

  const handleChangePassword = () => {
    // Add logic to handle password change
    const { currentPassword, newPassword, confirmPassword } = changePassword;
    if (newPassword === confirmPassword) {
      // Update the password
      // You can add your own password change logic here
      console.log("Password changed successfully");
    } else {
      console.error("New password and confirmation do not match");
    }
  };

  return (
    <div>
      <Navbar />

      <div className="account-container">
        <div className="top-right-settings">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="settings-dropdown">
              ⚙️ Settings
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <label className="checkbox-label">
                Receive Notifications:{" "}
                <input
                  type="checkbox"
                  checked={settings.receiveNotifications}
                  onChange={handleNotificationToggle}
                />
              </label>
              <label className="checkbox-label">
                Dark Mode:{" "}
                <input
                  type="checkbox"
                  checked={settings.darkMode}
                  onChange={handleDarkModeToggle}
                />
              </label>
              <label className="checkbox-label">
                Language:{" "}
                <select
                  value={settings.language}
                  onChange={handleLanguageChange}
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                </select>
              </label>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="left-column">
          <UserProfile />
          <div className="change-password-section">
            <div className="change-password-dropdown">
              <span role="button" className="change-password-toggle">
                🔒 Change Password
              </span>
              <div className="dropdown-content">
                <label>
                  Current Password:
                  <input type="password" name="currentPassword" />
                </label>
                <label>
                  New Password:
                  <input type="password" name="newPassword" />
                </label>
                <label>
                  Confirm Password:
                  <input type="password" name="confirmPassword" />
                </label>
                <button>Change Password</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <p>Contact us at support@example.com</p>
        <p>&copy; 2023 Your E-Commerce App</p>
      </footer>
    </div>
  );
};

export default Account;
