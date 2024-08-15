"use client";
import { useState } from "react";
import { GenerateFieldProps } from "./config/types";
import { getHTML } from "@/lib/gpt";

export default function GenerateField({ setCode }: GenerateFieldProps) {
  const [disc, setDisc] = useState("");
  const [btnStatus, setStatus] = useState("Generate");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setDisc(e.target.value);
  const handleClick = async () => {
    try {
      setStatus("Generating...");
      const resp = await getHTML(disc);
      console.log(resp.html);
      if (resp.isGenerated) {
        setCode(resp.html);
      } else alert(resp.errorMsg);
    } catch (err: any) {
      console.log(err.message);
    } finally {
      setStatus("Done!");
      setTimeout(() => setStatus("Generate"), 4000);
    }
  };
  return (
    <section className="flex flex-row bg-gray-700 w-fit p-2 min-w-40 gap-2 shadow-md shadow-black">
      <input
        onChange={handleChange}
        value={disc}
        className="rounded-sm bg-gray-600 outline-none p-2 text-lg"
      />
      <button
        onClick={handleClick}
        className="opacity-60 duration-300 hover:opacity-100 rounded-sm bg-teal-700 text-white p-2 font-bold"
      >
        {btnStatus}
      </button>
    </section>
  );
}
