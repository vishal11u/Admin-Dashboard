import React from 'react';

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

function YourComponent() {
    return (
        <div className="container mx-auto my-8">
            {templateQuestions.map((template) => (
                <div key={template.id} className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4">{template.templateName}</h2>
                    <p className="mb-2">{template.headers}</p>
                    {/* <p className="mb-2">{template.footer}</p> */}
                    <h3 className="text-lg font-semibold mb-2">Questions:</h3>
                    {template.questions.map((question) => (
                        <div key={question.qid} className="mb-3 flex items-center space-x-4">
                            <p className="mb-1">{question.question}</p>
                            {template.ansPatternScale.map(scale => (
                                <button key={scale.value} className={`px-4 py-2 rounded ${getButtonColor(scale.value)}`}>
                                    {scale.reviewLabel}
                                </button>
                            ))}
                        </div>
                    ))}
                    <p className="mt-4">Conclusion Question: {template.conclusionQuestionAns.conclusionQuestion}</p>
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
