import { VercelIcon } from "../../icons";
import Link from "../../ui/Link";

export const Footer = () => {
  return (
    <div className="text-sm text-[#71717A]">
      <div className="flex justify-center gap-2">
        <p className="font-normal">© 2023 -</p>
        <Link
          href="https://github.com/aruni-01/0x3f4.run"
          className="text-sm"
        >
          AarynLu
        </Link>
      </div>
      <div className="flex justify-center gap-2 mt-1">
        <p className="font-normal">Deployed on</p>
        <Link href="https://www.vercel.com">
          <VercelIcon className="" height={16} />
        </Link>
      </div>
    </div>
  );
};
