"use server";
import { db } from "@/lib/prisma";

interface getProductByIdProps {
  productId: string;
}
export const getProductById = async ({ productId }: getProductByIdProps) => {
  const product = await db.product.findUnique({
    where: {
      id: productId,
    },
  });


  return product;
};
