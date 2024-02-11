/* eslint-disable react-refresh/only-export-components */

import GptMovieSuggestions from "./GptMovieSuggestions"
import GptSearchBar from "./GptSearchBar"
import { BG_URL } from "../utils/constants"

const GPT = () => {
  return (
    // <div>GPTSearch</div>
    <>
    <div className='absolute -z-10'>
        <img
          src={BG_URL}
          alt="background image"
        />
      </div>
    <div><GptSearchBar/></div>
    <div><GptMovieSuggestions/></div>
    </>
  )
}

export default GPT