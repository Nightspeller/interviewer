import * as React from 'react';
import './questions-and-answers.component.css';

function QuestionsAndAnswers({info, callback}: any) {
    let questionsAndAnswers = [...info];
    let updateProperty = (index: number, key: string, value: string) => {
        questionsAndAnswers[index][key] = value;
        callback(questionsAndAnswers);
    };
    let addQuestion = (event: any) => {
        event.preventDefault();
        questionsAndAnswers.push({question: '', answer: ''});
        callback(questionsAndAnswers);
    };
    let deleteQuestion = (event: any) => {
        event.preventDefault();
        questionsAndAnswers.pop();
        callback(questionsAndAnswers);
    };
    return (
        <div className="s-grid questions-and-answers">
            <div className="s-col-full s-content-center">
                Please document comments related to Technical/Domain/Functional Skills
            </div>
            <div className="s-col-6 s-content-center">
                Questions Asked
            </div>
            <div className="s-col-6 s-content-center">
                Your feedback on candidate’s responses
            </div>
            {questionsAndAnswers.map((elem: any, index: number) =>
                [
                    <div className="s-col-6 s-content-center">
                        <textarea
                            placeholder="Please enter the question"
                            onChange={
                                (event: any) => {
                                    updateProperty(index, `question`, event.nativeEvent.target.value)
                                }
                            }
                            value={elem.question}
                        />
                    </div>,
                    <div className="s-col-6 s-content-center">
                        <textarea
                            placeholder="Please enter an answer"
                            onChange={
                                (event: any) => {
                                    updateProperty(index, `answer`, event.nativeEvent.target.value)
                                }
                            }
                            value={elem.answer}
                        />
                    </div>
                ]
            )}
            <div className="s-col-6 s-content-center hide_from_print">
                <button onClick={addQuestion}>Add another question</button>
            </div>
            <div className="s-col-6 s-content-center hide_from_print">
                <button onClick={deleteQuestion}>Delete last question</button>
            </div>
        </div>
    );
}

export default QuestionsAndAnswers;
