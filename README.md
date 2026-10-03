# Quora Clone

A Quora-inspired web application built using Node.js, Express.js, EJS, HTML, and CSS. It features a dark-themed interface, sidebar navigation, and basic post management functionality.

## Features

* **Create Posts:** Add posts with a username and content.
* **View Posts:** Display posts on the home page.
* **View Full Posts:** Open individual posts to read their content.
* **Edit Posts:** Access an edit page for existing posts.
* **Delete Posts:** Remove posts from the home page.
* **Sidebar Navigation:** Display topic categories such as Movies, Health, Technology, and Education.
* **Dark Theme:** Custom dark-themed interface with styled post cards.
* **Font Awesome Icons:** Icons for sidebar topics and follow links.
* **Custom Typography:** Isometra font for the Quora heading.

## Tech Stack

* **Backend:** Node.js, Express.js
* **Templating Engine:** EJS
* **Frontend:** HTML, CSS
* **Libraries:** UUID, Method-Override, Font Awesome
* **Fonts:** Google Fonts — Isometra

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/YOUR-USERNAME/quora-clone.git
   ```

2. Navigate to the project directory:

   ```bash
   cd quora-clone
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the application:

   ```bash
   node index.js
   ```

5. Open the application in your browser:

   `http://localhost:8080/posts`

## Project Structure

```text
quora-clone/
├── public/
│   └── style.css
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── show.ejs
│   └── edit.ejs
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Future Improvements

* Implement complete post editing functionality.
* Add database integration for persistent storage.
* Add user authentication and functional follow links.
* Implement working sidebar topic navigation.

## Author

**Prathamesh Patil**
