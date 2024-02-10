/* eslint-disable react/prop-types */
import MovieCard from "./MovieCard";
import { Col } from "antd";

const MovieList = ({ title, movies }) => {
  return (
    <div className="bg-black p-6">
      <h1 className="text-white text-3xl font-bold mb-6">{title}</h1>
      <div className="flex overflow-x-auto">
        {movies?.map((movie) => (
          <Col key={movie.id} xxl={6} xl={5} lg={6} md={8} sm={12} xs={24}>
            <MovieCard posterPath={movie.poster_path} />
          </Col>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
