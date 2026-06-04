/**
 * User type definition
 */
export const UserType = {
  id: '',
  username: '',
  email: '',
  avatar: '',
  bio: '',
  createdAt: '',
};

/**
 * Post type definition
 */
export const PostType = {
  id: '',
  title: '',
  content: '',
  author: UserType,
  category: '',
  tags: [],
  createdAt: '',
  updatedAt: '',
};

/**
 * Comment type definition
 */
export const CommentType = {
  id: '',
  content: '',
  author: UserType,
  post: PostType,
  createdAt: '',
  updatedAt: '',
};

/**
 * Category type definition
 */
export const CategoryType = {
  id: '',
  name: '',
  slug: '',
  description: '',
};

export default {
  UserType,
  PostType,
  CommentType,
  CategoryType,
};
