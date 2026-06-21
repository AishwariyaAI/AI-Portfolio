import { useEffect, useState } from "react";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const Background = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    const initParticles = async () => {
      const { tsParticles } = await import("@tsparticles/engine");
      await loadSlim(tsParticles);
      setInit(true);
    };

    initParticles();
  }, []);

  if (!init) return null;

  return (
    <div className="fixed inset-0 -z-10">

      <Particles
        id="tsparticles"
        options={{
          fullScreen: {
            enable: false,
          },

          background: {
            color: {
              value: "#f8fafc",
            },
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
              value: "#60a5fa",
            },

            links: {
              color: "#93c5fd",
              distance: 150,
              enable: true,
              opacity: 0.35,
              width: 1,
            },

            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce",
              },
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
              value: {
                min: 1,
                max: 4,
              },
            },
          },

          detectRetina: true,
        }}
      />

      {/* Glow Effects */}

      <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] bg-blue-400 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute top-[200px] right-[-100px] w-[500px] h-[500px] bg-cyan-300 opacity-20 blur-[140px] rounded-full"></div>

      <div className="absolute bottom-[-200px] left-[30%] w-[500px] h-[500px] bg-emerald-300 opacity-20 blur-[140px] rounded-full"></div>

    </div>
  );
};

export default Background;