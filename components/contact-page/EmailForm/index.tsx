import { Input, Textarea } from "@nextui-org/input";
import { Button, Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import { FormEvent, useState } from "react";
import { SendEmailIcon } from "../../icons";
import SendedTip from "./SendedTip";

export default function EmailForm() {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [messageValue, setMessageInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSendSuccess, setIsSendSuccess] = useState(false);
  const [isSendTipOpen, setIsSendTipOpen] = useState(false);

  const openSendTip = () => {
    setIsSendTipOpen(true);
    setTimeout(() => {
      setIsSendTipOpen(false);
    }, 8000);
  };

  async function submitHandle(event: FormEvent<HTMLFormElement>) {
    console.log(`formData {name: ${nameValue}, email: ${emailValue}, message: ${messageValue}}`);
    event.preventDefault();
    setIsSending(true);
    setTimeout(async () => {
      try {
        const rsp = await fetch("/api/email/send", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: nameValue,
            email: emailValue,
            message: messageValue,
          }),
        });
        if (!rsp.ok) {
          throw new Error("Send fail, connect server fail.");
        }
        const data = await rsp.json();
        if (!data.isSuccess) {
          throw new Error("Send fail, mis-typed or server error.");
        }
        setIsSendSuccess(true);
        setNameValue("");
        setEmailValue("");
        setMessageInput("");
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
        setIsSendSuccess(false);
      } finally {
        setIsSending(false);
        openSendTip();
      }
    }, 1500);
  }

  return (
    <>
      <form name="form" className="flex flex-col gap-5 mt-3 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={submitHandle}>
        <Input
          isClearable
          isRequired
          onChange={(e) => {
            setNameValue(e.target.value);
          }}
          onClear={() => {
            setNameValue("");
          }}
          value={nameValue}
          type="text"
          name="name"
          variant="bordered"
          label="Name"
          radius="lg"
          color="primary"
          classNames={{
            label: "text-default-500",
            inputWrapper: "data-[hover=true]:border-primary-300",
          }}
        />
        <Input
          isClearable
          isRequired
          onChange={(e) => {
            setEmailValue(e.target.value);
          }}
          onClear={() => {
            setEmailValue("");
          }}
          value={emailValue}
          type="email"
          name="email"
          variant="bordered"
          placeholder="aarynlu@0x3f4.run"
          label="Email"
          radius="lg"
          color="primary"
          classNames={{
            label: "text-default-500",
            inputWrapper: "data-[hover=true]:border-primary-300",
          }}
        />
        <Textarea
          value={messageValue}
          isRequired
          type="text"
          name="message"
          label="Message"
          variant="bordered"
          placeholder="What do you want to say to me?"
          disableAnimation
          radius="lg"
          classNames={{
            input: "resize-y min-h-[60px]",
            label: "text-default-500",
            inputWrapper: "data-[hover=true]:border-primary-300",
          }}
          onChange={(e) => {
            setMessageInput(e.target.value);
          }}
          color="primary"
        />
        <Popover placement="bottom" isOpen={isSendTipOpen} backdrop="opaque">
          <PopoverTrigger>
            <Button type="submit" color="primary" isDisabled={isSending} className="group">
              <SendEmailIcon
                width="14"
                height="14"
                className={`mr-1 transition-all duration-1000 ease-in-out ${isSending ? "translate-x-16" : ""}`}
              />
              <div className={`transition-all duration-1000 ease-in-out ${isSending ? "-translate-x-7" : ""}`}>
                {isSending ? "Sending..." : "Send to me now"}
              </div>
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <SendedTip isSuccess={isSendSuccess} onCloseHandle={() => setIsSendTipOpen(false)} />
          </PopoverContent>
        </Popover>
      </form>
    </>
  );
}