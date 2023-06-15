import React from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { IconContext } from "react-icons"
import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import "tailwindcss/tailwind.css"

function Projects() {
  const projects = [
    {
      projectName: "Hangman",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "../images/textCipher.png",
    },
    {
      projectName: "Text-Cipher",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "https://www.example.com/image.jpg",
    },
    {
      projectName: "City Weather",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "https://www.example.com/image.jpg",
    },
    {
      projectName: "Cococure",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "https://www.example.com/image.jpg",
    },
    {
      projectName: "Cococure",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "https://www.example.com/image.jpg",
    },
    {
      projectName: "Cococure",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "https://www.example.com/image.jpg",
    },
  ]

  const [curr, setCurr] = useState(0)
  const prev = () =>
    setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1))

  return (
    <div class="bg-[#E7E7E7] h-screen relative">
      <div class="m-3  ">
        <h1>A FEW SELECTED WORKS</h1>
        <p class="text-xs w-full pb-4">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
        <div className="flex justify-center border">
          <div
            class="flex flex-row  max-w-sm relative space-x-5 transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${curr * 50}%)` }}
          >
            <div class="flex  space-x-5 max-w-full relative border ">
              {projects.map((project) => (
                <div class="border flex-shrink-0 w-44 bg-[..src/images/textCipher.png] bg-cover bg-center h-48">
                  <div class="flex justify-center items-center h-[85%]">
                    <p>{project.projectName}</p>
                  </div>
                  <div class="flex flex-row place-content-between w-full h-[12%] mt-1.5 bg-[#dfdede]">
                    <div>
                      <a class="text-[6px] m-1" href={project.projectLiveLink}>
                        VIEW PROJECT<span class="">&#8599;</span>
                      </a>
                    </div>
                    <IconContext.Provider
                      value={{ color: "black", size: "0.8em" }}
                    >
                      <div class=" mx-1 pt-2">
                        <a href={project.projectCodeLink}>
                          <AiOutlineGithub />
                        </a>
                      </div>
                    </IconContext.Provider>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 flex items-center space-x-[26rem] ">
          <button
            onClick={prev}
            className=" p-1 ml-12 rounded-full shadow bg-grey/80 text-gray-800 hover:bg-white"
          >
            <FiChevronLeft />
          </button>
          <button
            onClick={next}
            className="p-1 rounded-full shadow bg-grey/80 text-gray-800 hover:bg-white"
          >
            <FiChevronRight />
          </button>
        </div>

        <div className="absolute bottom-12 right-0 left-0">
          <div className="flex items-center justify-center gap-2">
            {projects.map((_, i) => (
              <div
                className={`transition-all w-1.5 h-1.5 bg-white rounded-full
                ${curr === i ? "p-1" : "bg-opacity-50"}`}
              ></div>
            ))}
          </div>
        </div>

        <div class=" mt-8">
          <a class="text-[9px]" href="https://www.example.com">
            VIEW ALL PROJECTS<span class="">&#8599;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
