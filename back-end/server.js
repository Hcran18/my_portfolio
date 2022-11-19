const express = require('express');
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost:27017/test', {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

const reviewSchema = new mongoose.Schema({
  name: String,
  paragraph: String,
});

reviewSchema.virtual('id')
  .get(function() {
    return this._id.toHexString();
  });

reviewSchema.set('toJSON', {
  virtuals: true
});

const Review = mongoose.model('Review', reviewSchema);

app.get('/api/reviews', async (req, res) => {
  try {
    let reviews = await Review.find();
    res.send({reviews: reviews});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/reviews', async (req, res) => {
    const review = new Review({
    name: req.body.name,
    paragraph: req.body.paragraph
  });
  try {
    await review.save();
    res.send({review:review});
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/reviews/:id', async (req, res) => {
  console.log("In Delete");
  try {
    await Review.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => console.log('Server listening on port 3000!'));