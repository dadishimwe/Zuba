import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import SEOHead from '@/components/SEOHead.jsx'
import FadeIn from '@/components/FadeIn.jsx'
import BlogCard from '@/components/blog/BlogCard.jsx'
import TagFilter from '@/components/blog/TagFilter.jsx'
import ParallaxBackground from '@/components/ParallaxBackground.jsx'
import { Search, ArrowRight, BookOpen, Users, Calendar } from 'lucide-react'
import { BLOG_POSTS } from '@/constants/blog.js'
import ctaLongImage from '@/assets/images/cta-long.png'

const Blog = () => {
  const [activeTag, setActiveTag] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = useMemo(() => {
    let posts = BLOG_POSTS

    // Filter by tag
    if (activeTag !== 'all') {
      posts = posts.filter(post => post.tags.includes(activeTag))
    }

    // Filter by search query
    if (searchQuery) {
      posts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    return posts
  }, [activeTag, searchQuery])

  const featuredPosts = filteredPosts.filter(post => post.isFeatured)
  const regularPosts = filteredPosts.filter(post => !post.isFeatured)

  return (
    <div className="bg-background">
      <SEOHead 
        title="Blog"
        description="Insights, case studies, and technical articles about satellite internet, connectivity solutions, and industry best practices."
        keywords="satellite internet blog, connectivity insights, case studies, technical articles, industry news"
        canonical="/blog"
      />
      
      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-muted text-foreground rounded-full px-4 py-2 mb-6 text-sm font-medium">
              <BookOpen className="h-4 w-4" />
              Blog & Insights
            </div>
            <h1 className="mb-6">
              Stories from the <span className="zuba-accent">field</span>
            </h1>
            <p className="text-large max-w-2xl mx-auto">
              Real-world insights, technical deep-dives, and <span className="zuba-accent">success stories</span> from our <span className="zuba-blue">satellite connectivity</span> projects around the globe.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto container-padding">
          <FadeIn delay={200}>
            <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between mb-8">
              {/* Search */}
              <div className="relative w-full lg:w-96">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-background border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent text-sm"
                />
              </div>

              {/* Stats */}
              <div className="flex items-center gap-6 text-small text-muted-foreground">
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{BLOG_POSTS.length} articles</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>8 authors</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Updated weekly</span>
                </div>
              </div>
            </div>

            {/* Tag Filter */}
            <TagFilter activeTag={activeTag} onTagChange={setActiveTag} />
          </FadeIn>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto container-padding">
            <FadeIn>
              <h2 className="text-2xl font-semibold mb-8">Featured Articles</h2>
            </FadeIn>
            <div className="space-y-8">
              {featuredPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  featured={true}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      {regularPosts.length > 0 && (
        <section className="section-padding">
          <div className="max-w-6xl mx-auto container-padding">
            <FadeIn>
              <h2 className="text-2xl font-semibold mb-8">
                {featuredPosts.length > 0 ? 'More Articles' : 'Latest Articles'}
              </h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {regularPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  featured={false}
                  delay={index * 50}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* No Results */}
      {filteredPosts.length === 0 && (
        <section className="section-padding">
          <div className="max-w-4xl mx-auto container-padding text-center">
            <FadeIn>
              <div className="bg-muted rounded-2xl p-12">
                <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-medium mb-2">No articles found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your search or filter criteria.
                </p>
                <button
                  onClick={() => {
                    setActiveTag('all')
                    setSearchQuery('')
                  }}
                  className="btn-secondary"
                >
                  Clear filters
                </button>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Newsletter CTA */}
      <ParallaxBackground imageSrc={ctaLongImage} overlayIntensity="strong">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <FadeIn>
            <h2 className="mb-4 text-white drop-shadow-lg">Stay updated with our insights</h2>
            <p className="text-large mb-8 text-white/90 drop-shadow-md">
              Get the latest articles, case studies, and industry insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder-white/70"
              />
              <button 
                className="btn-primary text-white"
                style={{
                  backgroundColor: '#ff4d00',
                  borderColor: '#ff4d00'
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = 'rgba(255, 77, 0, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = '#ff4d00';
                }}
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </FadeIn>
        </div>
      </ParallaxBackground>
    </div>
  )
}

export default Blog