import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function GridItem({ id, src, alt, title, description, price }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden">
      <Link href={`/produto/${id}`} passHref legacyBehavior>
        <div>
          <div className="relative w-80 h-80 overflow-hidden">
            <Image src={src} alt={alt} layout="fill" className="object-cover" />
          </div>
          <div className="w-80 p-4">
            <h3 className="text-gray-800 font-semibold text-lg mb-2">
              {title}
            </h3>
            <p className="text-gray-600 mb-4 h-24 overflow-hidden">
              {description}
            </p>
            <p className="text-gray-800 font-semibold text-lg mb-2">
              {price ? `$${price}` : "Preço sob consulta"}
            </p>
            <div className="bg-pink-300 text-white px-4 py-2 rounded-md text-center hover:bg-pink-400 transition-colors">
              Comprar
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
