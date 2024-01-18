import * as React from "react"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

function ParticlesMain() {
  const particlesInit = async (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main);
  };

  return (
    

       <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        background: {
            color: {},
        },
        fpsLimit: 200,
        interactivity: {
            events: {
                onClick: {
                    enable: true,
                    mode: "connect",
                },
                onHover: {
                    enable: true,
                    mode: "connect",
                },
                resize: true,
            },
            modes: {
                connect: {
                    distance: 200,
                    line_linked: {
                        opacity: 1,
                    },
                },
            },
        },
        particles: {
            color: {
                value: "#ffffff",
            },
           
            links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.1,
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
                value: 40,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
    />

  );
}

export default ParticlesMain;