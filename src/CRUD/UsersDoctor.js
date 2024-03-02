import React, { useState } from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Modal, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { IoMdAddCircle } from 'react-icons/io';
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function UsersDoctor() {
    const [open, setOpen] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [viewModalOpen, setViewModalOpen] = useState(false);
    const [viewPatient, setViewPatient] = useState(null);
    const [doctors, setDoctors] = useState([
        {
            name: 'John Doe',
            specialty: 31,
            rollno: 1,
            url:
                'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600',
            email: 'john1@gmail.com',
        },
        {
            name: `Sophia O'Connor`,
            specialty: 22,
            rollno: 2,
            url:
                'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=600',
            email: 'alexa2@gmail.com',
        },
        {
            name: 'Michal Stark',
            specialty: 16,
            rollno: 3,
            url:
                'https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=600',
            email: 'michal3@gmail.com',
        },
        {
            name: 'Linda Andress',
            specialty: 99,
            rollno: 4,
            url:
                'https://images.pexels.com/photos/1729931/pexels-photo-1729931.jpeg?auto=compress&cs=tinysrgb&w=600',
            email: 'linda4@gmail.com',
        },
        {
            name: 'Ethan Miller',
            specialty: 71,
            rollno: 5,
            url:
                'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=600',
            email: 'ethan5@gmail.com',
        },
        {
            name: 'Mason Gupta',
            specialty: 25,
            rollno: 6,
            url:
                'https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=600',
            email: 'mason6@gmail.com',
        },
        {
            name: 'Mia Kapoor',
            specialty: 18,
            rollno: 7,
            url:
                'https://images.pexels.com/photos/1844012/pexels-photo-1844012.jpeg?auto=compress&cs=tinysrgb&w=600',
            email: 'mia7@gmail.com',
        },
        {
            name: 'Nelson Mandela',
            specialty: 32,
            rollno: 8,
            url:
                'https://images.pexels.com/photos/7983626/pexels-photo-7983626.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            email: 'nelson87@gmail.com',
        },
    ]);
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        email: '',
        url: '',
    });

    const itemsPerPage = 5;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentDoctors = doctors.slice(indexOfFirstItem, indexOfLastItem);

    const handleChangePage = (event, value) => {
        setCurrentPage(value);
    };

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        if (!formData.name || !formData.specialty || !formData.email) {
            toast.error('Fill all Input Feild', {
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
            setConfirmLoading(true);
            const updatedDoctors = [...doctors, { ...formData, url: image }];
            setDoctors(updatedDoctors);
            setTimeout(() => {
                setOpen(false);
                setConfirmLoading(false);
                setFormData({
                    name: '',
                    specialty: '',
                    email: '',
                    url: '',
                });
                setImage(true)
            }, 1000);
            toast.success('New Patient Added!', {
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

    const handleCancel = () => {
        setOpen(false);
    };

    const handleFileChange = (info) => {
        if (info.file.status === 'done' && info.file.response) {
            message.success(`${info.file.name} file uploaded successfully`);
            setImage(info.file.response.url);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    };

    const handleView = (index) => {
        const viewedPatient = currentDoctors[index];
        setViewPatient(viewedPatient);
        setViewModalOpen(true);
    };

    const handleViewModalCancel = () => {
        setViewModalOpen(false);
    };

    const handleEdit = (index) => {
        const doctorToEdit = currentDoctors[index];
        setFormData({
            name: doctorToEdit.name,
            specialty: doctorToEdit.specialty,
            rollno: doctorToEdit.rollno,
            url: doctorToEdit.url,
        });
        setImage(doctorToEdit.url);
        setOpen(true);
    };

    const handleDelete = (index) => {
        const updatedDoctors = [...doctors];
        updatedDoctors.splice(index, 1);
        setDoctors(updatedDoctors);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSearch = (searchName) => {
        if (searchName !== '') {
            const filteredDoctors = doctors.filter((doctor) =>
                doctor.name.toLowerCase().includes(searchName.toLowerCase())
            );
            setDoctors(filteredDoctors);
        } else {
            // setDoctors([...originalDoctors]);
            setDoctors([...doctors])
        }

    };

    // const handleReset = () => {
    //     setDoctors([...doctors]);
    // };

    return (
        <div className="h-full">
            <Modal
                title="Patient Details"
                visible={viewModalOpen}
                onCancel={handleViewModalCancel}
                footer={null}>
                {viewPatient && (
                    <div>
                        <img
                            className="h-[150px] w-[150px] rounded-2xl border shadow-lg mb-4"
                            src={viewPatient.url}
                            alt="name"
                            style={{ objectFit: 'cover' }} />
                        <p>Name: {viewPatient.name}</p>
                        <p>Age: {viewPatient.specialty}</p>
                        <p>Email: {viewPatient.email}</p>
                    </div>)}
            </Modal>
            <div className='text-center items-center py-3 flex justify-between'>
                <h1 className='text-[35px] font-semibold items-center'>
                    Patient List
                </h1>
                <div className='flex'>
                    <input
                        className='py-2 px-2 border text-[18px] outline-none '
                        type='text'
                        placeholder='Search Patient Name..'
                        onChange={(e) => handleSearch(e.target.value)} />
                    <button
                        className='py-2 px-3 border text-[18px] outline-none bg-red-600 text-white transition-all ease-in-out active:bg-gray-400'
                        onClick={() => setDoctors([...doctors])} >
                        Reset
                    </button>
                </div>
            </div>
            <div>
                <button
                    className='flex justify-center items-center px-2 gap-1 py-1 shadow-lg bg-black text-white text-base font-semibold'
                    onClick={showModal} >
                    <IoMdAddCircle /> Add
                </button>
                <Modal
                    title='Doctor Details'
                    visible={open}
                    onOk={handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={handleCancel}
                >
                    <form className='grid grid-cols-1'>
                        <label className='mt-2 font-semibold' htmlFor='name'>
                            Name*
                        </label>
                        <Input
                            className='border'
                            type='text'
                            id='name'
                            name='name'
                            placeholder='Enter Name'
                            value={formData.name}
                            onChange={handleChange}
                        />

                        <label className='mt-2 font-semibold' htmlFor='specialty'>
                            Age*
                        </label>
                        <Input
                            className='border'
                            type='number'
                            id='specialty'
                            name='specialty'
                            placeholder='Enter Age'
                            value={formData.specialty}
                            onChange={handleChange}
                        />

                        <label className='mt-2 font-semibold' htmlFor='email'>
                            Email *
                        </label>
                        <Input
                            className='border'
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Enter Email'
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <label className='mt-2 font-semibold' htmlFor='image'>
                            Upload Image*
                        </label>
                        <Upload
                            className='mt-2'
                            name='file'
                            listType='picture-card'
                            showUploadList={false}
                            action='YOUR_SERVER_UPLOAD_ENDPOINT'
                            beforeUpload={() => false}
                            onChange={handleFileChange}
                        >
                            {image ? (
                                <img src={image} alt='Doctor' style={{ width: '100%' }} />
                            ) : (
                                <div>
                                    <UploadOutlined />
                                    <div style={{ marginTop: 8 }}>Upload</div>
                                </div>
                            )}
                        </Upload>

                    </form>
                </Modal>
            </div>

            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md mt-2">
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th scope="col" className="px-6 py-4 font-medium  border">Profile Image</th>
                            <th scope="col" className="px-3 py-4 font-medium border">Name</th>
                            <th scope="col" className="px-6 py-4 font-medium text-center border">Age</th>
                            <th scope="col" className="px-6 py-4 font-medium border">Email</th>
                            <th scope="col" className="px-4 py-4 font-medium text-center border">View</th>
                            <th scope="col" className="px-4 py-4 font-medium text-center border">Edit</th>
                            <th scope="col" className="px-3 py-4 font-medium text-center border">Delete</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                        {currentDoctors.map((data, index) => (
                            <tr key={data.rollno} className="hover:bg-gray-50">
                                <th className="flex gap-3 px-6 py-2 font-normal text-gray-900">
                                    <img className='h-16 w-16 flex mx-2 rounded-full object-cover' src={data.url} alt='' />
                                </th>
                                <td className="px-3 py-2 ">
                                    {data.name}
                                </td>
                                <td className="px-4  py-2 text-center">
                                    {data.specialty}
                                </td>
                                <td className="px-6 py-2 ">
                                    {data.email}
                                </td>
                                <td className=" text-center py-2 ">
                                    <button className='py-2 rounded-md px-2 shadow-lg text-white bg-green-500' type='button' onClick={() => handleView(index)}>
                                        <FaEye size={20} />
                                    </button>
                                </td>
                                <td className=" text-center py-2 ">
                                    <button className='py-2 rounded-md px-2 shadow-lg text-white bg-blue-600' type='button' onClick={() => handleEdit(index)}>
                                        <FaPen size={20} />
                                    </button>
                                </td>
                                <td className="px- text-center py-2">
                                    <button className='py-2 rounded-md px-2 shadow-lg text-white bg-red-600' type='button' onClick={() => handleDelete(index)}>
                                        <MdDelete size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Stack spacing={2} sx={{ padding: "15px 30px", float: "right" }}>
                    <Pagination
                        count={Math.ceil(doctors.length / itemsPerPage)}
                        page={currentPage}
                        onChange={handleChangePage}
                        variant="outlined"
                        color="primary"
                    />
                </Stack>
            </div>
        </div>
    );
}

export default UsersDoctor;
