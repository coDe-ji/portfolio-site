import React from "react"
import { SiMinutemailer } from "react-icons/si"
import { TiLocation } from "react-icons/ti"
import { IconContext } from "react-icons"

function Contact() {
  return (
    <div class="flex h-screen relative py-8 px-4 z-0">
      <div class="w-1/2 mx-1 mt-16">
        <h1 class="py-2 text-[3em]">I would love to hear from You </h1>
        <p class="text-[0.8em] w-5/6 pb-8">
          Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in
          laying out print, graphic or web designs. The passage is attributed to
          an unknown typesetter in the 15th century who is thought to have
          scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a
          type specimen book.
        </p>
        <div class="flex flex-col gap-1 mt-10">
          <div class="inline-flex w-full">
            <IconContext.Provider value={{ color: "black", size: "2em" }}>
              <div>
                <SiMinutemailer />
              </div>
            </IconContext.Provider>
            <div>
              <p class="text-[14px] pt-1 pl-1">DE-CODED17@GMAIL.COM</p>
            </div>
          </div>
          <div class="inline-flex w-full">
            <IconContext.Provider value={{ color: "black", size: "2em" }}>
              <div>
                <TiLocation />
              </div>
            </IconContext.Provider>
            <div>
              <p class="text-[14px] pt-1 pl-1">LONDON, UNITED KINGDOM</p>
            </div>
          </div>
        </div>
      </div>

      <div class="w-1/2 mt-20 mx-12 ">
        <div class="border-black border">
          <form className="m-2">
            <p class="text-[1.2em] font-bold m-1 pt-4">YOUR DETAILS*</p>
            <div class="flex flex-row">
              <input
                type="text"
                placeholder="Name"
                class="w-[44%] m-1 text-[14x] border-b border-black bg-[#F4F4F4] italic p-1"
              />
              <input
                type="text"
                placeholder="Email"
                class="w-[44%] m-1 text-[14px] border-b border-black bg-[#F4F4F4] italic p-1"
              />
            </div>

            <p class="text-[1.2em] font-bold m-1 pt-2 mt-6">
              YOUR MESSAGE<span className="">*</span>
            </p>
            <textarea
              class="text-[18px] border-b border-black bg-[#F4F4F4] italic w-11/12 m-1 p-1"
              rows="10"
              placeholder="Start typing..."
            ></textarea>
          </form>
          <button class="text-[18px] rounded-full p-2.5 my-5 ml-2 bg-[#D9D9D9] hover:bg-zinc-700">
            Let's talk
          </button>
        </div>
      </div>
    </div>
  )
}

export default Contact
