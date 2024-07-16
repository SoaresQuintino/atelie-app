import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Topbar (){
    return(
        <nav className="bg-pink-200 py-4">
<div className="container mx-auto flex justify-between items-center">
  <div className="text-gray-800 font-bold text-xl">Ateliê Bela Arte</div>
  <ul className="flex space-x-4">
    {[
      { href: '/', label: 'Home' },
      { href: '/product', label: 'Produtos' },
      { href: '/contact', label: 'Contato' },
    
    ].map(({ href, label }) => (
      <li key={href}>
        <Link href={href} className="text-gray-600 hover:text-gray-800" legacyBehavior>
          {label}
        </Link>
      </li>
    ))}
  </ul>
</div>
</nav>


    );
}