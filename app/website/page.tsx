import { Footer } from "@/components/home-page/Sidebar/Footer";
import { HeartIcon } from "@/components/icons";
import Content from "@/components/website-page/Content";
import Header from "@/components/website-page/Header";
import LogoCarousel from "@/components/website-page/LogoCarousel";
import Mockup from "@/components/website-page/Mockup";
import { logos } from "@/config/logos";

export default function WebsitePage() {
  return (
    <section className="flex flex-col items-start lg:items-center justify-around gap-4 lg:mx-0 mx-7">
      <title>Website | 0x3f4.run</title>
      <Header />
      <Mockup />
      <h2 className="flex gap-2 -mb-3 self-center text-default-400 dark:text-default-500 cursor-default animate-slide-in-from-right-1000">
        <span>——</span>
        <span className="animate-scale-3000">{<HeartIcon />} </span>
        <span>Built By</span>
        <span>——</span>
      </h2>
      <LogoCarousel logos={logos} />
      <Content />
      <Footer className="self-center mt-10 mb-2" />
    </section>
  );
}
