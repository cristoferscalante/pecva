import { supabase } from '@/lib/supabase'
import type { Product, ProductImage } from '@/types'

// Helper function to check if Supabase is properly configured
function isSupabaseConfigured(): boolean {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  return !!(url && key && url !== 'https://placeholder.supabase.co' && key !== 'placeholder-anon-key')
}

export class ProductService {
  static async getAllProducts(): Promise<Product[]> {
    // Return empty array if Supabase is not configured
    if (!isSupabaseConfigured()) {
      console.warn('Supabase not configured, returning empty products array')
      return []
    }

    try {
      const { data: products, error } = await supabase
        .from('products')
        .select(`
          *,
          product_images (
            id,
            url,
            alt,
            display_order
          )
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching products:', error)
        return []
      }

      // Transformar los datos para que coincidan con el tipo Product
      const transformedProducts: Product[] = products?.map(product => ({
        ...product,
        images: product.product_images || []
      })) || []

      return transformedProducts
    } catch (error) {
      console.error('Error in getAllProducts:', error)
      return []
    }
  }

  static async getProductById(id: string): Promise<Product | null> {
    // Return null if Supabase is not configured
    if (!isSupabaseConfigured()) {
      console.warn('Supabase not configured, returning null for product')
      return null
    }

    try {
      const { data: product, error } = await supabase
        .from('products')
        .select(`
          *,
          product_images (
            id,
            url,
            alt,
            display_order
          )
        `)
        .eq('id', id)
        .eq('is_active', true)
        .single()

      if (error) {
        if (error.code === 'PGRST116') {
          // No rows returned
          return null
        }
        console.error('Error fetching product:', error)
        return null
      }

      if (!product) return null

      // Transformar los datos para que coincidan con el tipo Product
      const transformedProduct: Product = {
        ...product,
        images: product.product_images || []
      }

      return transformedProduct
    } catch (error) {
      console.error('Error in getProductById:', error)
      return null
    }
  }

  static async getFeaturedProducts(limit: number = 3): Promise<Product[]> {
    // Return empty array if Supabase is not configured
    if (!isSupabaseConfigured()) {
      console.warn('Supabase not configured, returning empty featured products array')
      return []
    }

    try {
      const { data: products, error } = await supabase
        .from('products')
        .select(`
          *,
          product_images (
            id,
            url,
            alt,
            display_order
          )
        `)
        .eq('is_active', true)
        .eq('is_featured', true)
        .order('created_at', { ascending: false })
        .limit(limit)

      if (error) {
        console.error('Error fetching featured products:', error)
        return []
      }

      // Transformar los datos para que coincidan con el tipo Product
      const transformedProducts: Product[] = products?.map(product => ({
        ...product,
        images: product.product_images || []
      })) || []

      return transformedProducts
    } catch (error) {
      console.error('Error in getFeaturedProducts:', error)
      return []
    }
  }

  static async getProductsByCategory(category: string): Promise<Product[]> {
    // Return empty array if Supabase is not configured
    if (!isSupabaseConfigured()) {
      console.warn('Supabase not configured, returning empty products by category array')
      return []
    }

    try {
      const { data: products, error } = await supabase
        .from('products')
        .select(`
          *,
          product_images (
            id,
            url,
            alt,
            display_order
          )
        `)
        .eq('is_active', true)
        .eq('category', category)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching products by category:', error)
        return []
      }

      // Transformar los datos para que coincidan con el tipo Product
      const transformedProducts: Product[] = products?.map(product => ({
        ...product,
        images: product.product_images || []
      })) || []

      return transformedProducts
    } catch (error) {
      console.error('Error in getProductsByCategory:', error)
      return []
    }
  }
}