//After npm install compression

const express = require('express');
const compression = require('compression');

const app = express();

//  GZIP compression for performance improve
app.use(compression());

// Start the server
const port = 3000; // or any other port of your choice
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
