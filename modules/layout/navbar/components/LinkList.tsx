import React from "react";

export default function LinkList({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ul>
        {children}
    </ul>
  );
}
