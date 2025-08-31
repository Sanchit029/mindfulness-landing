import React from 'react'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Mother of 7-year-old Emma',
      content: 'Emma used to have daily meltdowns after school. Since starting with Serenity Care, she has learned to identify her emotions and calm herself down. The transformation has been incredible!',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Michael Chen',
      role: 'Father of 12-year-old Alex',
      content: 'As a parent dealing with my own stress, I was skeptical about mindfulness for kids. But Alex now helps the whole family with breathing exercises when things get overwhelming. It\'s brought us closer together.',
      rating: 5,
      image: '👨‍💻'
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Elementary School Teacher',
      content: 'I recommend Serenity Care to all my students\' parents. The kids who use it show better focus in class and handle conflicts more maturely. It\'s like having a emotional intelligence coach.',
      rating: 5,
      image: '👩‍🏫'
    },
    {
      name: 'David Thompson',
      role: 'Single father of twins (age 9)',
      content: 'Managing two energetic kids on my own was exhausting. The family meditation sessions have become our favorite bonding time, and bedtime battles are now peaceful wind-down sessions.',
      rating: 5,
      image: '👨‍👧‍👦'
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Child Psychologist',
      content: 'I\'ve seen remarkable improvements in my young patients who use this app. The age-appropriate content and progressive structure make it an excellent tool for building emotional resilience.',
      rating: 5,
      image: '👩‍⚕️'
    },
    {
      name: 'Jennifer Kim',
      role: 'Mother of 5-year-old Maya',
      content: 'Maya was having trouble sleeping and dealing with separation anxiety. The bedtime stories and calming exercises have made such a difference. She now asks for her "calm time" every night!',
      rating: 5,
      image: '👩‍🎨'
    }
  ]

  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            What <span className="text-gradient">Families Say</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real stories from parents, teachers, and children whose lives have been positively transformed through mindfulness.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="card p-6 relative"
            >
              {/* Quote icon */}
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary-200" />
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full flex items-center justify-center text-2xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 rounded-2xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Professionals
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Leading child development experts and educators recommend our evidence-based approach to mindfulness education.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                <span className="text-3xl">🏥</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Clinical Validation</h4>
              <p className="text-gray-600 text-sm">
                Developed with child psychologists and tested in clinical settings
              </p>
            </motion.div>

            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-success-200 transition-colors">
                <span className="text-3xl">🏫</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">School Partnerships</h4>
              <p className="text-gray-600 text-sm">
                Used in 500+ schools worldwide as part of SEL curriculum
              </p>
            </motion.div>

            <motion.div
              className="group"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent-200 transition-colors">
                <span className="text-3xl">🏆</span>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Award Winning</h4>
              <p className="text-gray-600 text-sm">
                Winner of Parents' Choice Gold Award and Academics' Choice Award
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
