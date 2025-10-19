import CurriculumCard from "@/components/Cards/CurriculumCard";
import Header from "@/components/Header";
import Progress from "@/components/Progress";
import Section from "@/components/Section";
import CourseData from "@/data";
import React from "react";

export default function CourseCurriculum() {
  return (
    <Section id="curriculum" className="space-y-10 py-0">
      <Header>Topics For this course</Header>
      <Progress value={63} />
      <div className="md:space-y-10 space-y-4">
        {CourseData.curriculum.map((item, index) => (
          <CurriculumCard key={index} item={item} />
        ))}
      </div>
    </Section>
  );
}
