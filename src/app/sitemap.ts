import { MetadataRoute } from 'next'
import { createClient } from '@/lib/supabase/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://hypernextechnologies.com'
  
  // Static routes
  const routes = [
    '',
    '/services',
    '/services/ui-ux-design',
    '/services/fullstack-development',
    '/services/digital-strategy',
    '/services/ai-automation',
    '/services/product-strategy',
    '/services/security-devops',
    '/services/staff-augmentation',
    '/about',
    '/blog',
    '/careers',
    '/contact',
    '/privacy',
    '/terms',
    '/refund-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  // Dynamic Blog Posts
  const supabase = createClient()
  const { data: posts } = await supabase.from('posts').select('slug, updated_at')
  
  const blogRoutes = (posts || []).map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at || new Date()),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...routes, ...blogRoutes]
}
