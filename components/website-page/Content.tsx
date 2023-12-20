import { Button, Checkbox, CheckboxGroup, Image, Link, Snippet } from "@nextui-org/react";
import H2Title from "../ui/H2Title";
import { VercelIcon2 } from "../icons";
import AnimateLink from "../ui/AnimateLink";

export default function Content() {
  const selectedFeature = ["1", "2", "3", "4"];

  return (
    <div className="flex flex-col gap-3 justify-center font-medium opacity-80 animate-slide-in-to-up-1000">
      <H2Title className="font-bold">Intro</H2Title>
      <span>
        <p>
          This is a personal website, you can show your information, your projects, your social contact, your skills,
          etc.
        </p>
        <p>
          It &apos;s based on React, Next.js, Tailwind CSS, NextUI, Lottie Animation, and more. You can see them in the
          logo display area above.
        </p>
      </span>
      <H2Title className="font-bold">Feature</H2Title>
      <CheckboxGroup defaultValue={selectedFeature}>
        <Checkbox isReadOnly value="1">
          Support light and dark theme
        </Checkbox>
        <Checkbox isReadOnly value="2">
          Adapt desktop and mobile devices
        </Checkbox>
        <Checkbox isReadOnly value="3">
          Next.js app router and api router feature
        </Checkbox>
        <Checkbox isReadOnly value="4">
          More configuration, less code {"(data/code splitting...)"}
        </Checkbox>
        <Checkbox value="5">coming soon...</Checkbox>
      </CheckboxGroup>
      <H2Title className="font-bold">Usage</H2Title>
      <span className="space-y-2">
        <p>
          1. Clone{" "}
          <AnimateLink isExternal href="https://github.com/AruNi-01/0x3f4.run">
            this repo
          </AnimateLink>
        </p>
        <div className="hidden lg:flex">
          <Snippet size="sm">git clone https://github.com/AruNi-01/0x3f4.run.git</Snippet>
        </div>
        <Snippet size="sm" className="lg:hidden">
          git clone repo_git_url
        </Snippet>
        <p>2. Install dependencies</p>
        <Snippet size="sm">npm install</Snippet>
        <p>3. Run it localhost</p>
        <Snippet size="sm">npm run dev</Snippet>
      </span>
      <H2Title className="font-bold">Deploy on vercel</H2Title>
      <span className="space-y-2">
        <p>1. Go to github, fork this repo on your account.</p>
        <p>
          2. Go to vercel, login and import this repo, or click right button to deploy.{" "}
          <Button
            as={Link}
            size="sm"
            href="https://vercel.com/new"
            isExternal
            color="primary"
            startContent={<VercelIcon2 />}
            endContent={<span className="font-bold">Deploy</span>}
          />
        </p>
        <p>3. Waiting done!</p>
      </span>
    </div>
  );
}
