import React from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { BsFillMoonFill } from "react-icons/bs"
import { HiSun } from "react-icons/hi"
import { IconContext } from "react-icons"

function Landing() {
  return (
    <div class="flex flex-row h-screen">
      <h4 class="w-full">CO-DEji</h4>
      <div class="flex flex-row w-full">
        <IconContext.Provider value={{ color: "black", size: "1em" }}>
          <div>
            <BsFillMoonFill />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "black", size: "1em" }}>
          <div>
            <HiSun />
          </div>
        </IconContext.Provider>
      </div>
      <div class="w-full">
        <IconContext.Provider value={{ color: "black", size: "2em" }}>
          <div>
            <BiMenuAltRight />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Landing
