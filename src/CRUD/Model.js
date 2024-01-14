import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const App = () => {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [image, setImage] = useState(null);

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    const handleFileChange = (e) => {
        const selectedImage = e.target.files[0];
        if (selectedImage) {
            const reader = new FileReader();
            reader.onload = (event) => {
                setImage(event.target.result);
            };
            reader.readAsDataURL(selectedImage);
        }
    };

    return (
        <>
            <div>
                <Button type="primary" onClick={showModal}>
                    + ADD
                </Button>
                <Modal title="Title" open={open} onOk={handleOk} confirmLoading={confirmLoading} onCancel={handleCancel}>
                    <form className='grid grid-cols-1' onSubmit={handleOk}>
                        <label htmlFor="name">Name*</label>
                        <input className='border' type='text' id='name' name='fname' placeholder='Enter Name' />

                        <label htmlFor="name">Department*</label>
                        <input className='border' type='text' id='name' name='fname' placeholder='Enter Department' />

                        <label htmlFor="name">Enroll No*</label>
                        <input className='border' type='number' id='name' name='fname' placeholder='Enroll No' />

                        <label htmlFor="image">Upload Image*</label>
                        <input className='border' type='file' id='image' name='image' onChange={handleFileChange} />
                        {image && <img src={image} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                    </form>
                </Modal>
            </div>
        </>
    );
};

export default App;
