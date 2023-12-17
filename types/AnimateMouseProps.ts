import { MotionValue } from "framer-motion";

export interface AnimateMouseProps {
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  groupName: string;
  zIndex?: string;
  isSingleColor: boolean;
  lightColor?: string;
  darkColor?: string;
  lightColorArray?: string[];
  darkColorArray?: string[];
  className?: string;
}
