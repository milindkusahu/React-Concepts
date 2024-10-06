import React, { useState } from "react";
import Card from "./Card";

const Friends = () => {
  const data = [
    {
      name: "John",
      profession: "Painter",
      friends: false,
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },

    {
      name: "Amit",
      profession: "Artist",
      friends: false,
      image:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Rahul",
      profession: "Developer",
      friends: false,
      image:
        "https://images.pexels.com/photos/27901488/pexels-photo-27901488/free-photo-of-man-in-a-black-t-shirt-and-jeans.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      name: "Sumit",
      profession: "Musician",
      friends: false,
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ];

  const [realData, setRealData] = useState(data);

  const handleFriendsButton = (index) => {
    setRealData((previous) => {
      return previous.map((item, ChangedIndex) => {
        if (index === ChangedIndex) {
          return { ...item, friends: !item.friends };
        }
        return item;
      });
    });
  };

  return (
    <>
      <div className="w-full h-screen bg-zinc-300 flex gap-4 items-center justify-center">
        {realData.map((item, index) => (
          <Card
            key={index}
            handleClick={handleFriendsButton}
            index={index}
            // image={item.image}
            // name={item.name}
            // profession={item.profession}
            // friends={item.friends}
            values={item}
          />
        ))}
      </div>
    </>
  );
};

export default Friends;
