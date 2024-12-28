"use client"
import { useSetRecoilState } from "recoil";
import { Options } from "../store/atoms/atoms";
import { useState } from "react";

export function Answer({ type }: any) {
    const [opt1, setOpt1] = useState("");
    const [opt2, setOpt2] = useState("");
    const [opt3, setOpt3] = useState("");
    const [opt4, setOpt4] = useState(""); // Options
    const setOptions = useSetRecoilState(Options);

    function Seting()
    {
        setOptions([opt1,opt2,opt3,opt4]);
    }


    if (type === "text") {
        return <div className="flex flex-col gap-y-2">
            <input type="text" className="outline outline-2 outline-sky-400 rounded-sm" />
        </div>
    }
    if (type === "radio") {
        return <div className="flex flex-col gap-y-2 ">
            <div className="w-fit flex gap-x-2"><input type="radio" /><input onChange={(e)=>{setOpt1(e.target.value)}} type="text" placeholder="Option" /></div>
            <div className="w-fit flex gap-x-2"><input type="radio" /><input onChange={(e)=>{setOpt2(e.target.value)}} type="text" placeholder="Option" /></div>
            <div className="w-fit flex gap-x-2"><input type="radio" /><input onChange={(e)=>{setOpt3(e.target.value)}} type="text" placeholder="Option" /></div>
            <div className="w-fit flex gap-x-2"><input type="radio" /><input onChange={(e)=>{setOpt4(e.target.value)}} type="text" placeholder="Option" /></div>
            <button onClick={()=>{Seting();}} className="outline outline-2 outline-sky-400 p-2 rounded-sm">Confirm Options</button>
        </div>
    }
    if (type === "checkbox") {
        return <div className="flex flex-col gap-y-2 p-2">
             <div className="w-fit flex gap-x-2"><input type="checkbox" /><input onChange={(e)=>{setOpt1(e.target.value)}} type="text" placeholder="Option" /></div>
            <div className="w-fit flex gap-x-2"><input type="checkbox" /><input onChange={(e)=>{setOpt2(e.target.value)}} type="text" placeholder="Option" /></div>
            <div className="w-fit flex gap-x-2"><input type="checkbox" /><input onChange={(e)=>{setOpt3(e.target.value)}} type="text" placeholder="Option" /></div>
            <div className="w-fit flex gap-x-2"><input type="checkbox" /><input onChange={(e)=>{setOpt4(e.target.value)}} type="text" placeholder="Option" /></div>
            <button onClick={()=>{Seting();}} className="outline outline-2 outline-sky-400 p-2 rounded-sm">Confirm Options</button>
        </div>
    }
}