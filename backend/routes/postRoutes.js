const express = require('express');

const { createPost } = require('../controllers/postController');
const router = express.Router();
const { isAuthenticatedUsers,authorizeRoles } = require('../middleware/auth'); 
router.route(
    "/post/upload"
).post(createPost, isAuthenticatedUsers);
module.exports = router;
