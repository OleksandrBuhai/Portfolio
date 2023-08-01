import { useState, useEffect } from 'react';

const Typewriter = ({ text, delay, infinite, isAnimated }) => {
    const [currentText, setCurrentText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout;

        if (currentIndex <= text.length) {
            timeout = setTimeout(() => {
                setCurrentText(prevText => prevText + text[currentIndex]);
                setCurrentIndex(prevIndex => prevIndex + 1);
            }, delay);

        } else if (infinite) { // ADD THIS CHECK
            setCurrentIndex(0);
            setCurrentText('');
        } else if (!isAnimated){
            setCurrentText(text); // Set the full text immediately if isAnimated is false
            setCurrentIndex(text.length);
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, delay, infinite,isAnimated, text]);

    return <span>{currentText}</span>;
};

export default Typewriter;