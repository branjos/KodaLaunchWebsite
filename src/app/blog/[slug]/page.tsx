import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getAllPosts, getPost } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllPosts().map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const posts = getAllPosts()
  const meta = posts.find(p => p.slug === slug)
  if (!meta) return {}
  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: `https://kodalaunch.com/blog/${slug}` },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: `https://kodalaunch.com/blog/${slug}`,
      ...(meta.image ? { images: [{ url: meta.image }] } : {}),
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const posts = getAllPosts()
  if (!posts.find(p => p.slug === slug)) notFound()

  const post = await getPost(slug)

  return (
    <div className="px-4 md:px-12 py-16 md:py-24" style={{ background: 'var(--color-bg)' }}>
      <div className="max-w-3xl mx-auto">
        <Link
          href="/blog"
          className="font-mono text-[11px] tracking-[0.2em] hover:opacity-70 transition-opacity inline-block mb-12"
          style={{ color: 'var(--color-accent)', textDecoration: 'none' }}
        >
          ← BLOG
        </Link>

        <h1 className="font-display text-[40px] md:text-[60px] leading-[1.05] mb-8" style={{ color: 'var(--color-accent)' }}>
          {post.title}
        </h1>

        {post.image && (
          <div className="mb-12 rounded-2xl overflow-hidden" style={{ border: '1px solid var(--color-line)' }}>
            <img src={post.image} alt={post.title} className="w-full block" />
          </div>
        )}

        <div
          className="prose"
          dangerouslySetInnerHTML={{ __html: post.contentHtml }}
        />
      </div>
    </div>
  )
}
