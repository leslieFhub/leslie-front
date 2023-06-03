import React from "react";
import Header from "./../components/Header";

const About = () => {
  return (
    <>
      <Header />
      <div className="container about-container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="h1-head">About Our Pizza Shop</h1>
            <p className="p-head">
              <b>Leslie's Pizza</b>, a pizza shop established in <b>July 2020</b>,
              has emerged as a leading provider of pizza during the pandemic-induced
              lockdown. Recognizing the growing demand for accessible and staple food
              options, Leslie's Pizza stepped up to fill the void left by other
              businesses that had ceased operations. With a strong presence on social
              media, particularly Facebook, Leslie's Pizza quickly gained popularity
              among a diverse customer base. <b>The shop's origins in the pastry and
              bread industry</b>, coupled with its catering background, have
              contributed to the quality and variety of their pizza offerings.
              Additionally, partnering with popular food delivery platforms like
              Foodpanda has allowed Leslie's Pizza to cater to a wider customer base.
              Amidst challenging times, Leslie's Pizza has thrived by serving
              delicious pizzas that have become a favorite among pizza enthusiasts
              across the region.
            </p>
          </div>
          <div className="col-md-6">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="./images/5.jpg"
                    alt="Pizza shop"
                    className="d-block w-100"
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="./images/6.jpg"
                    alt="Pizza shop"
                    className="d-block w-100"
                  />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2 className="h2-head">Our Story</h2>
            <p className="p2-head">
              It all began with a simple Facebook post. Previously known for our
              expertise in pastries, bread, and catering services, we decided to
              embark on a new culinary adventure. Leveraging the existing online
              presence of our cake and pastry business, we introduced pizza to our
              menu. In July 2020, our pizza journey officially started.
              <br />
              <br />
              Recognizing the growing demand for convenient food options, we joined
              forces with Foodpanda, a popular food delivery platform. This
              partnership allowed us to reach a wider customer base and cater to the
              increasing number of pizza lovers. By November 2020, we became a
              registered partner of Foodpanda, further solidifying our commitment to
              delivering mouthwatering pizzas to our valued customers.
              <br />
              <br />
              Behind the scenes, our dedicated team works tirelessly to bring you
              the best pizza experience. <b>Eilsel</b> takes care of the preparation
              process, ensuring that every ingredient is of the highest quality.
              <b>Angeline</b>, our skilled chef, masterfully crafts each pizza in our oven,
              infusing them with flavors that will leave you craving for more. <b>Leslie</b>,
              with his creative touch, contributes to both the culinary and visual
              aspects of our pizzas. And let's not forget <b>Geline Liesel</b>, our wing
              specialist, who adds an extra zing to your pizza feast.
              <br />
              <br />
              With passion and teamwork at the core of our operations, we continue
              to delight pizza enthusiasts with our delectable creations. Join us on
              this flavorful journey and savor the taste that sets us apart.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <h2 className="h2-head">Meet Our Team</h2>
          </div>
        </div>
        <div id="teamCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
        <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="./images/4.jpg"
                    alt="Team member 1"
                    className="img-thumbnail same-size-img"
                  />
                  <h4 className="h4-head">Caro, Eilsel Angelo O.</h4>
                  <p>Chef</p>
                </div>

                <div className="col-md-3">
                  <img
                    src="./images/leslie-1.jpg"
                    alt="Team member 2"
                    className="img-thumbnail same-size-img"
                  />
                  <h4 className="h4-head">Caro, Leslie M.</h4>
                  <p>Chef, Owner, Designer</p>
                </div>

                <div className="col-md-3">
                  <img
                    src="./images/3.jpg"
                    alt="Team member 3"
                    className="img-thumbnail same-size-img"
                  />
                  <h4 className="h4-head">Caro, Angeline O.</h4>
                  <p>Chef, Owner</p>
                </div>

                <div className="col-md-3">
                  <img
                    src="./images/geline-1.jpg"
                    alt="Team member 4"
                    className="img-thumbnail same-size-img"
                  />
                  <h4 className="h4-head">Caro, Geline O.</h4>
                  <p>Chef</p>
                </div>
              </div>
            </div>
          </div>


            <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#teamCarousel"
                data-bs-slide="prev"
            >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#teamCarousel"
                data-bs-slide="next"
            >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
      </div>
    </>
  );
};

export default About;
