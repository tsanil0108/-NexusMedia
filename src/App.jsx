import React, { useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './styles/global.css';

import Navbar         from './components/Navbar/Navbar';
import Footer         from './components/Footer/Footer';
import Home           from './components/Home/Home';
import About          from './components/About/About';
import Vision         from './components/Vision/Vision';
import Process        from './components/Process/Process';
import Services       from './components/Services/Services';
import Clients        from './components/Clients/Clients';
import Contact        from './components/Contact/Contact';
import WhatsAppButton from './components/Whatsappbutton/Whatsappbutton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

function AppInner() {
  const cursorRef = useRef(null);
  const ringRef   = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const ring   = ringRef.current;
    if (!cursor || !ring) return;
    let mx = 0, my = 0, rx = 0, ry = 0, raf;
    const move = e => { mx = e.clientX; my = e.clientY; };
    window.addEventListener('mousemove', move);
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      rx = lerp(rx, mx, 0.14); ry = lerp(ry, my, 0.14);
      cursor.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
      ring.style.transform   = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const grow   = () => { ring.style.width = '56px'; ring.style.height = '56px'; };
    const shrink = () => { ring.style.width = '38px'; ring.style.height = '38px'; };
    document.querySelectorAll('a, button').forEach(el => {
      el.addEventListener('mouseenter', grow);
      el.addEventListener('mouseleave', shrink);
    });
    return () => { window.removeEventListener('mousemove', move); cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      <div className="cursor"      ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef}   />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"         element={<Home />}     />
          <Route path="/about"    element={<About />}    />
          <Route path="/services" element={<Services />} />
          <Route path="/vision"   element={<Vision />}   />
          <Route path="/process"  element={<Process />}  />
          <Route path="/clients"  element={<Clients />}  />
          <Route path="/contact"  element={<Contact />}  />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  );
}