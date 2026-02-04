# Fabulous Web Server Names

A minimal Node.js + Express server that serves a single-page interface for collecting visitor name, email, and password entries. Submissions are sent via `fetch` to the server and stored in-memory; the page can request the current roster on demand.

## Features

- Static frontend with a bold, responsive layout.
- REST endpoints for recording entries (`POST /api/entries`) and listing them (`GET /api/entries`).
- In-memory storage for simplicity (reset on server restart).

## Getting Started

1. Install dependencies (already done if `node_modules` exists):
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit http://localhost:3000 to use the interface.

## API

- `POST /api/entries`
  - Body: `{ "name": string, "email": string, "password": string }`
  - Response: `{ message, entry }`
- `GET /api/entries`
  - Response: `{ entries: Entry[] }`

> ⚠️ Entries (including passwords) are kept in plain text and only for demo purposes. Do not deploy this as-is in production.
