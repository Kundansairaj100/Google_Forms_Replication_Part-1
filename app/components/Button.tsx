"use client"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { Question } from "../store/atoms/atoms"
import { Options } from "../store/atoms/atoms"
import { Type } from "../store/atoms/atoms"
import { Final_Question } from "../store/atoms/atoms"

export function Button() {
    const setFinal_Question = useSetRecoilState(Final_Question);
    const question = useRecoilValue(Question);
    const type = useRecoilValue(Type);
    const opt = useRecoilValue(Options);
    function Seting()
    {
        let new_q = {Question:question,Type:type,Options:opt};
        setFinal_Question((old) => [...old,new_q]);
        console.log(new_q);
    }

    return <div className="text-white flex flex-row-reverse gap-x-2">
        <button className="outline outline-2 outline-sky-400 p-2 rounded-sm">Submit</button>
        <button onClick={Seting} className="outline outline-2 outline-sky-400 p-2 rounded-sm">Save & Next Question</button>
    </div>
}
