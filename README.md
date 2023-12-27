# WeatherGDSC
A ReactJS App built for GDSC recruitments 2023.

# I AM SO SORRY, BUT THIS APP WAS BUILT WITH NODE v18.16.0

# Features
- Lookup the weather of any city
- Change between Celsius and Fahrenheit
- Thats it \:P 

# How to run locally
1. Clone this repository
2. Run `npm install`
3. Run `bash startup.bash` and paste in your [OpenWeatherMap API](https://openweathermap.org/api) key when prompted
    - In the off chance that Step 3 doesn't work. Create a `secrets.json` in `src/.` directory. Populate it like so : 
        ```
        {"api_key" : "<openweathermapAPIkey>"}
        ```
4. Run `npm start`
5. Go to `http://localhost:3000`

# TechStack
- ReactJS
- TailwindCSS
- NextUI
- OpenWeatherMap API