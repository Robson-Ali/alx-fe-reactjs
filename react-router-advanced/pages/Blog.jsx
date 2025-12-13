import { Link } from "react-router-dom";

const posts = [
  { id: "1", title: "First Post" },
  { id: "2", title: "Second Post" },
];

export default function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <Link to={`/blog/${p.id}`}>{p.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
