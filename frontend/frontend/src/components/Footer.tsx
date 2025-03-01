"use client"; // ✅ Marks this as a Client Component

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-6">
      <p>&copy; {new Date().getFullYear()} TCG Store. All rights reserved.</p>
    </footer>
  );
}
