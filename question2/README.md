# React Router App

A multi-page React application with client-side routing using React Router v6.

## Pages
- **Home** — Hero section, stats, intro
- **About** — Studio story and values grid
- **Contact** — Contact details and working form

## Setup & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm start
```

The app will open at http://localhost:3000

## Project Structure

```
question3/
├── public/
│   └── index.html
├── src/
│   ├── pages/
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
```

## How Routing Works

- `BrowserRouter` wraps the entire app
- `<Routes>` + `<Route>` define paths: `/`, `/about`, `/contact`
- `<NavLink>` highlights the active page link automatically
- Navigation happens instantly — **no page reloads**
