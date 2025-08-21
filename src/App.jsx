import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "motion/react";
import sliderImage1 from "./assets/slider-image-1.jpg";
import sliderImage2 from "./assets/slider-image-2.jpg";
import sliderImage3 from "./assets/slider-image-3.jpg";
import heroFrame from "./assets/hero_frame.jpg"
// import * as motion from "motion/react-client"
import "./App.css";
import Model from "./Model";

// Simple placeholder model


function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <span className="nav-title">iPhone Showcase</span>
        <nav>
          <a href="#hero">Home</a>
          <a href="#gallery">Gallery</a>
          <a href="#model">3D</a>
          <a href="#specs">Specs</a>
        </nav>
      </header>

      {/* All sections inside scroll-snap container */}
      <main>
        {/* Section 1: Hero */}
        <section id="hero" className="section hero">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <img src={heroFrame} alt="iPhone" className="hero-img" />
            <h2>The new iPhone</h2>
            <p>Experience the future of smartphones today.</p>
            <button className="buy-btn">Buy Now</button>
          </motion.div>
        </section>

        {/* Section 2: Gallery */}
        <section id="gallery" className="section gallery">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="gallery-content"
          >
            <h2>From Every Angle</h2>
            <div className="gallery-row">
              <img src={sliderImage1} alt="iPhone side" />
              <img src={sliderImage2} alt="iPhone back" />
              <img src={sliderImage3} alt="iPhone front" />
            </div>
            <p>Sleek, modern, and powerful.</p>
          </motion.div>
        </section>

        {/* Section 3: 3D Model */}
        <section id="model" className="section model">
          <h2>Interactive 3D View</h2>
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[5, 5, 5]} />
              <Model />
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </section>

        {/* Section 4: Specs */}
        <section id="specs" className="section specs">
          <h2>Specifications</h2>
          <ul>
            <li>Display: 6.7" OLED</li>
            <li>Chip: A16 Bionic</li>
            <li>Camera: 48MP Wide</li>
            <li>Battery: 28 hours video playback</li>
            <li>Storage: 128GB / 256GB / 512GB</li>
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;