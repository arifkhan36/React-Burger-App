import React, { Component } from 'react';

import Layout from './components/Layout/Layout.js';
import BurgerBuilders from './containers/BurgerBuilders/BurgerBuilder';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilders />
        </Layout>
      </div>
    );
  }
}

export default App;
