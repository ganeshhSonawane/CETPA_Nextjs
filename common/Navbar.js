import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='row bg-info bg-opacity-50'>





<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
        <Link href="/">Home</Link>
        </li>
        <li class="nav-item">
        <Link href="/about">About</Link>
        </li>
        <li class="nav-item">
        <Link href="/courses">Courses</Link>
        </li>
        <li class="nav-item">
        <Link href="/facilities">Facilities</Link>
        </li>
        <li class="nav-item">
        <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>



        

        
    </div>
  )
}

export default Navbar
