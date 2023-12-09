import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import { useTheme } from "next-themes";
import { Skeleton } from "@nextui-org/react";

const TitleAnimation = () => {
  const { theme } = useTheme();

  const [isThemeLoaded, setIsThemeLoaded] = useState(false);

  useEffect(() => {
    setIsThemeLoaded(true);
  }, [theme]);

  // get theme by next-themes is async, so need to wait for it to load, otherwise this component style will be wrong!
  if (!isThemeLoaded) {
    return (
      <div className={`${styles.container}`}>
        <Skeleton className="h-3 w-3/5 rounded-lg my-[15px]" />
      </div>
    );
  }

  return (
    <div
      // can change style based on theme, but now dark or light theme has no difference
      className={`${styles.container} ${theme === "light" ? styles.light : ""}`}
    >
      <p data-text="AarynLu | 0x3f4.run">AarynLu | 0x3f4.run</p>
    </div>
  );
};

export default TitleAnimation;
