"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { Slider } from "@/components/ui/slider";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { X, ZoomIn, ZoomOut } from "lucide-react";
import { DialogClose } from "./ui/dialog";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PdfViewer({ file }: { file: string }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [scale, setScale] = useState(1);
  const [visiblePage, setVisiblePage] = useState(1);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const pages = Array.from(
      containerRef.current.querySelectorAll(".pdf-page")
    );
    const scrollTop = containerRef.current.scrollTop;
    let currentPage = 1;
    for (let i = 0; i < pages.length; i++) {
      const page = pages[i] as HTMLElement;
      if (page.offsetTop - 100 <= scrollTop) {
        currentPage = i + 1;
      } else break;
    }
    setVisiblePage(currentPage);
  }, []);

  useEffect(() => {
    const ref = containerRef.current;
    if (ref) {
      ref.addEventListener("scroll", handleScroll);
      return () => ref.removeEventListener("scroll", handleScroll);
    }
  }, [handleScroll]);

  const pageWidth =
    typeof window !== "undefined"
      ? window.innerWidth >= 900
        ? window.innerWidth / 2
        : window.innerWidth
      : 0;

  return (
    <div className="relative flex flex-col items-center w-screen h-screen bg-neutral-100">
      <div className="sticky md:h-20 h-16 z-10 flex items-center justify-between  gap-2 bg-white shadow md:px-10 p-3 w-full">
        <div className="flex flex-1 items-center md:gap-3 gap-1">
          <ZoomOut className="text-neutral-600 w-3 md:w-6" />
          <Slider
            value={[scale]}
            min={0.1}
            max={2}
            step={0.01}
            className="md:w-40 w-18 !h-[1px]"
            onValueChange={(value) => setScale(value[0])}
          />
          <ZoomIn className="text-neutral-600 w-3 md:w-6" />
          <span className="md:text-sm text-xs text-neutral-700 font-medium">
            {Math.round(scale * 100)}%
          </span>
        </div>
        <div className="flex-1 flex justify-center">
          <p className="md:text-base font-semibold text-xs text-neutral-600">
            {visiblePage} <span className="text-teal-600">/</span> {numPages}
          </p>
        </div>

        <div className="flex-1 flex justify-end">
          <DialogClose asChild>
            <button className="md:w-8 w-6 aspect-square flex-center rounded-lg hover:bg-teal-500 hover:text-white border border-teal-500 duration-300">
              <X className="w-4 md:w-6" />
            </button>
          </DialogClose>
        </div>
      </div>

      <div
        ref={containerRef}
        className="flex-1 overflow-auto w-full flex justify-center py-6"
      >
        <Document
          file={file}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
          loading={<p className="text-neutral-500 text-sm">Loading PDF…</p>}
        >
          <div className="flex flex-col items-center gap-6">
            {Array.from(new Array(numPages), (_, index) => (
              <div key={index} className="pdf-page shadow bg-white rounded-lg">
                <Page
                  pageNumber={index + 1}
                  scale={scale}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  width={pageWidth}
                />
              </div>
            ))}
          </div>
        </Document>
      </div>
    </div>
  );
}
