# Scraping data from "delivery" API 

## Api have 2 routes 
- ## /scrape - to initialize collecting data process
	>  ### Is responsive for start process data-scraping from API-URL with reviews 
- ## /result - to get result from database 
	> ### Is reponsive to presents data from database with query parameters (no-default value) : 
		take - amount of requesting records;
		offset - amount of records will skipping from start;
		orderBy - variable is responsible to set a value of data will ordered by (rated, icon or author);
		dir - orderBy direction (1 , -1 );


## Scripts
 > ### dev - npm run dev (with nodemon)
 > ### test - npm t
 > ### build- npm run build (./build)
 > ### start- npm run start (./build/index.js)

## .ENV file specs 
- ### MONGO_USER 
- ### MONGO_PWD 
- ### MONGO_DB (name)
- ### API_URL = https://api.delivery-club.ru/api1.2/reviews currently used
- ### CHUNK = 1000  (currently used)




## WARN - Swagger docs not implemented now.

