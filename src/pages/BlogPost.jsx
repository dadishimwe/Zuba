import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { format } from 'date-fns';
import SEOHead from '@/components/SEOHead.jsx';
import FadeIn from '@/components/FadeIn.jsx';
import { BLOG_POSTS, BLOG_TAGS, BLOG_CONTENT } from '@/constants/blog.js';
import { ArrowLeft, Calendar, Clock, User, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { useState } from 'react';

const BlogPost = () => {
  const { id } = useParams();
  const [shareMenuOpen, setShareMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const post = BLOG_POSTS.find(post => post.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const formattedDate = format(new Date(post.date), 'MMMM dd, yyyy');
  const currentUrl = window.location.href;

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link');
    }
  };

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(post.title)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`
  };

  // Get related posts (same tags, excluding current post)
  const relatedPosts = BLOG_POSTS
    .filter(p => p.id !== post.id && p.tags.some(tag => post.tags.includes(tag)))
    .slice(0, 3);

  return (
    <div className="bg-background">
      <SEOHead
        title={post.title}
        description={post.excerpt}
        keywords={`${post.tags.join(', ')}, Zuba Broadband, satellite internet, connectivity`}
        canonical={`/blog/${post.id}`}
        type="article"
      />

      {/* Hero Section */}
      <section className="section-padding pt-32">
        <div className="max-w-4xl mx-auto container-padding">
          <FadeIn>
            <Link
              to="/blog"
              className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </FadeIn>

          <FadeIn delay={200}>
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map(tag => {
                const tagInfo = BLOG_TAGS.find(t => t.slug === tag);
                return (
                  <span key={tag} className={`px-3 py-1 rounded-full text-sm font-medium ${tagInfo?.color || 'bg-gray-100 text-gray-700'}`}>
                    {tag.charAt(0).toUpperCase() + tag.slice(1)}
                  </span>
                );
              })}
            </div>
          </FadeIn>

          <FadeIn delay={400}>
            <h1 className="mb-8">{post.title}</h1>
          </FadeIn>

          <FadeIn delay={600}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
              <div className="flex items-center space-x-6 text-muted-foreground">
                <div className="flex items-center">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <div className="font-medium text-foreground">{post.author.name}</div>
                    <div className="text-sm">{post.author.title}</div>
                  </div>
                </div>
                <div className="flex items-center text-sm">
                  <Calendar className="h-4 w-4 mr-1" />
                  {formattedDate}
                </div>
                <div className="flex items-center text-sm">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readingTime}
                </div>
              </div>

              <div className="relative">
                <button
                  onClick={() => setShareMenuOpen(!shareMenuOpen)}
                  className="btn-secondary flex items-center"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>

                {shareMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-card border border-border rounded-lg shadow-lg z-10">
                    <div className="p-2">
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md"
                      >
                        <Facebook className="h-4 w-4 mr-2" />
                        Facebook
                      </a>
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md"
                      >
                        <Twitter className="h-4 w-4 mr-2" />
                        Twitter
                      </a>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center w-full px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                      <button
                        onClick={handleCopyLink}
                        className="flex items-center w-full px-3 py-2 text-sm text-foreground hover:bg-muted rounded-md"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        {copied ? 'Copied!' : 'Copy Link'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={800}>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-96 object-cover rounded-lg mb-12"
            />
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-20">
        <div className="max-w-4xl mx-auto container-padding">
          <FadeIn delay={1000}>
            <div className="prose prose-lg max-w-none">
              <div className="text-large mb-8 text-muted-foreground font-medium leading-relaxed">
                {post.excerpt}
              </div>

              {/* Dynamic content rendering */}
              {BLOG_CONTENT[post.id] ? (
                <div className="space-y-8">
                  {BLOG_CONTENT[post.id].sections.map((section, index) => (
                    <div key={index}>
                      <h2>{section.title}</h2>
                      <div 
                        className="whitespace-pre-line"
                        dangerouslySetInnerHTML={{ 
                          __html: section.content
                            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                            .replace(/• (.*?)(?=\n|$)/g, '<li>$1</li>')
                            .replace(/(<li>.*<\/li>)/gs, '<ul class="list-disc list-inside space-y-2 my-4">$1</ul>')
                        }}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-8">
                  <div>
                    <h2>Article Content</h2>
                    <p>
                      This blog post provides detailed insights into {post.title.toLowerCase()}. 
                      Our experts have compiled comprehensive information covering technical specifications, 
                      real-world implementations, case studies, and best practices.
                    </p>
                    <p>
                      For businesses and organizations looking to implement similar solutions, 
                      this article serves as a practical guide with actionable recommendations 
                      and proven strategies from our field experience.
                    </p>
                  </div>
                  
                  <div>
                    <h2>Key Takeaways</h2>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Understanding the technical requirements and constraints</li>
                      <li>Implementation best practices and common pitfalls to avoid</li>
                      <li>ROI analysis and business case development</li>
                      <li>Future considerations and scalability planning</li>
                    </ul>
                  </div>

                  <div>
                    <h2>Expert Consultation</h2>
                    <p>
                      Zuba Broadband's team of specialists can provide detailed consultation 
                      on implementing solutions discussed in this article. Our experience 
                      across diverse industries and challenging environments ensures optimal 
                      outcomes for your specific requirements.
                    </p>
                    <p>
                      Contact our experts today to discuss how these technologies can 
                      transform your connectivity infrastructure and operational capabilities.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Author Bio */}
      <section className="py-16 bg-muted">
        <div className="max-w-4xl mx-auto container-padding">
          <FadeIn>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 p-8 bg-card rounded-lg">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{post.author.name}</h3>
                <p className="text-primary font-medium mb-3">{post.author.title}</p>
                <p className="text-muted-foreground leading-relaxed">{post.author.bio}</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="section-padding">
          <div className="max-w-7xl mx-auto container-padding">
            <FadeIn>
              <h2 className="text-3xl font-semibold text-foreground mb-12 text-center">Related Articles</h2>
            </FadeIn>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <FadeIn key={relatedPost.id} delay={200 * (index + 1)}>
                  <Link
                    to={`/blog/${relatedPost.id}`}
                    className="block rounded-lg overflow-hidden border border-border bg-card transition-all duration-200 ease-in-out card-hover"
                  >
                    <img
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {relatedPost.tags.slice(0, 2).map(tag => {
                          const tagInfo = BLOG_TAGS.find(t => t.slug === tag);
                          return (
                            <span key={tag} className={`px-3 py-1 rounded-full text-xs font-medium ${tagInfo?.color || 'bg-gray-100 text-gray-700'}`}>
                              {tag.charAt(0).toUpperCase() + tag.slice(1)}
                            </span>
                          );
                        })}
                      </div>
                      <h3 className="text-lg font-semibold text-foreground mb-3 leading-snug">{relatedPost.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 text-xs text-muted-foreground">
                        <span>{relatedPost.author.name}</span>
                        <span>{format(new Date(relatedPost.date), 'MMM dd, yyyy')}</span>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default BlogPost;