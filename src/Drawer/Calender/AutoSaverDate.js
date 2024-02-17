import * as React from 'react';
import dayjs from "dayjs";
import { useState, useEffect } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { IoMdClock } from "react-icons/io";
import { FaPen, FaTrash } from "react-icons/fa";

export default function StaticDatePickerLandscape() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const [events, setEvents] = useState(() => {
        const storedEvents = localStorage.getItem('events');
        return storedEvents ? JSON.parse(storedEvents) : {};
    });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [eventText, setEventText] = useState('');
    const [selectedDateKey, setSelectedDateKey] = useState('');
    const [isYearModalOpen, setIsYearModalOpen] = useState(false);

    useEffect(() => {
        const timerID = setInterval(() => tick(), 1000);
        return () => {
            clearInterval(timerID);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    const tick = () => {
        setCurrentDateTime(new Date());
    };

    const initialSelectedDates = [dayjs().startOf('month')];
    const [selectedDates, setSelectedDates] = useState(initialSelectedDates);

    const handleDateChange = (index, newDate) => {
        setSelectedDates(prevDates => {
            const newDates = [...prevDates];
            newDates[index] = newDate;
            return newDates;
        });
    };

    const handleAddEvent = (dateKey) => {
        setSelectedDateKey(dateKey);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
        setEventText('');
    };

    const handleEventTextChange = (e) => {
        setEventText(e.target.value);
    };

    const handleEventSubmit = () => {
        if (eventText.trim() !== '') {
            setEvents(prevEvents => ({
                ...prevEvents,
                [selectedDateKey]: [...(prevEvents[selectedDateKey] || []), eventText]
            }));
            setIsModalOpen(false);
            setEventText('');
        }
    };

    const handleDeleteEvent = (dateKey, eventIndex) => {
        setEvents(prevEvents => {
            const updatedEvents = { ...prevEvents };
            updatedEvents[dateKey].splice(eventIndex, 1);
            return updatedEvents;
        });
    };

    const renderMonths = () => {
        return selectedDates.map((date, index) => (
            <DemoContainer key={index} components={["StaticDatePicker"]} sx={{ width: "100%" }}>
                <StaticDatePicker value={date}
                    onChange={(newDate) => handleDateChange(index, newDate)}
                    className="border p-2 rounded" />
                <button onClick={() => handleAddEvent(date.format("YYYY-MM-DD"))} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-black flex items-center gap-2"><FaPen /> Add Event</button>
            </DemoContainer>
        ));
    };

    const renderYearModal = () => {
        return (
            <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
                <div className="bg-white w-1/4 p-4 rounded shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">Select Year and Month</h2>
                    {[...Array(12)].map((_, index) => {
                        const monthDate = dayjs().startOf('year').add(index, 'month');
                        return (
                            <button key={index} onClick={() => handleYearMonthSelect(monthDate)} className="block w-full text-left py-2 px-4 hover:bg-gray-200">{monthDate.format("MMMM")}</button>
                        );
                    })}
                </div>
            </div>
        );
    };

    const handleYearMonthSelect = (date) => {
        setSelectedDates([date]);
        setIsYearModalOpen(false);
    };

    return (
        <div className='w-full'>
            <div className='text-center py-2 text-xl font-medium w-full bg-gray-900 text-white'>
                <IoMdClock className='w-full mb-1' size={50} />
                {`Current Date & Time: ${currentDateTime.toLocaleString()}`}
            </div>
            <div className='p-5 flex w-full justify-center space-x-10 '>
                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    <div className='w-[30vw]'>
                        {renderMonths()}
                    </div>
                </LocalizationProvider>
                <div>
                    {isModalOpen && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white w-1/4 p-4 rounded shadow-lg">
                                <textarea
                                    value={eventText}
                                    onChange={handleEventTextChange}
                                    placeholder="Enter event details"
                                    className="w-full p-3 h-32 border-gray-300 rounded-md resize-none focus:outline-none focus:ring focus:border-blue-300 mb-4"
                                />
                                <div className="flex justify-end">
                                    <button onClick={handleEventSubmit} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2">Submit</button>
                                    <button onClick={handleModalClose} className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400">Cancel</button>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className='w-full'>
                        {isYearModalOpen && renderYearModal()}
                        <button onClick={() => setIsYearModalOpen(true)} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-black">Show Year and Months</button>
                        {Object.keys(events).map((dateKey) => (
                            <div key={dateKey} className="mt-4 text-center bg-yellow-500 py-2">
                                <h3 className="text-xl font-semibold">{dateKey}</h3>
                                <ul className="list-disc w-[30vw] list-inside">
                                    {events[dateKey].map((event, index) => (
                                        <li key={index} className="ml-4 flex items-center justify-between">
                                            {event}
                                            <button onClick={() => handleDeleteEvent(dateKey, index)} className="text-red-500">
                                                <FaTrash />
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
