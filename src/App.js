
import React from 'react';
import Select from './components/Select';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';


const posts = [
  {
    id: 1,
    auto: 'BMV',
    img: image1,
  },
  {
    id: 2,
    auto: 'SKODA',
    img: image2,
  },
  {
    id: 3,
    auto: 'AUDI',
    img: image3,
  },
  {
    id: 4,
    auto: 'ROLLS-ROYCE',
    img: image4,
  }
];



// настраиваемые стили прокидываем через пропс
const sizelg = {
  fontSize: '20px'
};

const sizeSm = {
  fontSize: '10px'
};

const sizeMed = {
  fontSize: '15px'
};

const backgroundRed = {
  backgroundColor:'red'
};

const backgroundWhite = {
  backgroundColor:'white'
};



function App() {
  return (
    <Select item={posts}  background={backgroundWhite} fontSize={sizeMed} />
  )
}

export default App;
