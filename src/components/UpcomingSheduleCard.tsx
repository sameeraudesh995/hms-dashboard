import { useState } from "react";
import { ChevronUp } from "lucide-react";

// Sample appointment data with main time markers and sub-appointments
const mainTimeMarkers = ["8:00", "9:00", "10:00"];

// Restructured to group by main time
const appointmentsByTime = {
    "8:00": [
        { time: "8:00", title: "Consultation Abdul Nishan", active: false, completed: true, isMainTime: true },
        { time: "8:20", title: "Consultation Adamu", active: false, completed: true, isMainTime: false },
        {
            time: "8:30",
            title: "Consultation Vibha",
            active: true,
            isMainTime: false,
            patient: "Vibha Jayarajan",
            duration: "8:30 - 9:00",
            purpose: "General check-up"
        }
    ],
    "9:00": [
        { time: "9:00", title: "Consultation Abayomi Johnson", active: false, isMainTime: true },
        { time: "9:30", title: "Rebecca Gifts", active: false, isMainTime: false }
    ],
    "10:00": []
};

// Active appointment detailed card
const ScheduleCard = ({ appointment }) => (
    <div className="border rounded-[3px] bg-white p-2 w-full ml-[-12px] mb-2 relative">
        <div className="flex items-center mb-4">
            <div className="flex-1">
                <div className="flex items-center">
                    <span className="w-1 h-1 bg-green-500 rounded-full mr-2"></span>
                    <span className="text-blue-500 text-[9px] font-medium">{appointment.time}</span>
                    <span className="text-blue-500 text-[9px] font-medium ml-2">{appointment.title}</span>
                </div>
            </div>
            <ChevronUp className="text-blue-500 flex-end" size={12} />
        </div>

        <div className="space-y-2 text-gray-700">
            <div className="flex">
                <span className="w-10 text-[9px] font-medium">Patient</span>
                <span className="text-[9px]">{appointment.patient}</span>
            </div>
            <div className="flex">
                <span className="w-10 text-[9px] font-medium">Time</span>
                <span className="text-[9px]">{appointment.duration}</span>
            </div>
            <div className="flex">
                <span className="w-10 font-medium text-[9px]">Purpose</span>
                <span className="text-[9px]">{appointment.purpose}</span>
            </div>
        </div>

        <div className="flex justify-between mt-4 pt-2 border-t">
            <button className="text-red-500">
                <span className="flex items-center"><span
                    className="material-symbols-outlined text-sm">delete</span></span>
            </button>
            <button className="text-blue-500 text-[9px]">Begin appointment</button>
        </div>
    </div>
);

// Main schedule component
const UpcomingScheduleCard = () => {
    const [expanded] = useState(true);

    return (
        <div className="p-2 w-full max-w-sm">
            <div className="flex justify-between items-center mb-3">
                <h2 className="text-[12px] text-gray-700 font-semibold">Upcoming schedule</h2>
                <a href="#" className="text-blue-500 text-[9px]">View All</a>
            </div>

            <div className="relative">
                {/* Timeline vertical line */}
                <div className="absolute left-16 top-0 bottom-3 w-px bg-gray-200"></div>

                {/* Main time markers with appointments */}
                {mainTimeMarkers.map((mainTime, i) => (
                    <div key={i} className="mb-6 relative">
                        {/* Main time marker on the left */}
                        <div className="flex mb-4">
                            <div className="text-gray-500 text-[9px] w-12 text-right mt-[-3px] mr-5">{mainTime}</div>
                            <div className="w-2 h-2 rounded-full bg-gray-300 absolute left-16 transform -translate-x-1"></div>
                        </div>

                        {/* Appointments for this time slot */}
                        <div className="pl-16">
                            {appointmentsByTime[mainTime].map((appt, j) => !appt.isMainTime && (
                                <div key={j} className="relative mb-3">
                                    {/* Sub-time dot */}
                                    <div
                                        className={`absolute left-4 top-1.5 w-1 h-1 rounded-full ${
                                            appt.active ? "bg-white-500" : "bg-gray-300"
                                        }`}
                                    ></div>

                                    {/* Sub-time appointment */}
                                    {!appt.active ? (
                                        <div className="ml-6">
                                            <div className={`text-[9px] ${appt.completed ? "text-gray-400 line-through" : "text-gray-700"}`}>
                                                <span className="mr-2 text-gray-400">{appt.time}</span>
                                                <span>{appt.title}</span>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="ml-6">
                                            <ScheduleCard appointment={appt} />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UpcomingScheduleCard;