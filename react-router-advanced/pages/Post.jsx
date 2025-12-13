import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();

  return (
    <div>
      <h2>Post {postId}</h2>
      <p>This is where you would load post data for ID {postId}.</p>
    </div>
  );
}
