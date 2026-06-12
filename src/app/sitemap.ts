export const dynamic = 'force-static'

import { getAllPosts } from '@/lib/blog'

const BASE = 'https://kodalaunch.com'

export default function sitemap() {
  const posts = getAllPosts()

  const staticPages = [
    { url: `${BASE}/`, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${BASE}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE}/pricing`, changeFrequency: 'weekly' as const, priority: 0.8 },
    { url: `${BASE}/about`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/faq`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${BASE}/contact`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${BASE}/terms`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${BASE}/privacy`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  const blogPages = posts.map(post => ({
    url: `${BASE}/blog/${post.slug}`,
    lastModified: post.date,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
