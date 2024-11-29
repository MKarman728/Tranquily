import React from "react";
import Beach from "@/images/alexander-akimenko-tWWdVrUSeik-unsplash.jpg";
// adding Beach image
function IdPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1 className="text-4xl">ID: {params.id}</h1>
    </div>
  );
}

export default IdPage;
