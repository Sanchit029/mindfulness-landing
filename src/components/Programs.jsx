import React from 'react'
import { motion } from 'framer-motion'
import { Users, Clock, Target, PlayCircle } from 'lucide-react'

const Programs = () => {
  const programs = [
    {
      title: 'Little Explorers (4-6)',
      description: 'Gentle introduction to mindfulness through play, stories, and simple breathing exercises designed for curious little minds.',
      image: '🌟',
      duration: '5-10 min',
      sessions: '20+ Activities',
      level: 'Beginner',
      color: 'from-yellow-400 to-orange-500',
      features: [
        'Interactive storytelling',
        'Fun breathing games',
        'Emotion recognition',
        'Simple body awareness'
      ]
    },
    {
      title: 'Brave Choosers (7-10)',
      description: 'Build emotional resilience and focus with structured practices that help children navigate challenges and build confidence.',
      image: '🚀',
      duration: '10-15 min',
      sessions: '30+ Activities',
      level: 'Intermediate',
      color: 'from-blue-400 to-cyan-500',
      features: [
        'Guided meditations',
        'Problem-solving skills',
        'Stress management',
        'Focus & attention training'
      ]
    },
    {
      title: 'Calm & Confident (11-14)',
      description: 'Advanced mindfulness techniques for teens dealing with academic pressure, social challenges, and emotional changes.',
      image: '🎯',
      duration: '15-20 min',
      sessions: '40+ Activities',
      level: 'Advanced',
      color: 'from-purple-400 to-pink-500',
      features: [
        'Teen-specific content',
        'Anxiety management',
        'Self-compassion practices',
        'Goal-setting & motivation'
      ]
    }
  ]

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Programs for <span className="text-gradient">Every Age</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our age-specific programs grow with your child, providing developmentally appropriate content that meets them where they are.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="card p-0 overflow-hidden h-full">
                {/* Header with gradient */}
                <div className={`bg-gradient-to-br ${program.color} p-6 text-white relative overflow-hidden`}>
                  <motion.div
                    className="absolute top-4 right-4 text-6xl opacity-20"
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {program.image}
                  </motion.div>
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">{program.image}</div>
                    <h3 className="text-2xl font-bold mb-2">{program.title}</h3>
                    <p className="text-white/90 text-sm leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <Clock className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">{program.duration}</div>
                    </div>
                    <div className="text-center">
                      <Target className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">{program.sessions}</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-5 h-5 text-gray-500 mx-auto mb-1" />
                      <div className="text-sm font-medium text-gray-900">{program.level}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {program.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + featureIndex * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full bg-white border-2 border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-600 font-semibold py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center group-hover:bg-primary-50"
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <PlayCircle className="w-5 h-5 mr-2" />
                    Try Sample Activity
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Not sure which program is right for your child?
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              Take our quick assessment to get personalized recommendations based on your child's age, interests, and needs.
            </p>
            <motion.button
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find the Perfect Program
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Programs
