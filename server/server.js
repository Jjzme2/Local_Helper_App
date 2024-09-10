import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
const parentDirectory = path.join(currentDirectory, "..");
const clientDirectory = path.join(parentDirectory, "client", "dist");
const serverDirectory = path.join(parentDirectory, "server");


// Serve static files from the 'client/dist' directory
app.use(express.static(path.join(parentDirectory, "client", "dist")));

// Catch-all route to serve index.html for SPA routing (e.g., for Vue Router)
app.get("*", (req, res) => {
  res.sendFile(path.join(clientDirectory, "index.html"));
});

// Start the server on the port Heroku provides or 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
