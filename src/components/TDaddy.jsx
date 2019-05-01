import React from 'react';
import Zoom from 'react-reveal/Zoom';

const TDaddy = ({ children, story }) => {
  if (story) {
    return (
      <div class="paragraph tdaddy">
        <div class="inner">
          <div class="mock-p">
            <img src="assets/troughdaddy.png" class="logo" />
            <div class="wrapper">
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div class="paragraph tdaddy">
        <div class="inner">
          <div class="mock-p">
            <img src="assets/troughdaddy.png" class="logo" />
            <div class="wrapper">
              <Zoom bottom cascade duration={1000}>
                {children}
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TDaddy;
