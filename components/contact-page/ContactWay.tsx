import { contactWays } from "@/config/contact-ways";
import {
  Popover,
  PopoverContent,
  PopoverHandler,
} from "@material-tailwind/react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Image, Snippet } from "@nextui-org/react";
import React, { MouseEvent } from "react";

export default function ContactWay() {
  // use boolean[] to control contact is popover?
  const [popoverState, setPopoverState] = React.useState<boolean[]>(
    contactWays.map(() => false)
  );

  const onMouseEnterHandle = (id: string, hasPopover: boolean) => {
    if (!hasPopover) return;
    return (event: MouseEvent<HTMLDivElement>) => {
      return setPopoverState((prevStates) => {
        return prevStates.map((state, index) =>
          contactWays[index].id === id ? true : state
        );
      });
    };
  };

  const onMouseLeaveHandle = (id: string) => {
    return (event: MouseEvent<HTMLDivElement>) => {
      return setPopoverState((prevStates) => {
        return prevStates.map((state, index) =>
          contactWays[index].id === id ? false : state
        );
      });
    };
  };

  return (
    <div className="flex items-start justify-center gap-3 mt-2">
      {contactWays.map((contact) => (
        <Popover
          key={contact.name}
          open={popoverState.find(
            (_, index) => contactWays[index].id === contact.id
          )}
          handler={(isOpen) => {
            if (!contact.hasPopover) return;
            setPopoverState((prevStates) =>
              prevStates.map((state, index) =>
                contactWays[index].id === contact.id ? isOpen : state
              )
            );
          }}
          placement="bottom"
          animate={{
            mount: { scale: 1, y: 0, transition: { duration: 0.5 } },
            unmount: {
              scale: 0,
              y: -25,
              transition: { delay: 0.5, duration: 0.8 },
            },
          }}
        >
          <PopoverHandler
            onMouseEnter={onMouseEnterHandle(contact.id, contact.hasPopover)}
            onMouseLeave={onMouseLeaveHandle(contact.id)}
          >
            <Button
              as={Link}
              isExternal={contact.link ? true : false}
              href={contact.link ? contact.link : ""}
              color={contact.link ? "primary" : "default"}
              variant="faded"
              className="text-neutral-800 dark:text-neutral-300"
            >
              <img src={contact.icon} alt={contact.name} />
              {contact.name}
            </Button>
          </PopoverHandler>
          <PopoverContent
            onMouseEnter={onMouseEnterHandle(contact.id, contact.hasPopover)}
            onMouseLeave={onMouseLeaveHandle(contact.id)}
            className="border-none bg-transparent shadow-none w-48"
          >
            <div className="flex-col items-center gap-4 -mt-1 w-48">
              {contact.searchText ? (
                <Snippet
                  tooltipProps={{
                    color: "foreground",
                    content: "Copy to add",
                    disableAnimation: true,
                    placement: "right",
                    closeDelay: 0,
                  }}
                  symbol="ID: "
                  radius="none"
                  className="w-full rounded-tl-xl rounded-tr-xl"
                >
                  {contact.searchText}
                </Snippet>
              ) : (
                ""
              )}
              {contact.qrCode ? <Image src={contact.qrCode} radius="none" className="rounded-bl-xl rounded-br-xl" /> : ""}
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
