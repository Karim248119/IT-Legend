import PdfViewer from "@/components/PdfViewer";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <PdfViewer file="/1.pdf" />
    </main>
  );
}
