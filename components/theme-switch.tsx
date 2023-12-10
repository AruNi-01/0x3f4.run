import { Switch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MoonIcon, SunIcon } from "./icons";

export const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const [isSelected, setIsSelected] = useState(true);

  const handleThemeChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  useEffect(() => {
    theme === "light" ? setIsSelected(false) : setIsSelected(true);
  }, [theme]);

  return (
    <Switch
      size="md"
      color="primary"
      isSelected={isSelected}
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
};
