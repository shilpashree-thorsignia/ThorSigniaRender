'use client'

import * as React from 'react'
import { Link } from "react-router-dom"
import { ChevronDown } from "lucide-react"
import { motion, useAnimation } from "framer-motion"

interface MousePosition {
  x: number
  y: number
}

export default function AIEngineersHeader() {
  const [mousePosition, setMousePosition] = React.useState<MousePosition>({ x: 0, y: 0 })
  const lastCall = React.useRef(0)
  const controls = useAnimation()

  // Throttled mouse move effect
  React.useEffect(() => {
    let animationFrameId: number
    
    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now()
      if (now - lastCall.current >= 16) { // ~60fps
        lastCall.current = now
        setMousePosition({
          x: event.clientX,
          y: event.clientY
        })
      }
    }

    // Start animation loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate)
    }
    
    animationFrameId = requestAnimationFrame(animate)
    window.addEventListener('mousemove', handleMouseMove)
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  const scrollToNextSection = (e: any) => {
    e.preventDefault()
    const nextSection = document.querySelector('#engineers-showcase')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  
  return (
    <div className="relative w-full">
      <section className="h-[70vh] max-h-[800px] bg-gradient-to-r from-[#0F0326] via-[#1A0645] to-[#0F0326] flex flex-col justify-center items-center px-6 py-12 relative overflow-hidden rounded-xl my-8 mx-4 md:mx-8 lg:mx-16 shadow-lg">
        {/* Background Blob */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5, x: -200, y: -200 }}
          animate={{ 
            opacity: [0.1, 0.3, 0.2], 
            scale: [0.5, 1.2, 1], 
            x: [-200, 50, -100],
            y: [-200, 100, -50]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity, 
            repeatType: 'reverse',
            ease: 'easeInOut'
          }}
          className="absolute bg-[#88BF42]/30 blur-[64px] rounded-full w-[700px] h-[700px] top-[10%] left-[-20%] md:left-[10%] z-[-1]"
        />

        {/* Cursor-Following Glow */}
        <div 
          className="absolute w-full h-full pointer-events-none z-0"
          style={{ 
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(136, 191, 66, 0.2) 0%, transparent 70%)` 
          }}
        />
        
        <div className="max-w-4xl text-center z-10">
          {/* Intro Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm uppercase tracking-wide text-[#88BF42] font-medium mb-4"
          >
            AI Talent Solutions
          </motion.div>

          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
              Your AI Team
            </h1>
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#88BF42] leading-tight">
              On-Demand
            </h1>
          </motion.div>

          {/* Subheading */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-gray-300 text-lg max-w-2xl mx-auto mt-4"
          >
            Access top-tier AI engineers and data scientists tailored to your project needs, available whenever you need them.
          </motion.p>

          {/* Call-to-Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex gap-4 mt-6 justify-center"
          >
            <Link to="/contact">
              <button
                className="bg-[#88BF42] text-white px-6 py-3 rounded-md shadow hover:bg-[#7aad3a] transition-colors"
              >
                Book a Discovery Call
              </button>
            </Link>
            <button
              onClick={scrollToNextSection}
              className="border border-white text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#0F0326] transition-colors"
            >
              Meet Our Engineers
            </button>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex justify-center animate-bounce"
          >
            <ChevronDown className="text-[#88BF42] w-10 h-10" />
          </motion.div>
        </div>
      </section>
    </div>
  )
} 