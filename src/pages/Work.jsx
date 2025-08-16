import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Packaging Design', 'Visual Identity', 'Branding', 'Webflow Development', 'Web Design']

  const projects = [
    {
      id: 1,
      title: "Forma",
      description: "A sleek and modern branding project.",
      category: "Packaging Design",
      tags: ["Packaging Design", "Webflow Development"],
      image: "/api/placeholder/500/400",
      color: "bg-purple-100"
    },
    {
      id: 2,
      title: "Lume",
      description: "A minimalist website redesign for a creative studio.",
      category: "Visual Identity",
      tags: ["Branding", "Visual Identity"],
      image: "/api/placeholder/500/400",
      color: "bg-blue-100"
    },
    {
      id: 3,
      title: "Nexus",
      description: "Complete brand identity for a tech startup.",
      category: "Branding",
      tags: ["Branding", "Web Design"],
      image: "/api/placeholder/500/400",
      color: "bg-green-100"
    },
    {
      id: 4,
      title: "Pulse",
      description: "E-commerce platform with custom animations.",
      category: "Webflow Development",
      tags: ["Webflow Development", "Web Design"],
      image: "/api/placeholder/500/400",
      color: "bg-yellow-100"
    },
    {
      id: 5,
      title: "Zenith",
      description: "Modern portfolio website for a design agency.",
      category: "Web Design",
      tags: ["Web Design", "Visual Identity"],
      image: "/api/placeholder/500/400",
      color: "bg-red-100"
    },
    {
      id: 6,
      title: "Orbit",
      description: "Comprehensive branding and packaging design.",
      category: "Packaging Design",
      tags: ["Packaging Design", "Branding"],
      image: "/api/placeholder/500/400",
      color: "bg-indigo-100"
    }
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter))

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-black mb-12 leading-tight">
            Latest Projects
          </h1>

          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={`${
                  activeFilter === filter 
                    ? "bg-black text-white" 
                    : "bg-white text-black border-gray-300 hover:bg-gray-50"
                }`}
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="group cursor-pointer">
                <div className={`${project.color} rounded-lg overflow-hidden mb-4 aspect-[4/3] relative`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-black group-hover:text-gray-700 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <Button variant="outline" className="border-gray-300 text-black hover:bg-gray-50">
              Load More Projects
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Work

