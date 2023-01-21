import "./CreditCard.css"

function CreditCard(props) {
    const {type,number,expirationMonth,expirationYear,bank,owner,bgColor,color} = props;

const boxStyle = {
    color: `${color}`,
    backgroundColor:`${bgColor}`
}

return(
    <div className="credit-card" style={boxStyle}>
        <div className="card-type">
            <img src={type} alt="credit card type"/>
        </div>
        <div className="card-number">
        <span>**** **** **** {number[12]}{number[13]}{number[14]}{number[15]}</span>
    </div>
    <div className="exp-bank-and-owner">
        <div className="exp-and-bank">
            <p>Expires {expirationMonth} / {expirationYear}</p>
            <p>{owner}</p>
            <p>{bank}</p>
        </div>
    </div>
</div>
)

}
export default CreditCard;