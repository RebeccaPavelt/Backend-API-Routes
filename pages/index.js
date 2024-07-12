import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Welcome to my Aquarium</h1>
      <Link href="/products">Come see my Fish!</Link>
    </>
  );
}
