const Navbar = () => {
    return (
        <div className="px-2 py-2 mt-[-15px]">
            {/* Top Row: Dashboard text + Icons */}
            <div className="flex justify-between items-center">
                {/* Left: Dashboard text */}
                <p className="text-[9px] text-gray-500 text-nowrap">
                    Pages / <span className="text-[9px] text-primary font-semibold text-nowrap">Dashboard</span>
                </p>

                {/* Right: Icons */}
                <div className="flex items-center space-x-3">
                    <span className="material-symbols-outlined text-black-700 cursor-pointer text-[13px]">settings</span>

                    <div className="relative cursor-pointer">
                        <span className="material-symbols-outlined text-black-700 text-[13px]">chat</span>
                        <span className="absolute -top-1 -right-2 bg-primary text-white text-[7px] rounded-full px-1">2</span>
                    </div>

                    <div className="relative cursor-pointer">
                        <span className="material-symbols-outlined text-black-700 text-[13px]">notifications</span>
                        <span className="absolute -top-1 -right-2 bg-primary text-white text-[7px] rounded-full px-1">13</span>
                    </div>
                </div>
            </div>

            {/* Bottom Row: Search Bar */}
            <div className="relative mt-2 w-full sm:w-[200px]">
                <input
                    type="text"
                    placeholder="Search here"
                    className="pl-8 pr-2 border-2 border-gray-300 py-1.5 rounded-full bg-white shadow-sm text-[9px] w-full focus:outline-none"
                />
                <span className="material-symbols-outlined absolute left-2 top-1 text-gray-500 text-base">
          search
        </span>
            </div>
        </div>
    );
};

export default Navbar;
