import { notFound } from "next/navigation";

interface RestaurantMenuPageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ consumptionMethod: string }>;
}

const RestaurantMenuPage = async ({ params, searchParams }: RestaurantMenuPageProps) => {
  const { slug } = await params;
  const { consumptionMethod} = await searchParams;

  const isConsumptionMethod = (consumptionMethod: string) => {
    return ["DINE_IN", "TAKEAWAY"].includes(consumptionMethod.toUpperCase());
  }

  if (!isConsumptionMethod(consumptionMethod)) {
    return notFound();
  }
  return (
    <h1>
      Restaurant Menu Page
      {slug}
    </h1>
  );
};

export default RestaurantMenuPage;
