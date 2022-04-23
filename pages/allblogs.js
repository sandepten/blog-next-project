function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <div key={post.title}>
          <li>{post.title}</li>
          <p>{post.body}</p>
        </div>
      ))}
    </ul>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost/api/blogs");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
