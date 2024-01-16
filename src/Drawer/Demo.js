import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoCaretBackCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { GiClick } from "react-icons/gi";

function LinearProgressWithLabel(props) {
    return (
        <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box sx={{ width: "100%", mr: 1 }}>
                <LinearProgress variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    props.value
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

function YourComponent() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [reviewLabels, setReviewLabels] = useState([]);
    const [isReviewClicked, setIsReviewClicked] = useState(false); // New state for tracking click

    const templateQuestions = [
        // ... (your templateQuestions array remains unchanged)
    ];

    const handleButtonClick = (questionId, value) => {
        setReviewLabels(prevReviewLabels => {
            // ... (your existing code remains unchanged)
        });
    };

    const SubmitReview = (e) => {
        const totalQuestions = templateQuestions[0].questions.length;
        if (reviewLabels.length === totalQuestions) {
            console.log("Review Labels:", reviewLabels);
            alert("Submitted");
            navigate('/');
        } else {
            alert("Please review all questions before submitting.");
        }
    };

    const handleReviewClick = () => {
        setIsReviewClicked(true);
    };

    return (
        <div className="container mx-auto px-6">
            <div className='mt-3 flex justify-between px-2'>
                <Link
                    to='/'
                    className={`flex items-center text-base gap-1 ${isReviewClicked ? 'bg-black' : ''} text-white py-1 px-2 w-[16vw] rounded-lg`}
                    onClick={handleReviewClick} // Call the function on click
                >
                    <IoCaretBackCircle size={25} />
                    Back to Template Selection
                </Link>
                <button type='submit' className='flex items-center gap-1 py-1 px-4 border-none bg-green-600 text-white rounded-lg' onClick={SubmitReview} >
                    <GiClick size={21} />
                    Submit your review
                </button>
            </div>
            <Box sx={{ width: "100%", padding: "5px" }}>
                <LinearProgressWithLabel value={progress} />
            </Box>
            {templateQuestions.map((template) => (
                <div key={template.id} className="bg-gray-100 shadow-lg rounded-lg pb-2 border mb-4">
                   
                </div>
            ))}
        </div>
    );
}

// ... (getButtonColor function remains unchanged)

export default YourComponent;
