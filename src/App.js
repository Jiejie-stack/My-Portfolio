import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  // 自动检测GitHub Pages的base path
  // React会从package.json的homepage字段自动设置PUBLIC_URL
  // 对于GitHub Pages，homepage应该是：https://用户名.github.io/仓库名
  // 这样PUBLIC_URL会自动包含仓库路径
  const basename = process.env.PUBLIC_URL 
    ? new URL(process.env.PUBLIC_URL).pathname 
    : '';

  return (
    <Router basename={basename}>
      <div className="App bg-white text-gray-900 overflow-x-hidden">
        <ScrollToTop />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
