import MapView from "../components/MapView.tsx";
import StatisticsPanel from "../components/StatisticsPanel.tsx";
import PatientAppointments from "../components/PatientAppointments.tsx";
import PatientDashboardCard from "../components/PatientDashboardCard.tsx";
import Navbar from "../components/Navbar.tsx";
import AppointmentsCard from "../components/AppointmentsCard.tsx";
import PatientOverviewCard from "../components/PatientOverviewCard.tsx";
import UpcomingSheduleCard from "../components/UpcomingSheduleCard.tsx";
import UserProfileCard from "../components/UserProfileCard.tsx";
import UpcomingCard from "../components/UpcomingCard.tsx";

const Dashboard = () => {
    return (
        <>
            <Navbar />

            <div className="flex flex-col lg:flex-row gap-2 p-2">
                {/* Left Side */}
                <div className="w-full lg:w-1/2 flex flex-col gap-2">
                    {/* Row 1: MapView + StatisticsPanel */}
                    <div className="flex flex-col md:flex-row gap-2">
                        <div className="w-full md:w-3/5 border border-gray-300 rounded-[3px]">
                            <MapView />
                        </div>
                        <div className="w-full md:w-2/5 border border-gray-300 rounded-[3px] p-1">
                            <StatisticsPanel />
                        </div>
                    </div>

                    {/* Row 2: PatientAppointments full width */}
                    <div className="border border-gray-300 rounded-[3px] p-1">
                        <PatientAppointments />
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full lg:w-1/2 flex flex-col md:flex-row gap-2">
                    {/* Left Section (60%) */}
                    <div className="w-full md:w-[60%] flex flex-col gap-1">
                        <div className="border border-gray-300 rounded-[3px]">
                            <PatientDashboardCard />
                        </div>
                        <div className="border border-gray-300 rounded-[3px]">
                            <AppointmentsCard />
                        </div>
                        <div className="border border-gray-300 rounded-[3px]">
                            <PatientOverviewCard />
                        </div>
                        <div className="border border-gray-300 rounded-[3px]">
                            <UpcomingSheduleCard />
                        </div>
                    </div>

                    {/* Right Section (40%) */}
                    <div className="w-full md:w-[40%] flex flex-col gap-2">
                        <div className="border border-gray-300 rounded-[3px]">
                            <UserProfileCard />
                        </div>
                        <div className="border border-gray-300 rounded-[3px]">
                            <UpcomingCard />
                        </div>
                        {/* You can add more widgets/cards below if needed */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
