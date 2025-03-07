interface OrdersPageProps {
  searchParams: Promise<{cpf: string}>;
}

const OrdersPage = async ({searchParams}: OrdersPageProps) => {

  const { cpf } = await searchParams;

  if (!cpf) {
    return <h1>Invalid CPF</h1>;
  }
  return ( 
    <div>
      <h1>Orders Page</h1>
    </div>
   );
}
 
export default OrdersPage;