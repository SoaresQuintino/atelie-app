import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const submenuTimeoutRef = useRef(null);

  const handleMouseEnter = (submenu) => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
    if (submenu) {
      setActiveSubmenu(submenu);
    }
  };

  const handleMouseLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 100);
  };

  const handleSubMenuEnter = () => {
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
    }
  };

  const handleSubMenuLeave = () => {
    submenuTimeoutRef.current = setTimeout(() => {
      setActiveSubmenu(null);
    }, 500);
  };

  return (
    <nav className="bg-pink-200 py-4 shadow-md w-full">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Image
            src="https://images-offstore.map.azionedge.net/compressed/db2cc68e7b598da394e4fc58bbd5676b.webp"
            alt="Logo"
            width={48} // Specify width
            height={48} // Specify height
            className="w-12 h-12"
          />
        </div>
        <div className="relative mx-4 max-w-md">
          <input
            type="text"
            placeholder="O que você procura?"
            className="w-full py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500"
          />
          <button className="absolute right-0 top-0 h-full px-4 bg-pink-500 text-white rounded-r-full">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m2.65-6.65a8 8 0 11-16 0 8 8 0 0116 0z"
              />
            </svg>
          </button>
        </div>
        <div className="hidden md:flex space-x-8 items-center">
          {[
            { href: "/", label: "HOME" },
            {
              href: "/product",
              label: "PRODUTOS",
              submenu: true,
              sublinks: [
                {
                  href: "/produto/[id]",
                  label: "Bolsa Transversal",
                  as: "/produto/1",
                },
                {
                  href: "/produto/[id]",
                  label: "Carteira Infantil",
                  as: "/produto/2",
                },
                {
                  href: "/produto/[id]",
                  label: "Bolsa Lousa",
                  as: "/produto/3",
                },
              ],
            },
            { href: "/contact", label: "CONTATO" },
          ].map(({ href, label, submenu, sublinks }) => (
            <div
              key={href}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(submenu ? label : null)}
              onMouseLeave={handleMouseLeave}
              aria-haspopup="true"
              aria-expanded={activeSubmenu === label}
            >
              <Link
                href={href}
                className="text-pink-500 hover:text-pink-700 transition duration-300"
              >
                {label}
              </Link>

              {submenu && activeSubmenu === label && (
                <div
                  className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                  onMouseEnter={handleSubMenuEnter}
                  onMouseLeave={handleSubMenuLeave}
                >
                  <ul className="py-1">
                    {sublinks.map(
                      ({ href: subHref, label: subLabel, as: subAs }) => (
                        <li key={subAs}>
                          <Link
                            href={subHref}
                            as={subAs}
                            className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300"
                          >
                            {subLabel}
                          </Link>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-800 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden mt-2">
          <ul className="flex flex-col space-y-2">
            {[
              { href: "/", label: "HOME" },
              { href: "/product", label: "PRODUTOS" },
              { href: "/contact", label: "CONTATO" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
