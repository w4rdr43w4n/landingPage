import { IframeAtrributes } from "./config/types";



export default function Iframe({html}:IframeAtrributes){
  return (
    <iframe srcDoc={html} className="w-full min-h-48 max-h-[450px]" />
  )
}