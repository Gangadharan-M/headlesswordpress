// header.jsx
import React from 'react';
import Link from 'next/link';

export default function Header() {
  return <div>
    <header>
        <div class="container">
          <img src="https://www.freepik.com/free-psd/realistic-shiny-3d-round-button-with-wordpress-icon_42641189.htm#fromView=search&page=1&position=0&uuid=74a1e057-1a40-4610-b3ab-a5d80b2473b7" alt="" />
            <nav>
                <ul>
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/contact">Contact Us</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/blogs">Blogs</Link></li>
                </ul>
            </nav>
        </div>
    </header>

  </div>;
}
