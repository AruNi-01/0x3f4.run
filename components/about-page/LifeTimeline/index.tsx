import AnimateLink from "@/components/ui/AnimateLink";
import AnimatePing from "@/components/ui/AnimatePing";
import { Timeline, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import { BornIcon, FutureIcon, UniversityIcon } from "../../icons";
import TimelineConnector from "./TimelineConnector";

export default function LifeTimeline() {
  return (
    <div className="mt-1 items-center text-neutral-700 dark:text-neutral-200">
      <Timeline>
        <TimelineItem className="h-28 w-80">
          <TimelineConnector isActive={true} className="!w-[78px]" />
          <TimelineHeader className="transition ease-in-out hover:scale-105 relative rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 py-3 pl-4  shadow-lg shadow-neutral-300 dark:shadow-neutral-900">
            <TimelineIcon className="p-3" variant="ghost" color="red">
              <BornIcon />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                Born in Guizhou, China
              </Typography>
              <Typography variant="small" color="gray" className="font-normal dark:text-neutral-400">
                October 2001
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="transition ease-in-out hover:scale-105 relative rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 py-3 pl-4 shadow-lg shadow-neutral-300 dark:shadow-neutral-900">
            <TimelineIcon className="p-3" variant="ghost" color="blue">
              <UniversityIcon />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                University in{" "}
                <AnimateLink href="https://www.wit.edu.cn/" isExternal={true} className="text-primary">
                  WIT
                </AnimateLink>
              </Typography>
              <Typography variant="small" color="gray" className="font-normal dark:text-neutral-400">
                September 2020 — Present
              </Typography>
            </div>
            <AnimatePing color="primary" size="3" className="flex ml-8" />
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28 animate-bounce-slow-2500">
          <TimelineHeader className="transition ease-in-out hover:scale-105 relative rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 py-3 pl-4  shadow-lg shadow-neutral-300 dark:shadow-neutral-900">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <FutureIcon />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                Unknowns and Expectations
              </Typography>
              <Typography variant="small" color="gray" className="font-normal dark:text-neutral-400">
                Coming soon...
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
