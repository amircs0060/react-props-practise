import * as React from 'react';
import TestComponent from './Test.js';
import './style.css';

export default function App() {
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <TestComponent
        test1={'test1'}
        test2={'test2'}
        test3={'test3'}
        children={'This children is from props'}
      >This is real children
      </TestComponent>
    </div>
  );
}
