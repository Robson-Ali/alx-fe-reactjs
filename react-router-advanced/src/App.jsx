import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";
import Blog from "./pages/Blog.jsx";
import Post from "./pages/Post.jsx";
import Login from "./pages/Login.jsx";


import ProtectedRoute from "./components/ProtectedRoute.jsx";


export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>{" | "}
        <Link to="/profile">Profile</Link>{" | "}
        <Link to="/blog">Blog</Link>{" | "}
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/*" element={<Profile />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:postId" element={<Post />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
