import { useRouter } from "next/router";
import useSWR from "swr";
import Link from "next/link";

export default function Detailspage() {
  const router = useRouter();
  const { id } = router.query;

  const { data: products, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!products) {
    return;
  }

  return (
    <>
      <h2>{products.name}</h2>
      <h3>{products.description}</h3>
      <h4>
        {products.price} {products.currency}
      </h4>
      <h4>{products.category}</h4>
      <Link href="/products">Back to all Fish!</Link>
    </>
  );
}
