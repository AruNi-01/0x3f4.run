import { SwitchProps, VisuallyHidden, useSwitch } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { MoonIcon, SunIcon } from "../icons";

export const ThemeSwitch = (props: SwitchProps) => {
  const { theme, setTheme } = useTheme();

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

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: theme === "dark",
    "aria-label": `Switch to ${theme === "light" ? "dark" : "light"} mode`,
    onChange,
    color: "primary",
    size: "sm",
  });

  return (
    <div className="flex flex-col gap-2">
      <Component {...getBaseProps()}>
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              "w-8 h-8",
              "flex items-center justify-center",
              "rounded-lg bg-default-100 hover:bg-default-200",
            ],
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
