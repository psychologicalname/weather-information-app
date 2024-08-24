# Weather Information Application

This is a weather information application built with Next.js, TypeScript, TailwindCSS, and Redux. The application provides a search interface similar to the Google.com home page, allowing users to search for localities and view detailed weather information fetched from the Weatherunion API.

## Features

- **Google-style Search Interface**: A minimalist search interface that resembles the Google home page.
- **Autocomplete Suggestions**: As users type in the search box, autocomplete suggestions appear, matching locality names.
- **Weather Details Page**: Clicking on an autocomplete suggestion redirects users to a detailed weather information page.
- **Responsive Design**: The application is fully responsive and works across all device sizes.
- **State Management**: Redux is used for managing application global state.

## Tech Stack

- **Next.js**
- **TypeScript**
- **TailwindCSS**
- **Redux**
- **Weatherunion API**

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/psychologicalname/weather-information-app.git
cd weather-information-app
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Environment Variables

Create a `.env` file in the root directory of the project and add the following variables:

```bash
NEXT_PUBLIC_WEATHER_API_KEY=YOUR_API_KEY
```

Replace `YOUR_API_KEY` with your actual API key from the Weatherunion API.

## Running the Application

To run the application, use the following command:

```bash
npm run dev
```

This will start the application in development mode, allowing you to see the application in your browser at `http://localhost:3000`.