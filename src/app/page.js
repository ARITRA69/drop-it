import FloatingShape from "@/components/FloatingShape/FloatingShape";
import { Button } from "@/components/ui/button";
import { Dancing_Script } from "next/font/google";
import Link from "next/link";

const dancing_script = Dancing_Script({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <main>
      <FloatingShape />
      <div className="h-screen flex flex-col gap-y-3 justify-center items-center backdrop-blur-sm">
        <h1 className={`${dancing_script.className} text-5xl lg:text-9xl`}>
          Drop.it
        </h1>
        <p className="font-semibold tracking-widest">
          Best way to share files with friends and families
        </p>
        <div className="flex justify-between items-center gap-3 py-6">
          <Link href="/files">
            <Button>Get Started</Button>
          </Link>
          <Button variant="outline">Learn More</Button>
        </div>
      </div>
    </main>
  );
}
