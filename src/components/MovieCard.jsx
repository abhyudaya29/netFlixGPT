// import React from 'react'

import { IMG_CDN } from "../utils/constants"
// import Card from "antd/es/card/Card"
// eslint-disable-next-line react/prop-types
const MovieCard = ({posterPath}) => {
  return (
    // <div>MovieCard</div>
    <>
    {/* <Card> */}
        <img className="rounded-md" src={IMG_CDN+[posterPath]} alt="poster " />
    {/* </Card> */}
    </>
  )
}

export default MovieCard