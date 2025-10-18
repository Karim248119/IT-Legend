"use client";
import React from "react";
import Header from "@/components/Header";
import CourseData from "@/data";
import CourseVideo from "@/components/Courses/sections/Video";
import CourseMaterials from "@/components/Courses/sections/Materials";
import CourseComments from "@/components/Courses/sections/Comments";
import CourseCurriculum from "@/components/Courses/sections/Curriculum";

const CourseDetails = () => {
  return (
    <div>
      <Header size="lg">{CourseData.title}</Header>
      <div className="grid md:grid-cols-[3fr_1fr] gap-10">
        <div>
          <CourseVideo />
          <CourseMaterials />
          <div className="md:hidden">
            <CourseCurriculum />
          </div>
          <CourseComments />
        </div>
        <div className="hidden md:block">
          <CourseCurriculum />
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
