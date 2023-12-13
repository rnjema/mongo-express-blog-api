import {Router} from "express";
import {createPost, readPost, readPosts, updatePost, deletePost} from "../controllers/postController";

const router = Router();

// Add post routes
router.post("/post", createPost);
router.get("/posts", readPosts);
router.get("/post/:id", readPost);
router.put("post/:id", updatePost);
router.delete("post/:id", deletePost);

export default router;

