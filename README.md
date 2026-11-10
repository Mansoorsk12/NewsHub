# 📰 NewsHub

**Your daily destination for exploring news and staying informed.**

NewsHub is a responsive news web application built with React that allows users to browse news articles across different categories and save interesting stories to read later.

## ✨ Features

- **Top Stories:** Browse a collection of featured news articles.
- **Multiple Categories:** Explore news covering World, Business, Science, Sports, Health, Economy, Culture, and more.
- **Read Later:** Save your favourite articles for future reading.
- **Persistent Storage:** Saved articles remain available using browser Local Storage, even after refreshing the page.
- **Dynamic Navigation:** Easily switch between the Home and Read Later pages.
- **Responsive Design:** Clean, card-based layout that adapts to different screen sizes.

## 🛠️ Technologies Used

- **React 19** – Building interactive user interfaces.
- **JavaScript (ES6+)** – Application logic and functionality.
- **React Router** – Client-side navigation.
- **CSS3** – Styling and responsive layouts.
- **Vite** – Development server and build tool.
- **Local Storage** – Persisting saved articles in the browser.

## 📂 Project Structure

```text
NewsHub/
│
├── public/
│
├── src/
│   ├── components/
│   │   ├── Article.jsx
│   │   ├── Home.jsx
│   │   ├── Navbar.jsx
│   │   └── ReadLater.jsx
│   │
│   ├── context/
│   │   └── ReadLaterContext.jsx
│   │
│   ├── data/
│   │   └── articles.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── package.json
├── index.html
└── README.md
```

## 🚀 Getting Started

Follow these steps to run NewsHub locally.

### 1. Clone the repository

```bash
git clone https://github.com/Mansoorsk12/NewsHub.git
```

### 2. Navigate to the project directory

```bash
cd NewsHub
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open in your browser

Visit the local URL provided by Vite, usually:

```text
http://localhost:5173
```

## 📜 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build |
| `npm run lint` | Checks code quality using ESLint |

## 💡 How It Works

1. Users visit the Home page to explore available news articles.
2. Each article displays its category, title, summary, and image.
3. Users can click the **Read Later** button to save an article.
4. Saved articles are stored in browser Local Storage.
5. Users can access their saved articles through the Read Later page.
6. Users can remove an article from their saved list by clicking the button again.

## 🔮 Future Improvements

- Integrate a live News API.
- Add search functionality.
- Implement category-based filtering.
- Add individual article detail pages.
- Introduce user authentication.
- Add dark mode.
- Implement pagination or infinite scrolling.

## 👨‍💻 Author

**Mansoor**

GitHub: [@Mansoorsk12](https://github.com/Mansoorsk12)

---

⭐ If you find this project interesting, consider giving it a star!
