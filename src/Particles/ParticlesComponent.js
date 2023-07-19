import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {heroOptions} from "./config/particles-config";

const PracticleContainer = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
    }, []);

    return (
        <Particles

            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={heroOptions}
        />
    );
};



export default PracticleContainer