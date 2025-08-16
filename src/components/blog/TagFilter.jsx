import { useState } from 'react'
import { BLOG_TAGS } from '@/constants/blog.js'

const TagFilter = ({ activeTag, onTagChange }) => {
  const getTagColor = (tag, isActive) => {
    if (isActive) {
      return 'bg-foreground text-background'
    }
    
    const colors = {
      gray: 'bg-gray-100 text-gray-700 hover:bg-gray-200',
      blue: 'bg-blue-100 text-blue-700 hover:bg-blue-200',
      purple: 'bg-purple-100 text-purple-700 hover:bg-purple-200',
      red: 'bg-red-100 text-red-700 hover:bg-red-200',
      green: 'bg-green-100 text-green-700 hover:bg-green-200',
      orange: 'bg-orange-100 text-orange-700 hover:bg-orange-200',
      indigo: 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200',
      teal: 'bg-teal-100 text-teal-700 hover:bg-teal-200',
      emerald: 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
    }
    return colors[tag.color] || colors.gray
  }

  return (
    <div className="flex flex-wrap gap-3">
      {BLOG_TAGS.map((tag) => (
        <button
          key={tag.id}
          onClick={() => onTagChange(tag.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${getTagColor(
            tag,
            activeTag === tag.id
          )}`}
        >
          {tag.name}
        </button>
      ))}
    </div>
  )
}

export default TagFilter