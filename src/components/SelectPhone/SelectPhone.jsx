import "./SelectPhone.scss";
import phones from "@/utils/phoneNumber.json";
import useBrowser from "@/hooks/useBrowser";

const SelectPhone = ({ name, click, change }) => {
  return (
    <div className="selectPhone_container">
      <select
        id={name}
        name={name}
        className={`selectPhone ${useBrowser() && "selectIos"}`}
        onChange={change}
        onClick={click}
      >
        {phones.map((item, i) => {
          return (
            <option value={item.cod} key={i}>
              {item.alpha2} +{item.cod}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectPhone;
