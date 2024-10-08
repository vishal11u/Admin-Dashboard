import React, { useState } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { LoadingOutlined } from "@ant-design/icons";
import { message, Upload } from "antd";
import Select from 'react-select';
import { IoPersonAdd } from "react-icons/io5";
import dayjs from 'dayjs';
import { Typography } from '@mui/material';

const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
        message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
        message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
};

function Section3({ register, errors }) {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState();

    const options = [
        { id: 1, value: 'Alliance Multispeciality Hospital', label: 'Alliance Multispeciality Hospital' },
    ];

    const handleChange = (info) => {
        if (info.file.status === "uploading") {
            setLoading(true);
            return;
        }
        if (info.file.status === "done") {
            getBase64(info.file.originFileObj, (url) => {
                setLoading(false);
                setImageUrl(url);
            });
        }
    };
    const uploadButton = (
        <button style={{ border: 0, background: "none", }} type="button" >
            {loading ? <LoadingOutlined /> : <IoPersonAdd size={40} />}
            <div style={{ marginTop: 8, }} >
                Upload
            </div>
        </button>
    );
    return (
        <div>
            <div className='flex justify-between space-y-2 space-x-2'>
                <div className='w-[70%] space-y-2 '>
                    <LocalizationProvider dateAdapter={AdapterDayjs} >
                        <DemoContainer components={['DatePicker']} >
                            <DatePicker label="Date" sx={{ width: '24vw' }} slotProps={{ textField: { size: "small" } }} value={new dayjs()} />
                        </DemoContainer>
                    </LocalizationProvider>
                    <TextField id="outlined-basic" size='small' sx={{ width: "96.1%", paddingTop: '5px' }} aria-label='Last Name' label="Last Name" variant="outlined"
                        {...register("Lastname")}
                        error={errors.Lastname?.message}
                    //  InputLabelProps={{shrink: true}} 
                    />
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '10px' ,paddingTop:'8.5px'}}>
                        <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                        <RadioGroup
                            row
                            aria-labelledby="demo-row-radio-buttons-group-label"
                            name="row-radio-buttons-group"
                            sx={{ display: 'flex', flexDirection: 'row' }}
                        >
                            <FormControlLabel value="male" control={<Radio size="small" />} label={<Typography variant="body2">Male</Typography>} sx={{ fontSize: 'small' }} />
                            <FormControlLabel value="female" control={<Radio size="small" />} label={<Typography variant="body2">Female</Typography>} sx={{ fontSize: 'small' }} />
                            <FormControlLabel value="other" control={<Radio size="small" />} label={<Typography variant="body2">Other</Typography>} sx={{ fontSize: 'small' }} />
                        </RadioGroup>
                    </FormControl>
                </div>
                <div className='border flex justify-center rounded-md items-center px-8 h-[20vh] w-[30%]'>
                    <Upload name="avatar" listType="picture-card" className="avatar-uploader" showUploadList={false}
                        action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188" beforeUpload={beforeUpload} onChange={handleChange}>
                        {imageUrl ? (
                            <img src={imageUrl} alt="avatar" style={{ width: "100%", height: "100%" }} />
                        ) : (
                            uploadButton)}
                    </Upload>
                </div>
            </div>
            <div className='flex justify-center w-full space-x-3 mt-5'>
                <Select options={options} placeholder="Natinality" className='w-full' />
                <Select options={options} placeholder="Blood Group" className='w-full' />
            </div>
        </div>
    )
}

export default Section3;