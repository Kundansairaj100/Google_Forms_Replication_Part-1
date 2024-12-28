"use client"
import Image from "next/image";
import { Navbar } from "./components/Navbar";
import { Userins } from "./components/userinput";
import { RecoilRoot } from "recoil";
import { Button } from "./components/Button";
export default function Home() {
  return <div className="w-screen h-screen bg-black">
    <Navbar />
    <div className="flex flex-col  gap-y-2 justify-center items-center w-full h-4/5">
      <Userins/>
      <Button/>
    </div>
  </div>
}