import Link from "next/link";
import { Button } from "./ui/button";
import { Download, Send } from "lucide-react";
import {
  RiBriefcase4Fill,
  RiTeamFill,
  RiTodoFill,
  RiArrowDownSLine,
} from "react-icons/ri";

// components
import DevImg from "./DevImg";
import Badge from "./Badge";
import Social from "./Social";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 xl:pt-28 bg-hero bg-no-repeat bg-bottom bg-cover dark:bg-none">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          <div className="flex max-w-[680px] sm:h-[80vh] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            {/* text */}
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              Artist
            </div>
            <h1 className="h1 mb-4">Hello,I am Sonali Tiwari</h1>
            <p className="subtitle max-w-[490px] mx-auto xl:mx-0">
              Brief description with insights into myself, my vocational
              journey, and what I engage in professionally
            </p>
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <Link href="/contact">
                <Button className="gap-x-2">
                  Contact me <Send size={18} />
                </Button>
              </Link>
{/*               <Button variant="secondary" className="gap-x-2">
                Download CV
                <Download size={18} />
              </Button> */}
            </div>
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all"
            />
          </div>

          {/* Image */}
          <div className="hidden xl:flex relative">
            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[10%] -left-[35rem]"
              icon={<RiBriefcase4Fill className="text-2xl" />}
              endCountNum={10}
              badgeText={"Years Of Experience"}
            />
            {/* badge 1 end */}

            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[40%] -left-[30rem]"
              icon={<RiTodoFill className="text-2xl" />}
              endCountNum={1}
              endCountText="k"
              badgeText={"Finished Projects"}
            />
            {/* badge 1 end */}

            {/* badge 1 */}
            <Badge
              containerStyles="absolute top-[25%] -right-[5rem]"
              icon={<RiTeamFill className="text-2xl" />}
              endCountNum={1}
              endCountText="k"
              badgeText={"Happy Clients"}
            />
            {/* badge 1 end */}
            <div className="bg-hero_shape_light dark:bg-hero_shape_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
              <DevImg
                containerStyles="bg-hero_shape w-[px] h-[510px] bg-no-repeat relative bg-bottom"
                imgSrc="/profile/profile1.png"
              />
            </div>
          </div>
          {/* Image End */}
        </div>

        {/* icon */}

        {/* Icon End */}
      </div>
      <div className="hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce">
        <RiArrowDownSLine className="text-3xl text-primary" />
      </div>
    </section>
  );
};

export default Hero;
