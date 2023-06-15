import React from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { BsFillMoonFill } from "react-icons/bs"
import { HiSun } from "react-icons/hi"
import { IconContext } from "react-icons"

function Landing() {
  return (
    <div class="h-screen relative">
      <div class="flex flex-row place-content-between px-1">
        <div class="border border-black text-[10px] p-2 mt-2 h-5 w-15 flex items-center">
          <h4 class="">CO-DEji</h4>
        </div>

        <div class="flex flex-row pr-8 mt-2">
          <IconContext.Provider value={{ color: "black", size: "0.7em" }}>
            <div>
              <BsFillMoonFill />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "black", size: "0.7em" }}>
            <div>
              <HiSun />
            </div>
          </IconContext.Provider>
        </div>
        <div class="">
          <IconContext.Provider value={{ color: "black", size: "2em" }}>
            <div>
              <BiMenuAltRight />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}

export default Landing
