import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import {heroOptions} from "./config/particles-config";

const PracticleComp = () => {
    const particlesInit = useCallback(async engine => {
        console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        await console.log(container);
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


const HeroParticles = () => {
    return (
        <div className="w-full h-screen min-h-[800px]">
            <PracticleComp
                id="hero-particles"
                className="w-full h-screen z-0 min-h-[800px]"
                particlesOptions={heroOptions}
            />
        </div>
    );
};
export default HeroParticles