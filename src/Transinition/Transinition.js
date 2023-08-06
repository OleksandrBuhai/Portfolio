// framer motion
import { motion } from 'framer-motion';
import styled from "styled-components";

// variants
const transitionVariants = {
    initial: {
        x: '100%',
        width: '100%',
    },
    animate: {
        x: '0%',
        width: '0%',
    },
    exit: {
        x: ['0%', '100%'],
        width: ['0%', '100%'],
    },
};

const StyledTransition = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 100%;
  width: 100%;
  height: 100%;
  z-index: 30;
  background-color: #333333;
`;

const Transition = () => {
    return (
        <>
            <StyledTransition
                variants={transitionVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: 0.2, duration: 0.6, ease: 'easeInOut' }}
            />
            <StyledTransition
                variants={transitionVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: 0.4, duration: 0.6, ease: 'easeInOut' }}
                style={{ backgroundColor: '#808080', zIndex: 20 }}
            />
            <StyledTransition
                variants={transitionVariants}
                initial='initial'
                animate='animate'
                exit='exit'
                transition={{ delay: 0.6, duration: 0.6, ease: 'easeInOut' }}
                style={{ backgroundColor: '#CCCCCC', zIndex: 10 }}
            />
        </>
    );
};

export default Transition;
