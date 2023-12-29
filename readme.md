
### Introduction to Node.js

**What is Node.js?**

- **Definition**: Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser.
- **Runtime Environment**: Built on the V8 JavaScript engine (same as in Google Chrome).
- **Non-Blocking I/O**: Asynchronous, event-driven architecture.
- **Use Case**: Ideal for building scalable network applications.



**Key Features of Node.js**

1. **Asynchronous and Event-Driven**: Handles multiple operations simultaneously without blocking the thread.
2. **Single-Threaded**: Simplifies development by avoiding complexity associated with multi-threaded processes.
3. **Cross-Platform**: Runs on various platforms (Windows, Linux, Unix, Mac OS X, etc.).
4. **Large Ecosystem**: Enormous NPM (Node Package Manager) repository with reusable packages.
5. **Community Support**: Strong community and corporate support.



**Why Choose Node.js for Building APIs?**

1. **Efficiency in Handling Concurrent Requests**: Ideal for I/O-bound applications (like APIs).
2. **Fast Processing & Low Latency**: Quick response times for API requests.
3. **JSON Support**: Native handling of JSON, a common data interchange format for APIs.
4. **Unified JavaScript Development Stack**: Use the same language for both server-side and client-side.
5. **Scalability**: Easy to scale for handling high traffic.
6. **Robust Technology Stack**: Integrates well with other technologies (e.g., MongoDB for databases, Angular/React for frontend).

### 3. Setting Up Node.js

**Installation**:

- Visit the official [Node.js website](https://nodejs.org/) and download the appropriate version for your operating system.
- There are two primary versions available:
  - **LTS (Long Term Support)**: Stable and recommended for most users.
  - **Current**: Contains the latest features but might not be as stable as LTS.
- After installation, verify it by opening your terminal or command prompt and running:

  ```bash
  node -v
  npm -v
  ```

  This will display the installed versions of Node.js and npm, respectively.

**Node.js Runtime**:

- Node.js allows you to execute JavaScript outside of a browser.
- Example: Create a file named `hello.js` and write the following code:

  ```javascript
  console.log("Hello from Node.js!");
  ```

  Execute the script using:

  ```bash

  node hello.js
  ```

**Node REPL (Read-Eval-Print Loop)**:

- Node REPL is an interactive shell for executing JavaScript.
- Access it by typing `node` in your terminal. Within the REPL, you can type any valid JavaScript expression.
- To exit the REPL, press `Ctrl + C` twice or type `.exit`.

**npm (Node Package Manager)**:

- npm is the default package manager for JavaScript and Node.js.
- Every Node.js project has a `package.json` file, which tracks project dependencies and other configurations.
- Create a new Node.js project by navigating to your desired directory and running:

  ```bash
  npm init
  ```

  Follow the prompts to set up your project.

- Install external packages/libraries using:

  ```bash
  npm install <package-name>
  ```

---

Great! Moving on to the introduction of Express.js.

---

### 4. Introduction to Express.js

**Why Express.js?**:

- Express simplifies the process of building web applications on top of Node.js.
- It provides a lightweight framework to set up servers, define routes, and handle requests and responses.

**Setting Up a Basic Express Server**:

1. Install Express using npm:

   ```bash
   npm install express
   ```

2. Create a new file, `server.js`, and write the following code:

   ```javascript
   const express = require("express");
   const app = express();

   app.get("/", (req, res) => {
   	res.send("Hello from Express!");
   });

   const PORT = 3000;
   app.listen(PORT, () => {
   	console.log(`Server is running on http://localhost:${PORT}`);
   });
   ```

3. Run the server with:

   ```bash
   node server.js
   ```

**Handling Routes, Middlewares, and Responses**:

- Routes define the endpoints of your application. For example, `/`, `/about`, `/users`.
- Middlewares are functions that can access the request and response objects. They can perform tasks like logging, authentication, or modifying the request data.
- Responses can be in various formats like text, JSON, or HTML. With Express, you can easily send different types of responses using methods like `res.send()`, `res.json()`, or `res.render()`.

---

### Building a Node.js API: From Problem to Solution

**1. Starting Point: Basic Express Server**

Set up a basic Express server:

```javascript
const express = require("express");
const app = express();
const PORT = 3000;

// Middleware to parse JSON requests
app.use(express.json());

// Sample data
let users = [
	{ id: 1, name: "John Doe" },
	{ id: 2, name: "Jane Smith" },
];

// GET endpoint to fetch all users
app.get("/users", (req, res) => {
	res.json(users);
});

// POST endpoint to add a new user
app.post("/users", (req, res) => {
	const newUser = {
		id: users.length + 1,
		name: req.body.name,
	};
	users.push(newUser);
	res.status(201).json(newUser);
});

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
```


---

### Essential Libraries & Tools for Node.js Development

1. **Nodemon**:

   - **Purpose**: It's a utility that monitors for any changes in your source code and automatically restarts your server, making the development process smoother.
   - **Usage**:
     ```bash
     npm install nodemon --save-dev
     ```
     In your `package.json` scripts, replace the start script:
     ```json
     "scripts": {
       "start": "nodemon server.js"
     }
     ```

2. **Dotenv**:

   - **Purpose**: Allows you to load environment variables from a `.env` file into `process.env`. This is essential for managing sensitive information like database connection strings, API keys, and more.
   - **Usage**:
     ```bash
     npm install dotenv
     ```
     At the top of your main server file (e.g., `server.js`):
     ```javascript
     require("dotenv").config();
     ```

Certainly! `Morgan` is a middleware for logging HTTP requests in your Node.js applications. It's handy for monitoring incoming requests, especially in a development environment.

Here's how to set up and use `Morgan`:

---

### Morgan: HTTP Request Logger for Node.js

**Installation**:

To begin with, you need to install the `morgan` package:

```bash
npm install morgan
```

**Basic Usage**:

1. First, you need to require `morgan` and integrate it into your Express application:

```javascript
const express = require("express");
const morgan = require("morgan");

const app = express();

// Use Morgan middleware with the 'dev' format
app.use(morgan("dev"));
```

2. Start your server, and for every HTTP request, you'll see a log entry in your terminal. The `'dev'` format is just one of many predefined formats that `morgan` provides.

**Predefined Formats**:

Morgan comes with several predefined formats that control the output style:

- `'combined'`: Standard Apache combined log output.
- `'common'`: Standard Apache common log output.
- `'dev'`: Concise output colored by response status for development use.
- `'short'`: Shorter than default, also colored by response status.
- `'tiny'`: The minimal output.

**Example**:

If you want to use the `'combined'` format, just replace `'dev'` with `'combined'`:

```javascript
app.use(morgan("combined"));
```

**Custom Formats**:

You can also define your custom format. For example, to print just the method and URL:

```javascript
app.use(morgan(":method :url"));
```

---

With `Morgan`, you can easily keep an eye on your application's incoming requests, helping in debugging and understanding the usage patterns. In a production environment, you might want to integrate `Morgan` with a more advanced logging system to store logs or stream them to external services.

---


### Transitioning from `require` to `import` in Node.js

***Embracing ES6 Modules in Node.js***

1. **Module Systems**: 
   - **Current**: CommonJS (`require`, `module.exports`).
   - **New Standard**: ES6 Modules (`import`, `export`).

2. **Key Differences**:
   - **Syntax**: `require('module')` → `import module from 'module'`.
   - **Loading**: Runtime (CommonJS) vs. Compile-time (ES6).

3. **Enabling ES6 Modules**:
   - Node.js version ≥12.
   - Add `"type": "module"` in `package.json`.

4. **Conversion Essentials**:
   - Update syntax: `require` to `import`.
   - Specify file extensions in imports.
   - Handle interop with CommonJS modules.

5. **Best Practices**:
   - Maintain consistency in module usage.
   - Thorough testing post-transition.
   - Stay updated with Node.js and JavaScript community standards.

6. **Benefits**:
   - Aligns Node.js with modern JavaScript development.
   - Future-proofs applications.
   - Improves interoperability with frontend ecosystems.

### Our folder structure

/my-api
  /node_modules
  /models
  /routes
  /controllers
  /middlewares
  /utils
  /config
  /tests
  .env
  app.js
  package.json

## Biulding our blog app

