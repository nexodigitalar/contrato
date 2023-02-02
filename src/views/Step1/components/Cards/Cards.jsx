import "./Cards.scss";

const Cards = ({ titleGreen, title, titleBold, number, img }) => {
  return (
    <div className="cards">
      <div className="cards_container">
        <img className="cards_img" src={img} alt={title} />
        <h4 className="cards_title">
          <span className="cards_greenTitle">{titleGreen}</span>
          {title}
          <span className="cards_titleBold">{titleBold}</span>
        </h4>
        <p className="cards_number">{number}</p>
      </div>
      <div className="cards_line"></div>
    </div>
  );
};

export default Cards;
