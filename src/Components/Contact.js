import React from "react"
import { SiMinutemailer } from "react-icons/si"
import { TiLocation } from "react-icons/ti"
import { IconContext } from "react-icons"

function Contact() {
  return (
    <div class="flex h-screen p-2 relative">
      <div class="w-1/2 mx-1">
        <h1 class="py-2">I would love to hear from You </h1>
        <p class="text-xs w-5/6 pb-8">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
        <div class="flex flex-col gap-1">
          <div class="inline-flex w-full">
            <IconContext.Provider value={{ color: "black", size: "0.9em" }}>
              <div>
                <SiMinutemailer />
              </div>
            </IconContext.Provider>
            <div>
              <p class="text-xs pt-1 pl-1">DE-CODED17@GMAIL.COM</p>
            </div>
          </div>
          <div class="inline-flex w-full">
            <IconContext.Provider value={{ color: "black", size: "0.9em" }}>
              <div>
                <TiLocation />
              </div>
            </IconContext.Provider>
            <div>
              <p class="text-xs pt-1 pl-1">LONDON, UNITED KINGDOM</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 m-6">
        <div class="border-black border">
          <p class="text-xs font-bold m-1 pt-4">YOUR DETAILS</p>
          <form>
            <div class="flex flex-row">
              <input
                type="text"
                placeholder="Name"
                class="w-1/2 m-1 text-xs border-b border-black bg-[#F4F4F4] italic"
              />
              <input
                type="text"
                placeholder="Email"
                class="w-1/2 m-1 text-xs border-b border-black bg-[#F4F4F4] italic"
              />
            </div>

            <p class="text-xs font-bold m-1 pt-2">YOUR MESSAGE</p>
            <textarea
              class="text-xs border-b border-black bg-[#F4F4F4] italic w-11/12 m-1"
              placeholder="Start typing..."
            ></textarea>
          </form>
          <button class="text-[7px] rounded-full p-1 my-5 ml-1 bg-[#D9D9D9]">
            Let's talk
          </button>
        </div>{" "}
      </div>
    </div>
  )
}

export default Contact
