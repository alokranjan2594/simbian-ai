import { BiDownArrow } from "react-icons/bi";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-6 flex justify-between items-center bg-transparent absolute top-0 z-50">
      <div className="flex-1 md:flex-none"></div>

      <div className="flex items-center justify-center space-x-8">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
            <div className="w-6 h-6 text-blue-600">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.91 11.12C20.91 16.01 17.36 20.59 12.51 21.93C12.18 22.02 11.82 22.02 11.49 21.93C6.64 20.59 3.09 16.01 3.09 11.12V6.73C3.09 5.91 3.71 4.98 4.48 4.67L10.05 2.39C11.3 1.88 12.71 1.88 13.96 2.39L19.53 4.67C20.29 4.98 20.92 5.91 20.92 6.73V11.12H20.91Z"
                  fill="currentColor"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <span className="text-white text-xl font-semibold">Simbian</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <div className="flex items-center text-white">
            <span>Products</span>
            <BiDownArrow className="ml-1 h-4 w-4" />
          </div>
          <div className="flex items-center text-white">
            <span>Company</span>
            <BiDownArrow className="ml-1 h-4 w-4" />
          </div>
          <div className="flex items-center text-white">
            <span>Resources</span>
            <BiDownArrow className="ml-1 h-4 w-4" />
          </div>
          <span className="text-white">Blog</span>
        </div>
      </div>

      <div className="flex-1 md:flex-none flex justify-end">
        <button className="bg-white text-blue-600 hover:bg-gray-100 rounded-full px-6">
          Book a Demo <span className="ml-2">🛡️</span>
        </button>
      </div>
    </nav>
  );
}
