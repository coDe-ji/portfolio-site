import React from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { IconContext } from "react-icons"
import { useState } from "react"
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import "tailwindcss/tailwind.css"
import bgImage from "../images/textCipher.png"

function Projects() {
  const projects = [
    {
      projectName: "Hangman",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "../images/textCipher.png",
      projectDescription:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      projectName: "Text-Cipher",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "https://www.example.com/image.jpg",
      projectDescription:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      projectName: "City Weather",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "../images/textCipher.png",
      projectDescription:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      projectName: "Cococure",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "../images/textCipher.png",
      projectDescription:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      projectName: "Cococure",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "../images/textCipher.png",
      projectDescription:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
    {
      projectName: "Cococure",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "../images/textCipher.png",
      projectDescription:
        "Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Ciceros De Finibus Bonorum et Malorum for use in a type specimen book.",
    },
  ]

  const [curr, setCurr] = useState(0)
  const prev = () =>
    setCurr((curr) => (curr === 0 ? projects.length - 1 : curr - 1))

  const next = () =>
    setCurr((curr) => (curr === projects.length - 1 ? 0 : curr + 1))

  return (
    <div className="bg-[#E7E7E7] h-screen z-10 relative">
      <div className="m-3 flex flex-col">
        <div className="py-6 text-[3.5em]">
          <h1>A FEW SELECTED WORKS</h1>
        </div>

        <p class="text-[14px] w-4/5 pb-16 text-center self-center">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
        <div className="flex border justify-center">
          <div className="flex flex-row relative space-x-5 transition-transform ease-out duration-10000">
            <div className="flex  space-x-5  max-w-sm relative border overflow-hidden">
              {projects.map((project) => (
                <div
                  className={`border shrink-0 w-[24rem] bg-white h-[24rem] bg-contain bg-center rounded-lg`}
                  style={{
                    backgroundImage: `url(${bgImage})`,
                    transform: `translateX(-${curr * 105}%)`,
                  }}
                >
                  <div className="flex text-[68px] justify-center items-center h-[85%] pt-4">
                    <p>{project.projectName}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-center border border-black px-10">
              <div className="w-[44em]">
                <p>{projects[curr].projectDescription}</p>
              </div>
              <div className="my-8">
                <p>Technolgies used</p>
                <div className="flex gap-10 flex-row">
                  <IconContext.Provider value={{ color: "black", size: "2em" }}>
                    <div className=" mx-1 pt-1">
                      <a href={projects[curr].projectCodeLink}>
                        <AiOutlineGithub />
                      </a>
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "black", size: "2em" }}>
                    <div className=" mx-1 pt-1">
                      <a href={projects[curr].projectCodeLink}>
                        <AiOutlineGithub />
                      </a>
                    </div>
                  </IconContext.Provider>
                  <IconContext.Provider value={{ color: "black", size: "2em" }}>
                    <div className=" mx-1 pt-1">
                      <a href={projects[curr].projectCodeLink}>
                        <AiOutlineGithub />
                      </a>
                    </div>
                  </IconContext.Provider>
                </div>
              </div>

              <div className="flex flex-row place-content-between w-full h-[13%] mt-1 bg-[#dfdede]">
                <div className=" mt-5 ml-2">
                  <a
                    className="text-[14px] m-1"
                    href={projects[curr].projectLiveLink}
                  >
                    VIEW PROJECT<span>&#8599;</span>
                  </a>
                </div>
                <IconContext.Provider value={{ color: "black", size: "2em" }}>
                  <div className=" mx-1 mt-3 ">
                    <a href={projects[curr].projectCodeLink}>
                      <AiOutlineGithub />
                    </a>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute inset-y-0 flex items-center space-x-[80rem] ">
          <button
            onClick={prev}
            className=" p-1 ml-12 rounded-full shadow bg-grey/80 text-gray-800 hover:bg-white border "
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

        <div className="absolute bottom-28 right-0 left-0 ">
          <div className="flex items-center justify-center gap-2">
            {projects.map((_, i) => (
              <div
                className={`transition-all w-2 h-3 bg-black rounded-full
                ${curr === i ? "p-[3px]" : "bg-opacity-40"}`}
              ></div>
            ))}
          </div>
        </div>

        <div class=" mt-12 animate-bounce absolute bottom-4">
          <a class="text-[29px]" href="https://www.example.com">
            VIEW ALL PROJECTS<span class="">&#8599;</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
