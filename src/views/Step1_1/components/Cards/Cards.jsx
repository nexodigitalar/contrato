import "./Cards.scss";
import vector from "@/assets/img/vector.png";
import vector2 from "@/assets/img/vector2.png";

import ReactHtmlParser from "react-html-parser";

const Cards = ({
  titleGreen,
  title,
  titleBold,
  number,
  number2,
  img,
  plazo,
}) => {
  return (
    <div className="cards">
      <img src={plazo == 200 ? vector2 : vector} className="cards_svg" />
      <div className="cards_container">
        <img className="cards_img" src={img} alt={title} />
        <h4 className="cards_title">
          <span className="color_text">{titleGreen}</span>
          {title}
          <span className="gray">{titleBold}</span>
        </h4>
        {number2 ? (
          <p className="cards_number">
            ${ReactHtmlParser(number)} y ${number2}
          </p>
        ) : (
          <p className="cards_number">{ReactHtmlParser(number)}</p>
        )}
      </div>
      <div className="cards_line color_secondary_background"></div>
    </div>
  );
};

export default Cards;
