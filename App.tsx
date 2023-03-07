import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TestComponent from './Test.js';
import HomeComponent from './Home.js';
import AboutComponent from './About.js';
import Layout from './Layout';
import NoPage from './NoPage';
import './style.css';

export default function App() {
  return (
    // <div>
    //   <h1>Hello StackBlitz!</h1>
    //   <TestComponent
    //     test1={'test1'}
    //     test2={'test2'}
    //     test3={'test3'}
    //     children={'This children is from props'}
    //   >This is real children
    //   </TestComponent>
    // </div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<HomeComponent />} />
        <Route path="about" element={<AboutComponent />} />
        <Route path="test" element={<TestComponent />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}
