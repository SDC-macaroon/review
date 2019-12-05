import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import faker from 'faker';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      test: [],
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from App Component! Testing Faker!</h1>
        <h2>{faker.name.findName()}</h2>
        <h3>{faker.fake('{{name.findName}} {{name.suffix}}')}</h3>
        <div>{faker.lorem.sentence()}</div>
        <div>{faker.image.cats()}</div>
        <img src={faker.image.cats()} alt="cat" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
