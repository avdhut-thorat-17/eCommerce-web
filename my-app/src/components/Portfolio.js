import React from "react";
import "../styles/portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <h2>Portfolio</h2>
      <div className="gallery">
        {/* Gallery Item 1 */}
        <div className="gallery-item">
          <img src="https://media.gettyimages.com/id/1204811749/photo/towels-on-bed-in-hotel-room.jpg?s=612x612&w=0&k=20&c=QNuMKYC4OyX-v6eMFUGibehHmfdvc_-BwAOyQCB6Wps=" alt="Project 1" />
          <div className="overlay">
            <p>Project Title 1</p>
            <button className="details-button">Details</button>
          </div>
        </div>

        {/* Gallery Item 2 */}
        <div className="gallery-item">
          <img src="https://media.gettyimages.com/id/1006187120/photo/beautiful-modern-hotel-room.jpg?s=612x612&w=0&k=20&c=4x_ipIm_qEhQowj-ppiQgUALWPdKtDX9OgtJwW7TuZA=" alt="Project 2" />
          <div className="overlay">
            <p>Project Title 2</p>
            <button className="details-button">Details</button>
          </div>
        </div>
        {/* Gallery Item 3 */}
        <div className="gallery-item">
          <img src="https://media.gettyimages.com/id/184609057/photo/luxury-hotel-room.jpg?s=612x612&w=0&k=20&c=NN1OTddvUxGx-CNSHYe2SQvsV7diMg8AByIlnHM39Xw=" alt="Project 3" />
          <div className="overlay">
            <p>Project Title 3</p>
            <button className="details-button">Details</button>
          </div>
        </div>
        {/* Gallery Item 4 */}
        <div className="gallery-item">
          <img src="https://t4.ftcdn.net/jpg/00/48/05/67/360_F_48056772_4xzGQerR7lW82z7MPTN8AulMraNIOZEJ.jpg" alt="Project 4" />
          <div className="overlay">
            <p>Project Title 4</p>
            <button className="details-button">Details</button>
          </div>
        </div>

        {/* Add more gallery items as needed */}
      </div>
    </div>
);
};

export default Portfolio;
