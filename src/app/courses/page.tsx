import CourseData from "@/data";
import Link from "next/link";
import React from "react";

const Courses = () => {
  return (
    <div>
      <Link href={"/courses/1/course-details"}>
        <div className="lg:w-1/5 md:w-1/3 w-full rounded-lg shadow border p-5">
          <div className="w-full rounded aspect-square bg-teal-100"></div>
          <div className="py-2">
            <h3 className="font-semibold">{CourseData.title}</h3>
            <p>{CourseData.material.lessons} Lessons</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Courses;
