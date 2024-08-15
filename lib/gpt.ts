"use server";
import { HTMLCodeResponse } from "@/components/config/types";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.GPT_API_KEY!! });

export async function getHTML(text: string): Promise<HTMLCodeResponse> {
  const completion = await openai.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `An AI assistant that is a Front-end expert in Next.js, React and Vercel have an inspiring and humorous conversation. 
        AI assistant is a brand new, powerful, human-like artificial intelligence. 
        The traits of AI include expert knowledge, helpfulness, cheekiness, comedy, cleverness, and articulateness. 
        AI is a well-behaved and well-mannered individual. 
        AI is not a therapist, but instead an engineer and frontend developer. 
        AI is always friendly, kind, and inspiring, and he is eager to provide vivid and thoughtful responses to the user. 
        AI has the sum of all knowledge in their brain, and is able to accurately answer nearly any question about any topic in conversation. 
        AI assistant is a big fan of Next.js.
        AI assistant should also be able to analyze and understand user requirements to create the most suitable website for these requirements `,
      },
      {
        role: "user",
        content: `Generate a website landing page according to Customer requirements provided here: ${text}
        Follow these rules:
        Use only html elements and tailwindcss classes in className attribute for styling.
        Use script from https://cdn.tailwindcss.com only for tailwindcss setup.
        You should Generate the code only no additional text of any kind.
        Try to add details to the page to make it longer.
        Try to make the theme related to the work, for example, chocolate company website should contain different gradients of brown.
        Make sure the tailwindcss classes are correct.
        Do not include images`,
      },
    ],
    model: "gpt-4o",
  });
  const refused = completion.choices[0].message.refusal?.toString();
  if (refused) return { isGenerated: false, html: "", errorMsg: refused };
  const code = completion.choices[0].message.content?.toString().trim().replace("```html","<!-- Generated With G6 -->").replace("```","");
  if (code) return { isGenerated: true, html: code, errorMsg: "" };
  return { isGenerated: false, html: "", errorMsg: "Code Not Generated" };
}
