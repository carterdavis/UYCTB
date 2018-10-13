import React from 'react';
import { setScreen } from './../state.js';

import Pp from './Pp.jsx';

const ViewScreen = ({ num }) => {
  const view = num != 0 ? 'View' : 'Unview';

  return (
    <Pp c="screenButton"><button onClick={() => { setScreen(num) }}>Click To {view} Screen</button></Pp>
  )
};

export default ViewScreen;
