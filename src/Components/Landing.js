import React from "react"
import { BiMenuAltRight } from "react-icons/bi"
import { BsFillMoonFill } from "react-icons/bs"
import { HiSun } from "react-icons/hi"
import { IconContext } from "react-icons"

function Landing() {
  return (
    <div class="flex flex-row">
      <h4 class="basis-1/4">CO-DEji</h4>
      <div class="flex flex-row basis-1/2">
        <IconContext.Provider value={{ color: "black", size: "2em" }}>
          <div>
            <BsFillMoonFill />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ color: "black", size: "2em" }}>
          <div>
            <HiSun />
          </div>
        </IconContext.Provider>
      </div>
      <div class="basis-1/4">
        <IconContext.Provider value={{ color: "black", size: "3em" }}>
          <div>
            <BiMenuAltRight />
          </div>
        </IconContext.Provider>
      </div>
    </div>
  )
}

export default Landing
