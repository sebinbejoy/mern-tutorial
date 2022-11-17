import axios from 'axios';

const url_posts = 'http://localhost:5000/posts';
const url_bugs =  'http://localhost:5000/bugs';
//const url_auth = 'http://localhost:5000/auth/login';

export const fetchPosts = () => axios.get(url_posts);
export const createPost = (newPost) => axios.post(url_posts, newPost);
export const approvePost = (id) => axios.patch(`${url_posts}/${id}/approvePost`);

export const fetchBugs = () => axios.get(url_bugs);
export const createBug = (newBug) => axios.post(url_bugs, newBug);