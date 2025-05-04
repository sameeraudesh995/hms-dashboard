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
                    {/* Search Bar - Enhanced */}
                    <div className="relative mt-1 w-full sm:w-[200px]">
                        <input
                            type="text"
                            placeholder="Search here"
                            className="pl-9 pr-3 border border-gray-200 py-1.5 rounded-full bg-white text-[10px] w-full focus:outline-none "
                        />
                        <span className="material-symbols-outlined absolute left-3 top-[7px] text-gray-400 text-[14px] pointer-edvents-none">
                            search
                        </span>
                    </div>

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
        </div>
    );
};

export default Navbar;
