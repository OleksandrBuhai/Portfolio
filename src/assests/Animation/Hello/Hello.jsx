import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const EmojiContainer = styled.div`
  text-align: center;
  padding: 20px;
`;

const EmojiWrapper = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
`;

const floatAnimation = keyframes`
  0% {
    opacity: 1;
    transform: translate(0, 0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translate(calc(-50% + 50px), calc(-50% + 50px)) scale(2);
  }
`;

const Emoji = styled.span`
  position: absolute;
  font-size: 24px;
  animation: ${({ animationDuration }) => floatAnimation} ${({ animationDuration }) => animationDuration} ease-in-out 1;
  cursor: pointer;
`;

const HandEmoji = styled.span`
  font-size: 48px;
  cursor: pointer;
`;

const Hello = () => {
    const [emojis, setEmojis] = useState([]);
    const [counter, setCounter] = useState(1);

    const handleEmojiClick = (id) => {
        const updatedEmojis = emojis.map((emoji) => {
            if (emoji.id === id) {
                return {
                    ...emoji,
                    animationDuration: `${Math.random() * 3 + 2}s`, // Randomize animation duration
                    top: `${Math.random() * 100}px`, // Randomize top position
                    left: `${Math.random() * 100}px`, // Randomize left position
                };
            }
            return emoji;
        });

        setEmojis(updatedEmojis);
    };

    const addEmoji = () => {
        const newEmoji = {
            id: counter,
            emoji: '👋',
            top: 0,
            left: 0,
            animationDuration: '0s', // No animation initially
        };

        setEmojis((prevEmojis) => [...prevEmojis, newEmoji]);
        setCounter(counter + 1);
    };

    return (

        <EmojiContainer>
            <EmojiWrapper onClick={addEmoji}>

                {emojis.map((emoji) => (
                    <Emoji
                        key={emoji.id}
                        animationDuration={emoji.animationDuration}
                        onClick={() => handleEmojiClick(emoji.id)}
                        style={{
                            top: `${emoji.top}px`,
                            left: `${emoji.left}px`,
                        }}
                    >

                        {emoji.emoji}

                    </Emoji>
                ))}

            </EmojiWrapper>

        </EmojiContainer>
    );
};

export default Hello;
