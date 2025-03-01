"use client"
import { Product, Restaurant } from "@prisma/client";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { FormatCurrency } from "@/helpers/format-currency";

interface ProductDetailsProps {
  restaurant: Pick<Restaurant, "name" | "avatarImageUrl">
 product: Product; 
}

const ProductDetails = ({restaurant, product}: ProductDetailsProps) => {
  const [quantity, setQuantity] = useState<number>(1);

  const handleDrecreaseQuantity = () => {
    setQuantity((prev) => prev - 1);
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1);
  }

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
    <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>
    
    <div className="flex items-center justify-between">
      <h3 className="text-xl font-semibold">{FormatCurrency(product.price)}</h3>   
      <div className="flex items-center gap-3 text-center">
          <Button variant="outline" className="w-8 h-8 rounded-xl" onClick={handleDrecreaseQuantity} disabled={quantity === 1}>
            <ChevronLeftIcon />
          </Button>
          <p className="w-4">{quantity}</p>
          <Button variant="destructive" className="w-8 h-8 rounded-xl" onClick={handleIncreaseQuantity}>
            <ChevronRightIcon />
          </Button>
      </div>  
    </div>

    <div className="mt-6 space-y-3">
      <h4 className="font-semibold">Sobre</h4>
      <p className="text-sm text-muted-foreground">{product.description}</p>
    </div>
  </div> 
  );
}

export default ProductDetails;