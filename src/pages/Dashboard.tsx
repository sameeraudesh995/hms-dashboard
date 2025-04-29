import MapView from "../components/MapView.tsx";
import StatisticsPanel from "../components/StatisticsPanel.tsx";
import PatientAppointments from "../components/PatientAppointments.tsx";
import Navbar from "../components/Navbar.tsx";

const Dashboard = () => {
    return (
        <>
            {/* Top Navigation Bar */}
            <Navbar />

            {/* Main Dashboard Content */}
            <div className="">

                <div className="flex gap-2">
                    {/* Left Side */}
                    <div className="w-1/2 flex flex-col gap-2">
                        {/* Row 1: MapView + StatisticsPanel side-by-side */}
                        <div className="flex gap-2">
                            <div className="w-3/5 border border-gray-300 rounded-[3px] p-1">
                                <MapView />
                            </div>
                            <div className="w-2/5 border border-gray-300 rounded-[3px] p-1">
                                <StatisticsPanel />
                            </div>
                        </div>

                        {/* Row 2: PatientAppointments full width */}
                        <div className="border border-gray-300 rounded-[3px] p-1">
                            <PatientAppointments />
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="w-1/2 border border-dashed border-gray-300 rounded-[3px] p-1 flex items-center justify-center text-[10px] text-gray-500">
                        Right side component (coming soon...)
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
