import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { Button, TextField } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { MdDeleteOutline } from "react-icons/md";
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ConsultationCharges() {
    let d = new Date();
    let day = d.getDay();
    const [fromTime, setFromTime] = useState(null);
    const [toTime, setToTime] = useState(null);
    const [tableData, setTableData] = useState([]);
    const [consultationCharges, setConsultationCharges] = useState('');
    const [followUpCharges, setFollowUpCharges] = useState(0);
    const [isFree, setIsFree] = useState(false);
    const [followUpApplication, setFollowUpApplication] = useState(false);
    const [active, setActive] = useState(true);
    const [followUpChargesEnabled, setFollowUpChargesEnabled] = useState(false);
    const [charges, setCharges] = useState(false)


    const handleFromTimeChange = (e) => {
        setFromTime(e);
    };

    const handleToTimeChange = (e) => {
        setToTime(e);
    };

    const handleIsFreeCheckboxChange = () => {
        setIsFree(!isFree);
        if (!isFree) {
            setCharges(false);
            setConsultationCharges(0);
        } else {
            setCharges(true);
        }
    };

    const handleFollowUpChargesCheckboxChange = () => {
        setFollowUpChargesEnabled(!followUpChargesEnabled);
        if (!followUpChargesEnabled) {
            setFollowUpCharges('');
        }
    };

    const submitData = (event) => {
        event.preventDefault();
        if (fromTime && toTime !== '' ) {
            const newData = {
                fromTime,
                toTime,
                consultationCharges,
                followUpCharges,
                isFree,
                followUpApplication,
                active,
            };
            setTableData([...tableData, newData]);
            setConsultationCharges('');
            setFollowUpCharges('');
            setIsFree(false);
            setFollowUpApplication(false);
            setActive(true);
            toast.success('Appointment Successfull!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        } else {
            toast.error('Fill all input Fields!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };

    const handleDelete = (index) => {
        let data = [...tableData];
        data.splice(index, 1);
        setTableData(data);
    };

    return (
        <div className='m-3'>
            <div className='flex gap-3'>
                <div className='grid grid-cols-2 gap-3 w-[60%]'>
                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Tariff</InputLabel>
                            <Select label="Tariff">
                                <MenuItem value={"hospital"}>Hospital</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Week</InputLabel>
                            <Select label="Week" defaultValue={day} >
                                <MenuItem value={7}>Sunday</MenuItem>
                                <MenuItem value={1}>Monday</MenuItem>
                                <MenuItem value={2}>Tuesday</MenuItem>
                                <MenuItem value={3}>Wednesday</MenuItem>
                                <MenuItem value={4}>Thursday</MenuItem>
                                <MenuItem value={5}>Friday</MenuItem>
                                <MenuItem value={6}>Saturday</MenuItem>
                            </Select>
                        </FormControl>
                    </div>

                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker
                                    label="From Time"
                                    viewRenderers={{
                                        hours: renderTimeViewClock,
                                        minutes: renderTimeViewClock,
                                        seconds: renderTimeViewClock,
                                    }}
                                    value={fromTime}
                                    onChange={handleFromTimeChange}
                                    className='w-[100%]' />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <div>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['TimePicker']}>
                                <TimePicker
                                    label="To Time"
                                    viewRenderers={{
                                        hours: renderTimeViewClock,
                                        minutes: renderTimeViewClock,
                                        seconds: renderTimeViewClock,
                                    }}
                                    value={toTime}
                                    onChange={handleToTimeChange}
                                    className='w-[100%]' />
                            </DemoContainer>
                        </LocalizationProvider>
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            label="Consultation Charges"
                            value={consultationCharges}
                            onChange={(e) => setConsultationCharges(e.target.value)}
                            disabled={!charges}
                        />
                    </div>

                    <div>
                        <TextField
                            fullWidth
                            label="Follow up Charges"
                            value={followUpCharges}
                            onChange={(e) => setFollowUpCharges(e.target.value)}
                            disabled={!followUpChargesEnabled}
                        />
                    </div>
                </div>

                <div className='flex flex-col justify-end '>
                    <div>
                        <FormControlLabel control={<Checkbox checked={isFree} onChange={handleIsFreeCheckboxChange} />} label="Is Free" />
                        <FormControlLabel control={<Checkbox checked={followUpChargesEnabled} onChange={handleFollowUpChargesCheckboxChange} />} label="Follow up Charges" />
                    </div>
                    <div>
                        <FormControlLabel control={<Checkbox checked={active} onChange={() => setActive(!active)} />} label="Active" />
                        <Button onClick={(e) => submitData(e)}>Add</Button>
                    </div>
                </div>
            </div>

            {tableData.length > 0 ? (
                <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-5">
                    <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-blue-200">
                            <tr>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Action</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">From Time</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">To Time</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Consulting Charges</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Follow up Charge</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Active</th>
                                <th scope="col" className="px-6 py-4 font-medium text-gray-900">Is Free</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y shadow-lg divide-gray-100 border-t border-gray-100">
                            {tableData.map((data, index) => (
                                <tr key={index} className="hover:bg-gray-50">
                                    <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                        <button className='text-red-600' onClick={() => handleDelete(index)}>
                                            <MdDeleteOutline size={25} />
                                        </button>
                                    </th>
                                    <td className="px-6 py-4">
                                        {data.fromTime && data.fromTime.format('HH:mm A')}
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.toTime && data.toTime.format('HH:mm A')}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {data.isFree === true ? 0 : `${data.consultationCharges}`}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {data.followUpApplication === true ? `${data.followUpCharges}` : 0}
                                    </td>
                                    <td className=" py-4">
                                        <p className={`border text-center rounded-lg ${data.active ? 'border-green-500 font-semibold text-green-500' : 'border-red-500 font-semibold text-red-500'} py-2 px-3 `}>
                                            {data.active ? 'Yes' : 'No'}
                                        </p>
                                    </td>
                                    <td className="px-6 py-4">
                                        {data.isFree ? 'Free' : 'Not Free'}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <p className="text-center text-lg mt-8 text-gray-500 font-semibold">
                    Table is empty. Add data using the form above.
                </p>
            )}

        </div>
    )
}

export default ConsultationCharges;
