# HelloWorldButInSpace
HelloWorldButInSpace

## Overview
This project consists of two main components: the client and the server. The client is a React application managed using Vite, and the server is built with Express.js. Below you'll find instructions on how to set up and run both parts of the application. We want to encourage space exploration education and cultivate space interest.  We aim to show people that you can explore space, even from earth, through our app! Our app centralizes space object location information for space exploring enthusiasts to plan their outdoor adventures, stargazing sessions, and space exploration with their telescopes. 

## Table of Contents
- [Technologies Used](#technologies-used)
- [Client](#client)
  - [Setup](#setup)
  - [Usage](#usage)
- [Server](#server)
  - [Setup](#setup-1)
  - [Usage](#usage-1)
- [API Integration](#api-integration)
  - [Used APIs](#used-apis)
  - [Integration Details](#integration-details)
  - [Examples](#examples)
- [Contributors](#contributors)

 
## Technologies Used
- **Client:**
  - React
  - Vite
  - React Router
  - Axios
  - React Bootstrap
  - ESLint

- **Server:**
  - Node.js
  - Express.js
  - Axios
  - Cors
  - Dotenv
  - Nodemon

## Client

The client folder contains a React application.

### Setup
Fork and clone this repository. Change directories into the client folder
```javascript
cd client
```
install all the dependencies
```javascript
npm install
```

### Usage
To start using the client, run the development server script:
```javascript
npm run dev
```


## Server

The server folder contains a Nodejs and Expressjs application

### Setup
Change directories into the server folder
```javascript
cd server
```
install all the dependencies
```javascript
npm install
```

### Usage

To start the server, run the start script:

```javascript
nodemon index.js
```

## API Integration

### Used APIs
We used the following APIs in our project:

- WhereTheISSAt API: For fetching data about space objects and their locations.
- OpenWeatherMap API: For providing weather information relevant to stargazing sessions.
- React Google Maps API: For displaying maps and marking locations of space objects.

### Integration Details
- **WhereTheISSAtAPI**
  - Base URL: [https://wheretheiss.at/](https://wheretheiss.at/ )
  - Endpoints:
    - /v1/satellites:  Common Name and NORAD Catalog Id
    - /v1/satellites/[id]: Position, Velocity, and Other Related Information for a Given Point in Time
- **GoogleMaps API**
  - Purpose: Used to display maps and space object locations in the application.
  - Integration: We utilized the @react-google-maps/api package to embed Google Maps in our React application.
  - Authentication: Requires an API key. You can obtain one by registering on Google Maps for Developers
- **OpenWeatherMap API**
  - Base URL: https://api.openweathermap.org/
  - Endpoints:
    - /data/3.0/onecall/onecall?lat=33.44&lon=-94.04&appid={API key}: Current weather data for any location
   
### Example Usage
- **WhereTheISSAtAPI**
```javascript
import axios from 'axios';

const endpoint = 'https://api.wheretheiss.at/v1/satellites/25544/';

const issCurrentLocation = async () => {
  try {
    const response = await axios.get(endpoint, {
      crossdomain: true,
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching ISS location:', error);
    return null;
  }
};

export { issCurrentLocation };
```
- **OpenWeatherMap API**
```javascript
import axios from 'axios';

const fetchWeather = async (location) => {
  try {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: { q: location, appid: 'YOUR_OPENWEATHERMAP_API_KEY' }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

fetchWeather('Los Angeles');
```
- **GoogleMaps API**

```javascript
import React from 'react';
import { GoogleMap, useJsApiLoader, MarkerF } from '@react-google-maps/api';

function HomeMap({ center }) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
  });

  const containerStyle = { height: '500px', width: '100%' };

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={8}>
      <MarkerF position={center} />
    </GoogleMap>
  ) : null;
}

export { HomeMap };
```

## Contributors
- **Donald Cochran**
  - GitHub: [DAJCOCHRAN](https://github.com/DAJCOCHRAN)
  - Linkedin: [Donald Cochran](https://www.linkedin.com/in/dajcode/)
- **Benjamin Marin**
  - GitHub: [ben-w-martin](https://github.com/ben-w-martin)
  - Linkedin: [Benjamin Martin](https://www.linkedin.com/in/ben-w-martin017/)
- **Giselle Ross:**
  - GitHub: [giselleRoss](https://github.com/giselleRoss)
  - Linkedin: [Giselle Ross](https://linkedin.com/in/gisellerosstech)
- **Alex Amador**
  - Linkedin: [Alex Amador](https://www.linkedin.com/in/alex-raven-amador/)
- **Jeffrey Fung**
  - GitHub: [Jeffcodess](https://github.com/Jeffcodess)
  - Linkedin: [Jeffrey Fung](https://www.linkedin.com/in/jeffrey-fung-678438bb/)


