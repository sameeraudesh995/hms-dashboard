import { NavLink } from 'react-router-dom';
import logo from '../../public/assets/logo.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div
            className="top-0 left-0 flex flex-col items-center h-screen bg-gray-300 text-white w-[50px] py-4 overflow-hidden">
            {/* Logo */}
            <div className="flex items-center justify-center h-12 mb-3 mt-[-15px]">
                <Link to="/dashboard"
                      className="focus:outline-none focus:ring-4 focus:ring-secondary focus:ring-opacity-50 focus:rounded-[2px]">
                    <img src={logo} alt="Logo" className="w-5 h-5 cursor-pointer hover:opacity-80"/>
                </Link>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col space-y-6 text-lg">

                <NavLink
                    to="/appointments"
                    className={({isActive}) =>
                        isActive
                            ? "bg-cyan-600  p-1 rounded-md w-full h-6 flex justify-center items-center"
                                : "p-1 w-full h-6 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-cyan-600"
                        }>
                        <span className="material-symbols-outlined text-[14px] ">calendar_month</span>
                    </NavLink>
                    <NavLink
                        to="/patients"
                        className={({isActive}) =>
                            isActive
                                ? "bg-cyan-600 p-1 rounded-md w-full h-6 flex justify-center items-center"
                                : "p-1 w-full h-6 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-cyan-600"
                        }>
                        <span className="material-symbols-outlined text-[14px]">groups</span>
                    </NavLink>

                    <NavLink
                        to="/prescriptions"
                        className={({isActive}) =>
                            isActive
                                ? "bg-cyan-600 p-1 rounded-md w-full h-6 flex justify-center items-center"
                                : "p-1 w-full h-6 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-cyan-600"
                        }>
                        <span className="material-symbols-outlined text-[14px]">description</span>
                    </NavLink>

                    <NavLink
                        to="/clinics"
                        className={({isActive}) =>
                            isActive
                                ? "bg-cyan-600 p-1 rounded-md w-full h-6 flex justify-center items-center"
                                : "p-1 w-full h-6 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-cyan-600"
                        }>
                        <span className="material-symbols-outlined text-[14px]">favorite</span>
                    </NavLink>

                    <NavLink
                        to="/hospital-essentials"
                        className={({isActive}) =>
                            isActive
                                ? "bg-cyan-600 p-1 rounded-md w-full h-6 flex justify-center items-center"
                                : "p-1 w-full h-6 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-cyan-600"
                        }>
                        <span className="material-symbols-outlined text-[14px]">home</span>
                    </NavLink>

                    <NavLink
                        to="/special-events"
                        className={({isActive}) =>
                            isActive
                                ? "bg-cyan-600 p-1 rounded-md w-full h-6 flex justify-center items-center"
                                : "p-1 w-full h-6 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-cyan-600"
                        }>
                        <span className="material-symbols-outlined text-[14px]">event</span>
                    </NavLink>

                    <NavLink
                        to="/medical-reports"
                        className={({isActive}) =>
                            isActive
                                ? "bg-cyan-600 p-1 rounded-md w-full h-6 flex justify-center items-center"
                                : "p-1 w-full h-6 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-cyan-600"
                        }>
                        <span className="material-symbols-outlined text-[14px]">edit_note</span>
                    </NavLink>

                    <NavLink
                        to="/settings"
                        className={({isActive}) =>
                            isActive
                                ? "bg-cyan-600 p-1 rounded-md w-full h-6 flex justify-center items-center"
                                : "p-1 w-full h-6 rounded-md flex justify-center items-center transition-all duration-300 hover:bg-cyan-600"
                        }>
                        <span className="material-symbols-outlined text-[14px]">settings</span>
                    </NavLink>

                </div>
            </div>
            );
            };

            export default Sidebar;
