"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/pagination";

// import requres modules
import { Pagination } from "swiper/modules";

// components

import ProjectCard from "@/components/ProjectCard";
import projectData from '@/public/data/projectData.json';
// import projectData2 from '@/public/data/projectData2.json';

// Function to get one project per category
// const getProjectsByCategory = (projects) => {
//   const categoryMap = {};

//   projects.forEach((project) => {
//     if (!categoryMap[project.category]) {
//       categoryMap[project.category] = project;
//     }
//   });

//   return Object.values(categoryMap);
// };

const getProjectsByCategory = (projects) => {
  const categoryMap = {};

  projects.forEach((project) => {
    if (!categoryMap[project.category] || new Date(project.date) > new Date(categoryMap[project.category].date)) {
      categoryMap[project.category] = project;
    }
  });

  return Object.values(categoryMap);
};


const Work = () => {
  const projectsByCategory = getProjectsByCategory(projectData);

  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* text */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          {/* <p className="subtitle mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p> */}
          <Link href="/projects">
            <Button>All Projects</Button>
          </Link>
        </div>

        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper className="h-[480px]" slidesPerView={1} breakpoints={{640:
            {slidesPerView: 2,}
          }} spaceBetween={30} modules={[Pagination]} pagination={{clickable:true}}>
            {/* show only first fourr projects */}
            {projectsByCategory.slice(0,4).map((projects, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={projects} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;