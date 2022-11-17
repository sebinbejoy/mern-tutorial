import express from 'express';

import { getPosts, createPost, approvePost } from '../controllers/posts.js';

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id/approvePost', approvePost);

export default router;