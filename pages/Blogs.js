import Link from "next/link";

const Blogs = ({ blogs }) => {
  return (
    <div>
      <p className="text-white text-4xl font-bold text-center my-6">Blogs to Read</p>
      <div className="flex justify-around mt-20">
        {blogs.map((post) => (
          <div key={post.title} >
            <Link href={`/blogpost/${post.id}`}>
            <a
              className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
            >
              <h5 className="my-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {post.title}
              </h5>
              <p className="my-2 font-normal text-gray-700 dark:text-gray-400">
              {post.brief}
              </p>
              <p className="my-2 font-normal text-gray-700 dark:text-gray-400">
              Writer - {post.author}
              </p>
              <p className="my-2 font-normal text-gray-700 dark:text-gray-400">
              Written on - {post.date.slice(0, 10)}
              </p>
            </a>
            {/* <p></p>
            <p></p> */}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blog");
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}

export default Blogs;
