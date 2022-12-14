import express from 'express';

import { getPostsBySearch, getPost, getPosts, createPost, updatePost, deletePost} from '../controllers/posts.js';


const router = express.Router();
import auth from "../middleware/auth.js";


router.get('/search', getPostsBySearch);
router.get('/', getPosts);
router.get('/:id', getPost);

router.post('/',auth,  createPost);
router.patch('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);



export default router; 