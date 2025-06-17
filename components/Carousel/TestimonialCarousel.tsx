"use client";

import "@mantine/carousel/styles.css";
import TiktokTestimonial from "../Testimonial/TiktokTestimonial";

export const TestimonialCarousel = () => {
  return (
    <section
      id="carousel"
      className="overflow-hidden  md:flex md:justify-center"
    >
      {/* <Carousel slideGap="md" withIndicators>
        <Carousel.Slide className="">
          <TiktokTestimonial
            url={
              "https://www.tiktok.com/@ronjones_realestatecoach/video/7399862208890703150?lang=en"
            }
            title={"An avalanche of leads"}
            details={
              <p>
                That’s how{" "}
                <a href="https://www.tiktok.com/@ronjones_realestatecoach/video/7399862208890703150">
                  <span style={{ fontWeight: 600 }}>
                    @ronjones_realestatecoach
                  </span>
                </a>{" "}
                describes what his inbox looks like after starting to use
                Advertizip.
              </p>
            }
          ></TiktokTestimonial>
        </Carousel.Slide>
        <Carousel.Slide>
          <TiktokTestimonial
            url={"https://www.tiktok.com/@advertizip/video/7432022982190517534"}
            title={"Top 3 Lead Generation tactics"}
            details={
              <p>
                Justin from Louisville, KY, includes Advertizip among his
                strategies to generate exclusive and qualified leads that keep
                his pipeline full and fresh
              </p>
            }
          ></TiktokTestimonial>
        </Carousel.Slide>
      </Carousel> */}
      <TiktokTestimonial
        url={"https://www.tiktok.com/@advertizip/video/7432022982190517534"}
        title={"Top 3 Lead Generation tactics"}
        details={
          <p>
            Justin from Louisville, KY, includes Advertizip among his
            strategies to generate exclusive and qualified leads that keep
            his pipeline full and fresh
          </p>
        }
      ></TiktokTestimonial>
    </section>
  );
};
