import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: 'What age is this best for?',
      answer: 'Our programs are specifically designed for children ages 4-14, with age-appropriate content for each developmental stage. We have three main categories: Little Explorers (4-6), Brave Choosers (7-10), and Calm & Confident (11-14). Each program uses language, concepts, and activities that match your child\'s cognitive and emotional development level.'
    },
    {
      question: 'How long are the sessions?',
      answer: 'Session lengths are designed to match children\'s attention spans. For ages 4-6, sessions are 5-10 minutes. For ages 7-10, they\'re 10-15 minutes. For ages 11-14, sessions can be 15-20 minutes. We also offer shorter 2-3 minute "mindful moments" for quick check-ins throughout the day.'
    },
    {
      question: 'Is it based on real science?',
      answer: 'Yes! Our content is developed in collaboration with child psychologists, mindfulness experts, and educators. We base our programs on proven research in child development, neuroscience, and mindfulness studies. All techniques are adapted from evidence-based practices like MBSR (Mindfulness-Based Stress Reduction) and SEL (Social-Emotional Learning) frameworks.'
    },
    {
      question: 'Can children use it independently?',
      answer: 'It depends on age and maturity. Children 8+ can often use the app independently once they\'re familiar with the concepts. For younger children (4-7), we recommend parent participation initially. All programs include guidance for parents on how to support their child\'s practice and when to step back to encourage independence.'
    },
    {
      question: 'What if my child has ADHD or anxiety?',
      answer: 'Many parents report that our programs are particularly helpful for children with ADHD, anxiety, or other emotional regulation challenges. However, our app is designed for general wellness and is not a replacement for professional treatment. We recommend consulting with your child\'s healthcare provider about incorporating mindfulness into their overall care plan.'
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Every child is different, but many parents notice improvements in emotional regulation and sleep quality within 2-3 weeks of consistent practice. Significant changes in focus, empathy, and stress management typically develop over 6-8 weeks. The key is consistency - even just 5-10 minutes daily can make a meaningful difference.'
    },
    {
      question: 'Can multiple children use one account?',
      answer: 'Yes! Our Premium plan supports up to 3 child profiles, and our Family plan supports up to 6 profiles. Each child gets personalized content recommendations, progress tracking, and age-appropriate materials. Parents can view progress for all children from one dashboard while maintaining each child\'s individual experience.'
    },
    {
      question: 'Is there offline access?',
      answer: 'Yes, Premium and Family plan subscribers can download content for offline use. This is perfect for travel, areas with poor internet connection, or just to avoid screen-time distractions. You can download up to 20 sessions at a time and sync progress when you\'re back online.'
    }
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Got questions? We've got answers. Here are the most common questions parents ask about our mindfulness programs.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 text-lg pr-8">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Additional Support */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our friendly support team is here to help you and your family get the most out of your mindfulness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Support
              </motion.button>
              <motion.button
                className="btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule a Call
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
