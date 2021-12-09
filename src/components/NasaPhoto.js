import React from "react";
import { useState, useEffect } from "react";

export default function NasaPhoto() {
  const [photoData, setPhotoData] = useState(null);

  useEffect(() => {
    fetchPhoto();

    async function fetchPhoto() {
      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=m8fkg2biKWIloC6Zg53cVks7zIoU0nWEQs3f7Ky1`
      );
      const data = await res.json();

      setPhotoData(data);
      console.log(data);
    }
  }, []);

  if (!photoData) return <div />;

  return (
    <div>
      {photoData.media_type === "image" ? (
      <img src={photoData.url} alt={photoData.title} />
      ) : (
          <iframe
          title="space-video"
          src={photoData.url}
          frameBorder="0"
          gesture="media"
          allow="encrypte-media"
          allowFullScreen
          className="photo"
          />
      )}
      <div>
        <h1>{photoData.title}</h1>
        <p>{photoData.date}</p>
        <p>{photoData.explanation}</p>
      </div>
    </div>
  );
}
