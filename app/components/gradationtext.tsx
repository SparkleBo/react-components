import React from "react";

export function GradationText(props: {
    text: string
}) {
  return (
    <div>
        <h1 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-fuchsia-400">{props.text}</h1>
    </div>
  );
}
