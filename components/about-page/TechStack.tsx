import { TechStacksProps } from "@/types/TechStacksProps";
import { Chip, Image, Link } from "@nextui-org/react";

export default function TechStack({ techStacks }: { techStacks: TechStacksProps[] }) {
  return (
    <>
      {!techStacks || techStacks.length === 0 ? (
        <p className="text-neutral-500 dark:text-neutral-400 text-sm">No tech stack.</p>
      ) : (
        <ul className="mt-1 flex flex-wrap items-center gap-3">
          {techStacks.map(({ src, name, href }, index) => (
            <li
              key={`${name}-${index}`}
              className="flex items-center px-2 py-1 rounded-lg border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
            >
              <Link isExternal href={href}>
                <Chip
                  startContent={<Image src={src} width={18} height={18} alt={name} radius="none" />}
                  endContent={<p className="font-medium text-default-500">{name}</p>}
                  variant="light"
                  size="md"
                ></Chip>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
