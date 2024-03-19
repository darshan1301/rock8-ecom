import React from "react";

export default function ModalBox({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto my-8 w-fit rounded-3xl px-16 py-10 border flex-col gap-3 flex border-gray-400 z-10">
      {children}
    </div>
  );
}
