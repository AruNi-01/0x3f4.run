import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { SunIcon } from "./root/icon/SunIcon";
import { MoonIcon } from "./root/icon/MoonIcon";
import { useTheme } from "next-themes";

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
      size="lg"
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
