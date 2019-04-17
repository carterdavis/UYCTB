import React from 'react';
import { setScreen } from './../state.js';

import Pp from './Pp.jsx';
import Command from './Command.jsx';

const ViewScreen = ({ num }) => {
  const view = num != 0 ? 'View' : 'Unview';

  if (num != 0) {
      return <Pp c="screenButton" n><p><button onClick={() => { setScreen(num) }}>Click To {view} Screen</button></p></Pp>
  }
  return <Command c="screenButton"><button onClick={() => { setScreen(num) }}>Click To {view} Screen</button></Command>
};

export default ViewScreen;
