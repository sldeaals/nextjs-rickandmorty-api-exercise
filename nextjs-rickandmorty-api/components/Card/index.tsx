import Css from "./style.module.css";

type TProps = {
  id?: string;
  name?: string;
  status?: string;
  species?: string;
  gender?: string;
  image?: string;
};

const Card: React.FC<TProps> = ({
  id,
  name,
  status,
  species,
  gender,
  image
}) => {
  return (
    <div className={Css.card} key={id}>
      <img className={Css["card-img"]} src={image} alt={name}></img>
      <div className={Css["card-content"]}>
        <div className={Css["section"]}>
          <a href="/" rel="nofollow noopener noreferrer" target="_blank">
            <h2>{name}</h2>
          </a>
          <span className={Css["status"]}>
            <span className={Css["status__icon"]} />
            {`${status} - ${species}`}
          </span>
        </div>
        <div className={Css["section"]}>
          <span className={Css["text-gray"]}>Gender:</span>
          <a
            href="/"
            rel="nofollow noopener noreferrer"
            target="_blank"
            className={Css["card-label-value"]}
          >
            {gender}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
