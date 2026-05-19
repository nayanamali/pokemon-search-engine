# Pokemon Search Engine (Pokedex)

A full-stack Pokemon Search Engine application built using Spring Boot and React TypeScript.

This application allows users to search Pokemon by name and view detailed Pokemon information including:
- Official artwork
- Types
- Abilities
- Stats
- Height
- Weight

The backend integrates with the PokeAPI and uses caching for improved performance.

---

# Tech Stack

## Backend
- Java 21
- Spring Boot
- REST API
- RestTemplate
- Spring Cache

## Frontend
- React
- TypeScript
- Vite
- HTML/CSS

## External API
- PokeAPI
- https://pokeapi.co/

---

# Features

- Search Pokemon by name
- Display official Pokemon artwork
- Display Pokemon stats
- Display abilities and types
- Error handling for invalid Pokemon
- Backend caching for faster repeated searches
- Responsive and modern UI

---

# Project Structure

```bash
pokemon-search-engine/
│
├── backend/
│
├── frontend/
│
└── README.md
```

---

# Backend Setup

## Navigate to backend folder

```bash
cd backend
```

## Run Spring Boot application

Run the application using Eclipse or:

```bash
mvn spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

# Frontend Setup

## Navigate to frontend folder

```bash
cd frontend
```

## Install dependencies

```bash
npm install
```

## Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# API Endpoint

## Get Pokemon By Name

```http
GET /api/pokemon/{name}
```

Example:

```http
http://localhost:8080/api/pokemon/pikachu
```

---

# Screenshots

## Home Page

![Home Page](screenshots/home-page.png)

## Pokemon Search Result

![Pokemon Result](screenshots/pokemon-result.png)

## Invalid Pokemon Search

![Error Page](screenshots/error-page.png)

---

# Cache Implementation

The backend uses Spring Cache to store previously fetched Pokemon responses.

Benefits:
- Faster repeated searches
- Reduced external API calls
- Better performance

---

# Future Improvements

- Dark mode
- Pokemon evolution chain
- Search suggestions
- Pagination
- Favorites feature
- Responsive mobile UI

---

# Author

Nayana Mali