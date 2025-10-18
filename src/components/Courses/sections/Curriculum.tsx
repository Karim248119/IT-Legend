import CurriculumCard from "@/components/Cards/CurriculumCard";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import CourseData from "@/data";
import React from "react";

export default function CourseCurriculum() {
  return (
    <section id="curriculum" className="w-full space-y-10">
      <Header>Topics For this course</Header>
      <Progress value={63} />
      <div className="md:space-y-10 space-y-4">
        {CourseData.curriculum.map((item, index) => (
          <CurriculumCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}
