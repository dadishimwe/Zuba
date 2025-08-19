import { useState } from 'react'
import { BLOG_TAGS } from '@/constants/blog.js'

const TagFilter = ({ activeTag, onTagChange }) => {
  const getTagColor = (tag, isActive) => {
    if (isActive) {
      return 'bg-foreground text-background'
    }
    
    return tag.color || 'bg-gray-100 text-gray-700 hover:bg-gray-200'
  }

  return (
    <div className="flex flex-wrap gap-3">
      {BLOG_TAGS.map((tag) => (
        <button
          key={tag.slug}
          onClick={() => onTagChange(tag.slug)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${getTagColor(
            tag,
            activeTag === tag.slug
          )}`}
        >
          {tag.name}
        </button>
      ))}
    </div>
  )
}

export default TagFilter