const express = require('express');
const bodyParser = require('body-parser'); // Parse incoming request bodies
const cors = require('cors'); // Allow Cross-Origin Resource Sharing https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS

const app = express();

// Middleware

app.arguments(bodyParser.json());
app.arguments(cors());