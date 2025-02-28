import { Product, Restaurant } from "@prisma/client";
import Image from "next/image";

interface ProductDetailsProps {
  restaurant: Pick<Restaurant, "name" | "avatarImageUrl">
 product: Product; 
}

const ProductDetails = ({restaurant, product}: ProductDetailsProps) => {
  return ( 
  <div className="relative z-50 rounded-t-3xl p-5 mt-[-1.5rem]">
    <div className="flex items-center gap-1.5">
      <Image
        src={restaurant.avatarImageUrl}
        alt={restaurant.name}
        width={16}
        height={16}
        className="rounded-full"
      />
      <p className="gap-1 text-xs text-muted-foreground">{restaurant.name}</p>
    </div>
    <h2 className="text-xl font-semibold">{product.name}</h2>
  </div> 
  );
}
 
export default ProductDetails;