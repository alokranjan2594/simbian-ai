import { AppAssets } from "@/constant/Assets";
import Image from "next/image";
import { BiDownArrow } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-transparent absolute top-0 z-50">
      <div className="flex-1 md:flex-none"></div>

      <div
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 10% 100%)",
        }}
        className="hidden md:flex justify-end w-[64%] bg-blue-900 p-3 gap-5 items-center rounded-xl"
      >
        <Image
          src={AppAssets.logo_white}
          alt="logo"
          height={1920}
          width={1080}
          className="w-36 h-8"
        />

        <div className="hidden md:flex items-center space-x-8 text-xl font-semibold">
          <div className="flex items-center text-white">
            <span>Products</span>
            <FaAngleDown className="ml-1 h-4 w-4" />
          </div>
          <div className="flex items-center text-white">
            <span>Company</span>
            <FaAngleDown className="ml-1 h-4 w-4" />
          </div>
          <div className="flex items-center text-white">
            <span>Resources</span>
            <FaAngleDown className="ml-1 h-4 w-4" />
          </div>
          <span className="text-white">Blog</span>
        </div>
        <button
          className="relative flex items-center justify-end gap-2 bg-white text-black font-semibold py-3 px-4 w-44 rounded-xl border-2 border-blue-700 hover:bg-gray-100 transition duration-200"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
          }}
        >
          <span>Book a Demo</span>
          <Image src={AppAssets.logo} alt="simbian-logo" className="w-5 h-5" />
        </button>
      </div>
      <div className="flex justify-between w-full items-center md:hidden">
        <Image
          src={AppAssets.logo_white}
          alt="logo"
          height={1920}
          width={1080}
          className="w-36 h-8"
        />
        <button
          className="relative flex items-center justify-end gap-2 bg-white text-black font-semibold py-3 px-4 w-44 rounded-xl border-2 border-blue-700 hover:bg-gray-100 transition duration-200"
          style={{
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 25% 100%)",
          }}
        >
          <span>Book a Demo</span>
          <Image src={AppAssets.logo} alt="simbian-logo" className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
