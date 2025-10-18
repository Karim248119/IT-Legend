"use client";

import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "../Buttons/Button";
import IconButton from "../Buttons/IconButton";
import { BiHelpCircle } from "react-icons/bi";
import { Textarea } from "../ui/textarea";

export default function QuestionDialog() {
  const [question, setQuestion] = useState("");

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <IconButton icon={<BiHelpCircle />} toltip="Questions" />
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Ask a question</DialogTitle>
            <DialogDescription>
              If you have any question about the course, you can ask here.
            </DialogDescription>
          </DialogHeader>

          <Textarea
            placeholder="Write your question..."
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />

          <DialogFooter>
            <DialogClose asChild>
              <Button type="button">Close</Button>
            </DialogClose>
            <Button type="submit">Submit</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
