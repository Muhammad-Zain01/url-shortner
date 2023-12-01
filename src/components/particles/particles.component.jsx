
// import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import { useCallback } from 'react';
import { theme } from 'antd';
import { ParticleContainer } from "./particles.styles";
import Particles from "react-particles";

const Config = {
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 5,
            },
            repulse: {
                distance: 100,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        links: {
            color: "#ffffff",
            distance: 110,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 180,
        },
        opacity: {
            value: 1,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 2 },
        },
    },
    detectRetina: true,
}

const Particle = () => {
    const { token: { colorPrimary } } = theme.useToken();
    const particlesInit = useCallback(async engine => {
        console.log(engine)
        await loadSlim(engine);
    }, []);
    return (
        <ParticleContainer>
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={{
                    background: {
                        color: {
                            value: "#1681ee",
                        },
                    },
                    ...Config
                }}
            />
        </ParticleContainer>
    )
}

export default Particle;