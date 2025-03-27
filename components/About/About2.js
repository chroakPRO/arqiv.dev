import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const About2 = ({ clientHeight }) => {
  const sectionRef = useRef(null);
  const quoteRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap
        .timeline({
          defaults: { ease: "none", duration: 0.1 },
        })
        .from(quoteRef.current, { opacity: 0, duration: 2 })
        .to(quoteRef.current.querySelectorAll(".gradient-text"), {
          backgroundPositionX: "100%",
          duration: 1,
          stagger: 0.2
        });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "center bottom",
        end: "center center",
        scrub: 0,
        animation: tl,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="w-full relative select-none">
      <div
        className={`${
          clientHeight > 650 ? "py-80" : "py-72"
        } section-container`}
      >
        <h1
          ref={quoteRef}
          className="font-medium text-[2.70rem] md:text-6xl lg:text-[4rem] text-center"
        >
          Skapa, organisera och dela{" "}
          <span
            className="gradient-text font-bold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #8b31ff 51%, #7000ff 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            unika
          </span>{" "}
          berättelser från{" "}
          <span
            className="gradient-text font-bold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #ff3170 51%, #ff0055 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            historia
          </span>{" "}
          och{" "}
          <span
            className="gradient-text font-bold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #31ff8b 51%, #00ff62 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            natur
          </span>{" "}
          med några få klick – din{" "}
          <span
            className="gradient-text font-bold"
            style={{
              background:
                "linear-gradient(90deg, #ffffff 0%, #ffffff 50%, #31a8ff 51%, #0084ff 102%)",
              backgroundSize: "200% 100%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            vision
          </span>
          , ditt sätt.
        </h1>
      </div>
    </section>
  );
};

export default About2;
