# Library System API

A REST API for managing a library's book collection.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Create the database:
    ```bash
    npm run setup
    ```

3. Seed with sample data:
    ```bash
    npm run seed
    ```

4. Start the server:
    ```bash
    npm start
    ```

## API Endpoints

### Books

- `GET /api/books` - Get all books
- `GET /api/books/:id` - Get book by ID
- `POST /api/books` - Create new book
- `PUT /api/books/:id` - Update book
- `DELETE /api/books/:id` - Delete book

## Project Structure
```plaintext
library-system-api/
├── database/
│   ├── setup.js    # Database setup and models
│   └── seed.js     # Sample data
├── server.js       # Main server file
├── package.json    # Dependencies
├── .env            # Environment variables
└── README.md       # This file
```