import prisma from "./prisma";

export const getAllBlogs = async () => {
  const blogs = await prisma.blog.findMany({});
  return blogs;
};

export const getBlog = async (id) => {
  const blog = await prisma.blog.findUnique({
    where: { id },
  });
  return blog;
};

export const createBlog = async (title, brief, author, body) => {
  const blog = await prisma.blog.create({
    data: {
      title,
      brief,
      author,
      body,
    },
  });
  return blog;
};

export const updateBlog = async (id, updateData) => {
  const blog = await prisma.blog.update({
    where: {
      id,
    },
    data: { ...updateData },
  });
  return blog;
};

export const deleteBlog = async (id) => {
  const blog = await prisma.blog.delete({ where: { id } });
  return user;
};
