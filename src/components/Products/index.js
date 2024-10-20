import React, { useState } from "react";
import { FaRupeeSign, FaMinus, FaPlus } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import Modal from "react-modal";
import { GrFavorite } from "react-icons/gr";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "./index.css";

const plantList = [
  {
    id: 1,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262356/img1_puymx9.jpg",
  },
  {
    id: 2,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262357/img2_jovgu0.jpg",
  },
  {
    id: 3,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262357/img3_z8ergn.jpg",
  },
  {
    id: 4,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262356/img4_fneqes.jpg",
  },
  {
    id: 5,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262357/img5_oo2bxn.jpg",
  },
  {
    id: 6,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262356/img6_mkpktp.jpg",
  },
  {
    id: 7,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262357/img7_aamg4b.jpg",
  },
  {
    id: 8,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262358/img8_ydavxg.jpg",
  },
  {
    id: 9,
    imgUrl: "https://res.cloudinary.com/dktojjeva/image/upload/v1729262357/img9_ovabfz.jpg",
  },
];

const Products = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate

  const onClickView = () => {
    navigate("/thankyou"); // Use navigate for routing
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onClickAdd = () => {
    setShowModal(true);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="product-page-container">
      <div className="side-bar">
        <ul className="filter-list">
          <li className="filter-item">
            <p>Filter</p>
            <p>CLEAR ALL</p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Type of Plants</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Price</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Nursery</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Ideal Plant Location</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Indoor/ Outdoor</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Maintenance</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Plant Size</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Water Schedule</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Color</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Seasonal</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
          <li className="filter-item">
            <p>Light Efficient</p>
            <p>
              <FaPlus size={18} />
            </p>
          </li>
          <hr />
        </ul>
      </div>
      <div className="product-section">
        <div className="title">
          <p className="text">300 Products</p>
          <button type="button" className="sort-by">
            SORT BY <MdKeyboardArrowDown />
          </button>
        </div>
        <ul className="plants-list">
          {plantList.map((eachPlant) => (
            <li key={eachPlant.id} className="plant-item">
              <div className="img-section">
                <button type="button" className="fav-btn">
                  <GrFavorite size={20} />
                </button>

                <img
                  src={eachPlant.imgUrl}
                  alt="plant-name"
                  className="plant-img"
                />
                <button
                  type="button"
                  className="view-btn"
                  onClick={onClickView}
                >
                  View Product
                </button>
              </div>
              <div className="plant-contents">
                <h1 className="plant-name">Monsterra</h1>
                <p className="plant-desc">Indoor Plant, Low Maintenance</p>
                <div className="rating">
                  <img
                    src="https://res.cloudinary.com/dktojjeva/image/upload/v1729264860/stars_d17hpk.png"
                    alt="stars"
                    className="star-img"
                  />
                  <p className="rating-text">4.9</p>
                </div>
                <p className="price">
                  <span className="deleted-text">
                    <FaRupeeSign />
                    399
                  </span>
                  <FaRupeeSign />
                  299
                </p>
              </div>
              <div className="btn-section">
                <button
                  type="button"
                  className="add-btn"
                  onClick={onClickAdd}
                >
                  <FaMinus />
                  Add to Cart <FaPlus />
                </button>
                <button type="button" className="buy-btn">
                  Buy on Rent
                </button>
              </div>
              <Modal
                isOpen={showModal}
                onRequestClose={closeModal}
                contentLabel="Cart Modal"
                className="cart-modal"
                ariaHideApp={false}
                style={customStyles}
              >
                <div className="modal-container">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="close-btn"
                  >
                    <CgClose size={15} />
                  </button>
                  <p className="your-cart">Your cart</p>
                  <hr className="styling-line" />
                  <h1 className="cart-title">Congratulations Order Placed!</h1>
                  <img
                    src="https://res.cloudinary.com/dktojjeva/image/upload/v1729268116/plant_f2fs04.png"
                    alt="plant"
                    className="plant"
                  />
                  <p className="cart-text">
                    Thank you for choosing Chaperone services. We will soon get
                    in touch with you!
                  </p>
                  <button
                    type="button"
                    className="continue-btn"
                    onClick={closeModal}
                  >
                    Continue Shopping
                  </button>
                </div>
              </Modal>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Products;