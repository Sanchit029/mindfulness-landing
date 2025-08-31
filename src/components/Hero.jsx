import React from 'react'
import { motion } from 'framer-motion'
import { Play, Shield, Users, Award } from 'lucide-react'

const Hero = ({ onStartTrial }) => {
  const stats = [
    { icon: Users, label: 'Happy Families', value: '10,000+' },
    { icon: Award, label: 'Success Rate', value: '95%' },
    { icon: Shield, label: 'Safe & Secure', value: '100%' }
  ]

  return (
    <section className="pt-20 md:pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6"
            >
              <Award className="w-4 h-4 mr-2" />
              Trusted by 10,000+ Parents Globally
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6"
            >
              Mindfulness &{' '}
              <span className="text-gradient">Meditation</span>{' '}
              for Kids (4-14)
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Help your child develop emotional intelligence, focus, and inner peace with our scientifically-backed mindfulness programs designed specifically for young minds.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={onStartTrial}
                className="btn-primary text-lg px-8 py-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
              </motion.button>
              
              <motion.button
                className="btn-secondary text-lg px-8 py-4 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-primary-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary-400 to-accent-500 rounded-3xl p-8 shadow-2xl">
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-16 h-16 bg-success-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Shield className="w-8 h-8 text-white" />
              </motion.div>
              
              <motion.div
                className="absolute -top-2 -right-6 w-12 h-12 bg-accent-400 rounded-full flex items-center justify-center shadow-lg"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <Award className="w-6 h-6 text-white" />
              </motion.div>

              {/* Main illustration area */}
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center">
                <motion.div
                  className="w-32 h-32 mx-auto bg-white/30 rounded-full flex items-center justify-center mb-6"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                    <span className="text-4xl">🧘‍♀️</span>
                  </div>
                </motion.div>
                
                <h3 className="text-white text-xl font-bold mb-2">
                  Daily Practice
                </h3>
                <p className="text-white/80 text-sm">
                  Just 10 minutes a day to build lasting mindfulness habits
                </p>
              </div>

              {/* Age indicators */}
              <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm font-medium">
                  Ages 4-7
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm font-medium">
                  Ages 8-11
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-2 text-white text-sm font-medium">
                  Ages 12-14
                </div>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -z-10 top-10 left-10 w-20 h-20 bg-primary-200 rounded-full opacity-50"></div>
            <div className="absolute -z-10 bottom-10 right-10 w-16 h-16 bg-accent-200 rounded-full opacity-50"></div>
            <div className="absolute -z-10 top-32 right-4 w-8 h-8 bg-success-300 rounded-full opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
