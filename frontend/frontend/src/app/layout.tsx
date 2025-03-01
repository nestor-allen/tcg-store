import "../styles/globals.css";
import ShaderBackground from "@/components/ShaderBackground"; // ✅ Import Shader Component

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative w-screen h-screen overflow-hidden">
        {/* 🎨 Shader Gradient Background */}
        <ShaderBackground />

        {/* ✅ Page Content */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
