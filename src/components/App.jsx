import { Statistics } from "./Statistics/Statistics";
import { FeedbackOptions } from "./Buttons/FeedbackOptions";
import { Section } from "./Section/Section";
import css from './Styles.module.css';
import { useState } from "react";

export const App = () => {
    
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const options = ["good", "neutral", "bad"];

    const updateState = (evt) => {
        const variable = evt.currentTarget.textContent.toLowerCase();
        switch (variable) {
            case "good":
                setGood((prevGood) => prevGood + 1);
                break;
            case "neutral":
                setNeutral((prevNeutral) => prevNeutral + 1);
                break;
            case "bad":
                setBad((prevBad) => prevBad + 1);
                break;
            default:
                break;
        }
    };

    const countTotalFeedback = () => {
            return good + neutral + bad
    };

    const countPositiveFeedbackPercentage = () => {
        return (
            Math.round((good/countTotalFeedback())*100)
        )
    };

return (
    <div className={css.allDiv}>
        <Section title="Please leave feedback">
            <FeedbackOptions 
            options={options} 
            onLeaveFeedback={updateState}
            />
        </Section>

        <Section title="Statistics">
            <Statistics
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={countTotalFeedback()} 
            positivePercentage={countPositiveFeedbackPercentage()}
            />
        </Section>
        </div>
    )
};
