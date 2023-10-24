"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Image from "next/image"

const testimonialsData = [
    {
      name: "Alice Smith",
      text:
        "A real sense of community, nurtured. Really appreciate the help and support from the staff during my trips. Very helpful and always available when needed.",
      stars: [1,2,3,4,5],
      image: "/user1.png",
    },
    {
        name: "Uwase LIna",
        text:
          "I've traveled the world, and this community stands out. The support and camaraderie are unmatched. A heartfelt thank you for making my journeys memorable.",
        stars: [1,2,3,4],
        image: "/user2.png",
      },
      {
        name: "Amizero Tresor",
        text:
          "Absolutely impressed! The staff here goes above and beyond to ensure your experience is seamless. It's like traveling with friends who genuinely care about your well-being",
        stars: [1,2,3,4,5],
        image: "/user3.png",
      },
      {
        name: "Bugingo Eloi",
        text:
          "I've been on countless adventures, but this community is a gem. The connections I've made and the assistance I've received are unparalleled. I highly recommend it to fellow travelers.",
        stars: [1,2,3,4],
        image: "/user4.png",
      },
      {
        name: "Ngabo Iris",
        text:
          "This place is a traveler's haven! The warm and welcoming atmosphere, along with the exceptional support, makes every trip a delight. Kudos to the team!",
        stars: [1,2,3,4,5,6],
        image: "/user5.png",
      },
    // Add more testimonial data here
  ];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrentIndex((currentIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const currentTestimonial = testimonialsData[currentIndex];
    return (
        <div className="w-full bg-[url('/testimonials.png')] flex flex-row items-center bg-cover h-[95vh] p-8">
            <div className="w-[20%] flex flex-col justify-center items-center">
                <ChevronLeft size={80} color="#FFFFFF" onClick={handlePrev} />
            </div>
            <div className="w-[60%] h-full mx-auto flex flex-col justify-start items-center gap-6">
                <div className="flex flex-col gap-1 items-center">
                    <p className="text-white text-sm opacity-90 font-medium">Testimonials</p>
                    <h1 className="text-2xl font-semibold text-white">What they say about us</h1>
                </div>
                <div className="flex flex-row items-center gap-3">
                    {currentTestimonial.stars?.map((item, index) => (
                        <Star size={18} key={index} fill="#FE940A" color="#FE940A" />
                    ))}
                </div>
                <p className="text-xs text-center w-[70%] text-white opacity-80">{currentTestimonial.text}</p>
                <h1 className="text-2xl font-semibold mt-6 text-white opacity-90 leading-loose">{currentTestimonial.name}</h1>
                {/* <Image src={currentTestimonial.image} width={100} height={100} alt={currentTestimonial.name} /> */}
                <div className="w-full flex flex-row items-center justify-between">
                    {testimonialsData.map((testimonial, index) => (
                        <Image key={index} src={testimonial.image} width={`${ index === currentIndex ? 140 : 100}`} height={`${ index === currentIndex ? 140 : 100}`} alt="user pic" />
                    ) )}
                </div>
                <div className="flex flex-row items-center gap-3">
                    {testimonialsData.map((testimonial, index) => (
                        <div
                        key={index}
                        className={`${
                            index === currentIndex ? "p-[6px] bg-[#FE940A]" : "p-1 bg-white"
                        } rounded-full`}
                        onClick={() => setCurrentIndex(index)}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
                <ChevronRight size={80} color="#FE940A" onClick={handleNext} />
            </div>
        </div>
    )
}

export default Testimonials