import React from 'react'
import { motion } from 'framer-motion'
import { Check, Star, Crown, Gift } from 'lucide-react'

const Pricing = ({ onStartTrial }) => {
  const plans = [
    {
      name: 'Starter',
      price: 'Free',
      period: 'Forever',
      description: 'Perfect for trying out mindfulness with your child',
      icon: Gift,
      color: 'from-green-500 to-emerald-500',
      popular: false,
      features: [
        '5 guided meditations',
        'Basic breathing exercises',
        'Simple emotion tracking',
        'Community support',
        'Mobile app access'
      ],
      cta: 'Get Started Free',
      ctaStyle: 'btn-secondary'
    },
    {
      name: 'Premium',
      price: '₹399',
      period: '/month',
      description: 'Complete access to all programs and features',
      icon: Crown,
      color: 'from-purple-500 to-violet-500',
      popular: true,
      features: [
        'All age-specific programs',
        'Unlimited guided sessions',
        'Progress tracking & insights',
        'Family meditation plans',
        'Priority customer support',
        'Offline content download',
        'Personalized recommendations',
        'Expert-led workshops'
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'btn-primary'
    },
    {
      name: 'Family',
      price: '₹799',
      period: '/month',
      description: 'Best value for families with multiple children',
      icon: Star,
      color: 'from-blue-500 to-cyan-500',
      popular: false,
      features: [
        'Everything in Premium',
        'Up to 6 child profiles',
        'Family dashboard & reports',
        'Advanced parental controls',
        'One-on-one coaching sessions',
        'Custom meditation creation',
        'School integration tools',
        'Priority feature requests'
      ],
      cta: 'Start Free Trial',
      ctaStyle: 'btn-primary'
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Start with our free plan and upgrade when you're ready. All paid plans include a 14-day free trial with full access.
          </p>
          
          {/* Pricing Toggle */}
          <div className="inline-flex items-center bg-white rounded-full p-1 shadow-md">
            <button className="px-6 py-2 rounded-full bg-primary-600 text-white font-medium">
              Monthly
            </button>
            <button className="px-6 py-2 rounded-full text-gray-600 font-medium">
              Yearly (Save 20%)
            </button>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? 'lg:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                >
                  <div className="bg-gradient-to-r from-accent-500 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div className={`card p-0 overflow-hidden h-full ${plan.popular ? 'ring-2 ring-accent-400 shadow-2xl' : ''}`}>
                {/* Header */}
                <div className={`bg-gradient-to-br ${plan.color} p-6 text-white text-center`}>
                  <plan.icon className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/90 text-sm mb-4">{plan.description}</p>
                  
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && (
                      <span className="text-white/80 ml-1">{plan.period}</span>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 flex-1">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
                      >
                        <Check className="w-5 h-5 text-success-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>

                  <motion.button
                    onClick={onStartTrial}
                    className={`w-full ${plan.ctaStyle}`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {plan.cta}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Money Back Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-success-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              30-Day Money-Back Guarantee
            </h3>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Try any paid plan risk-free for 30 days. If you're not completely satisfied with your child's progress, we'll refund your money, no questions asked.
            </p>
          </div>
        </motion.div>

        {/* FAQ Quick Answers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="text-center">
            <div className="text-primary-600 font-semibold mb-2">Can I switch plans?</div>
            <p className="text-gray-600 text-sm">Yes, you can upgrade or downgrade anytime from your account settings.</p>
          </div>
          
          <div className="text-center">
            <div className="text-primary-600 font-semibold mb-2">What if my child doesn't like it?</div>
            <p className="text-gray-600 text-sm">Our 30-day guarantee ensures you can get a full refund if it's not a good fit.</p>
          </div>
          
          <div className="text-center">
            <div className="text-primary-600 font-semibold mb-2">Is it safe for kids?</div>
            <p className="text-gray-600 text-sm">Absolutely. All content is developed by child development experts and safety-tested.</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing
