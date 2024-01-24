const express = require('express');

const { createPost ,likeAndUnlike,commentOnPost, deleteComment, deletePost} = require('../controllers/postController');
const router = express.Router();
const { isAuthenticatedUsers } = require('../middleware/auth'); 
router.route(
    "/post/upload"
).post(isAuthenticatedUsers,createPost);
router.route(
    "/post/:id"
).get(isAuthenticatedUsers,likeAndUnlike)
.delete(isAuthenticatedUsers,deletePost);
router.route(
    "/post/comment/:id"
).put(isAuthenticatedUsers,commentOnPost);
router.route(
    "/post/comment/:id"
).put(isAuthenticatedUsers,commentOnPost)
.delete(isAuthenticatedUsers,deleteComment);


module.exports = router;
