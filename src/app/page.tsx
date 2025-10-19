import Button from "@/components/Buttons/Button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center">
      <Link href="/courses">
        <Button>Courses</Button>
      </Link>
    </main>
  );
}
