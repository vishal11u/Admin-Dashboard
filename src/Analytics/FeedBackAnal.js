import React from 'react'
import OPDFeedback from './feedbackcharts/OPDFeedback';
import IPDFeedback from './feedbackcharts/IPDFeedback';

function FeedBackAnal() {
    return (
        <div className='px-3 py-2 h-[100vh] w-full'>
            <h1 className='font-semibold text-[20px]'>Feedback Analytics</h1>
            <div className='flex items-center justify-between'>
                <OPDFeedback />
                <IPDFeedback />
            </div>
        </div>
    )
}

export default FeedBackAnal;