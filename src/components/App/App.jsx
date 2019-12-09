import React from 'react';
import Reader from '../Reader/Reader';
import publications from '../Reader/publications.json';

const App = () => (
  <div>
    <Reader items={publications} />
  </div>
);

export default App;
