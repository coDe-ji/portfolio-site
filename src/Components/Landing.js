import React from "react"
import { BsFillMoonFill } from "react-icons/bs"
import { IconContext } from "react-icons"
import { AiOutlineGithub } from "react-icons/ai"
import { FaRegEnvelope } from "react-icons/fa"
import { AiFillLinkedin } from "react-icons/ai"

function Landing() {
  return (
    <div class="h-screen relative z-10">
      <div class="flex flex-row place-content-between px-1 fixed z-40 w-full border ">
        <div class="border border-[rgb(32,39,155)] text-[10px] p-2 m-4 h-12 w-15 flex items-center">
          <h4 class="text-[#8b575c] text-[4em]">CO-DEji</h4>
        </div>

        <div class="flex flex-row pr-8 mt-2 ml-[200px]">
          <IconContext.Provider value={{ color: "black", size: "1.5em" }}>
            <div>
              <BsFillMoonFill />
            </div>
          </IconContext.Provider>
        </div>
        <div className="flex flew-row gap-16 text-[16px] m-4 pr-6">
          <div className="hover:rounded-[10px] hover:bg-[#E7E7E7] flex items-center px-3 py-[0] h-6">
            <a href="https://www.google.com">Home</a>
          </div>
          <div className="hover:rounded-[10px] hover:bg-[#E7E7E7] flex items-center px-3 py-[0] h-6">
            <a href="https://www.google.com">Portfolio</a>
          </div>
          <div className="hover:rounded-[10px] hover:bg-[#E7E7E7] flex items-center px-3 py-[0] h-6">
            <a href="https://www.google.com">Contact</a>
          </div>
        </div>
      </div>
      <div className="flex flew-row gap-6">
        <div class=" flex gap-6 bg-[#E7E7E7] hover:bg-[#e0e0e0] flex-col absolute left-0 top-2/4 items-center w-[60px] py-2 px-0">
          <IconContext.Provider value={{ color: "black", size: "2.8em" }}>
            <div className="hover:scale-150">
              <AiOutlineGithub />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "black", size: "2.5em" }}>
            <div className="hover:scale-150">
              <AiFillLinkedin />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "black", size: "2em" }}>
            <div className="hover:scale-150">
              <FaRegEnvelope />
            </div>
          </IconContext.Provider>
        </div>
        <div className="absolute left-8 right-0 -top-7 bottom-6 m-[10%]">
          <div className="text-[10em]">
            <h1>Developer</h1>
          </div>
          <div className="absolute w-[50px] text-[6em] leading-[68px] text-center top-[22px] left-[95px] ">
            <h1
              className="break-words text-center -tracking-[7px]
             "
            >
              D<span className="text-[#F4F4F4]">e</span>s
              <span className="leading-[80px]">i</span>
              <span className="leading-[10px]">g</span>ner
            </h1>
          </div>
          <div className="text-[24px] absolute top-[36px] left-[12px] italic text-[#8b575c]">
            <h6>UI/UX</h6>
          </div>
          <div className="text-[24px] absolute right-[450px] top-[65px] italic text-[#8b575c]">
            <h6>Frontend</h6>
          </div>
          <p class="text-[16px] w-[650px] absolute right-[295px] bottom-[-0px]">
            Lorem ipsum, or lipsum as it is sometimes known, is dummy text used
            in laying out print, graphic or web designs. The passage is
            attributed to an unknown typesetter in the 15th century who is
            thought to have scrambled parts of Cicero's De Finibus Bonorum et
            Malorum for use in a type specimen book.
          </p>
        </div>
      </div>

      <div class=" mt-8 text-right absolute animate-bounce bottom-2 right-6">
        <a class="text-[29px]" href="https://www.example.com">
          <span className="animate-bounce">&#8600;</span>SCROLL DOWN
        </a>
      </div>
    </div>
  )
}

export default Landing
