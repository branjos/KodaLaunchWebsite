import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Tips, updates, and coaching insights from the Koda Launch AI team.',
  alternates: { canonical: 'https://kodalaunch.com/blog' },
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <div className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-bg)', minHeight: '60vh' }}>
      <div className="max-w-3xl mx-auto">
        <div className="font-mono text-[11px] tracking-[0.25em] mb-4" style={{ color: 'var(--color-accent)' }}>BLOG</div>
        <h1 className="font-display text-[48px] md:text-[64px] leading-[1.05] mb-16" style={{ color: 'var(--color-ink)' }}>
          Coaching <em>insights.</em>
        </h1>

        {posts.length === 0 ? (
          <p style={{ color: 'var(--color-ink-soft)' }}>No posts yet — check back soon.</p>
        ) : (
          <div style={{ borderTop: '1px solid var(--color-line)' }}>
            {posts.map(post => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                style={{ textDecoration: 'none', display: 'block' }}
              >
                <article
                  className="py-8 group"
                  style={{ borderBottom: '1px solid var(--color-line)' }}
                >
                  <h2
                    className="font-display text-[28px] md:text-[36px] leading-[1.1] mb-3 group-hover:opacity-70 transition-opacity"
                    style={{ color: 'var(--color-ink)' }}
                  >
                    {post.title}
                  </h2>
                  <p className="text-[15px] leading-relaxed mb-4" style={{ color: 'var(--color-ink-soft)' }}>
                    {post.description}
                  </p>
                  <span
                    className="font-mono text-[11px] tracking-[0.15em]"
                    style={{ color: 'var(--color-accent)' }}
                  >
                    READ →
                  </span>
                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
