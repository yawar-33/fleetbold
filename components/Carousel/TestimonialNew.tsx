import React from "react";
import { InstagramEmbed } from "react-social-media-embed";
import TiktokTestimonial from "../Testimonial/TiktokTestimonial";

export default function TestimonialNew() {
  return (
    <div className="flex w-full justify-center items-center">
      {/* <InstagramEmbed
              url={"https://www.instagram.com/fleetbold/reel/DFycCeJOizB/"}
              title={"An avalanche of leads"}
              width={350}
            /> */}
      <TiktokTestimonial
        url={"https://www.instagram.com/fleetbold/reel/DFycCeJOizB/"}
        title={"An avalanche of leads"}
        details={
          <p>
            Justin from Louisville, KY, includes Advertizip among his strategies
            to generate exclusive and qualified leads that keep his pipeline
            full and fresh.
          </p>
        }
      />
    </div>
  );
}
