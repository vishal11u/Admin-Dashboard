import React from 'react';
import Docs from './google-docs.png';
import IncomeExp from './sub-charts/IncomeExp';
import PaymentType from './sub-charts/PaymentType';
import DrHospShare from './sub-charts/DrHospShare';
import IPDIncome from './sub-charts/IPDIncome';
import OPDIncome from './sub-charts/OPDIncome';

function BillingAnalyze() {
    const BillingData = [
        {
            id: 1,
            label: "Today's Revenue",
            count: "₹300",
            icon: Docs,
            bgColor: "blue-500"
        },
        {
            id: 2,
            label: "OPD",
            count: "₹500",
            icon: Docs,
            bgColor: "red-500"
        },
        {
            id: 3,
            label: "IPD",
            count: "₹4500",
            icon: Docs,
            bgColor: "green-600"
        },
        {
            id: 4,
            label: "Radiology",
            count: "₹76,520",
            icon: Docs,
            bgColor: "gray-600"
        },
        {
            id: 5,
            label: "Pathology",
            count: "₹300",
            icon: Docs,
            bgColor: "yellow-500"
        },
        {
            id: 6,
            label: "Pharmacy Collection",
            count: "₹9000",
            icon: Docs,
            bgColor: "blue-500"
        },
        {
            id: 7,
            label: "Equipment",
            count: "₹4,785",
            icon: Docs,
            bgColor: "red-500"
        },
        {
            id: 8,
            label: "Self Outstanding",
            count: "₹1,326",
            icon: Docs,
            bgColor: "green-600"
        },
        {
            id: 9,
            label: "Company outstanding",
            count: "₹8000",
            icon: Docs,
            bgColor: "gray-600"
        },
        {
            id: 10,
            label: "Total Outstanding",
            count: "₹12,000",
            icon: Docs,
            bgColor: "yellow-500"
        },
    ]

    return (
        <div className='w-full h-[107vh] bg- px-4 py-2'>
            <h1 className='font-semibold text-[22px]'>Billing :</h1>
            {/*  Card section ---------------- */}
            <div className='grid grid-cols-5 px- -mt-1 items-center gap-x-3'>
                {BillingData.map((item) => (
                    <div className={`bg-${item.bgColor} flex gap-x-2 text-white py-1 mt-2.5 px-2 rounded-md shadow transition-all hover:-translate-y-1`} key={item.id}>
                        <div className='rounded-full bg-white py-2.5 px-2.5 mt-0.5 h-11'>
                            <img src={item.icon} className='h-6' alt='' />
                        </div>
                        <div className='font-semibold text-[15px]'>
                            <h1>{item.label}</h1>
                            <h1>{item.count}</h1>
                        </div>
                    </div>
                ))}
            </div>

            {/*  ----------- Chart section ------------------ */}
            <div className='flex items-center justify-between'>
                <IncomeExp />
                <PaymentType />
            </div>
            <div className='flex items-center justify-between'>
                <DrHospShare />
                <IPDIncome />
                <OPDIncome />
            </div>
            {/* ---------------------------- */}
        </div>
    )
}

export default BillingAnalyze;