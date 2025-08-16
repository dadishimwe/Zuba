import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Ship, Plane, Mountain, ArrowRight, TrendingUp, Users, Shield, Clock } from 'lucide-react'
import { COMPANY_INFO } from '@/constants/company.js'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Pacific Fleet Connectivity",
      industry: "Maritime",
      challenge: "50-vessel fishing fleet needed reliable internet for operations 200+ miles offshore.",
      solution: "Deployed Starlink Maritime systems with Peplink backup connectivity.",
      results: {
        improvement: "300% increase in efficiency",
        uptime: "99.8% connectivity",
        savings: "$2.3M annual savings",
        timeline: "6 weeks deployment"
      },
      icon: Ship
    },
    {
      id: 2,
      title: "Corporate Aviation Network",
      industry: "Aviation",
      challenge: "12-aircraft charter fleet required gate-to-gate internet for international routes.",
      solution: "Installed Starlink Aviation terminals with passenger Wi-Fi networks.",
      results: {
        improvement: "95% passenger satisfaction",
        uptime: "99.9% in-flight connectivity",
        savings: "40% cost reduction",
        timeline: "4 months rollout"
      },
      icon: Plane
    },
    {
      id: 3,
      title: "Remote Mining Operations",
      industry: "Mining",
      challenge: "Copper mining operation 400 miles from infrastructure needed connectivity.",
      solution: "Hybrid network with Starlink Business and Peplink SD-WAN across 15 sites.",
      results: {
        improvement: "500% data throughput increase",
        uptime: "99.7% network availability",
        savings: "$1.8M operational savings",
        timeline: "8 weeks implementation"
      },
      icon: Mountain
    }
  ]

  return (
    <div className="pt-16 bg-white">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Discover how organizations across different industries have transformed their operations 
            with our connectivity solutions. Real challenges, real solutions, real results.
          </p>
        </div>
      </section>

      {/* Stats Overview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {COMPANY_INFO.stats.projectsCompleted}
              </div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {COMPANY_INFO.stats.customersSatisfied}
              </div>
              <div className="text-gray-600">Customers Served</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {COMPANY_INFO.stats.uptimeGuarantee}
              </div>
              <div className="text-gray-600">Average Uptime</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                {COMPANY_INFO.stats.coverageAreas}+
              </div>
              <div className="text-gray-600">Locations Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((caseStudy) => {
              const Icon = caseStudy.icon
              return (
                <div key={caseStudy.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg mr-4 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{caseStudy.title}</h3>
                        <p className="text-blue-600">{caseStudy.industry}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.challenge}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 text-sm">{caseStudy.solution}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <div>
                          <div className="text-green-600 font-semibold text-sm">{caseStudy.results.improvement}</div>
                          <div className="text-gray-500 text-xs">Performance</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-4 w-4 text-blue-500" />
                        <div>
                          <div className="text-blue-600 font-semibold text-sm">{caseStudy.results.uptime}</div>
                          <div className="text-gray-500 text-xs">Reliability</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-purple-500" />
                        <div>
                          <div className="text-purple-600 font-semibold text-sm">{caseStudy.results.savings}</div>
                          <div className="text-gray-500 text-xs">Cost Impact</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <div>
                          <div className="text-orange-600 font-semibold text-sm">{caseStudy.results.timeline}</div>
                          <div className="text-gray-500 text-xs">Timeline</div>
                        </div>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      Read Full Case Study
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Join the growing number of organizations that have transformed their connectivity 
            with our proven solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies