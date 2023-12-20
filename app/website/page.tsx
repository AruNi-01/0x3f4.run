import { Footer } from "@/components/home-page/Sidebar/Footer";
import { HeartIcon } from "@/components/icons";
import Header from "@/components/website-page/Header";
import Mockup from "@/components/website-page/Mockup";
import LogoCarousel from "@/components/website-page/LogoCarousel";
import { logos } from "@/config/logos";

export default function WebsitePage() {
  return (
    <section className="flex flex-col justify-between items-center gap-10 mx-4 mb-2">
      <Header />
      <Mockup />
      <h2 className="flex gap-2 -mb-7 text-default-400 dark:text-default-500 cursor-default">
        <span>——</span>
        <span className="animate-scale-3000">{<HeartIcon />} </span>
        <span>Built By</span>
        <span>——</span>
      </h2>
      <LogoCarousel logos={logos} />
      <Footer />
    </section>
  );
}
