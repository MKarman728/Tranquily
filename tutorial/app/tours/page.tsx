import Link from "next/link";
import React from "react";
import Image from "next/image";

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
  return (
    <div>
      <h1 className="text-3xl mb-4">Tours</h1>
      <div className="grid gap-8 md:grid-cols-2">
        {data.map((tour) => (
          <Link
            id={tour.id}
            href={`tours/${tour.id}`}
            className="hover:text-blue-500"
          >
            <div className="relative h-48 mb-2">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                priority
                className="object-cover rounded"
              />
            </div>
            <h1>{tour.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ToursPage;
