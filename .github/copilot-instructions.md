# Copilot Instructions for AI Coding Agents

This document provides guidance for AI coding agents to be productive in this codebase. It outlines the architecture, workflows, conventions, and integration points specific to this project.

## Project Overview

This workspace contains multiple Node.js projects, each focusing on different aspects of Node.js development. Key directories include:

- **apimongoXexpress/**: Combines Express.js with MongoDB for API development.
- **asyncronous/**: Demonstrates handling asynchronous operations in Node.js.
- **commandlineinput/**: Handles command-line input and file operations.
- **ejs/**: Uses EJS templating for rendering dynamic HTML.
- **Express/**: Focuses on Express.js features like HTML rendering and static file serving.
- **middleware/**: Implements middleware patterns in Express.js.
- **Node Basic/**: Contains basic Node.js examples and file operations.
- **Nodewithmongodb/**: Demonstrates CRUD operations with MongoDB.
- **simplapi/**: Implements a simple API structure.

## Architecture and Patterns

### API Development
- The `apimongoXexpress/` and `Nodewithmongodb/` directories focus on API development.
- MongoDB is used for database operations, with files like `dbconnect.js` handling connections.
- CRUD operations are implemented in separate files (`insert.js`, `update.js`, `delete.js`).

### Middleware
- The `middleware/` directory demonstrates custom middleware creation and usage in Express.js.
- Key file: `middleware.js`.

### Templating
- The `ejs/` directory uses EJS for server-side rendering of HTML templates.
- Static files are served from the `public/` directory in the `Express/` project.

### Asynchronous Programming
- The `asyncronous/` directory contains examples of handling asynchronous operations using callbacks, promises, and async/await.

## Developer Workflows

### Running Projects
- Each project can be run independently. Navigate to the respective directory and use `node <entry-file>.js`.
- Example: `node index.js` in the `apimongoXexpress/` directory.

### Installing Dependencies
- Use `npm install` in directories with a `package.json` file to install required dependencies.
- Example: `cd apimongoXexpress && npm install`.

### Debugging
- Use `console.log` for debugging. For more advanced debugging, use Node.js's built-in debugger (`node inspect`).

## Conventions

### File Structure
- Each project is self-contained with its own `index.js` or equivalent entry point.
- Database operations are modularized into separate files (e.g., `dbconnect.js`, `insert.js`).

### Naming
- Files and directories use lowercase with no spaces, separated by hyphens or underscores.

## Integration Points

### MongoDB
- MongoDB is a key dependency in `apimongoXexpress/` and `Nodewithmongodb/`.
- Ensure MongoDB is running locally or update connection strings in `dbconnect.js`.

### Express.js
- Express.js is used extensively for routing, middleware, and API development.

## Examples

### Example: Running the API in `apimongoXexpress`
1. Navigate to the directory: `cd apimongoXexpress`.
2. Install dependencies: `npm install`.
3. Start the server: `node api.js`.

### Example: Adding a New Route in Express
1. Open the relevant `index.js` or `api.js` file.
2. Add a new route:
   ```javascript
   app.get('/new-route', (req, res) => {
       res.send('This is a new route!');
   });
   ```
3. Restart the server to apply changes.

---

Feel free to update this document as the codebase evolves.
