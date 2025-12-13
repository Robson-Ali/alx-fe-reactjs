import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth.js";
import { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const from = location.state?.from?.pathname || "/";

  function handleSubmit(e) {
    e.preventDefault();
    login(username || "demo");
    navigate(from, { replace: true });
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit">Log in</button>
      </form>
    </div>
  );
}
