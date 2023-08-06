const express = require('express');
const app = express();
const port = 3000; // You can change this to your preferred port

// http://localhost:3000/random-numbers?count=20&min=50&max=200

// Generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function re(min, max, count) {
  setInterval(() => {
    // data.value += 1; console.log('Updated data:', data);
    return Array.from({ length: count }, () => getRandomNumber(min, max));
  }, 2000);
}

app.get('/random-numbers', (req, res) => {
  // const count = parseInt(req.query.count) || 10;
  const count = 5;
  const min = parseInt(req.query.min) || 1;
  const max = parseInt(req.query.max) || 100;

  //console.log(re(min, max, count));

  const numbers = Array.from({ length: count }, () =>
    getRandomNumber(min, max)
  );
  const intList = Array.from({ length: count }, () =>
    getRandomNumber(min * max, max * 3)
  );
  let obj = {
    incoor: numbers,
    reter: intList,
  };

  res.json(obj);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
