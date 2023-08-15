import "./main.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import {HiOutlineClipboardCheck} from 'react-icons/hi'
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";

const Data = [
  {
    id: 1,
    imgSrc: img1,
    destTitlte: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis sollicitudin vehicula. Fusce tristique tempor egestas. Suspendisse potenti. Suspendisse nec nulla et neque hendrerit ornare. Pellentesque et scelerisque leo.",
  },
   {
    id: 2,
    imgSrc: img2,
    destTitlte: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis sollicitudin vehicula. Fusce tristique tempor egestas. Suspendisse potenti. Suspendisse nec nulla et neque hendrerit ornare. Pellentesque et scelerisque leo.",
  },
  {
    id: 3,
    imgSrc: img3,
    destTitlte: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis sollicitudin vehicula. Fusce tristique tempor egestas. Suspendisse potenti. Suspendisse nec nulla et neque hendrerit ornare. Pellentesque et scelerisque leo.",
  },
  {
    id: 4,
    imgSrc: img4,
    destTitlte: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis sollicitudin vehicula. Fusce tristique tempor egestas. Suspendisse potenti. Suspendisse nec nulla et neque hendrerit ornare. Pellentesque et scelerisque leo.",
  },
  {
    id: 5,
    imgSrc: img5,
    destTitlte: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis sollicitudin vehicula. Fusce tristique tempor egestas. Suspendisse potenti. Suspendisse nec nulla et neque hendrerit ornare. Pellentesque et scelerisque leo.",
  },
  {
    id: 6,
    imgSrc: img6,
    destTitlte: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis sollicitudin vehicula. Fusce tristique tempor egestas. Suspendisse potenti. Suspendisse nec nulla et neque hendrerit ornare. Pellentesque et scelerisque leo.",
  },
  {
    id: 7,
    imgSrc: img7,
    destTitlte: "Bali Island",
    location: "Indonesia",
    grade: "Cultural Relax",
    fees: "$500",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis sollicitudin vehicula. Fusce tristique tempor egestas. Suspendisse potenti. Suspendisse nec nulla et neque hendrerit ornare. Pellentesque et scelerisque leo.",
  },
];

function Main() {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {Data.map((data) => {
          return (
            <div key={data.id} className="singleDestination">
              <div className="imageDiv">
                <img src={data.imgSrc} alt={data.destTitlte} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{data.destTitlte}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className="icon" />
                  <span className="name">{data.location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>
                      {data.grade}
                      <small>+1</small>
                    </span>
                  </div>

                  <div className="price">
                    <h5>{data.fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{data.description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className="icon" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Main;
