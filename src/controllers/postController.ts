import { Request, Response } from "express";
import { Post } from "../models/Post";
import { resolve } from "bun";

/**
 * Creates Post
 * @param req 
 * @param res 
 */
export const createPost = async (req: Request, res: Response) => {
    try {
        const { author, title, content } = req.body;
        const post = new Post({ author, title, content }); // Instantiates a Post document

        await post.save(); // Persists to collection

        res.status(200).send(post); // Sends response to client
    } catch (error) {
        res.status(400).send(error);
    }
};

/**
 * Retrieves specific post by post id
 * @param req 
 * @param res 
 */
export const readPost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const post = await Post.findById(id); // Retrieves post by id

        if (!post) {
            res.status(404).send("Could not find post matching given id");
        }
    } catch (error) {
        res.status(500).send(error);
    }
}

/**
 * Retrieves all posts
 * @param req request
 * @param res response
 */
export const readPosts = async (req: Request, res: Response) => {
    try {
        // Retrieves all posts
        const posts = await Post.find({});
        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error);
    }
    ;
}

/**
 * Updates post
 * @param req 
 * @param res
 * @returns 
 */
export const updatePost = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const postToUpdate = await Post.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });

        if (!postToUpdate){
            res.status(404).send();
        }
        res.status(200).send(postToUpdate);
 } catch (error) {
        res.status(400).send(error);
    }
}

/**
 * Deletes post
 * @param req
 * @param res
 */
export const deletePost = async (req: Request, res:Response) => {
    try {
        const {id} = req.params;
        const postToDelete = await Post.findByIdAndDelete(id);

        if(!postToDelete) {
            res.status(404).send("Post was not found!")
        }
        res.status(200).send(postToDelete);
    }
    catch (error) {
        res.status(500).send(error);
    }
}
