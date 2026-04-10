/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Research from "./components/Research";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen selection:bg-primary-container selection:text-on-primary-container">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Research />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
