import "./Cards.scss";
import vector from "@/assets/img/vector.svg";

const Cards = ({ titleGreen, title, titleBold, number, img }) => {
  return (
    <div className="cards">
      <img src={vector} className="cards_svg" />
      <div className="cards_container">
        <img className="cards_img" src={img} alt={title} />
        <h4 className="cards_title">
          <span className="green">{titleGreen}</span>
          {title}
          <span className="gray">{titleBold}</span>
        </h4>
        <p className="cards_number">{number}</p>
      </div>
      <div className="cards_line"></div>
    </div>
  );
};

export default Cards;
