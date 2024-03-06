'use client'

import { Avatar, AvatarBorderVariants, AvatarVariants } from "@/components/ui/avatar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { generateUsers } from "@/lib/data";
import { useState } from "react";

//[&>div]:-ml-2 ml-2 [&>div]:mt-3 -mt-3

export default function Home() {
  
  const [size, setSize] = useState<AvatarVariants['size']>('default')
  const [borderColor, setBorderColor] = useState<AvatarBorderVariants['borderColor']>('primary')
  const [qtdUsers, setQtdUsers] = useState(20)
  
  const users = generateUsers(qtdUsers)
  return (
    <main className="flex container w-full m-auto min-h-screen flex-col bg-purple-900 p-6">

      <div className="mb-8 p-2 flex gap-4 w-42 flex-col sm:flex-row sm:w-full">
        <div className="w-full">
          <span className="text-slate-400 text-xs ml-2">Size</span>
          <Select onValueChange={(size) => setSize(size as AvatarVariants['size'])}>
            <SelectTrigger className="">
              <SelectValue placeholder="Size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="sm">Small</SelectItem>
              <SelectItem value="lg">Large</SelectItem>
              <SelectItem value="xl">Extra Large</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <span className="text-slate-400 text-xs ml-2">Quantidade Avatar</span>
          <Select onValueChange={(qtd) => setQtdUsers(+qtd)}>
            <SelectTrigger className="">
              <SelectValue placeholder="Quantidade Avatar" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="50">50</SelectItem>
              <SelectItem value="100">100</SelectItem>
              <SelectItem value="200">200</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="w-full">
          <span className="text-slate-400 text-xs ml-2">Borda Style</span>
          <Select onValueChange={(borderColor) => setBorderColor(borderColor as AvatarBorderVariants['borderColor'])}>
            <SelectTrigger className="">
              <SelectValue placeholder="Borda" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="primary">Primary</SelectItem>
              <SelectItem value="none">None</SelectItem>
              <SelectItem value="secondary">Secondary</SelectItem>
            </SelectContent>
          </Select>
        </div>


      </div>
      <div className="w-full flex flex-wrap justify-start [&>div]:-ml-2 ml-2 [&>div]:mt-3 -mt-3">
          {users &&
            users.map((user, index) => (
              <Avatar
                key={index}
                imgUrl={user.imgUrl}
                userName={user.userName}
                fallbackText={user.fallbackText}
                size={size}
                borderColor={borderColor}
              />
            ))
          }
      </div>
    </main>
  );
}
