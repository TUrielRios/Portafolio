import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experiencia" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Desarrollador Full Stack"
          subTitle="Estudio de Francisco Arquitectos  "
          des="Encargado de realizar y mantener aplicacion web del estudio de Francisco Arquitectos"
        />
        <ResumeCard
          badge="04/01/2023 - 22/04/2024"
          title="Programador Web"
          subTitle="Dharma Digital Marketing Agency"
          des="Pasantía en agencia de Marketing en proyectos de 3 meses y medio"
        />

      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Educación" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2023"
          title="Full Stack Web Developer"
          subTitle="Henry Bootcamp"
          des="800 horas de cursado teórico-práctico. 2023"
        />
        <ResumeCard
          badge="2024"
          title="Ciencias de la computación "
          subTitle="UBA | Universidad de Buenos Aires"
          des="Primer año de la carrera"
        />
        <ResumeCard
          badge="2022"
          title="100 Days of Code"
          subTitle="The Complete Python Pro Bootcamps 2023"
          des="Curso hecho en Udemy con el cual me introduje a la programación"
        />
      </div>
    </div>
  );
};

export default Education;
