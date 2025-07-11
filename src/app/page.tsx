import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Card,
  CardContent,

  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FaGithub } from "react-icons/fa6";
import { BsSubstack } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
import { Separator } from "@/components/ui/separator"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative">
      <img 
        src="https://w.wallhaven.cc/full/p8/wallhaven-p818l3.jpg" 
        alt="bg" 
        className="absolute inset-0 -z-10 blur-md w-full h-full object-cover" 
      />
      <Card className="max-w-xl w-5/6 md:w-full mx-4 sm:mx-0 bg-background/50 backdrop-blur-md">
        <CardHeader >
          <CardTitle className="flex flex-col items-center justify-between ">
            <div className="inline-flex items-center w-full justify-between">

            <div className="inline-flex gap-2 items-center">
              <Image src={"/favicon.ico"} height={50} width={50} alt="icon" />
              <h1 className="text-2xl">Karppa</h1>
            </div>
            <div className="inline-flex gap-2 items-baseline">
              <HoverCard>
                <HoverCardTrigger>
                  <Link href={"https://github.com/karppa404"}>
                    <FaGithub className="size-6" />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  Software projects found here
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Link href={"https://github.com/karppa404"}>
                    <BsSubstack className="size-6" />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  Blog posts and articles found here
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger>
                  <Link href={"https://www.youtube.com/@Karpppa"}>
                    <FaYoutube className="size-6" />
                  </Link>
                </HoverCardTrigger>
                <HoverCardContent>
                  Videos found here
                </HoverCardContent>
              </HoverCard>
            </div>
            </div>
          </CardTitle>
            <Separator />

        </CardHeader>
        <CardContent>
          <p className="text-xl font-semibold">Hi, this is a place where you can find all of my stuff.</p>
        </CardContent>

      </Card>
    </main>
  );
}