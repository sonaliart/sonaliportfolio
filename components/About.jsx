import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";
import { get } from "react-hook-form";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Sonali Tiwari",
  },
  {
    icon: <MailIcon size={20} />,
    text: "artgustbysonali@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Wish Me Birthday on 14th October",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master of Visual Arts (Painting)",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Lucknow",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Dr. Shakuntla Mishra National Rehabilitation University",
        qualification: "Master of Visual Arts (Painting)",
        years: "2021 - Present",
      },
      {
        university: "Dr. Shakuntla Mishra National Rehabilitation University",
        qualification: "Bachelor of Fine Arts",
        years: "2015 - 2019",
      },
      {
        university: "Lucknow Model Public Inter College (U.P. Board)",
        qualification: "Intermediate",
        years: "2013 - 2015",
      },
      {
        university: "Lucknow Model Public Inter College (U.P. Board)",
        qualification: "High School",
        years: "2011 - 2013",
      },
    ],
  },
  {
    title: "work",
    data: [
      {
        company: "Avadh Collegiate (D.K. Campus)",
        position: "Art and Craft Teacher",
        years: "July 2022 - Present",
        responsibilities: [
          "Teaching Art & Craft with a focus on drawing and painting techniques.",
          "Developing students' aesthetic concepts and teamwork through various craft activities.",
          "Planning and executing art displays for school and community events.",
          "Evaluating student performance and communicating progress with parents and counselors.",
        ],
      },
      {
        company: "Lucknow Model Public School",
        position: "Art and Craft Teacher",
        years: "July 2021 - July 2022",
        responsibilities: [
          "Taught fundamental concepts of color and craft to students.",
          "Organized and presented art exhibitions for school and community.",
          "Assessed student progress and collaborated with parents and counselors.",
        ],
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Oil Painting (Portraits, Landscapes)",
      },
      {
        name: "Acrylic Painting (Abstract, Landscape)",
      },
      {
        name: "Live Sketching",
      },
      {
        name: "Art History, Composition, Color Theory",
      },
      {
        name: "Visual Storytelling",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imagePath: "/about/figma.svg",
      },
      {
        imagePath: "/about/notion.svg",
      },
      {
        imagePath: "/about/instagram.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[1000px] pb-12 xl:py-24">
      <div className="container">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image start */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles={
                "bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              }
              imgSrc={"/profile/profile2.png"}
            />
          </div>
          {/* image end */}
          {/* tabs start */}
          <div className="flex-1 ">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal Start */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      Fine artist and observer of life, capturing moments and emotions through my artwork.
                      experience{" "}
                    </p>

                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* icons end */}

                    {/* language start */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>

                      <div className="border-b border-border"></div>
                      <div>English, Hindi</div>
                    </div>
                    {/* language end */}
                  </div>
                </TabsContent>
                {/* Personal End */}

                {/* personal Start */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* Experirnce Start */}
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary pb-4">
                          <GraduationCap />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="flex-col">
                                    {" "}
                                    <div className="font-semibold text-xl leading-none text-muted-foreground mb-2">
                                      {item.university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {item.qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {item.years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Experience end */}
                      {/* Education Start */}
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary pb-4">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "work").title}
                          </h4>
                        </div>
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "work").data.map(
                            (item, index) => {
                              const { company, position, years } = item;
                              return (
                                <div
                                  className="flex gap-x-8 group "
                                  key={index}
                                >
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div className="flex-col">
                                    {" "}
                                    <div className="font-semibold text-xl leading-none text-muted-foreground mb-2">
                                      {item.company}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {item.position}
                                    </div>
                                    <div className="text-base font-medium">
                                      {item.years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education end */}
                    </div>
                  </div>
                </TabsContent>
                {/* Personal End */}

                {/* personal Start */}
                <TabsContent value="skills">
                  <div className="text-center xl:text-left ">
                    <h3 className="h3 mb-8">What I Use Everyday</h3>
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">Skills</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name } = item;
                            return (
                              <div
                                className="w-2/4 text-left xl:text mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    {/* tools i use */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 xl:text-left">
                        Tools
                      </h4>
                    </div>
                    <div className="border-b border-border mb-4"></div>
                    {/* tool list */}
                    <div className="flex gap-x-8 justify-center xl:justify-start">
                      {getData(skillData,'tools').data.map((item, index)=> {
                        const {imagePath} = item;
                        return <div key={index} >
                          <Image src={imagePath} width={48} height={48} priority/>
                        </div>
                      })}
                    </div>
                  </div>
                </TabsContent>
                {/* Personal End */}
              </div>
            </Tabs>
          </div>
          {/* tabs end */}
        </div>
      </div>
    </section>
  );
};

export default About;
