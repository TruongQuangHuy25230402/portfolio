"use client";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";
export default function Home() {
  const handleDownloadCV = () => {
    window.location.href = "/TruongQuangHuy_CV.pdf";
  };
  return (
    <div>
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div
            className="flex flex-col xl:flex-row items-center 
          justify-between xl:pt-0 xl:pb-2"
          >
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Web Developer</span>
              <h1 className="h1">
                Hello I&apos;m
                <br /> <span className="text-accent">Truong Huy</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80">
                I excel at crafting elegant digital expriences and I am
                proficient in various programming languages and technologies.{" "}
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">
                <Button
                  className="uppercase flex items-center gap-2"
                  variant="outline"
                  size="lg"
                  onClick={handleDownloadCV}
                >
                  <span>My Resume</span>
                  <FiDownload className="text-xl" />
                </Button>
                <div className="mb-8 xl:mb-8">
                  <Social
                    containerStyles="flex gap-6"
                    iconStyles=" mt-8 w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500 "
                  />
                </div>
              </div>
            </div>

            <div className="order-1 xl:order-none mb-8 xl:mb-8">
              <Photo />
            </div>
          </div>
        </div>
        <div>
          <Stats />
        </div>
      </section>
    </div>
  );
}
