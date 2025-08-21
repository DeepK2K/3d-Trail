import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { motion } from "motion/react";
import sliderImage1 from "./assets/slider-image-1.jpg";
import sliderImage2 from "./assets/slider-image-2.jpg";
import sliderImage3 from "./assets/slider-image-3.jpg";
import heroFrame from "./assets/hero_frame.jpg";
import Model from "./Model";
import "./App.css";
import batteryIcon from "./assets/battery-icon.png";
import chipIcon from "./assets/chip-icon.png";
import phoneIcon from "./assets/phone-icon.png";
import colorIcon from "./assets/color-icon.png";
import cameraIcon from "./assets/cam-icon.png";

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

        {/* Section 2: Gallery (richer content) */}
        <section id="gallery" className="section gallery">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="gallery-content"
          >
            <h2>From Every Angle</h2>
            <div className="gallery-row">
              <div className="gallery-item">
                <img src={sliderImage1} alt="iPhone side" />
                <p>
                  <strong>Side View</strong>
                </p>
                <p>Sleek aerospace-grade aluminum frame.</p>
                <p>Engineered for strength without bulk.</p>
                <p>Perfect balance of elegance and durability.</p>
              </div>

              <div className="gallery-item">
                <img src={sliderImage2} alt="iPhone back" />
                <p>
                  <strong>Back View</strong>
                </p>
                <p>Finished with premium ceramic shield.</p>
                <p>Scratch-resistant and built to last.</p>
                <p>Bold colors for every personality.</p>
              </div>

              <div className="gallery-item">
                <img src={sliderImage3} alt="iPhone front" />
                <p>
                  <strong>Front View</strong>
                </p>
                <p>Immersive full-screen display.</p>
                <p>Crystal-clear resolution for daily use.</p>
                <p>Designed to withstand everyday life.</p>
              </div>
            </div>
          </motion.div>
        </section>
        {/* Section 3: 3D Model */}
        <section id="model" className="section model">
          <h2>Interactive 3D View</h2>
          <div className="canvas-wrapper">
            <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
              {/* Global ambient lighting */}
              <ambientLight intensity={0.3} />

              {/* Hemisphere light (sky & ground tone) */}
              <hemisphereLight
                skyColor={"#ffffff"}
                groundColor={"#444444"}
                intensity={0.6}
              />

              {/* Key light */}
              <directionalLight
                position={[5, 5, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
              />

              {/* Fill light (opposite side) */}
              <directionalLight position={[-5, 2, -5]} intensity={0.5} />

              {/* Rim light (behind the model for outline glow) */}
              <pointLight
                position={[0, 5, -5]}
                intensity={0.7}
                color="#ffffff"
              />

              {/* Soft spotlight for product-style highlight */}
              <spotLight
                position={[2, 8, 5]}
                angle={0.3}
                penumbra={0.5}
                intensity={1}
                castShadow
              />

              {/* Your model */}
              <Model />

              {/* Controls */}
              <OrbitControls enableZoom={false} />
            </Canvas>
          </div>
        </section>

        {/* Section 4: Specs (logs / styled cards) */}
        <section id="specs" className="section specs">
          <h2>Specifications</h2>
          <div className="spec-grid">
            <div className="spec-card">
              <div className="spec-card-title">
                <span>Apple Intelligence</span>
                <img src={phoneIcon} />
              </div>
              <p>Experience AI-powered personalization built into iOS.</p>
            </div>
            <div className="spec-card">
              <div className="spec-card-title">
                <span>Chip</span>
                <img src={chipIcon} />
              </div>
              <p>A18 Pro chip with 6-core GPU for blazing fast performance.</p>
            </div>
            <div className="spec-card">
              <div className="spec-card-title">
                <span>Camera</span>
                <img src={cameraIcon} />
              </div>
              <p>
                Pro camera system with 48MP Fusion sensor and 5x Telephoto. Take
                cinematic shots like never before.
              </p>
            </div>
            <div className="spec-card">
              <div className="spec-card-title">
                <span>Battery</span>
                <img src={batteryIcon} />
              </div>

              <p>Up to 33 hours of video playback on a single charge.</p>
            </div>
            <div className="spec-card">
              <div className="spec-card-title">
                <span>Colors</span>
                <img src={colorIcon} />
              </div>
              <p>Ultramarine, Teal, Pink, White, and Black.</p>
            </div>
            <div className="spec-card highlight">
              <h3>Starting at ₹79,900</h3>

              <button className="buy-btn">Buy Now</button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
