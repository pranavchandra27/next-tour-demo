import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <div className='links'>
        <Link href='/'>
          <p className='nav-home'>Home</p>
        </Link>
        <Link href='/trending'>
          <p className='nav-trending'>Trending</p>
        </Link>
        <Link href='/profile'>
          <p className='nav-profile'>Profile</p>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
