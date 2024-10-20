import "./index.css";

const nurseryList = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259702/71_e126rj.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259700/70_jirxhl.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259699/68_khb26o.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 4,
    imgUrl:"https://res.cloudinary.com/dktojjeva/image/upload/v1729259699/69_co2iln.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 5,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259699/63_guoddo.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 6,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259698/64_bxftul.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 7,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259697/62_fntdw0.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 8,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259481/67_xdvw0u.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 9,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259481/66_tuffhm.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 10,
    imgUrl:
      "https://res.cloudinary.com/dktojjeva/image/upload/v1729259481/65_q8ghma.png",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  
];

const Nursery = () => {
  return (
    <div>
      <h1 className="nursery-text">Nursery</h1>
      <ul className="nursery-list">
        {nurseryList.map((item) => (
          <li className="nursery-item" key={item.id}>
            <img src={item.imgUrl} alt={item.id} className="nursery-img" />
            <p className="item-text">{item.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nursery;