import {Express,default as express} from "express";

// Initialize express app
const app : Express = express();

// Configure Express middleware
app.use(express.json()); // Add support for JSON-serialization

/**
 * Route for pinging server status
 */
app.get("/status", (_, res) => {
    res.send("&#128994 Server is UP and RUNNING &#128994");
})

export default app;
