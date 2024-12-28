"use client"
import { useState } from "react"
import { Answer } from "./Answer";
import { useSetRecoilState } from "recoil";
import { Question, Type } from "../store/atoms/atoms";
// Main Component
export function Userins() {
    const [type, setUpdatetype] = useState("text"); // Answer Type 
    const setType = useSetRecoilState(Type);
    const setQuestion = useSetRecoilState(Question);
    const [multi, setMulti] = useState(""); // Multiple/single 

    return <div className="bg-white w-2/4 h-3/4 flex flex-col gap-y-2 rounded-md p-2">
        <p>Enter the Question</p>
        <input onChange={(e) => { setQuestion(e.target.value) }} type="text" name="Question" id="Question" className="w-full h-1/4 p-1 outline outline-2 outline-sky-400 rounded-sm" />
        <div className="flex gap-x-2">
            <p>Answer Type: </p><select name="type" id="type" onChange={(e) => { setUpdatetype(e.target.value); setType(type) }} className="w-2/5 outline outline-2 outline-sky-400 rounded-sm">
                <option value="radio" >radio</option>
                <option value="text" >text</option>
                <option value="checkbox" >checkbox</option>
            </select>
            {type === "radio" ? <select onChange={(e) => { setMulti(e.target.value) }} name="mcq_type" id="" className="outline outline-2 outline-sky-400 rounded-sm">
                <option value="true">Multiple</option>
                <option value="false">Single</option>
            </select> : null}
        </div>
        <div className="w-full h-3/5 p-1 outline outline-2 outline-sky-400 rounded-sm">
            <Answer type={type} />
        </div>
    </div>
}
// Answer Box Component
