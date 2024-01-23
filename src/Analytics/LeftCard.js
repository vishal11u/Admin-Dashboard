import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CountUp from 'react-countup';
import { IoPeopleSharp } from "react-icons/io5";
import { LiaCalendarWeekSolid } from "react-icons/lia";
import { MdNumbers } from "react-icons/md";

function LeftCard() {
  return (
    <div className='h-[40vh] space-y-5'>
      <div className='flex gap-3 mt-1'>
        <Card sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", backgroundColor: "#00693E" }}>
          <CardContent sx={{ width: "250px", height: "130px", color: "white", fontSize: "30px", fontWeight: "600" }}>
            <p className='text-[15px] font-normal flex items-center gap-1'><IoPeopleSharp />Visitors</p>
            <h1 className='flex items-center gap-1'><MdNumbers size={25} /><CountUp delay={0.4} end={72000} duration={0.6} /></h1>
            <h1 className='underline text-[15px] font-medium flex items-center gap-1'> <LiaCalendarWeekSolid />view weekly</h1>
          </CardContent>
        </Card>
        <Card sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", backgroundColor: "#2A3439" }}>
          <CardContent sx={{ width: "250px", height: "130px", color: "white", fontSize: "30px", fontWeight: "600" }}>
            <p className='text-[15px] font-normal flex items-center gap-1'><IoPeopleSharp />Visitors</p>
            <h1 className='flex items-center gap-1'><MdNumbers size={25} /><CountUp delay={0.4} end={60000} duration={0.6} /></h1>
            <h1 className='underline text-[15px] font-medium flex items-center gap-1'> <LiaCalendarWeekSolid />view weekly</h1>
          </CardContent>
        </Card>
      </div>
      <div className='flex gap-3'>
        <Card sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", backgroundColor: "#696969" }}>
          <CardContent sx={{ width: "250px", height: "130px", color: "white", fontSize: "30px", fontWeight: "600" }}>
            <p className='text-[15px] font-normal flex items-center gap-1'><IoPeopleSharp />Visitors</p>
            <h1 className='flex items-center gap-1'><MdNumbers size={25} /><CountUp delay={0.4} end={25000} duration={0.6} /></h1>
            <h1 className='underline text-[15px] font-medium flex items-center gap-1'> <LiaCalendarWeekSolid />view monthly</h1>
          </CardContent>
        </Card>
        <Card sx={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", backgroundColor: "#3B3C36" }}>
          <CardContent sx={{ width: "250px", height: "130px", color: "white", fontSize: "30px", fontWeight: "600" }}>
            <p className='text-[15px] font-normal flex items-center gap-1'><IoPeopleSharp />Visitors</p>
            <h1 className='flex items-center gap-1'><MdNumbers size={25} /><CountUp delay={0.4} end={31000} duration={0.6} /></h1>
            <h1 className='underline text-[15px] font-medium flex items-center gap-1'> <LiaCalendarWeekSolid />view monthly</h1>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default LeftCard