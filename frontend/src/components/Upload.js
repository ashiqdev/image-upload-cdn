import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_IMAGE_MUTATION } from "../resolvers/mutation";
import { GET_IMAGES_QUERY } from "../resolvers/query";

const Upload = () => {
  const [original, setOriginal] = useState("");
  const [w200, setResize] = useState("");

  const [createImage] = useMutation(CREATE_IMAGE_MUTATION, {
    variables: {
      original,
      w200
    },
    refetchQueries: [{ query: GET_IMAGES_QUERY }]
  });

  const uploadFile = async e => {
    console.log("uploading file...");
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "simpleUpload");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/db9rcrnuw/image/upload",
      {
        method: "POST",
        body: data
      }
    );
    const file = await res.json();
    console.log(file);
    setOriginal(file.secure_url);
    setResize(file.eager[0].secure_url);

    await createImage();
  };
  return (
    <div>
      <label htmlFor="file">
        Image
        <input
          type="file"
          id="file"
          name="file"
          placeholder="upload an image"
          onChange={uploadFile}
        />
      </label>
    </div>
  );
};

export default Upload;
