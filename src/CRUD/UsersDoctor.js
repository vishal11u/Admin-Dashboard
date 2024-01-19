import React, { useState } from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Modal, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { IoMdAddCircle } from 'react-icons/io';

function UsersDoctor() {
    const [open, setOpen] = useState(false);
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
            name: 'Alexa Lee',
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
    ]);
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        email: '',
        url: '',
    });

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        if (!formData.name || !formData.specialty || !formData.email) {
            alert('Fill All Data');
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
        const viewedPatient = doctors[index];
        setViewPatient(viewedPatient);
        setViewModalOpen(true);
    };

    const handleViewModalCancel = () => {
        setViewModalOpen(false);
    };

    const handleEdit = (index) => {
        const doctorToEdit = doctors[index];
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
        const filteredDoctors = doctors.filter((doctor) =>
            doctor.name.toLowerCase().includes(searchName.toLowerCase())
        );
        setDoctors(filteredDoctors);
    };

    return (
        <div className="h-screen">
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
            <div className='text-center items-center py-5 flex justify-between'>
                <h1 className='text-[35px] font-semibold items-center'>
                    Patient Details
                </h1>
                <div className='flex gap-2'>
                    <input
                        className='py-1 px-2 border rounded-md text-[20px] outline-none '
                        type='search'
                        placeholder='Search Patient Name..'
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <button
                        className='py-1 px-2 border rounded-md text-[20px] outline-none bg-gray-300'
                        onClick={() => setDoctors(doctors)}
                    >
                        Reset
                    </button>
                </div>
            </div>
            <div>
                <button
                    className='flex justify-center items-center px-2 gap-1 py-1 rounded-md shadow-lg bg-red-600 text-white text-lg font-semibold'
                    onClick={showModal}
                >
                    <IoMdAddCircle /> ADD New Patient
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
                            placeholder='Enter Department'
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
                            placeholder='Email'
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

            <div className='grid grid-cols-2'>
                {doctors.map((doctor, index) => (
                    <div
                        className='flex shadow-lg mt-5 bg-gray-200 justify-center overflow-hidden rounded-md items-center border px-2 space-x-5 h-[25vh] w-[32vw] transition-all duration-300 hover:scale-[1.05]'
                        key={doctor.rollno}
                    >
                        <div>
                            <img
                                className='h-[21vh] w-[10vw] rounded-2xl border shadow-lg'
                                src={doctor.url}
                                alt='name'
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className='space-y-3'>
                            <h2 className='border border-black rounded-lg py-2 px-2'>
                                Name: {doctor.name}
                            </h2>
                            <p className='border border-black rounded-lg py-2 px-2'>
                                Age: {doctor.specialty}
                            </p>
                            <p className='border border-black rounded-lg py-2 px-2'>
                                Email: {doctor.email}
                            </p>
                        </div>
                        <div className='flex space-y-4 flex-col'>
                            <button
                                className='py-2 rounded-md px-2 bg-yellow-500'
                                onClick={() => handleView(index)}
                            >
                                <FaEye size={20} />
                            </button>
                            <button
                                className='py-2 rounded-md px-2 text-white bg-blue-600'
                                onClick={() => handleEdit(index)}
                            >
                                <FaPen size={20} />
                            </button>
                            <button
                                className='py-2 rounded-md px-2 text-white bg-red-600'
                                onClick={() => handleDelete(index)}
                            >
                                <MdDelete size={20} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UsersDoctor;
