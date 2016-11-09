import * as React from 'react';

const InnerComponent = (props) => {
  <div>
    Inner Component
    {props.children}
  </div>
};

export default InnerComponent;
