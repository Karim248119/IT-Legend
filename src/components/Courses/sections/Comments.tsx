import Button from "@/components/Buttons/Button";
import CommentCard from "@/components/Cards/CommentCard";
import Header from "@/components/Header";
import Section from "@/components/Section";
import { Textarea } from "@/components/ui/textarea";
import CourseData from "@/data";
import { ArrowRight } from "lucide-react";
import React from "react";

export default function CourseComments() {
  return (
    <Section id="comments">
      <Header>Comments</Header>
      <div className="space-y-10">
        {CourseData.comments.map((comment, index) => (
          <CommentCard
            key={index}
            name={comment.name}
            date={comment.date}
            img={comment.img}
          />
        ))}
      </div>
      <div className="my-10 flex flex-col gap-5">
        <Textarea
          aria-hidden
          placeholder="Write your comment..."
          className="shadow-sm"
        />
        <Button>
          Submit Review <ArrowRight />
        </Button>
      </div>
    </Section>
  );
}
