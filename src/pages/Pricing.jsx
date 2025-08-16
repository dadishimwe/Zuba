import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Check, ChevronDown, ChevronUp } from 'lucide-react'

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 99,
      annualPrice: 89,
      description: "For startups or small projects",
      features: [
        "Custom design for your brand",
        "Responsive design",
        "Up to 3 pages",
        "1 round of revisions",
        "Standard turnaround time"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false
    },
    {
      name: "Standard",
      monthlyPrice: 199,
      annualPrice: 179,
      description: "For growing businesses",
      features: [
        "Everything in Basic",
        "Up to 6 pages",
        "Wireframes & prototyping",
        "Faster turnaround time",
        "Basic brand strategy insights"
      ],
      buttonText: "Get Started",
      buttonVariant: "default",
      popular: true
    },
    {
      name: "Premium",
      monthlyPrice: 399,
      annualPrice: 359,
      description: "For established brands",
      features: [
        "Everything in Standard",
        "Unlimited pages",
        "Custom animations & interactions",
        "Dedicated project manager",
        "High-priority support"
      ],
      buttonText: "Get Started",
      buttonVariant: "outline",
      popular: false
    }
  ]

  const faqs = [
    {
      question: "Is coding knowledge required to customize DesignFlow?",
      answer: "No, coding knowledge is not required! DesignFlow is built in Webflow, which means you can easily customize it using the visual editor. You can edit text, images, colors, and layouts with a simple drag-and-drop interface. However, if you want to add custom functionality, Webflow allows you to insert custom code if needed."
    },
    {
      question: "Does DesignFlow support e-commerce functionality?",
      answer: "Yes! DesignFlow is fully compatible with Webflow's e-commerce features. You can add products, set up payment gateways, manage inventory, and customize your store's design—all without touching a single line of code."
    },
    {
      question: "Can I import my own fonts and branding?",
      answer: "Absolutely! DesignFlow allows you to upload your own fonts, adjust colors, and integrate your branding effortlessly. Webflow's Style Panel makes it easy to apply your unique brand identity throughout the entire site."
    },
    {
      question: "How do I get support if I need help?",
      answer: "If you need assistance, help with customization, want to report a bug, or just want to say hi, feel free to reach out to us at office@eclipso.studio"
    },
    {
      question: "Does DesignFlow ensure my website will be fully responsive on all devices?",
      answer: "Yes! DesignFlow is designed to be 100% responsive across all screen sizes, including desktops, tablets, and mobile devices. Webflow's flexible grid system ensures your site looks great no matter where it's viewed."
    },
    {
      question: "How do I optimize my website for better SEO?",
      answer: "Webflow provides built-in SEO tools to help improve your website's ranking. With DesignFlow, you can easily edit meta titles, descriptions, alt text, and more. Additionally, the template is structured for clean code and fast loading speeds—both of which contribute to better SEO performance."
    }
  ]

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 leading-tight">
            Our Pricing Plans
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Choose from our flexible plans tailored for businesses of all sizes. Find the right fit and get started today!
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-lg ${!isAnnual ? 'text-black font-semibold' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-black' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg ${isAnnual ? 'text-black font-semibold' : 'text-gray-500'}`}>
              Annual
            </span>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-lg p-8 ${
                  plan.popular 
                    ? 'bg-black text-white' 
                    : 'bg-white border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-left">
                  <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-black'}`}>
                    {plan.name}
                  </h3>
                  <div className="mb-4">
                    <span className={`text-4xl font-bold ${plan.popular ? 'text-green-400' : 'text-black'}`}>
                      ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                    </span>
                    <span className={`text-lg ${plan.popular ? 'text-gray-300' : 'text-gray-500'}`}>
                      $
                    </span>
                  </div>
                  <p className={`mb-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                    {plan.description}
                  </p>

                  <div className="mb-8">
                    <p className={`font-semibold mb-4 ${plan.popular ? 'text-white' : 'text-black'}`}>
                      What's included:
                    </p>
                    <ul className="space-y-3">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-3">
                          <Check className={`h-5 w-5 mt-0.5 ${plan.popular ? 'text-green-400' : 'text-green-500'}`} />
                          <span className={`${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-green-500 hover:bg-green-600 text-white'
                        : plan.buttonVariant === 'outline'
                        ? 'border-gray-300 text-black hover:bg-gray-50'
                        : 'bg-black hover:bg-gray-800 text-white'
                    }`}
                    variant={plan.popular ? 'default' : plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">FAQs</h2>
          <p className="text-xl text-gray-600 mb-12">
            Got questions? We've got answers. Explore our FAQs to learn more about our process, pricing, 
            and how we can bring your vision to life.
          </p>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg">
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-lg font-semibold text-black">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

