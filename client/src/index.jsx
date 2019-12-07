/* eslint-disable import/extensions */
/* eslint-disable class-methods-use-this */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import ReactStrapTest from './components/ReactStrapTest.jsx';
import ReviewSummary from './components/ReviewSummary.jsx';
import Features from './components/Features.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [],
    };
  }

  componentDidMount() {
    this.loadReviews();
  }

  async loadReviews() {
    const productId = window.location.pathname.split('/')[2];
    const response = await fetch(`/reviews/${productId}`);
    const myJson = await response.json();
    this.setState({ reviews: myJson });
  }

  reviewPercentages(reviews) {
    const ratingCount = Array(5).fill(0);
    reviews.forEach(review => {
      ratingCount[review.rating - 1]++;
    });
    return ratingCount.map(rating => rating / (reviews.length * 100));
  }

  render() {
    const { reviews } = this.state;
    return (
      <div className="reviewsContainer">
        <div className="features">
          <Features />
        </div>
        <div className="reviewsChartContainer">
          <ReviewSummary percentages={this.reviewPercentages(reviews)} />
          <ReactStrapTest className="readAllReviews" reviews={reviews} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// go to localhost:3000/product/2003
// server should servea page that says "read all ${no. of reviwews} reviews"
