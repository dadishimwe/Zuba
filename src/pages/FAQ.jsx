import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { ChevronDown, ChevronUp } from 'lucide-react'

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('Company')
  const [openFaq, setOpenFaq] = useState(null)

  const categories = ['Company', 'Team', 'Contact']

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqData = {
    Company: [
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
        question: "Does DesignFlow ensure my website will be fully responsive on all devices?",
        answer: "Yes! DesignFlow is designed to be 100% responsive across all screen sizes, including desktops, tablets, and mobile devices. Webflow's flexible grid system ensures your site looks great no matter where it's viewed."
      },
      {
        question: "How do I optimize my website for better SEO?",
        answer: "Webflow provides built-in SEO tools to help improve your website's ranking. With DesignFlow, you can easily edit meta titles, descriptions, alt text, and more. Additionally, the template is structured for clean code and fast loading speeds—both of which contribute to better SEO performance."
      }
    ],
    Team: [
      {
        question: "How large is the DesignFlow team?",
        answer: "Our team consists of 8 dedicated professionals, each specializing in different aspects of design and development. From creative directors to developers, we have all the expertise needed to bring your vision to life."
      },
      {
        question: "Can I work directly with specific team members?",
        answer: "Yes! Depending on your project needs and plan, you may be assigned specific team members. Our Premium plan includes a dedicated project manager who will be your main point of contact throughout the project."
      },
      {
        question: "What is the team's experience level?",
        answer: "Our team members have years of experience in their respective fields. We've worked with startups, established brands, and everything in between, giving us the expertise to handle projects of any scale."
      }
    ],
    Contact: [
      {
        question: "How do I get support if I need help?",
        answer: "If you need assistance, help with customization, want to report a bug, or just want to say hi, feel free to reach out to us at office@eclipso.studio. We typically respond within 24 hours during business days."
      },
      {
        question: "What are your business hours?",
        answer: "We operate Monday through Friday, 9 AM to 6 PM GMT. While we may not respond immediately outside these hours, we'll get back to you as soon as possible during the next business day."
      },
      {
        question: "Do you offer phone support?",
        answer: "Currently, we primarily handle support through email to ensure we can provide detailed, documented responses. However, for Premium plan customers, we can arrange phone calls or video meetings when needed."
      }
    ]
  }

  const currentFaqs = faqData[activeCategory] || []

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column */}
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-black mb-8 leading-tight">
                FAQ
              </h1>
              <p className="text-xl text-gray-600 mb-12">
                Got questions? We've got answers. Explore our FAQs to learn more about our process, pricing, 
                and how we can bring your vision to life.
              </p>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={activeCategory === category ? "default" : "outline"}
                    onClick={() => setActiveCategory(category)}
                    className={`${
                      activeCategory === category 
                        ? "bg-black text-white" 
                        : "bg-white text-black border-gray-300 hover:bg-gray-50"
                    }`}
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Right Column - FAQ Items */}
            <div>
              <h2 className="text-2xl font-bold text-black mb-8">{activeCategory}</h2>
              
              <div className="space-y-4">
                {currentFaqs.map((faq, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg">
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="text-lg font-semibold text-black pr-4">
                        {faq.question}
                      </span>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default FAQ

