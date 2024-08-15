"use client";
import GenerateField from "@/components/GenerateField";
import Preview from "@/components/Preview";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");
  return (
    <main className="flex flex-col items-center justify-center p-8 gap-10">
      <h1
        className="font-bold text-xl text-sky-500"
        style={{ fontSize: "45px" }}
      >
        Landing Page Generator
      </h1>
      <GenerateField setCode={setCode} />
      <Preview code={code} />
    </main>
  );
}
