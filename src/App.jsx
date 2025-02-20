
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';


const Home = React.lazy(() => import('./pages/Home.jsx'));
const Page1 = React.lazy(() => import('./pages/Page1.jsx'));
const Page2 = React.lazy(() => import('./pages/Page2.jsx'));
const Page3 = React.lazy(() => import('./pages/Page3.jsx'));
const Page4 = React.lazy(() => import('./pages/Page4.jsx'));
const Page5 = React.lazy(() => import('./pages/Page5.jsx'));
const Page6 = React.lazy(() => import('./pages/Page6.jsx'));
const Page7 = React.lazy(() => import('./pages/Page7.jsx'));
const Page8 = React.lazy(() => import('./pages/Page8.jsx'));
const Page9 = React.lazy(() => import('./pages/Page9.jsx'));
const Page10 = React.lazy(() => import('./pages/Page10.jsx'));

function App() {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Wait for it...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;