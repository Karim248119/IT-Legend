import CourseMaterialRow from "@/components/CourseMaterialRow";
import Header from "@/components/Header";
import Section from "@/components/Section";
import CourseData from "@/data";
import { Clock3, Globe, LibraryBig, User } from "lucide-react";
import React from "react";

export default function CourseMaterials() {
  return (
    <Section>
      <Header>Course Material</Header>
      <div className="bg-white shadow-lg p-5 rounded-sm">
        <CourseMaterialRow
          icon={<Clock3 />}
          text="Duration"
          value={CourseData.material.duration}
        />
        <CourseMaterialRow
          icon={<LibraryBig />}
          text="Lessons"
          value={CourseData.material.lessons}
        />
        <CourseMaterialRow
          icon={<User />}
          text="Enrolled"
          value={CourseData.material.enrolled}
        />
        <CourseMaterialRow
          icon={<Globe />}
          text="Language"
          value={CourseData.material.language}
          className="border-b-0"
        />
      </div>
    </Section>
  );
}
