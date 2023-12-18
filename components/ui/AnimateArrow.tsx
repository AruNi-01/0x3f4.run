import { cn } from "@nextui-org/system";

export default function AnimateArrow({
  text,
  textColor,
  textSize,
  arrowColor,
  size,
  className,
}: {
  text?: string;
  textSize?: string;
  textColor?: string;
  arrowColor?: string;
  size: number;
  className?: string;
}) {
  return (
    <div className={cn("group inline-flex items-center justify-center text-base font-medium", className)}>
      <span className={cn("w-full", textColor, textSize)}>{text}</span>
      <span className={cn("transition-all ease-in-out group-hover:duration-1000 group-hover:translate-x-2", arrowColor)}>
        {/* prettier-ignore */}
        <svg className="rtl:rotate-180" fill="none" width={size} height={size} viewBox="0 0 72 72" aria-hidden="true" style={{ transition: 'all 1s ease-in-out' }}>
          <path className="transition-all ease-in-out delay-200 group-hover:duration-1000 translate-x-[-8px] group-hover:translate-x-[8px]" clipRule="evenodd" d="M40.0001 19.0245C41.0912 17.7776 42.9864 17.6513 44.2334 18.7423L58.9758 33.768C59.6268 34.3377 60.0002 35.1607 60.0002 36.0257C60.0002 36.8908 59.6268 37.7138 58.9758 38.2835L44.2335 53.3078C42.9865 54.3988 41.0913 54.2725 40.0002 53.0256C38.9092 51.7786 39.0355 49.8835 40.2824 48.7924L52.4445 36.0257L40.2823 23.2578C39.0354 22.1667 38.9091 20.2714 40.0001 19.0245Z" fill="currentColor"></path>
          <path className="transition-all ease-in-out delay-200 group-hover:duration-1000 opacity-0 group-hover:opacity-100" d="M60 36.0273C60 37.6842 58.6569 39.0273 57 39.0273H15C13.3431 39.0273 12 37.6842 12 36.0273C12 34.3704 13.3431 33.0273 15 33.0273H57C58.6569 33.0273 60 34.3704 60 36.0273Z" fill="currentColor"></path>
        </svg>
      </span>
    </div>
  );
}
