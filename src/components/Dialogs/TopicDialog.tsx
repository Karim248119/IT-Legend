"use client";
import { Dialog, DialogOverlay, DialogTrigger } from "@/components/ui/dialog";
import { FileText, LockKeyhole } from "lucide-react";
import PdfViewer from "../PdfViewer";

const TopicDialog = ({ title }: { title: string }) => {
  const pdfSrc = "/demo.pdf";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center justify-between py-3 border-b text-xs cursor-pointer">
          <div className="flex items-center gap-2 text-neutral-600">
            <FileText className="w-4" />
            <p>{title}</p>
          </div>
          <LockKeyhole className="w-4" />
        </div>
      </DialogTrigger>
      <DialogOverlay className="w-screen h-screen">
        <PdfViewer file={pdfSrc} />
      </DialogOverlay>
    </Dialog>
  );
};

export default TopicDialog;
