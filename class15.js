// ## 16. JSON in JavaScript
// - JSON Syntax
// - Parsing JSON
// - Stringifying Objects

// What is JSON?
// - JSON is a syntax for storing and exchanging data.
// - JSON is a text format that is used to store and transmit data.

// Example
let person = {
    name: "John",
    age: 30,
};
let personJSON = JSON.stringify(person); // Convert an object to a JSON string
console.log(personJSON);

// What is parsing JSON?
// - Parsing JSON is the process of converting a JSON string into a JavaScript object.

// Example
let personJSON = '{"name": "John", "age": 30}';
let person = JSON.parse(personJSON); // Convert a JSON string to an object
console.log(person);

//   AJAX and Fetch API
// - XMLHttpRequest (XHR)
// - Fetch API
// - Making GET and POST Requests
// - Handling Responses

// What is AJAX?
// - AJAX is a technique for creating interactive web applications that can send and receive data asynchronously.

// Example
let xhr = new XMLHttpRequest();
xhr.open("GET", "data.json");
xhr.onload = function () {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send();

// What is Fetch API?
// - Fetch API is a built-in JavaScript function that allows you to make HTTP requests.

// Example
fetch("data.json")
    .then((response) => response.json())
    .then((data) => console.log(data));

// What is making GET and POST requests?
// - GET requests are used to retrieve data from a server.
// - POST requests are used to send data to a server.

// Example
fetch("data.json", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        name: "John",
        age: 30,
    }),
})
    .then((response) => response.json())
    .then((data) => console.log(data));

// Post Request
let xhr = new XMLHttpRequest();
xhr.open("POST", "data.json");
xhr.setRequestHeader("Content-Type", "application/json");
xhr.onload = function () {
    if (xhr.status === 200) {
        let data = JSON.parse(xhr.responseText);
        console.log(data);
    }
};
xhr.send(
    JSON.stringify({
        name: "John",
        age: 30,
    }),
);

// >>>>>>>>>>>>>>>>>>>>>>>> Task 01 <<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Tasks Using Free APIs

// 1. Random User Generator
// API: https://randomuser.me/
// Task: Create a user directory
// - Fetch data for 10 random users
// - Display their name, picture, email, and location
// - Implement a refresh button to load new users
// - Add a filter to display users by gender or nationality

// 2. International Space Station Tracker
// API: http://open-notify.org/Open-Notify-API/ISS-Location-Now/
// Task: Build an ISS location tracker
// - Fetch the current location of the ISS
// - Display the latitude and longitude on a map (you can use a free map API like Leaflet)
// - Implement automatic updates every 5 seconds
// - Show the local time at the ISS's current location

// 3. Public Holiday Calendar
// API: https://date.nager.at/Api
// Task: Create a holiday lookup tool
// - Allow users to select a country and a year
// - Fetch and display all public holidays for that country and year
// - Implement a feature to compare holidays between two countries

// 4. Currency Converter
// API: https://exchangerate.host/
// Task: Build a currency conversion tool
// - Fetch a list of available currencies
// - Allow users to select base and target currencies
// - Implement conversion with up-to-date exchange rates
// - Display a historical chart of exchange rates for the past 7 days

// 5. Astronomy Picture of the Day
// API: https://api.nasa.gov/ (APOD API - requires free API key)
// Task: Create an astronomy image gallery
// - Fetch and display the Astronomy Picture of the Day
// - Implement a calendar to view past APODs
// - Add a feature to save favorite images locally

// 6. Recipe Finder
// API: https://www.themealdb.com/api.php
// Task: Develop a recipe search application
// - Allow users to search for recipes by name or main ingredient
// - Display recipe details including ingredients and instructions
// - Implement a "random recipe" feature
// - Add categories and area filters for recipes

// 7. Book Explorer
// API: https://openlibrary.org/developers/api
// Task: Build a book information tool
// - Implement a search function for books by title, author, or ISBN
// - Display book details including cover image, author, and publication info
// - Show a list of related works or books by the same author
// - Add a feature to create a reading list

// 8. Trivia Quiz Game
// API: https://opentdb.com/api_config.php
// Task: Create a trivia game
// - Fetch trivia questions from various categories
// - Implement a quiz interface with multiple-choice answers
// - Keep track of the user's score
// - Add difficulty levels and category selection

// 9. Dog Breed Viewer
// API: https://dog.ceo/dog-api/
// Task: Build a dog breed explorer
// - Fetch and display random dog images
// - Implement a breed selection feature to view specific breeds
// - Create a breed guessing game using random images
// - Display a list of sub-breeds where applicable

// 10. News Headlines
// API: https://newsapi.org/ (requires free API key)
// Task: Develop a news headline aggregator
// - Fetch top headlines for a selected country
// - Implement category filtering (e.g., technology, sports, entertainment)
// - Allow users to search for news articles
// - Display article snippets and links to full articles

// 1. Weather Dashboard
// Create a weather dashboard that allows users to check weather conditions for multiple cities.
// Features to implement:
// - Use a weather API (e.g., OpenWeatherMap) to fetch current weather and forecasts
// - Allow users to search for cities and save favorites
// - Display current weather, 5-day forecast, and additional details (humidity, wind speed, etc.)
// - Implement geolocation to get the user's current location weather
// - Add charts or graphs to visualize temperature trends
// - Implement error handling for API failures and invalid city names
// - Required fields: cityName, apiKey
// - Endpoint: https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid={apiKey}

// Fetch and Display GitHub Repositories
// Scenario: Create a developer portfolio application that fetches and displays a user's GitHub repositories.
// Details:

// Capture user input for the GitHub username.
// Use the Fetch API to send a GET request to fetch the user's repositories.
// Display the repository information (name, description, link).
// Handle loading and error states appropriately.
// Endpoint: https://api.github.com/users/{username}/

// Fetch Random Quotes
// Scenario: Create a quote generator that fetches and displays a random quote each time a button is clicked.
// Details:

// Use the Fetch API to get a random quote.
// Display the quote on the webpage.
// Handle loading and error states appropriately.
// API Endpoint: https://api.quotable.io/random

// Country Information
// Scenario: Develop an application where users can search for a country and get detailed information about it.
// Details:

// Capture user input for the country name.
// Use the Fetch API to get details about the country.
// Display the country information, including name, capital, population, and flag.
// Handle loading and error states appropriately.
// API Endpoint: https://restcountries.com/v3.1/name/{countryName}

// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> Task 02 <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// Tasks Using APIs Requiring Keys

// 1. Weather Forecast Application
// API: OpenWeatherMap (https://openweathermap.org/api)
// Task: Build a comprehensive weather dashboard
// - Fetch current weather and 5-day forecast for a given location
// - Display temperature, humidity, wind speed, and weather conditions
// - Implement a location search feature
// - Show weather maps for temperature, precipitation, and wind
// - Create graphs for temperature and precipitation forecasts

// 2. Movie Database Explorer
// API: The Movie Database (TMDb) (https://www.themoviedb.org/documentation/api)
// Task: Develop a movie information and discovery app
// - Allow users to search for movies and TV shows
// - Display detailed information including cast, crew, ratings, and reviews
// - Implement a trending movies/TV shows section
// - Create a watchlist feature for users
// - Show similar movie recommendations

// 3. News Aggregator
// API: NewsAPI (https://newsapi.org/)
// Task: Create a personalized news platform
// - Fetch top headlines from various sources and categories
// - Implement a search feature for news articles
// - Allow users to filter news by country, category, and source
// - Create a "save for later" functionality for interesting articles
// - Implement a summarization feature for long articles

// 4. Stock Market Tracker
// API: Alpha Vantage (https://www.alphavantage.co/)
// Task: Build a stock market monitoring tool
// - Fetch real-time and historical stock data
// - Display stock charts with customizable time ranges
// - Implement a watchlist for users to track multiple stocks
// - Show key financial metrics and company information
// - Create alerts for significant price changes

// 5. Language Translation Tool
// API: Google Cloud Translation (https://cloud.google.com/translate)
// Task: Develop a multi-language translation application
// - Allow users to input text or upload documents for translation
// - Support translation between multiple language pairs
// - Implement text-to-speech for translated text
// - Create a history of past translations
// - Add a feature to detect the language of input text

// 6. Image Recognition and Analysis
// API: Google Cloud Vision (https://cloud.google.com/vision)
// Task: Create an image analysis tool
// - Allow users to upload images or provide image URLs
// - Implement features like object detection, face detection, and text extraction
// - Create a tagging system based on detected objects and attributes
// - Show similar images based on content analysis
// - Implement a safe search filter for inappropriate content

// 7. Spotify Music Explorer
// API: Spotify Web API (https://developer.spotify.com/documentation/web-api/)
// Task: Build a music discovery and playlist creation tool
// - Allow users to search for songs, artists, and albums
// - Create and manage playlists
// - Implement music recommendations based on user preferences
// - Display audio features and analysis for tracks
// - Create a visualization of related artists

// 8. Natural Language Processing Tool
// API: IBM Watson Natural Language Understanding (https://www.ibm.com/cloud/watson-natural-language-understanding)
// Task: Develop a text analysis application
// - Analyze input text for sentiment, emotions, and key concepts
// - Implement entity extraction to identify people, places, and organizations
// - Create word clouds based on important keywords
// - Show sentiment trends for longer pieces of text
// - Implement a feature to compare sentiment between different texts

// 9. Geocoding and Maps Integration
// API: Google Maps API (https://developers.google.com/maps)
// Task: Create a location-based service finder
// - Implement address lookup and geocoding
// - Display interactive maps with custom markers
// - Calculate distances and routes between locations
// - Implement a nearby search for various types of places (restaurants, hotels, etc.)
// - Create heat maps based on data (e.g., population density, crime rates)

// 10. AI-Powered Chatbot
// API: Dialogflow (https://cloud.google.com/dialogflow)
// Task: Build an intelligent chatbot for customer service
// - Create a chat interface for user interactions
// - Implement natural language processing to understand user queries
// - Develop a knowledge base for common questions and answers
// - Integrate with external APIs for real-time data (e.g., order status, product info)
// - Implement conversation flow management and context handling
