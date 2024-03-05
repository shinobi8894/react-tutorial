import { useState } from 'react';
import constants from './constants';
import './App.css';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const imageSources = [
    constants.imgConstant.IMG1,
    constants.imgConstant.IMG2,
    constants.imgConstant.IMG3,
    constants.imgConstant.IMG1,
    constants.imgConstant.IMG2,
    constants.imgConstant.IMG3,
  ];

  const images = imageSources.map((src) => ({ src }));

  const moveSlider = (direction: number) => {
    const sliderCount = images.length;
    const moveCount = sliderCount - 3;
    let newSlide = (currentSlide + direction + moveCount + 1) % (moveCount + 1);
    setCurrentSlide(newSlide);
  };

  const renderArrow = (direction: 'left' | 'right') => {
    const isLeft = direction === 'left';
    const onClick = () => moveSlider(isLeft ? -1 : 1);
    const dPath = isLeft
      ? "M8.29279 12.707C8.10532 12.5194 8 12.2651 8 12C8 11.7348 8.10532 11.4805 8.29279 11.293L13.9498 5.63598C14.042 5.54047 14.1524 5.46428 14.2744 5.41188C14.3964 5.35947 14.5276 5.33188 14.6604 5.33073C14.7932 5.32957 14.9248 5.35487 15.0477 5.40516C15.1706 5.45544 15.2823 5.52969 15.3762 5.62358C15.4701 5.71747 15.5443 5.82913 15.5946 5.95202C15.6449 6.07492 15.6702 6.2066 15.669 6.33938C15.6679 6.47216 15.6403 6.60338 15.5879 6.72538C15.5355 6.84739 15.4593 6.95773 15.3638 7.04998L10.4138 12L15.3638 16.95C15.5459 17.1386 15.6467 17.3912 15.6445 17.6534C15.6422 17.9156 15.537 18.1664 15.3516 18.3518C15.1662 18.5372 14.9154 18.6424 14.6532 18.6447C14.391 18.6469 14.1384 18.5461 13.9498 18.364L8.29279 12.707Z"
      : "M15.7069 11.2931C15.8943 11.4806 15.9996 11.7349 15.9996 12.0001C15.9996 12.2652 15.8943 12.5195 15.7069 12.7071L10.0499 18.3641C9.95761 18.4596 9.84726 18.5358 9.72526 18.5882C9.60326 18.6406 9.47204 18.6682 9.33926 18.6693C9.20648 18.6705 9.0748 18.6452 8.9519 18.5949C8.829 18.5446 8.71735 18.4703 8.62346 18.3765C8.52957 18.2826 8.45531 18.1709 8.40503 18.048C8.35475 17.9251 8.32945 17.7934 8.3306 17.6607C8.33176 17.5279 8.35934 17.3967 8.41175 17.2747C8.46416 17.1526 8.54034 17.0423 8.63585 16.9501L13.5859 12.0001L8.63585 7.05006C8.4537 6.86146 8.3529 6.60885 8.35518 6.34666C8.35746 6.08446 8.46263 5.83365 8.64804 5.64824C8.83344 5.46283 9.08426 5.35766 9.34645 5.35538C9.60865 5.35311 9.86125 5.4539 10.0499 5.63606L15.7069 11.2931Z";
    return (
      <div className={isLeft ? 'left' : 'right'} onClick={onClick}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d={dPath} fill="#F8F8F8" />
        </svg>
      </div>
    );
  };

  return (
    <div className="App">
      <h2>React Tutorial 4 - Image Slider</h2>
      <div className='slider'>
        <div className='slider__container' style={{ transform: `translateX(${(100 / 3 * currentSlide * -1)}%)` }}>
          {images.map((item, key) => (
            <div className='slide' style={{ minWidth: `${100 / 3}%` }} key={key}>
              <img src={item.src} alt={`Slide ${key + 1}`} />
            </div>
          ))}
        </div>
        <div className='controller'>
          {renderArrow('left')}
          {renderArrow('right')}
        </div>
      </div>
    </div>
  );
}

export default App;
