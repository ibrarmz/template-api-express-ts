# Template for Creating an API with Express and TypeScript 🚀

This template provides a robust foundation for building APIs using **Express** and **TypeScript**. It follows industry best practices, ensuring clean and maintainable code. Perfect for kickstarting your next project with modern web development technologies!

---

## 🌟 Features

- 🛠 **TypeScript Support**: Write clean and type-safe code.
- 📁 **Organized Project Structure**: Follows best practices for scalability and maintainability.
- ⚡ **Environment Variables**: Easy configuration with `.env`.
- 🐛 **Development Mode**: Integrated scripts for efficient development.

---

## 🗂 Project Structure
```bash
├── dist                  # Compiled JavaScript output (generated after build)
├── node_modules          # Project dependencies
├── src                   # Source code
│   ├── config            # Configuration files (e.g., logger setup)
│   ├── middlewares       # Custom middleware functions
│   ├── routes            # Route definitions for the API
│   └── index.ts          # Entry point of the application
├── .env                  # Environment variables configuration
├── package.json          # Project configuration and dependencies
├── package-lock.json     # Locks dependency versions
├── tsconfig.json         # TypeScript compiler configuration
```

## 🚀 Development

To start the application in development mode with live reloading, use:

```bash
npm run dev
```

The app will run on the port specified in your .env file or default to 3000.

---

## 🛠 Scripts

The following npm scripts are included for your convenience:

+ ``` npm run dev ```: Runs the application in development mode using ts-node-dev for live reload.
+ ``` npm run build ```: Compiles TypeScript into JavaScript and outputs files to the ```dist``` folder.
+  ```npm run start ```: Runs the compiled JavaScript files from the dist folder.

---
## 📋 Requirements

Ensure you have the following installed on your machine:

+ **Node.js** (v16+ recommended)
+ **npm** (v8+ recommended)

---

## 🛡️ Contributing
Contributions are welcome! If you'd like to improve this template:

1. Fork this repository.
2. Create a new branch for your feature (```git checkout -b feature-name```).
3. Commit your changes (```git commit -m 'Add new feature'```).
4. Push the branch (```git push origin feature-name```).
5. Open a pull request.

---
🎉 Happy coding! Let’s build something amazing!