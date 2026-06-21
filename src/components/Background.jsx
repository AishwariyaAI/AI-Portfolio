import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      await loadSlim(window.tsParticles);
      setInit(true);
    };

    initParticles();
  }, []);

  if (!init) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#f8fafc]">
      {/* Gradient Glow */}
      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-400 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute top-[200px] right-[-100px] w-[500px] h-[500px] bg-cyan-300 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] bg-emerald-300 opacity-20 blur-[140px] rounded-full"></div>

      {/* Neural Network */}
      <Particles
        className="absolute inset-0"
        options={{
          background: {
            color: "transparent",
          },

          fpsLimit: 60,

          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "grab",
              },

              resize: true,
            },

            modes: {
              grab: {
                distance: 180,

                links: {
                  opacity: 1,
                },
              },
            },
          },

          particles: {
            color: {
              value: "#94a3b8",
            },

            links: {
              color: "#94a3b8",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },

            move: {
              direction: "none",
              enable: true,

              outModes: {
                default: "bounce",
              },

              random: false,
              speed: 1,
              straight: false,
            },

            number: {
              density: {
                enable: true,
              },

              value: 80,
            },

            opacity: {
              value: 0.5,
            },

            shape: {
              type: "circle",
            },

            size: {
              value: { min: 1, max: 4 },
            },
          },

          detectRetina: true,
        }}
      />
    </div>
  );
};

export default Background;