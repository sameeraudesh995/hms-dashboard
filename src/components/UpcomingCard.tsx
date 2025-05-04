import { useState } from 'react';
// Using Google Material Icons

export default function UpcomingCard() {
    const [selectedDay, setSelectedDay] = useState(11); // Default to March 11 as shown in the image
    const [currentMonth, setCurrentMonth] = useState('March');

    // Days for the week
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const dates = [9, 10, 11, 12, 13, 14, 15];

    // Upcoming appointments data
    const upcomingAppointments = [
        {
            title: 'Health appointment',
            person: 'Mr Dok tomm',
            time: '09:20AM - 11:30',
            color: 'bg-green-400',
            icon: 'notifications',
        },
        {
            title: 'Meeting with Tok Dalang',
            time: '07:00AM',
            status: 'Due Soon',
            color: 'bg-purple-400',
            icon: 'notifications',
        },
    ];

    // Past scheduled sessions data
    const pastSessions = [
        {
            title: 'Meditation',
            timeRange: '5:00PM - 6:00PM',
            coach: 'Coach : Tim Bjorvick',
        },
        {
            title: 'Meditation',
            timeRange: '5:00PM - 6:00PM',
            coach: 'Coach : Tim Bjorvick',
        },
    ];

    return (
        <div className="flex flex-col bg-gray-50 min-h-screen p-4 max-w-md mx-auto font-sans">
            {/* Add Google Material Icons */}
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />

            {/* Month selector */}
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <h2 className="text-[12px] font-medium text-gray-700">{currentMonth}</h2>
                    <span className="ml-1 text-[6px] text-gray-600">▼</span>
                </div>
                <button className="flex items-center text-purple-600 text-[9px] font-medium">
                    <span className="material-icons text-purple-600 mr-1" style={{fontSize: '9px'}}>add</span> Add reminder
                </button>
            </div>

            {/* Week days */}
            <div className="grid grid-cols-7 gap-1 mb-2">
                {days.map((day, index) => (
                    <div key={day} className="text-center text-gray-500 text-[9px]">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar dates */}
            <div className="grid grid-cols-7 gap-1 mb-6">
                {dates.map((date, index) => (
                    <div
                        key={date}
                        className={`flex items-center justify-center h-5 w-5 rounded-full cursor-pointer
              ${selectedDay === date
                            ? 'bg-blue-100 text-[9px] text-blue-600 font-medium'
                            : 'text-gray-700 text-[9px] hover:bg-gray-100'}`}
                        onClick={() => setSelectedDay(date)}
                    >
                        {date}
                    </div>
                ))}
            </div>

            {/* Upcoming appointments */}
            <h3 className="text-gray-700 text-[12px] font-medium mb-4 mt-1">Upcoming</h3>
            <div className="space-y-2 mb-3">
                {upcomingAppointments.map((appointment, index) => (
                    <div key={index} className="flex items-start text-[9px] bg-white p-2 rounded-lg shadow-sm">
                        <div className={`${appointment.color} rounded-full h-4 w-4 flex items-center justify-center text-white mr-3`}>
                            <span className="material-icons" style={{fontSize: '8px'}}>{appointment.icon}</span>
                        </div>
                        <div className="flex-1">
                            <h4 className="font-medium text-[9px] text-gray-800">{appointment.title}</h4>
                            <p className="text-gray-600 text-[9px]">{appointment.person}</p>
                            <div className="flex justify-between text-[9px] items-center mt-1">
                                <span className="text-gray-500 text-[9px]">{appointment.time}</span>
                                {appointment.status && (
                                    <span className="text-orange-500 text-[8px]">{appointment.status}</span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Past scheduled sessions */}
            <h3 className="text-gray-700 text-[12px] font-medium mb-2">Past Scheduled sessions</h3>
            <div className="space-y-4">
                {pastSessions.map((session, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                            <h4 className="font-medium text-[9px] text-gray-800">{session.title}</h4>
                            <span className="material-icons text-gray-400" style={{fontSize: '12px'}}>more_horiz</span>
                        </div>
                        <p className="text-gray-600 text-[9px] mb-1">{session.timeRange}</p>
                        <p className="text-[9px] text-blue-600">{session.coach}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}