import { Link, Routes, Route, Outlet } from "react-router-dom";
import ProfileDetails from "./ProfileDetails.jsx";
import ProfileSettings from "./ProfileSettings.jsx";

export default function Profile() {
  return (
    <div>
      <h2>Profile</h2>

      <nav>
        <Link to="details">Details</Link>{" | "}
        <Link to="settings">Settings</Link>
      </nav>

      {/* Nested routes render here */}
      <Outlet />

      {/* Or use nested <Routes> if you prefer keeping them here */}
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}
