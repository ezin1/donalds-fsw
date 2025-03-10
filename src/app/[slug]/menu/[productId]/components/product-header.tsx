"use client";
import { Product } from "@prisma/client";
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

interface ProductHeaderProps {
  product: Pick<Product, "imageUrl" | "name">;
}

const ProductHeader = ({product}: ProductHeaderProps) => {
  const { slug } = useParams<{slug: string}>();
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  }
    const handleOrdersClick = () => router.push(`/${slug}/orders`);
  return (  
    <div className="relative w-full min-h-[300px]">
      <Button
        className="absolute left-4 top-4 z-50 rounded-full"
        variant="secondary"
        size="icon"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>
      <Button
        className="absolute right-4 top-4 z-50 rounded-full"
        variant="secondary"
        size="icon"
        onClick={handleOrdersClick}
      >
        <ScrollTextIcon />
      </Button>
      <Image
        src={product.imageUrl}
        fill
        alt={product.name}
        className="object-contain"
      />

    </div>
  );
}
 
export default ProductHeader;