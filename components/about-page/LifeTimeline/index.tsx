import AnimateLink from "@/components/ui/AnimateLink";
import AnimatePing from "@/components/ui/AnimatePing";
import { Timeline, TimelineHeader, TimelineIcon, TimelineItem, Typography } from "@material-tailwind/react";
import { BornIcon, FutureIcon, HellobikeIcon, UniversityIcon } from "../../icons";
import TimelineConnector from "./TimelineConnector";
import { siteConfig } from "@/config/site";
import { useTranslations } from "next-intl";

export default function LifeTimeline() {
  const t = useTranslations("about");

  return (
    <div className="mt-1 items-center text-neutral-700 dark:text-neutral-200">
      <Timeline>
        <TimelineItem className="h-28 w-80">
          <TimelineConnector isActive={true} className="!w-[78px]" />
          <TimelineHeader className="transition hover:duration-1000 ease-in-out hover:scale-105 relative rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 py-3 pl-4  shadow-lg shadow-neutral-300 dark:shadow-neutral-900">
            <TimelineIcon className="p-3" variant="ghost" color="red">
              <BornIcon />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                {t("timeline.born")}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal dark:text-neutral-400">
                {t("timeline.timeRange")}
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector isActive={true} className="!w-[78px]" />
          <TimelineHeader className="transition hover:duration-1000 ease-in-out hover:scale-105 relative rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 py-3 pl-4 shadow-lg shadow-neutral-300 dark:shadow-neutral-900">
            <TimelineIcon className="p-3" variant="ghost" color="purple">
              <UniversityIcon />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                {t.rich("timeline.university", {
                  link: (chunks) => (
                    <AnimateLink href={siteConfig.links.wit} isExternal={true} className="text-primary">
                      {chunks}
                    </AnimateLink>
                  ),
                })}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal dark:text-neutral-400">
                {t("timeline.universityTime")}
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28">
          <TimelineConnector className="!w-[78px]" />
          <TimelineHeader className="transition hover:duration-1000 ease-in-out hover:scale-105 relative rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 py-3 pl-4 shadow-lg shadow-neutral-300 dark:shadow-neutral-900">
            <TimelineIcon className="p-3" variant="ghost" color="blue">
              <HellobikeIcon />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                {t.rich("timeline.hellobike", {
                  link: (chunks) => (
                    <AnimateLink href={siteConfig.links.hellobike} isExternal={true} className="text-primary">
                      {chunks}
                    </AnimateLink>
                  ),
                })}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal dark:text-neutral-400">
                {t("timeline.hellobikeTime")}
              </Typography>
            </div>
            <AnimatePing color="primary" size="3" className="flex ml-[12px]" />
          </TimelineHeader>
        </TimelineItem>
        <TimelineItem className="h-28 animate-bounce-slow-2500">
          <TimelineHeader className="transition hover:duration-1000 ease-in-out hover:scale-105 relative rounded-xl border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900 py-3 pl-4  shadow-lg shadow-neutral-300 dark:shadow-neutral-900">
            <TimelineIcon className="p-3" variant="ghost" color="green">
              <FutureIcon />
            </TimelineIcon>
            <div className="flex flex-col gap-1">
              <Typography variant="h6" color="blue-gray">
                {t("timeline.future")}
              </Typography>
              <Typography variant="small" color="gray" className="font-normal dark:text-neutral-400">
                {t("timeline.futureTime")}
              </Typography>
            </div>
          </TimelineHeader>
        </TimelineItem>
      </Timeline>
    </div>
  );
}
