import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { tsParticles } from 'tsparticles';
import {heroOptions} from "./config/particles-config";

const PracticleContainer = ({options}) => {
    const particlesInit = async (engine) => {
        await loadFull(engine);
    };

    const particlesLoaded = useCallback(async container => {
    }, []);

    return (
        <Particles
            className='w-full h-full absolute translate-z-0'
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}
        />
    );
};



export default PracticleContainer