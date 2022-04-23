import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlog,
  updateBlog,
} from "../../prisma/blog";

export default async function handle(req, res) {
  try {
    switch (req.method) {
      case "GET": {
        if (req.query.id) {
          const blog = await getBlog(req.query.id);
          return res.status(200).json(blog);
        } else {
          const blogs = await getAllBlogs();
          return res.status(200).json(blogs);
        }
      }
      case "POST": {
        const { title, brief, author, body } = req.body;
        const blog = await createBlog(title, brief, author, body);
        return res.status(200).json(blog);
      }
      case "PUT": {
        const { id, ...updateData } = req.body;
        const blog = await updateBlog(id, updateData);
        return res.status(200).json(blog);
      }
      case "DELETE": {
        const { id } = req.body;
        const blog = await deleteBlog(id);
        return res.status(200).json(blog);
      }
    }
  } catch (error) {
    return res.status(500).json({ ...error, message: error.message });
  }
}
