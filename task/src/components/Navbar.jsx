import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const navItems = [
    { key: "Platform", action: () => navigate("/") },
    { key: "Services", action: () => navigate("/not-implemented") },
    { key: "Showcase", action: () => navigate("/not-implemented") },
    { key: "Resources", action: () => navigate("/resources") },
  ];

  return (
    <nav className="fixed w-full z-40 bg-white shadow-sm">
      <div className="container flex items-center justify-between px-4 py-3 mx-auto">
       
        <div className="flex items-center">
          <div
            className="h-12 w-32 flex items-center cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img src="/images/NavLogo.png" alt="Logo" />
          </div>
        </div>

       
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.key}
              onClick={item.action}
              className="text-gray-700 hover:text-black text-sm font-medium"
            >
              {item.key}
            </button>
          ))}
          <a
            href="#"
            className="text-sm font-medium text-gray-700 hover:text-black"
          >
            Sign in
          </a>
          <a
            href="#"
            className="ml-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-red-500 to-yellow-400 text-sm font-semibold hover:brightness-110"
          >
            Start Free Trial
          </a>
        </div>

        
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4">
          <div className="flex flex-col gap-3 mt-2">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => {
                  item.action();
                  setIsOpen(false);
                }}
                className="text-gray-700 hover:text-black text-sm font-medium text-left"
              >
                {item.key}
              </button>
            ))}
            <a
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Sign in
            </a>
            <a
              href="#"
              className="mt-2 px-4 py-2 rounded-full text-white bg-gradient-to-r from-red-500 to-yellow-400 text-sm font-semibold hover:brightness-110 w-fit"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};
