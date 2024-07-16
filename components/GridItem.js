import React from 'react';
import Link from 'next/link';
import Image from 'next/image';



export default function GridItem({id, src, alt, title, description}){

  return (
    <div key={id} className="bg-white shadow-md rounded-lg overflow-hidden">
                
                <Link href={`/produto/${id}`} passHref className="block" legacyBehavior>
                  <div>
                    <Image src={src} alt={alt} width={400} height={400} className="object-cover" />
                    <div className="p-4">
                      <h3 className="text-gray-800 font-semibold text-lg mb-2">{title}</h3>
                      <p className="text-gray-600 mb-4">{description}</p>
                      <div className="bg-pink-300 text-white px-4 py-2 rounded-md text-center hover:bg-pink-400 transition-colors">
                        Ver mais
                      </div>
                    </div>
                  </div>
    
                </Link>
              </div>
    
        );

}