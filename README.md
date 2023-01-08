# Ghibli API

This repository is a resurrected version of the now-defunct https://ghibliapi.herokuapp.com/. In its current state, it only allows `GET` requests to the main endpoints: 
- /films
- /people
- /locations
- /species
- /vehicles

and their corresponding show pages (e.g. `/films/:id`). 

## How to Use

### Remote
This repository is hosted at https://limitless-castle-00011.herokuapp.com/. 

### Local
If you wish to use this repository locally: 
#### Setup
```
git clone {this repo}
npm install
npm run start-dev
```
The local server should launch to `http://localhost:3001`. 
The data source is located in `data/data.json`. 
