# Template to create an API with Express and TypeScript

This is a basic template for creating an API using Express and TypeScript. The project structure follows recommended best practices and provides a solid foundation for developing web applications with these technologies.

## Project Structure
```
├── dist
├── node_modules
├── src
│ ├── index.ts
├── .env
├── package-lock.json
├── package.json
├── tsconfig.json
```

- **dist:** This directory will contain the transpiled TypeScript files.
- **node_modules:** Directory where the project dependencies are stored.
- **src:** This is where the source code of the application resides.
  - **index.ts:** Main file where the application is started.
- **.env:** File to configure environment variables.
- **package-lock.json:** Version lock file to ensure replication of dependencies.
- **package.json:** Project configuration file that includes dependencies and scripts.
- **tsconfig.json:** TypeScript Settings.

## Setting

1. Clone this repository: `git clone https://github.com/ibrarmz/template-api-express-ts.git`
2. Install the dependencies: `npm install`
3. Set environment variables in the `.env` file as necessary.

## Development

To start the application in development mode, use the following command:

```bash
npm run dev
