"use client";
import React from "react";
import { Listbox, ListboxItem, ListboxSection, cn } from "@nextui-org/react";
import {
  AddNoteIcon,
  CopyDocumentIcon,
  DeleteDocumentIcon,
  EditDocumentIcon,
} from "./icons";

export default function SideBar() {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <div className="hidden md:flex flex-col w-1/5 max-w-2xl border-small rounded-small border-default-200 dark:border-default-100">
      <Listbox className="" variant="flat" aria-label="Listbox menu with sections">
        <ListboxSection className="" title="Actions" showDivider>
          <ListboxItem
            key="new"
            description="Create a new file"
            startContent={<AddNoteIcon className={iconClasses} />}
          >
            New file
          </ListboxItem>
          <ListboxItem
            key="copy"
            description="Copy the file link"
            startContent={<CopyDocumentIcon className={iconClasses} />}
          >
            Copy link
          </ListboxItem>
          <ListboxItem
            key="edit"
            description="Allows you to edit the file"
            startContent={<EditDocumentIcon className={iconClasses} />}
          >
            Edit file
          </ListboxItem>
        </ListboxSection>
        <ListboxSection className="" title="Danger zone">
          <ListboxItem
            key="delete"
            className="text-danger"
            color="danger"
            description="Permanently delete the file"
            startContent={
              <DeleteDocumentIcon className={cn(iconClasses, "text-danger")} />
            }
          >
            Delete file
          </ListboxItem>
        </ListboxSection>
      </Listbox>
    </div>
  );
}
