import React from "react";
export const ListboxWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="flex w-1/5 max-w-2xl border-small px-1 py-2 rounded-small border-default-200 dark:border-default-100">
    {children}
  </div>
);
