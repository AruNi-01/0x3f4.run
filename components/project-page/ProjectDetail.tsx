import { ProjectsProps } from "@/types/ProjectsProps";
import { Button, Divider, Link, cn } from "@nextui-org/react";
import { useState } from "react";
import TechStack from "../about-page/TechStack";
import { PreviewIcon, SourceCodeIcon } from "../icons";
import H1Title from "../ui/H1Title";
import H2Title from "../ui/H2Title";

export default function ProjectDetail(props: ProjectsProps) {
  const { name, detailIntro, coverImg, previewLink, sourceLink, techStacks } = props;

  const [isImgHover, setIsImgHover] = useState(false);
  const [isImgHoverAnimation, setIsImgHoverAnimation] = useState(false);

  return (
    <div className="flex flex-col gap-4">
      <H1Title className="mb-4">{name}</H1Title>
      <figure
        className="relative group/img"
        onMouseEnter={() => {
          setIsImgHoverAnimation(true);
          // delay 500ms to wait for the before animation(isImgHoverAnimation from false to true) finish
          setTimeout(() => {
            setIsImgHover(true);
          }, 500);
        }}
        onMouseLeave={() => {
          setIsImgHoverAnimation(false);
          // delay 500ms to wait for the slide-out-up animation finish
          setTimeout(() => {
            setIsImgHover(false);
          }, 500);
        }}
      >
        <img
          src={coverImg}
          alt={name}
          className={cn(
            "shadow-xl border dark:border-neutral-600 rounded-xl transition ease-in-out",
            isImgHoverAnimation ? "blur-sm duration-1000" : "blur-none duration-1000"
          )}
        />
        {isImgHover && (
          <figcaption className="absolute inset-0 flex items-center justify-center gap-5">
            {previewLink && (
              <Button
                as={Link}
                isExternal
                href={previewLink}
                variant="flat"
                color="default"
                size="lg"
                startContent={<PreviewIcon />}
                endContent={<span className="-ml-1 font-bold">Preview</span>}
                className={`${isImgHoverAnimation ? "animate-slide-in-up-500" : "animate-slide-out-up-500"}`}
              />
            )}
            {sourceLink && (
              <Button
                as={Link}
                isExternal
                href={sourceLink}
                variant="flat"
                color="default"
                size="lg"
                startContent={<SourceCodeIcon />}
                endContent={<span className="-ml-1 font-bold">Source</span>}
                className={`${isImgHoverAnimation ? "animate-slide-in-up-500" : "animate-slide-out-up-500"}`}
              />
            )}
          </figcaption>
        )}
      </figure>
      <span className="self-center text-neutral-400 dark:text-neutral-500 text-sm -mt-3">Click/Hover get preview or source code</span>
      <div className="font-medium opacity-80">{detailIntro}di</div>
      {techStacks && (
        <>
          <Divider />
          <H2Title>Tech stack</H2Title>
          <TechStack techStacks={techStacks} />
        </>
      )}
    </div>
  );
}
