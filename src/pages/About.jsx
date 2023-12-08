import React from "react";

import { skills } from "../constants";
import { div } from "three/examples/jsm/nodes/Nodes.js";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Haigh, Is mise{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Aindriú
        </span>
      </h1>

      <div className="">
        <p className="mt-5 flex flex-col gap-3 text-slate-500">
          a Front End Developer from Ireland, specializing in HMTL, CSS,
          JavaScript and React. My skills have been developed via hands on
          learning through building applications and through commerical
          experience.
        </p>
      </div>
      <div className="py-10 flex-flex-col">
        <h3 className="subhead-text">My Skills</h3>
      </div>
      <div className="mt-16 flex flex-wrap gap-12">
        {skills.map((skill) => (
          <div className="block-container w-20 h-20">
            <div className="btn-back rounded-xl" />
            <div className="btn-front rounded-xl flex jusify-center items-center">
              <img
                src={skill.imageUrl}
                alt={skill.name}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
