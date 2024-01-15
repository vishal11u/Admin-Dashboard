import React, { useState } from 'react';
import { FaEye, FaPen } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Modal, Input, Upload, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { IoMdAddCircle } from "react-icons/io";

function UsersDoctor() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [image, setImage] = useState(null);
    const [doctors, setDoctors] = useState([
        {
            name: 'John Doe',
            specialty: 'Surgenist',
            rollno: 1,
            url: 'http://www.writergirl.com/wp-content/uploads/2014/11/Doctor-790X1024.jpg',
            email: 'john1@gmail.com',
        },
        {
            name: 'Alexa Lee',
            specialty: 'Cardiologist',
            rollno: 2,
            url: 'https://leman-clinic.ch/wp-content/uploads/2018/11/02.jpg',
            email: 'alexa2@gmail.com',
        }
    ]);
    const [formData, setFormData] = useState({
        name: '',
        specialty: '',
        email: '',
    });

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
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
            });
            setImage(null);
        }, 1000);
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
        console.log('View doctor:', doctors[index]);
    };

    const handleEdit = (index) => {
        const doctorToEdit = doctors[index];
        setFormData({
            name: doctorToEdit.name,
            specialty: doctorToEdit.specialty,
            rollno: doctorToEdit.rollno,
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

    return (
        <div className="">
            <div className='text-center py-5 text-[30px] font-semibold'>
                <h1>Doctor's Details</h1>
            </div>
            <div>
                <button className='flex justify-center items-center px-2 gap-1 py-1 rounded-md shadow-lg bg-red-600 text-white text-lg font-semibold' onClick={showModal}>
                    <IoMdAddCircle /> ADD
                </button>
                <Modal title="Doctor Details"
                    visible={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
                    <form className="grid grid-cols-1">
                        <label htmlFor="name">Name*</label>
                        <Input className="border" type="text" id="name" name="name" placeholder="Enter Name" value={formData.name} onChange={handleChange} />

                        <label htmlFor="specialty">Department*</label>
                        <Input className="border" type="text" id="specialty" name="specialty" placeholder="Enter Department" value={formData.specialty} onChange={handleChange} />

                        <label htmlFor="email">Email *</label>
                        <Input className="border" type="email" id="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />

                        <label htmlFor="image">Upload Image*</label>
                        <Upload
                            name="file"
                            listType="picture-card"
                            showUploadList={false}
                            action="YOUR_SERVER_UPLOAD_ENDPOINT" // Replace with your server upload endpoint
                            beforeUpload={() => false}
                            onChange={handleFileChange}
                        >
                            {image ? (
                                <img src={image} alt="Doctor" style={{ width: '100%' }} />
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
                    <div className="flex shadow-lg mt-5 justify-center rounded-md items-center border px-2 space-x-5 h-[25vh] w-[33vw] transition-all duration-300 hover:scale-[1.05]"
                        key={doctor.rollno} >
                        <div>
                            <img className="h-[21vh] w-[10vw] rounded-2xl border shadow-lg" src={doctor.url} alt="" />
                        </div>
                        <div className='space-y-2'>
                            <h2 className="border py-2 px-2">Name: {doctor.name}</h2>
                            <p className="border py-2 px-2">Speciality: {doctor.specialty}</p>
                            <p className="border py-2 px-2">Email: {doctor.email}</p>
                        </div>
                        <div className="flex space-y-3 flex-col">
                            <button className='py-2 rounded-md px-2 bg-yellow-500' onClick={() => handleView(index)}>
                                <FaEye size={20} />
                            </button>
                            <button className='py-2 rounded-md px-2 text-white bg-blue-600' onClick={() => handleEdit(index)}>
                                <FaPen size={20} />
                            </button>
                            <button className='py-2 rounded-md px-2 text-white bg-red-600' onClick={() => handleDelete(index)}>
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
