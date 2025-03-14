
import { notFound } from "next/navigation";

import { getProductById } from "@/_data/product/get-product-by-id";
import { getRestaurantBySlug } from "@/_data/restaurant/get-restaurant-by-slug";

import ProductDetails from "./components/product-details";
import ProductHeader from "./components/product-header";

interface ProductPageProps {
  params: Promise<{ slug: string, productId: string }>
}

const ProductPage = async ({params}:ProductPageProps) => {
  const { slug, productId } = await params;
  console.log(slug, productId);
  
  const product = await getProductById({productId});
  const restaurant = await getRestaurantBySlug({slug});
  if(!product || !restaurant) {
    return notFound()
  }

  if(restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound()
  }
 

  return (  
    <div className="flex flex-col h-full">
      <ProductHeader product={product} />
      <ProductDetails product={product} restaurant={restaurant}/>
    </div>

  );
}
 
export default ProductPage;