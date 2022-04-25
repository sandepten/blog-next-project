import Head from "next/head";
import Link from "next/link";

function Home({ blogs }) {
  return (
    <div>
      <Head>
        <title>Bio Hunter</title>
        <meta
          name="Bio hunter"
          description="this is blog for the bio coders out there"
        />
      </Head>
      <div className="text-white font-sans ">
        <h1 className="text-center text-5xl mt-10 mb-8 font-semibold">
          BIO HUNTER
        </h1>
        <p className="text-center text-2xl font-medium">
          The Best source of knowledge for every person who loves biology
        </p>
      </div>
      <div className="text-white grid grid-cols-4 mt-20">
        {blogs.map((post) => (
          <div
            key={post.title}
            className="p-6 max-w-sm m-auto bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
          >
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {post.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 h-40 overflow-hidden">
              {post.brief}
            </p>
            <Link href={`/blogpost/${post.id}`}>
            <a
              className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/blog");
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
  };
}

export default Home;
