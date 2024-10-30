import React from "react";

function List({
  data,
}: {
  data: { id: number; name: string; age: number; image: string }[];
}) {
  return (
    <ul className="birthdays_list">
      {data.map((birthday) => {
        const { id, name, age, image } = birthday;
        return (
          <li key={id}>
            <img src={image} alt="" />
            <span>
              <span>{name}</span>
              <span>{age}</span>
              <button>Remove</button>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
