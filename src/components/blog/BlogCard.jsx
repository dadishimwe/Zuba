import { Link } from 'react-router-dom'
import { Calendar, Clock, User } from 'lucide-react'
import FadeIn from '@/components/FadeIn.jsx'

const BlogCard = ({ post, featured = false, delay = 0 }) => {
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const getTagColor = (tag) => {
    const colors = {
      technology: 'bg-blue-100 text-blue-700',
      enterprise: 'bg-green-100 text-green-700',
      technical: 'bg-yellow-100 text-yellow-700',
      'case-studies': 'bg-red-100 text-red-700',
      remote: 'bg-orange-100 text-orange-700',
      industry: 'bg-teal-100 text-teal-700',
      iot: 'bg-purple-100 text-purple-700'
    }
    return colors[tag] || 'bg-gray-100 text-gray-700'
  }

  if (featured) {
    return (
      <FadeIn delay={delay}>
        <article className="card-hover rounded-2xl overflow-hidden bg-card border border-gray-200/50">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="aspect-[4/3] bg-muted">
              {post.image ? (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Featured Image</span>
                </div>
              )}
            </div>
            <div className="p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 2).map((tag) => (
                  <span
                    key={tag}
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h2 className="text-xl font-semibold mb-3 leading-snug">
                <Link to={`/blog/${post.id}`} className="hover:opacity-80 transition-opacity">
                  {post.title}
                </Link>
              </h2>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center gap-4 text-small text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-3 w-3" />
                  <span>{post.author?.name || post.author}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  <span>{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readingTime || post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </FadeIn>
    )
  }

  return (
    <FadeIn delay={delay}>
      <article className="card-hover rounded-xl overflow-hidden bg-card border border-gray-200/50">
        <div className="aspect-[16/10] bg-muted">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <span className="text-muted-foreground text-sm">Article Image</span>
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.slice(0, 2).map((tag) => (
              <span
                key={tag}
                className={`px-2 py-1 rounded-full text-xs font-medium ${getTagColor(tag)}`}
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h3 className="font-medium mb-2 leading-snug">
            <Link to={`/blog/${post.id}`} className="hover:opacity-80 transition-opacity">
              {post.title}
            </Link>
          </h3>
          
          <p className="text-muted-foreground text-small mb-4 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>{post.author?.name || post.author}</span>
            <span>{formatDate(post.date)}</span>
          </div>
        </div>
      </article>
    </FadeIn>
  )
}

export default BlogCard