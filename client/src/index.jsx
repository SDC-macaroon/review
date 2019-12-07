/* eslint-disable react/no-unused-state */
// /* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import faker from 'faker';
import 'bootstrap/dist/css/bootstrap.css';
import ReactStrapTest from './components/ReactStrapTest.jsx';
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

  render() {
    const { reviews } = this.state;
    return (
      <div className="reviewsContainer">
        <div className="features">
          <Features />
        </div>
        <div className="reviewsChartContainer">
          <div className="reviewsChart">
            Reviews
            {' '}
            <br />
            {' '}
            <img src="./chart.png" alt="a chart" />
          </div>

          <ReactStrapTest className="readAllReviews" reviews={reviews} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

// go to localhost:3000/product/2003
// server should servea page that says "read all ${no. of reviwews} reviews"
