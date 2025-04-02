"use client"
import React from "react";
import { assets, BagIcon, BoxIcon, CartIcon, HomeIcon} from "@/assets/assets";
import Link from "next/link"
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton } from "@clerk/nextjs";


const Navbar = () => {

  const { isSeller, router, user } = useAppContext();
  const {openSignIn} = useClerk()

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />
      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>
        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>
        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}

      </div>

      <ul className="hidden md:flex items-center gap-4 ">
      <div onClick={() => router.push('/spin-the-wheel')} className="hover:text-gray-900 transition">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=attractions" />
        <span className="material-symbols-outlined">attractions</span>
      </div>
      <div className="theme-toggler">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=no_adult_content" />
        <span className="material-symbols-outlined">no_adult_content</span>
      </div>
        { user 
        ? <>
        <UserButton>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </>
        :<button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">Seller Dashboard</button>}
        { user 
        ? <>
        <UserButton>
          <UserButton.MenuItems>
          <UserButton.Action label="Home" labelIcon={<HomeIcon />} onClick={()=> router.push('/')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Products" labelIcon={<BoxIcon />} onClick={()=> router.push('/all-products')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="Cart" labelIcon={<CartIcon />} onClick={()=> router.push('/cart')} />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Action label="My Orders" labelIcon={<BagIcon />} onClick={()=> router.push('/my-orders')} />
          </UserButton.MenuItems>
        </UserButton>
        </>
        :<button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={assets.user_icon} alt="user icon" />
          Account
        </button>}
      </div>
    </nav>
  );
};

export default Navbar;