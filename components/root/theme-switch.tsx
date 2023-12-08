import React from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./icon/SunIcon";
import { MoonIcon } from "./icon/MoonIcon";
import { useTheme } from "next-themes";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Switch
      defaultSelected={false}
      size="lg"
      color="primary"
      onChange={handleThemeChange}
      thumbIcon={({ isSelected, className }) =>
        isSelected ? (
          <SunIcon className={className} />
        ) : (
          <MoonIcon className={className} />
        )
      }
    ></Switch>
  );
}
