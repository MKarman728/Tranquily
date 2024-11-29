import React from "react";
import Beach from "@/images/alexander-akimenko-tWWdVrUSeik-unsplash.jpg";
import Image from "next/image";

const url = "https://www.course-api.com/images/tours/tour-1.jpeg";
// adding Beach image
function IdPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* Local image */}
        <div className="">
          <Image
            src={Beach}
            alt="map"
            priority
            className="w-48 h-48 object-cover rounded"
            width={192}
            height={192}
          />
          <h2>Local Image</h2>
        </div>
        {/* Remote image */}
        <div>
          <Image
            src={url}
            alt="tour"
            width={192}
            height={192}
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Remote Image</h2>
        </div>
      </section>
    </div>
  );
}

export default IdPage;
