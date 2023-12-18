"use client";
import { ProjectsProps } from "@/types/ProjectsProps";
import { Card, CardBody, CardFooter, CardHeader, Typography } from "@material-tailwind/react";
import { Button, Divider, Image, Link } from "@nextui-org/react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useTheme } from "next-themes";
import { DarkMouseShadowColors, LightMouseShadowColors } from "../constants";
import AnimateArrow from "../ui/AnimateArrow";

export function ProjectCard(props: ProjectsProps) {
  const { name, shortIntro, coverImg, slug, techStacks } = props;

  const { theme } = useTheme();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const darkRandomColor = DarkMouseShadowColors[Math.floor(Math.random() * DarkMouseShadowColors.length)];
  const lightRandomColor = LightMouseShadowColors[Math.floor(Math.random() * LightMouseShadowColors.length)];

  return (
    <Card
      onMouseMove={(e) => {
        const { left, top } = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - left);
        mouseY.set(e.clientY - top);
      }}
      className="group/motion flex dark:bg-neutral-900"
    >
      <CardHeader color="blue-gray" className="border border-neutral-100 dark:border-neutral-700 group/img z-50 h-44 relative">
        <img
          src={coverImg}
          alt={name}
          className="object-cover w-full h-full transition-all ease-in-out duration-1000 group-hover/img:scale-110"
        />
      </CardHeader>
      <CardBody className="z-50 dark:text-neutral-100 cursor-default">
        <div className="mb-2 flex justify-between items-center">
          <Typography variant="h5" color="blue-gray" className="lg:line-clamp-1 overflow-ellipsis">
            {name}
          </Typography>
          <Button as={Link} href={`/project/${slug}`} variant="light" size="sm" className="-mr-2">
            <AnimateArrow text="MORE" size={20} />
          </Button>
        </div>
        <Typography className="dark:text-neutral-300 lg:line-clamp-2 overflow-ellipsis">{shortIntro}</Typography>
      </CardBody>
      <CardFooter className="flex flex-wrap justify-start z-50 items-center gap-2 pt-0">
        {techStacks?.map((tech) => (
          <Image key={tech.name} src={tech.src} alt={tech.name} width={20} radius="none" />
        ))}
        {(!techStacks || techStacks.length === 0) && (
          <div className="flex justify-center-center items-center min-h-[20px] w-2/3 m-auto">
            <Divider />
          </div>
        )}
      </CardFooter>
      <motion.div
        className="z-10 pointer-events-none absolute -inset-px blur-lg opacity-0 transition duration-500 group-hover/motion:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              ${theme === "dark" ? darkRandomColor : lightRandomColor},
              transparent 80%
            )
          `,
        }}
      />
    </Card>
  );
}
