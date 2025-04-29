const Navbar = () => {
  return (
      <div className="flex items-center justify-between px-1 py-1 mt-[-15px] bg-gray-50">
        {/* Left Section */}
        <div>
          <p className="text-[9px] text-gray-500">Pages / <span className="text-[9px] text-primary font-semibold">Dashboard</span></p>
          <h1 className="text-[12px] font-bold text-primary">Dashboard</h1>
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4">
          {/* Search */}
          <div className="relative">
            <input
                type="text"
                placeholder="Search here"
                className="pl-8 pr-4 py-1.5 rounded-full bg-white shadow-sm text-[9px] focus:outline-none"
            />
            <span className="material-symbols-outlined absolute left-2 top-1 text-gray-500 text-base">
            search
          </span>
          </div>

          {/* Icons */}
          <span className="material-symbols-outlined text-black-700 cursor-pointer text-[15px]">settings</span>

          <div className="relative cursor-pointer">
            <span className="material-symbols-outlined text-black-700 text-[15px]">chat</span>
            <span className="absolute -top-1 -right-2 bg-primary text-white text-[8px] rounded-full px-1">2</span>
          </div>

          <div className="relative cursor-pointer">
            <span className="material-symbols-outlined text-black-700 text-[15px]">notifications</span>
            <span className="absolute -top-1 -right-2 bg-primary text-white text-[8px] rounded-full px-1">13</span>
          </div>
        </div>
      </div>
  );
};

export default Navbar;
