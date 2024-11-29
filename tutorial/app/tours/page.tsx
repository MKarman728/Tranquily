import Link from "next/link";
import React from "react";

const url = "https://www.course-api.com/react-tours-project";

type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

async function ToursPage() {
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  console.log(data);
  return (
    <div>
      <h1 className="text-3xl mb-4">Tours</h1>
      {data.map((tour) => (
        <Link
          id={tour.id}
          href={`tours/${tour.id}`}
          className="hover:text-blue-500"
        >
          <h1>{tour.name}</h1>
        </Link>
      ))}
    </div>
  );
}

export default ToursPage;
