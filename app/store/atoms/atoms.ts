"use client"
import { atom } from "recoil";
export const Question = atom({
    key:"Question_Atom",
    default:""
});

export const Type = atom({
    key:"Type_Atom",
    default:"text"
});

export const Options = atom({
    key:"Options_Atom",
    default:[""]
});

export const Final_Question = atom({
    key:"Final_Question_component",
    default:[{}]
});
