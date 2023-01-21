import './Rating.css';

function Rating(props) {
  function stars(number) {
    if (number < 0.5) {
      return '☆☆☆☆☆';
    } else if (number < 1.5) {
      return '★☆☆☆☆';
    } else if (number < 2.5) {
      return '★★☆☆☆';
    } else if (number < 3.5) {
      return '★★★☆☆';
    } else if (number < 4.5) {
      return '★★★★☆';
    } else {
      return '★★★★★';
    }
  }
  console.log(typeof props.children);

  return <div className='widthstar'>{stars(props.children)}</div>;
}

export default Rating;
