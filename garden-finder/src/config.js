//declaring variables for the TOMTOM API here

const BASE_URL = 'api.tomtom.com';
const VERSION = '2';
const EXT = "json";
const API_KEY = 'yMgNw1TOfHuAowlpwEd0D23jwT5L9rCb';
let endpoint = `https://${BASE_URL}/search/${VERSION}/search/91942.${EXT}?key=${API_KEY}`

export {
    BASE_URL,
    VERSION,
    EXT,
    API_KEY,
    endpoint
  };