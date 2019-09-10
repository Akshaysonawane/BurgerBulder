import React from 'react';
import Layout from '../src/components/Layout/Layout'
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div>
      <Layout>
      <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;
