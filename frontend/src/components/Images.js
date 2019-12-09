import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_IMAGES_QUERY } from "../resolvers/query";
import SingleImage from "./SingleImage";

const Images = () => {
  const { loading, error, data } = useQuery(GET_IMAGES_QUERY);
  if (loading) return <p>loading.....</p>;
  return (
    <div>
      {data.getImages.map(image => (
        <SingleImage image={image} key={image.id} />
      ))}
    </div>
  );
};

export default Images;
