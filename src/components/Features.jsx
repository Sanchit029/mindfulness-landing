import React from 'react'
import { motion } from 'framer-motion'
import { Brain, Heart, Shield, Users, Star, Clock } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'Mental Wellness',
      description: 'Build emotional resilience and mental clarity through guided practices designed for developing minds.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Social Emotional',
      description: 'Develop empathy, compassion, and healthy relationship skills with age-appropriate activities.',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: Shield,
      title: 'Stress & Anxiety',
      description: 'Learn practical tools to manage worry, fear, and overwhelming emotions in a safe environment.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Users,
      title: 'Family Programs',
      description: 'Strengthen family bonds with shared mindfulness practices and communication exercises.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: Star,
      title: 'Age-Appropriate',
      description: 'Carefully crafted content that grows with your child through different developmental stages.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Clock,
      title: 'Flexible Timing',
      description: 'Short 5-15 minute sessions that fit easily into busy family schedules and routines.',
      color: 'from-indigo-500 to-blue-500'
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Why Choose <span className="text-gradient">Mindery Kids</span>?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive approach combines proven mindfulness techniques with child development expertise to create lasting positive change.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="card p-8 text-center group cursor-pointer"
            >
              <motion.div
                className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <feature.icon className="w-8 h-8 text-white" />
              </motion.div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              <motion.div
                className="mt-6 inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors"
                whileHover={{ x: 5 }}
              >
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 md:p-12"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6 }}
              >
                98%
              </motion.div>
              <p className="text-gray-700 font-medium">Parent Satisfaction</p>
            </div>
            
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold text-accent-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, delay: 0.1 }}
              >
                15M+
              </motion.div>
              <p className="text-gray-700 font-medium">Sessions Completed</p>
            </div>
            
            <div>
              <motion.div
                className="text-4xl md:text-5xl font-bold text-success-600 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", duration: 0.6, delay: 0.2 }}
              >
                4.9★
              </motion.div>
              <p className="text-gray-700 font-medium">App Store Rating</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
