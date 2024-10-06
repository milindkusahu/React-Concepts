import React, { useState } from "react";
import Card from "./Card";
import Navbar from "./Navbar";

const Music = () => {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/20254108/pexels-photo-20254108/free-photo-of-man-in-brown-turtleneck-sweater-and-black-denim-jacket.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Brown Rang",
      artist: "Ankit",
      added: false,
    },
    {
      image:
        "https://images.pexels.com/photos/20225641/pexels-photo-20225641/free-photo-of-model-in-white-shirt-suspenders-and-fedora-holding-a-camera.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "The Wind",
      artist: "Subham",
      added: false,
    },
    {
      image:
        "https://images.pexels.com/photos/20065502/pexels-photo-20065502/free-photo-of-portrait-of-man-with-beard.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Fitoor",
      artist: "Vinay",
      added: false,
    },
    {
      image:
        "https://images.pexels.com/photos/20048444/pexels-photo-20048444/free-photo-of-man-with-peaches.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "One Bottle Down",
      artist: "Mohit",
      added: false,
    },
    {
      image:
        "https://images.pexels.com/photos/19751092/pexels-photo-19751092/free-photo-of-model-in-a-white-shirt-with-black-buttons.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Manwa Laage",
      artist: "Hemant",
      added: false,
    },
    {
      image:
        "https://images.pexels.com/photos/18314008/pexels-photo-18314008/free-photo-of-man-in-sunglasses-with-curly-hair.jpeg?auto=compress&cs=tinysrgb&w=600",
      name: "Musafir",
      artist: "Suresh",
      added: false,
    },
  ];

  const [songData, setSongData] = useState(data);

  const handleFavourites = (index) => {
    setSongData((previous) => {
      return previous.map((item, ChangedIndex) => {
        if (index === ChangedIndex) {
          return { ...item, added: !item.added }; // Returns new object with changes in added value
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300">
        <Navbar data={songData} />
        <div className="px-20 flex gap-10 mt-10 flex-wrap">
          {songData.map((item, index) => (
            <Card
              key={index}
              values={item}
              handleClick={handleFavourites}
              index={index}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Music;
