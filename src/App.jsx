import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Programs from './components/Programs'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import TrialModal from './components/TrialModal'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Header onStartTrial={openModal} />
      <main>
        <Hero onStartTrial={openModal} />
        <Features />
        <Programs />
        <Testimonials />
        <Pricing onStartTrial={openModal} />
        <FAQ />
      </main>
      <Footer />
      <TrialModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  )
}

export default App
