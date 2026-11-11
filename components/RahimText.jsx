import { Children } from "react";
import RahimSignature from "./RahimSignature";

// Keep source wording while displaying the supplied name artwork inline.
export default function RahimText({ children, className = "" }) {
  return Children.map(children, (child) => {
    if (typeof child !== "string") return child;
    return child.split(/(Rahim Iyaz)/g).map((part, index) =>
      part === "Rahim Iyaz" ? (
        <span key={index} className={`mx-1 inline-block w-[9rem] max-w-full align-middle ${className}`}>
          <RahimSignature sizes="144px" />
        </span>
      ) : part
    );
  });
}
