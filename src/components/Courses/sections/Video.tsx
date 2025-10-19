"use client";

import VideoPlayer from "@/components/Video/VideoPlayer";
import LeaderboardDialog from "@/components/Dialogs/LeaderboardDialog";
import IconButton from "@/components/Buttons/IconButton";
import QuestionDialog from "@/components/Dialogs/QuestionDialog";
import Section from "@/components/Section";
import { BiMessageSquare, BiBookContent } from "react-icons/bi";

export default function CourseVideo() {
  return (
    <Section className="space-y-5 md:relative sticky top-0 my-0">
      <VideoPlayer src="https://firebasestorage.googleapis.com/v0/b/fir-7542d.appspot.com/o/vids%2FTutankhamun%20Immersive%20Exhibition.mp4?alt=media&token=682484b2-7ab6-4490-8c4b-4c78979fecd1" />

      <nav className="flex items-center gap-5">
        <IconButton
          icon={<BiBookContent />}
          toltip="Curriculum"
          href="#curriculum"
        />
        <IconButton
          icon={<BiMessageSquare />}
          toltip="Comments"
          href="#comments"
        />

        <LeaderboardDialog />
        <QuestionDialog />
      </nav>
    </Section>
  );
}
