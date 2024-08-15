import { useState } from "react";
import Iframe from "./Iframe";
import NewTab from "@/components/newTab";

export default function Preview({ code }: { code: string }) {
  const [copyStatus, setCopyStatus] = useState("Copy");

  function copyToClipboard() {
    navigator.clipboard
      .writeText(code)
      .then(() => setCopyStatus("Copied!"))
      .catch((err) => setCopyStatus(`Failed to copy Code:  ${err}`));
    setTimeout(() => setCopyStatus("Copy"), 500);
  }

  return (
    <section className="flex flex-row w-full h-fit bg-gray-500 rounded-sm gap-5 p-5 shadow-md shadow-black">
      <section className="flex flex-col flex-1 bg-gray-700 p-5 gap-5 rounded-sm shadow-md shadow-black items-center">
        <h2 className="text-white font-bold w-fill text-center">Source Code</h2>
        {code && (
          <pre className="bg-slate-600 p-2 rounded-md text-white max-h-52 max-w-[600px] min-h-40 overflow-auto">
            {code}
          </pre>
        )}
        {code && (
          <button
            onClick={copyToClipboard}
            className="text-white font-bold w-fit align-middle  bg-gray-800 p-2 rounded-md opacity-65 hover:opacity-100 duration-200"
          >
            {copyStatus}
          </button>
        )}
      </section>
      <section className="flex flex-col flex-1 bg-gray-700 p-5 gap-5 rounded-sm shadow-md shadow-black items-center">
        <h2 className="text-white font-bold w-fill text-center">Preview</h2>
        <Iframe html={code} />
        {code && <NewTab html={code} />}
      </section>
    </section>
  );
}
