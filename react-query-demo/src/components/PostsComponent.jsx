import { useQuery } from '@tanstack/react-query';

const fetchPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  if (!response.ok) throw new Error('Failed to fetch posts');
  return response.json();
};

const PostsComponent = () => {
  const { 
    data: posts, 
    isLoading, 
    isError, 
    error, 
    refetch 
  } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
    cacheTime: 5 * 60 * 1000,      // 5 minutes cache
    staleTime: 2 * 60 * 1000,      // 2 minutes stale
    refetchOnWindowFocus: false,   // Disable auto-refetch on focus
    keepPreviousData: true         // Keep old data during refetch
  });

  if (isLoading) return <div style={{ color: 'blue', fontWeight: 'bold' }}>Loading posts...</div>;
  if (isError) return <div style={{ color: 'red', fontWeight: 'bold' }}>Error: {error.message}</div>;

  return (
    <div>
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => refetch()}
          style={{
            padding: '10px 20px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          🔄 Refetch Posts (from API)
        </button>
        <p style={{ marginLeft: '10px', display: 'inline', color: '#666' }}>
          (Watch Network tab - caching works!)
        </p>
      </div>
      
      <div>
        <h2>Posts ({posts?.length || 0})</h2>
        <div style={{ display: 'grid', gap: '15px', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
          {posts?.map((post) => (
            <div key={post.id} style={{
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              backgroundColor: '#f9f9f9'
            }}>
              <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>{post.title}</h3>
              <p style={{ color: '#666', margin: '0 0 10px 0' }}>{post.body}</p>
              <small style={{ color: '#999' }}>User ID: {post.userId} | ID: {post.id}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostsComponent;
