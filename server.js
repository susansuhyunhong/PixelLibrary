const express = require('express');
const port = process.env.PORT || 5000;
const multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

const app = express();

app.get('/api/hello', (req, res) => {
  console.log('/api/hello called');
  res.send({ express: 'Hello From Express' });
});

app.post('/photos', upload.array('photos', 12), (req, res) => {
  console.log(req.files);
  // req.files is an array of `photos` files
  req.files.forEach((file, idx) => {
    console.log(file);
  });
  res.send('POST request to upload photo');
});

app.listen(port, () => console.log(`Listening on port ${port}`));
