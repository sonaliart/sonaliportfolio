"use client";

import Image from "next/image";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

const reviewData = [
  {
    avatar: "/reviews/avatar-1.png",
    name: "Jessica",
    review:
      "Sonali's art classes have been transformative for me. Her expertise in oil painting is unparalleled, and she teaches with such clarity and passion. I've learned so much about color theory and composition from her. Highly recommended!",
  },
  {
    avatar: "/reviews/avatar-2.png",
    name: "Michael",
    review:
      "I attended Sonali's acrylic painting workshop and was amazed by her teaching style. She breaks down complex techniques into easy-to-follow steps. Her feedback helped me improve my skills significantly. I can't wait to join her next session!",
  },
  {
    avatar: "/reviews/avatar-3.png",
    name: "Sarah",
    review:
      "As a beginner in sketching, Sonali's guidance has been invaluable. Her patience and encouragement have boosted my confidence. Her live sketching sessions are a joy to attend, and I'm grateful for the skills I've gained under her mentorship.",
  },
  {
    avatar: "/reviews/avatar-4.png",
    name: "David",
    review:
      "Sonali not only teaches art but also inspires creativity. Her art history lessons have broadened my understanding of different art movements. She's dedicated to her students' growth and ensures each one receives personalized attention.",
  },
  {
    avatar: "/reviews/avatar-5.png",
    name: "Sophia",
    review:
      "I commissioned a portrait from Sonali, and I couldn't be happier with the result. She captured the essence of the subject beautifully. Her attention to detail and artistic vision are truly remarkable. I highly recommend her for custom artworks.",
  },
  {
    avatar: "/reviews/avatar-6.png",
    name: "Daniel",
    review:
      "Sonali's YouTube tutorials are a treasure trove for aspiring artists like me. Her explanations are clear, and I've learned so many new techniques from her videos. Her channel is a must-follow for anyone passionate about art.",
  },
];


const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto  ">Reviews</h2>
        <Swiper
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1400: { slidesPerView: 3 },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className=""
        >
          {reviewData.map((person, index) => {
            return (
              <SwiperSlide key={index}>
                <Card className='bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]'>
                    <CardHeader className='p-0 mb-10'><div className="flex items-center gap-x-4">
                        <Image src={person.avatar} width={70} height={70} priority></Image>
                        <div className="flex flex-col ">
                            <CardTitle>{person.name}</CardTitle>
                        </div>
                    </div></CardHeader>
                    <CardDescription className='text-lg text-muted-foreground'>{person.review}</CardDescription>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;
