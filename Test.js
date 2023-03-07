import React, { useState } from 'react';

function TestComponent({ test1, test2, test3, children }) {
  // function TestComponent(props) {
  return (
    <div>
      <h1>{test1}</h1>
      <p>This is p {test2}</p>
      <p>{children}</p>
      <h3>This is h3 {test3}</h3>
      {/* <h1>{props.test1}</h1>
      <p>This is p {props[0]}</p>
      <h3>This is h3 {props['test3']}</h3>
      <h3>This is h3 {props[test3]}</h3> */}
    </div>
  );
}
TestComponent.defaultProps = {
  test1: 'This is test1 from default props',
};
export default TestComponent;
