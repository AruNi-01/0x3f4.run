"use client";

import { VisuallyHidden, cn, useSwitch } from "@nextui-org/react";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";

export const ThemeSwitch = ({ className }: { className?: string }) => {
  const { theme, setTheme } = useTheme();
  const t = useTranslations("controls");

  // const [isSelected, setIsSelected] = useState(true);
  // const handleThemeChange = () => {
  //   theme === "light" ? setTheme("dark") : setTheme("light");
  // };
  // useEffect(() => {
  //   theme === "light" ? setIsSelected(false) : setIsSelected(true);
  // }, [theme]);

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  const { Component, slots, isSelected, getBaseProps, getInputProps, getWrapperProps } = useSwitch({
    isSelected: theme === "dark",
    "aria-label": theme === "light" ? t("switchToDark") : t("switchToLight"),
    onChange,
    color: "primary",
    size: "sm",
  });

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: ["w-8 h-8", "flex items-center justify-center", "rounded-lg bg-default-100 hover:bg-default-200"],
          })}
        >
          {isSelected ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>

    // Switch button changes the theme
    // <Switch
    //   size="md"
    //   color="primary"
    //   isSelected={isSelected}
    //   onChange={handleThemeChange}
    //   startContent={<SunIcon />}
    //   endContent={<MoonIcon />}
    //   thumbIcon={({ isSelected, className }) =>
    //     isSelected ? (
    //       <SunIcon className={className} />
    //     ) : (
    //       <MoonIcon className={className} />
    //     )
    //   }
    // />
  );
};
