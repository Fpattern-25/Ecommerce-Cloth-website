import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HeartIcon, ShareIcon, TruckIcon, ShieldCheckIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { SEO } from '@/components/SEO';
import { ProductGrid } from '@/components/ProductGrid';
import { useCart } from '@/contexts/CartContext';
import { products } from '@/data/products';
import { toast } from '@/hooks/use-toast';

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === id);
  const relatedProducts = products.filter(p => p.id !== id && p.category === product?.category).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast({
        title: "Please select a size",
        description: "You need to choose a size before adding to cart.",
        variant: "destructive"
      });
      return;
    }
    if (!selectedColor) {
      toast({
        title: "Please select a color",
        description: "You need to choose a color before adding to cart.",
        variant: "destructive"
      });
      return;
    }

    addItem(product, selectedSize, selectedColor, quantity);
  };

  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <>
      <SEO
        title={product.name}
        description={product.description}
        keywords={`${product.name}, ${product.category}, luxury fashion, designer clothing`}
        image={product.image}
      />

      <div className="min-h-screen bg-background">
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <Link to="/products" className="flex items-center text-muted-foreground hover:text-brand-primary transition-colors">
            <ArrowLeftIcon className="h-4 w-4 mr-2" />
            Back to Products
          </Link>
        </div>

        {/* Product Details */}
        <section className="pb-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {discount > 0 && (
                    <Badge variant="destructive" className="absolute top-4 left-4">
                      -{discount}%
                    </Badge>
                  )}
                </div>
                
                {/* Thumbnail images would go here if product.images existed */}
              </motion.div>

              {/* Product Info */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <p className="text-sm text-muted-foreground uppercase tracking-wide">
                    {product.category}
                  </p>
                  <h1 className="text-3xl font-bold text-brand-primary mt-2">
                    {product.name}
                  </h1>
                  
                  {product.rating && (
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-5 w-5 ${
                              i < Math.floor(product.rating!) 
                                ? "text-yellow-400 fill-current" 
                                : "text-gray-300"
                            }`}
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-brand-primary">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xl text-muted-foreground line-through">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  {!product.inStock && (
                    <Badge variant="secondary" className="bg-gray-500 text-white">
                      Out of Stock
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>

                {/* Size Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Size</label>
                  <Select value={selectedSize} onValueChange={setSelectedSize}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.sizes.map((size) => (
                        <SelectItem key={size} value={size}>
                          {size}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Color Selection */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Color</label>
                  <Select value={selectedColor} onValueChange={setSelectedColor}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select color" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.colors.map((color) => (
                        <SelectItem key={color} value={color}>
                          {color}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Quantity */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">Quantity</label>
                  <Select value={quantity.toString()} onValueChange={(value) => setQuantity(parseInt(value))}>
                    <SelectTrigger className="w-20">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {[1, 2, 3, 4, 5].map((num) => (
                        <SelectItem key={num} value={num.toString()}>
                          {num}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Actions */}
                <div className="space-y-4">
                  <Button
                    onClick={handleAddToCart}
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={!product.inStock}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  
                  <div className="flex gap-3">
                    <Button variant="outline" size="lg" className="flex-1">
                      <HeartIcon className="h-5 w-5 mr-2" />
                      Add to Wishlist
                    </Button>
                    <Button variant="outline" size="lg" className="flex-1">
                      <ShareIcon className="h-5 w-5 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Features */}
                <div className="border-t border-border pt-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <TruckIcon className="h-5 w-5 text-brand-primary" />
                    <span className="text-sm">Free shipping on orders over $150</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ShieldCheckIcon className="h-5 w-5 text-brand-primary" />
                    <span className="text-sm">30-day return policy</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 bg-gradient-card">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-brand-primary mb-8 text-center">
                You Might Also Like
              </h2>
              <ProductGrid products={relatedProducts} />
            </div>
          </section>
        )}
      </div>
    </>
  );
}