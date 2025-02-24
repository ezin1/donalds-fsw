"use server"
import { db } from "@/lib/prisma";

interface RestaurantPageProps {
  slug: string;
}
export const getRestaurantBySlug = async ({slug}: RestaurantPageProps ) => {
  const restaurant = await db.restaurant.findUnique({
      where: {
        slug,
      },
    });

    return restaurant;
  
}
 
