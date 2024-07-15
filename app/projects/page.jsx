"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "@/components/ProjectCard";
import projectData from '@/public/data/projectData.json';



// Parse dates and sort the projects by date in descending order
const sortedProjectData = projectData.map(project => ({
  ...project,
  date: new Date(project.date)
})).sort((a, b) => b.date - a.date);

const uniqueCategory = [
  "latest project",
  "all projects",

  ...new Set(projectData.map((item) => item.category)),
];

// const Projects = () => {
//   const [categories, setCategories] = useState(uniqueCategory);
//   const [category, setCategory] = useState("all projects");

//   const filteredProjects = projectData.filter(project =>{
//     // if category is all project retrun all the projects else return the projects in the category
//     return category === 'all projects' ? project : project.category === category;
//   });

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategory);
  const [category, setCategory] = useState("latest project");

  const filteredProjects = sortedProjectData.filter((project,index) => {
    // if category is "all projects" return all the projects
    // if category is "latest project" return the most recent project
    // else return the projects in the category
    if (category === "all projects") {
      return project;
    } else if (category === "latest project") {
      return index < 12;
    } else {
      return project.category === category;
    }
  });

  // console.log(filteredProjects);

  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="mb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-6 lg:max-w-[680px] mb-12 mx-auto md:border dark:border-none ">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                onClick={()=>setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
            {/* tab Content */}
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {filteredProjects.map((project,index)=>{
                return <TabsContent value={category} key={index}>
                  <ProjectCard project={project} key={index} />
                </TabsContent>
              })}
            </div>



        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
