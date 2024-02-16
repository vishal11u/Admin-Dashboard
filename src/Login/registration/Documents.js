import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';

function Documents() {
    const [age, setAge] = useState('');
    const [fileList, setFileList] = useState([]);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleUploadChange = (info) => {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
        setFileList([info.file]);
    };

    const props = {
        name: 'file',
        action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
        headers: {
            authorization: 'authorization-text',
        },
        onChange: handleUploadChange,
        fileList,
    };

    return (
        <div className='flex items-center space-x-2 py-3 border-b-[2px]'>
            <FormControl sx={{ width: '27.3vw' }} size="small">
                <InputLabel id="demo-select-small-label">Identification Documents</InputLabel>
                <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Identification Documents" onChange={handleChange}>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
            <TextField id="outlined-basic" size='small' sx={{ width: "29.8%" }} label="Year" variant="outlined" />
            <Upload {...props} className='flex space-x-2 '>
                <Button icon={<UploadOutlined />} >Upload Identification Document</Button>
            </Upload>
        </div>
    )
}

export default Documents;
