import React from 'react';
import Link from 'next/link';
export default function ProductList() {
  const count: number = 100;

  return (
    <>
      <h1>Product List</h1>
      {Array.from({ length: count }).map((_, index) => (
        <Link key={index + 1} href={`/products/${index + 1}`}>
            <h2 >Product {index + 1}</h2>
        </Link>
      ))}
    </>
  );
}
