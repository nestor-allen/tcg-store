"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-blue-600 text-white w-full">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-2xl font-bold">7T</Link>
        
        {/* ✅ Fix Spacing Issue */}
        <nav className="flex space-x-6">
          <Link href="/products" className="hover:underline">about us</Link>
          <Link href="/cart" className="hover:underline">account</Link>
          <Link href="/login" className="hover:underline">cart</Link>
        </nav>
      </div>
    </header>
  );
}
