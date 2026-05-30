# Blogify 

<!-- You can add a project logo here, e.g., ![Blogify Logo](public/images/logo.png) -->
<!-- Replace <YOUR_GITHUB_USERNAME> and <YOUR_REPO_NAME> with your actual GitHub username and repository name. -->
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT) [![Node.js](https://img.shields.io/badge/node-%3E%3D14.0.0-brightgreen.svg)](https://nodejs.org/) [![pnpm](https://img.shields.io/badge/pnpm-%3E%3D7-blue.svg?logo=pnpm)](https://pnpm.io/)

<!--
You can add a project logo here if desired. Example:
![Blogify Logo](public/images/logo.png)
-->

A robust and user-friendly full-stack blogging platform built with Node.js and Express. It empowers users to effortlessly create, publish, and interact with blog posts, featuring secure authentication, rich content creation, and an intuitive interface.

---

---

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Run](#run)
- [Screenshots](#screenshots)
- [Future Improvements](#future-improvements)
- [Contributing](#contributing)
- [License](#license)

## Features

- User registration and login
- JWT-based authentication
- Secure password hashing
- Create, edit and publish blog posts
- Upload blog cover images (Multer)
- Comment on blog posts
- Responsive UI with Bootstrap/EJS templates
- MongoDB (Mongoose) data persistence

## Tech Stack

- Frontend: HTML, CSS, Bootstrap, EJS
- Backend: Node.js, Express
- Database: MongoDB via Mongoose
- Auth: JWT + Cookies

## Installation

Clone the repository and install dependencies. This project uses `pnpm` as its package manager, but `npm` can also be used.

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd "Blogging App"

# Using pnpm (recommended)
pnpm install

# Or using npm
# npm install
```

## Environment Variables

Create a `.env` file at the project root with the following values:

```env
PORT=8000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

## Run

Start the app:

```bash
npm start
# or for development (if you use nodemon)
npm run dev
```

## Screenshots

Add screenshots to `public/images` and reference them here. Example:

![Home](/public/images/home.png)

Screens to include:

- Home page
- Sign in / Sign up
- Create blog
- Blog details

## Future Improvements

- User profiles
- Categories and tags
- Like / bookmark system
- Rich-text editor for posts
- Search and filtering

## Contributing

Contributions welcome — please open an issue or submit a PR. Follow these steps:

1. Fork the repo
2. Create a feature branch
3. Make your changes and add tests
4. Open a pull request

## License

This project is released under the MIT License.


