import React from 'react';

import FirstZ from './FirstZ.jsx';
import NextZ from './NextZ.jsx';

const Z = (props) => {
  if (props.o == 0) {
    return <FirstZ {...props} />
  } else {
    return <NextZ {...props} />
  }
}

// {children}

export default Z;
