import { Avatar, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
      </Avatar>
    </main>
  );
}
