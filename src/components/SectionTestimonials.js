import React from "react";

class SectionTestimonials extends React.Component {
  render() {
    return (
      <section
        className="section gray section-testimonials"
        style={{
          backgroundImage: "url(images/map.png)"
        }}
      >
        <div className="section-heading">
          <div className="container">
            <div className="section-subtitle">CLIENT TESTIMONAILS</div>
            <h2 className="section-title">What do others say about us</h2>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
              <div className="fly-card">
                <div className="boxed">
                  {}
                  <div className="testimonials-slider">
                    <article className="testimonial">
                      <blockquote className="testimonial-quote">
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit dunt
                        ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis at vero eros et
                        accumsan et iusto odio dignissim quer adipiscing elit,
                        sed diam nonummy nibh euismod tincidunt ut laoreet
                        dolore magna aliquam erat volutpat.
                      </blockquote>
                      <div className="testimonial-author">
                        <div className="avatar">
                          <img src="images/temp/avatar-1.jpg" alt />
                        </div>
                        <div className="name">Melissa Doe</div>
                        <div className="job">Charity Woman</div>
                      </div>
                    </article>
                    <article className="testimonial">
                      <blockquote className="testimonial-quote">
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit dunt
                        ut labore et dolore magna aliquyam erat, sed diam
                        voluptua. Duis autem vel eum iriure dolor in hendrerit
                        in vulputate velit esse molestie consequat, vel illum
                        dolore eu feugiat nulla facilisis.
                      </blockquote>
                      <div className="testimonial-author">
                        <div className="avatar">
                          <img src="images/temp/avatar-2.jpg" alt />
                        </div>
                        <div className="name">Jack Bourne</div>
                        <div className="job">Manager</div>
                      </div>
                    </article>
                  </div>
                  {}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionTestimonials;
