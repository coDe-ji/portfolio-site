import React from "react"
import { AiOutlineGithub } from "react-icons/ai"
import { IconContext } from "react-icons"

function Projects() {
  const projects = [
    {
      projectName: "Hangman",
      projectLiveLink: "https://www.google.com",
      projectCodeLink: "https://www.google.com",
      projectImage: "https://www.example.com/image.jpg",
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
  ]

  return (
    <div class="bg-[#E7E7E7] h-screen">
      <div class="m-3  ">
        <h1>A FEW SELECTED WORKS</h1>
        <p class="text-xs w-full pb-4">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
        <div class="flex flex-row space-x-5">
          {projects.map((project) => (
            <div class="border border-black w-1/3 bg-white h-48">
              <div class="flex justify-center h-5/6">
                <p>{project.projectName}</p>
              </div>
              <div class="flex flex-row place-content-between w-full h-1/6 bg-[#9A9A9A]">
                <div>
                  <a class="text-[8px] m-1" href="https://www.example.com">
                    View project
                  </a>
                </div>
                <IconContext.Provider value={{ color: "black", size: "0.8em" }}>
                  <div class=" mx-1 pt-2">
                    <AiOutlineGithub />
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          ))}
        </div>

        <div>
          <a class="m-1" href="https://www.example.com">
            VIEW ALL PROJECTS
          </a>
        </div>
      </div>
    </div>
  )
}

export default Projects
