"use client";
import { Card, CardHeader, CardBody, CardFooter, Typography } from "@material-tailwind/react";
import { Button, Image, Link } from "@nextui-org/react";
import AnimateArrow from "../ui/AnimateArrow";
import { ProjectsProps } from "@/types/ProjectsProps";
import { motion, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { useTheme } from "next-themes";
import { DarkMouseShadowColors, LightMouseShadowColors } from "../constants";

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
      <CardHeader color="blue-gray" className="z-50 relative h-32">
        <Image
          isZoomed
          src={coverImg}
          alt={name}
          className="object-contain w-full h-full"
          style={{ maxWidth: "100%", height: "auto" }}
        />
      </CardHeader>
      <CardBody className="z-50 dark:text-neutral-100 cursor-default">
        <div className="mb-2 flex justify-between items-center">
          <Typography variant="h5" color="blue-gray">
            {name}
          </Typography>
          <Button as={Link} href={`/project/${slug}`} variant="light" size="sm" className="-mr-2">
            <AnimateArrow text="MORE" size={20} />
          </Button>
        </div>
        <Typography className="dark:text-neutral-300">{shortIntro}</Typography>
      </CardBody>
      <CardFooter className="flex flex-wrap z-50 items-center gap-2 pt-0">
        {techStacks?.map((tech) => (
          <Image key={tech.name} src={tech.icon} alt={tech.name} width={20} radius="none" />
        ))}
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
