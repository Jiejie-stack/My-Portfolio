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
  // 自动检测部署平台并设置正确的 basename
  // 对于 GitHub Pages，PUBLIC_URL 会包含仓库路径（如 /My-Portfolio）
  // 对于 Vercel 或其他根域名部署，PUBLIC_URL 为空或只有域名，basename 应该为空
  const getBasename = () => {
    // 方法1: 检查当前域名，判断部署平台
    const hostname = window.location.hostname;
    if (hostname.includes('vercel.app') || hostname.includes('netlify.app')) {
      // Vercel 或 Netlify 部署，使用根路径
      return '';
    }
    
    // 方法2: 如果 PUBLIC_URL 存在，尝试提取路径
    // PUBLIC_URL 是 Create React App 的特殊环境变量，会在构建时被替换
    if (process.env.PUBLIC_URL) {
      try {
        const url = new URL(process.env.PUBLIC_URL);
        const pathname = url.pathname;
        // 如果路径名不是根路径，说明是 GitHub Pages，使用该路径
        if (pathname && pathname !== '/') {
          return pathname;
        }
      } catch (e) {
        // 如果 URL 解析失败，尝试直接使用 PUBLIC_URL（如果是路径）
        if (process.env.PUBLIC_URL.startsWith('/')) {
          return process.env.PUBLIC_URL;
        }
      }
    }
    
    // 方法3: 检查当前 URL 路径是否包含 GitHub Pages 路径
    const currentPath = window.location.pathname;
    if (currentPath.startsWith('/My-Portfolio')) {
      return '/My-Portfolio';
    }
    
    // 默认返回空字符串（适用于根域名部署如 Vercel）
    return '';
  };

  const basename = getBasename();

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
