// src/components/NavBar.tsx
import { motion } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { path: "/", name: "Home" },
  { path: "/features", name: "Características" },
  { path: "/pricing", name: "Precios" },
  { path: "/marketplace", name: "Marketplace" },
  { path: "/about", name: "Acerca de" },
  { path: "/contact", name: "Contacto" },
];

export default function NavBar() {
  let pathname = usePathname() || "/";

  const [hoveredPath, setHoveredPath] = useState(pathname);

  return (
    <div className="border p-4 rounded-lg bg-gray-800">
      <nav className="flex gap-4">
        {navItems.map((item) => {
          const isActive = item.path === pathname;

          return (
            <Link
              key={item.path}
              href={item.path}
              className={`px-4 py-2 rounded-md ${isActive ? "text-white" : "text-gray-400"}`}
              onMouseOver={() => setHoveredPath(item.path)}
              onMouseLeave={() => setHoveredPath(pathname)}
            >
              <span>{item.name}</span>
              {item.path === hoveredPath && (
                <motion.div
                  className="absolute inset-0 bg-gray-700 rounded-md"
                  layoutId="nav-underline"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
