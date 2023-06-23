import "./App.css"
// Initialization for ES Users

import Landing from "./Components/Landing"
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"

function App() {
  return (
    <div class="bg-[#F4F4F4]">
      <Landing />
      <Projects />
      <Contact />
      <div>
        <p class="text-[14px] text-center">
          &#169;DesIgned by CO-DEji.2023.&#8482;
        </p>
      </div>
    </div>
  )
}

export default App
