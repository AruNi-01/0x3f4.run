import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/react";
import { SendEmailIcon } from "../icons";

export default function EmailForm() {
  return (
    <form className="flex flex-col gap-5 mt-3 mb-2 w-80 max-w-screen-lg sm:w-96">
      <Input type="name" variant="bordered" label="Name" placeholder="Aaryn Lu" labelPlacement="outside" radius="sm" />
      <Input
        type="email"
        variant="bordered"
        label="Email"
        placeholder="aarynlu@0x3f4.run"
        labelPlacement="outside"
        radius="sm"
      />
      <Textarea
        label="Message"
        variant="bordered"
        labelPlacement="outside"
        placeholder="What do you want to say to me?"
        disableAnimation
        disableAutosize
        radius="sm"
        classNames={{
          input: "resize-y min-h-[60px]",
        }}
      />
      <Button startContent={<SendEmailIcon />}>Send to me now</Button>
    </form>
  );
}
