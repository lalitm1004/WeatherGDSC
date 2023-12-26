touch src/secrets.json
echo "Please enter a valid OpenWeatherMaps API Key > "
read OPENWEATHERAPIKEY
echo "{\"api_key\":\"${OPENWEATHERAPIKEY}\"}" > src/secrets.json
echo "API Key setup successful"