import "./IdCard.css"

function IdCard(props) {
  const { lastName, firstName, gender, height, birth, picture } = props;

  return (
    <div className="id-card">
      <img src= {picture} alt="picture" />
      <div className="id-card-information">
        <p>FirstName: {firstName}</p>
        <p>LastName: {lastName}</p>
        <p>Gender: {gender}</p>
        <p>Height: {height}</p>
        <p>Birth: {birth}</p>
      </div>
    </div>
  );
}

export default IdCard;
