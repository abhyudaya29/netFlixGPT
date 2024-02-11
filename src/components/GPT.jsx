/* eslint-disable react-refresh/only-export-components */

import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"

const GPT = () => {
  return (
    // <div>GPTSearch</div>
    <>
    <div className="fixed -z-10">
    <img className="h-screen object-coverv w-screen"
          src={BG_URL}
          alt="background image"
        />
    </div>
   
    <div className=" "><GptSearchBar/></div>
    <div><GptMovieSuggestions/></div>
    </>
  )
}

export default GPT