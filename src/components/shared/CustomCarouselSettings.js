import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from '../../pages/Home/HomeP.module.scss'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles['next-arrow']}
      onClick={onClick}><FaArrowRight /></div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className={styles['prev-arrow']}
      onClick={onClick}><FaArrowLeft /></div>
  );
}


export const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3.5,
    swipeToSlide: true,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };