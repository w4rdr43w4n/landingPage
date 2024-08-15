import { Dispatch, SetStateAction } from "react";

export interface IframeAtrributes {
  html:string | undefined
}
export interface GenerateFieldProps {
  setCode: (code:string) => void;
}
export type HTMLCodeResponse = {isGenerated:Boolean,html:string,errorMsg?:string }



