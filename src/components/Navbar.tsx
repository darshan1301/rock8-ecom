import { IoSearch } from "react-icons/io5";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full">
      <div className="flex w-full space-x-3 bg-white text-sm py-2 justify-end px-10">
        <Link href={"/"}>Help</Link>
        <Link href={"/"}>Orders & Returns</Link>
        <Link href={"/"}>Hi, John</Link>
      </div>
      <div className="grid grid-cols-4 py-4 align-bottom w-full items-baseline justify-between bg-white px-10">
        <div>
          <h1 className="text-[32px] font-bold uppercase">Ecommerce</h1>
        </div>
        <div className="flex justify-center space-x-6 font-semibold col-span-2">
          <Link href={"/"}>Categories</Link>
          <Link href={"/"}>Sale</Link>
          <Link href={"/"}>Clearance</Link>
          <Link href={"/"}>New Stock</Link>
          <Link href={"/"}>Trending</Link>
        </div>
        <div className="items-baseline justify-end flex space-x-6">
          <Link href={"/ "} className="text-xl">
            <IoSearch />
          </Link>
          <Link className="text-xl" href={"/"}>
            <PiShoppingCartSimpleBold />
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-6 w-full bg-[#F4F4F4] font-medium justify-center py-2 text-sm">
        <SlArrowLeft />
        <Link href={"/"}>Get 10% off on business sign up</Link>
        <SlArrowRight />
      </div>
    </nav>
  );
};

export default Navbar;
