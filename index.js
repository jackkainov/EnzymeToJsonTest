import * as React from 'react';
import InnerComponent from './inner-component';

const TestComponent = () => (
  <InnerComponent>
    <InnerInnerComponent />
  </InnerComponent>
);

const InnerInnerComponent = () => {
  <div>Inner Inner Component</div>
};

export default TestComponent;
