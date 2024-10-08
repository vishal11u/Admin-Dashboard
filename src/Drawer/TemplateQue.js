import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { IoCaretBackCircle } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import { GiClick } from "react-icons/gi";
import { toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function YourComponent() {
    const navigate = useNavigate();
    const [progress, setProgress] = useState(0);
    const [reviewLabels, setReviewLabels] = useState([]);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [questionCount, setQuestionCount] = useState(0);

    const templateQuestions = [
        {
            id: 11,
            headers: "The purpose of this questionnaire is to ensure that the Cardiology Workbook is as usable as possible.",
            footer: "The purpose of this questionnaire is to ensure that the Cardiology Workbook is as usable as possible",
            questions: [
                { qid: 1, depId: 1, depName: "Cardiology", question: "How satisfied are you with the overall experience during your visit to the Cardiology Department?" },
                { qid: 2, depId: 1, depName: "Cardiology", question: "Did the front desk staff provide clear and helpful information during the check-in process?" },
                { qid: 3, depId: 1, depName: "Cardiology", question: "How would you rate the professionalism and friendliness of the nursing and support staff?" },
                { qid: 4, depId: 1, depName: "Cardiology", question: "Were your concerns and questions addressed by the cardiologist in a clear and understandable manner?" },
                { qid: 5, depId: 1, depName: "Cardiology", question: "On a scale of 1 to 5, how satisfied are you with the cleanliness and comfort of the facilities in the Cardiology Department?" },
                { qid: 6, depId: 1, depName: "Cardiology", question: "Did you experience any delays or extended waiting times beyond what you expected?" },
                { qid: 7, depId: 1, depName: "Cardiology", question: "How well did the Cardiology Department staff communicate with you regarding your treatment plan and next steps?" },
                { qid: 8, depId: 1, depName: "Cardiology", question: "Were the diagnostic procedures and tests thoroughly explained to you before they were performed?" },
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

    const handleButtonClick = (questionId, value) => {
        setReviewLabels(prevReviewLabels => {
            const existingReviewIndex = prevReviewLabels.findIndex(review => review.questionId === questionId);
            if (existingReviewIndex !== -1) {
                return prevReviewLabels;
            }
            const updatedReviewLabels = [...prevReviewLabels, { questionId, value }];
            // const totalQuestions = templateQuestions[0].questions.length;
            // const totalReviewLabels = templateQuestions[0].ansPatternScale.length;
            setSelectedOptions(prevSelectedOptions => ({
                ...prevSelectedOptions,
                [questionId]: value,
            }));
            setQuestionCount(prevCount => prevCount + 1);
            return updatedReviewLabels;
        });
    };

    const SubmitReview = (e) => {
        const totalQuestions = templateQuestions[0].questions.length;
        if (reviewLabels.length === totalQuestions) {
            toast.success('Review Submited!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            navigate('/');
        } else {
            toast.warning('Feedback form is incomplete!', {
                position: "top-right",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
        }
    };

    return (
        <div className="container mx-auto px-6">
            <div className='bg-blue-200 flex justify-between items-center py-2 rounded-lg px-5 mt-2'>
                <h1 className='font-medium'>Employ No : <span className='font-normal'>Emp123456</span></h1>
                <h1 className='font-medium'>Employ Name : <span className='font-normal'>Rajkumar Pathak</span></h1>
                <h1 className='font-medium'>Department : <span className='font-normal'>Cardiology</span></h1>
            </div>
            <div className='mt-1 flex items-center justify-between px-2 py-4'>
                <Link to='/' className='flex items-center text-sm gap-1 bg-black text-white py-2 px-2 w-[16vw] rounded-lg'>
                    <IoCaretBackCircle size={22} />
                    Back to Template Selection
                </Link>
                <div>
                    <p className="text-lg font-semibold pl-4">Questions answered: {questionCount > 0 ? questionCount : '0'}/15</p>
                </div>
                <button type='submit' className='flex items-center gap-1 py-2 px-4 border-none text-sm bg-green-600 text-white rounded-lg' onClick={SubmitReview} >
                    <GiClick size={21} />
                    Submit your review
                </button>
            </div>

            {templateQuestions.map((template) => (
                <div key={template.id} className="bg-gray-100 shadow-lg rounded-lg pb-2 border mb-4">
                    <p className="mb-2 py-3 text-white rounded-t-md pl-4 font-semibold bg-blue-600">{template.headers}</p>
                    <h3 className="text-lg font-semibold pl-4">Questions:</h3>
                    {template.questions.map((question) => (
                        <div key={question.qid} className="mb-3 flex px-4 w-[100%] items-center justify-center space-x-4">
                            <p className="mb-1 w-[100%] mt-3">{question.qid}. {question.question}</p>
                            {template.ansPatternScale.map((scale, index) => (
                                <div className=''>
                                    <button
                                        key={scale.value}
                                        className={`py-2 w-[7.5vw] text-[13px] rounded-tl-2xl rounded-br-2xl ${selectedOptions[question.qid] === scale.value ? 'animate-bounce' : ''} ${getButtonColor(scale.value)}`}
                                        onClick={() => { handleButtonClick(question.qid, scale.value); }}>
                                        {scale.reviewLabel}
                                    </button>
                                </div>
                            ))}
                        </div>
                    ))}
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
            return 'bg-green-600 text-white';
        case 5:
            return 'bg-blue-500 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
}

export default YourComponent;
