import React from "react"
import { BsFillMoonFill } from "react-icons/bs"
import { IconContext } from "react-icons"
import { AiOutlineGithub } from "react-icons/ai"
import { FaRegEnvelope } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"

function Landing() {
  return (
    <div class="h-screen relative z-10">
      <div class="flex flex-row place-content-between px-1 fixed z-30 w-full">
        <div class="border border-[#8b575c] text-[10px] p-2 m-2 h-5 w-15 flex items-center">
          <h4 class="text-[#8b575c]">CO-DEji</h4>
        </div>

        <div class="flex flex-row pr-8 mt-2 ml-[120px]">
          <IconContext.Provider value={{ color: "black", size: "0.7em" }}>
            <div>
              <BsFillMoonFill />
            </div>
          </IconContext.Provider>
        </div>
        <div className="flex flew-row gap-5 text-[6px] m-2">
          <div className="hover:rounded-[10px] hover:bg-[#E7E7E7] flex items-center px-2 py-[0] h-3">
            <a href="https://www.google.com">Home</a>
          </div>
          <div className="hover:rounded-[10px] hover:bg-[#E7E7E7] flex items-center px-2 py-[0] h-3">
            <a href="https://www.google.com">Projects</a>
          </div>
          <div className="hover:rounded-[10px] hover:bg-[#E7E7E7] flex items-center px-2 py-[0] h-3">
            <a href="https://www.google.com">Contact</a>
          </div>
        </div>
      </div>
      <div className="flex flew-row gap-6">
        <div class=" flex gap-3 bg-[#E7E7E7] hover:bg-[#e0e0e0] flex-col absolute left-0 top-36 items-center w-[26px] py-2 px-0">
          <IconContext.Provider value={{ color: "black", size: "0.8em" }}>
            <div className="hover:scale-150">
              <AiOutlineGithub />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "black", size: "0.7em" }}>
            <div className="hover:scale-150">
              <AiFillLinkedin />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "black", size: "0.6em" }}>
            <div className="hover:scale-150">
              <FaRegEnvelope />
            </div>
          </IconContext.Provider>
        </div>
        <div className="absolute left-5 right-0 top-0 bottom-4 m-[10%]">
          <div className="text-[4rem]">
            <h1>Developer</h1>
          </div>
          <div className="absolute w-[20px] text-[2rem] leading-[25px] text-center top-[15px] left-[38px] ">
            <h1 className="whitespace-normal break-words -tracking-[1px]">
              D<span className="text-[#F4F4F4]">e</span>signer
            </h1>
          </div>
          <div className="text-[8px] absolute top-[15px] left-[5px] italic text-[#8b575c]">
            <h6>UI/UX</h6>
          </div>
          <div className="text-[10px] absolute right-[170px] top-[25px] italic text-[#8b575c]">
            <h6>Frontend</h6>
          </div>
          <p class="text-[8px] w-[350px] absolute right-[25px] bottom-[-0px]">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </div>
      </div>

      <div class=" mt-8 text-right absolute animate-bounce bottom-2 right-4">
        <a class="text-[9px]" href="https://www.example.com">
          <span className="animate-bounce">&#8600;</span>SCROLL DOWN
        </a>
      </div>
    </div>
  )
}

export default Landing
