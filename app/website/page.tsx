import LogoCarousel from "@/components/home-page/LogoCarousel";
import { HeartIcon } from "@/components/icons";
import { logos } from "@/config/logos";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function WebsitePage() {
  return (
    <section className="flex flex-col justify-around items-center gap-10">
      <h1 className="text-2xl font-bold">Website Page, Coming soon</h1>
      <Button as={Link} href="/" color="primary">
        Back Home
      </Button>

      <h2 className="flex gap-2 -mb-7 text-default-400 dark:text-default-500 cursor-default">
        <span>——————</span>
        <span className="animate-scale-3000">{<HeartIcon />} </span>
        <span>Thanks</span>
        <span>——————</span>
      </h2>
      <LogoCarousel logos={logos} />
    </section>
  );
}
