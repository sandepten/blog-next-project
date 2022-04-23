import { useRouter } from "next/router";

const Slug = ({ blogs }) => {
  const router = useRouter();
  const Slug = router.query.Slug;
  return (
    <div className="text-white">
      <p className="text-3xl font-bold text-center my-4">{blogs.title}</p>
      <hr/>
      <p className="w-2/3 m-auto mt-5 text-lg">{blogs.body}</p>
    </div>
  );
};

export async function getServerSideProps({params}) {
  const res = await fetch(
    `http://localhost:3000/api/blog?id=${params.Slug}`
  );
  const blogs = await res.json();
  return { props: { blogs } };
}
export default Slug;
