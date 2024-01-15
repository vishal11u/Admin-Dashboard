import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoCaretBackCircle } from "react-icons/io5";
import { Link } from 'react-router-dom';

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
    const [progress, setProgress] = useState(0);

    const templateQuestions = [
        {
            id: 11,
            headers: "The purpose of this questionnaire is to ensure that the Cardiology Workbook is as usable as possible.",
            footer: "The purpose of this questionnaire is to ensure that the Cardiology Workbook is as usable as possible",
            questions: [
                { qid: 1, depId: 1, depName: "Cardiology", question: "How satisfied are you with the overall experience during your visit to the Cardiology Department?" },
                { qid: 2, depId: 1, depName: "Cardiology", question: "Did the front desk staff provide clear and helpful information during the check-in process?" },
                { qid: 3, depId: null, depName: null, question: "How would you rate the professionalism and friendliness of the nursing and support staff?" },
                { qid: 4, depId: null, depName: null, question: "Were your concerns and questions addressed by the cardiologist in a clear and understandable manner?" },
                { qid: 5, depId: null, depName: null, question: "On a scale of 1 to 5, how satisfied are you with the cleanliness and comfort of the facilities in the Cardiology Department?" },
                { qid: 6, depId: 1, depName: "Cardiology", question: "Did you experience any delays or extended waiting times beyond what you expected?" },
                { qid: 7, depId: 1, depName: "Cardiology", question: "How well did the Cardiology Department staff communicate with you regarding your treatment plan and next steps?" },
                { qid: 8, depId: null, depName: null, question: "Were the diagnostic procedures and tests thoroughly explained to you before they were performed?" },
            ],
            hasConclusionQuestions: true,
            answerType: "Emoji",
            ansPatternScale: [
                { value: 1, reviewLabel: "Dissatisfied" },
                { value: 2, reviewLabel: "Poor" },
                { value: 3, reviewLabel: "Average" },
                { value: 4, reviewLabel: "Satisfied" },
                { value: 5, reviewLabel: "Highly Satisfied" },
            ],
            templateName: "Template One Consultant",
            conclusionQuestionAns: {
                conclusionAnswers: [
                    { id: "Yes", label: "Yes", value: "Yes" },
                    { id: "No", label: "No", value: "No" },
                    { id: "May Be yes", label: "May Be yes", value: "May Be yes" },
                    { id: "Not At All", label: "Not At All", value: "Not At All" },
                ],
                conclusionQuestion: "How likely are you to recommend our Cardiology Department to friends or family?",
            },
        },
    ];

    const handleButtonClick = () => {
        const totalQuestions = templateQuestions[0].questions.length;
        console.log(totalQuestions);
        const totalReviewLabels = templateQuestions[0].ansPatternScale.length;
        const newProgress = (progress + 1) * (100 / (totalQuestions * totalReviewLabels));
        setProgress(Math.min(newProgress, 100));
        // alert("Submited")
    };

    return (
        <div className="container mx-auto px-6">
            <div className='mt-3'>
                <Link to='/' className='flex items-center text-base gap-1 bg-black text-white py-1 px-2 w-[16vw] rounded-lg' type='button'>
                    <IoCaretBackCircle size={25} />
                    Back to Template Selection
                </Link>
            </div>
            <Box sx={{ width: "100%", padding: "5px" }}>
                <LinearProgressWithLabel value={progress} />
            </Box>
            {templateQuestions.map((template) => (
                <div key={template.id} className="bg-gray-100 shadow-lg rounded-lg pb-2 border mb-4">
                    {/* <h1 className="text-xl font-semibold mb-4">{template.templateName}</h1> */}
                    <p className="mb-2 py-2 rounded-t-md pl-4 font-semibold bg-blue-500">{template.headers}</p>
                    <h3 className="text-lg font-semibold pl-4">Questions:</h3>
                    {template.questions.map((question) => (
                        <div key={question.qid} className="mb-3 flex px-4 w-[100%] items-center justify-center space-x-4">
                            <p className="mb-1 w-[100%] mt-3">{question.qid}:{question.question}</p>
                            {template.ansPatternScale.map((scale, index) => (
                                <div className=''>
                                    <button key={scale.value}
                                        className={`py-2 w-[7.5vw] text-[13px] rounded-3xl ${getButtonColor(scale.value)}`}
                                        onClick={() => { handleButtonClick(); }}>
                                        {scale.reviewLabel}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
                    {/* <p className="mt-4">Conclusion Question: {template.conclusionQuestionAns.conclusionQuestion}</p> */}
                </div>
            ))}
        </div>
    );
}

function getButtonColor(value) {
    switch (value) {
        case 1:
            return 'bg-red-500 text-white';
        case 2:
            return 'bg-orange-500 text-white';
        case 3:
            return 'bg-yellow-500 text-black';
        case 4:
            return 'bg-green-500 text-white';
        case 5:
            return 'bg-blue-500 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
}

export default YourComponent;