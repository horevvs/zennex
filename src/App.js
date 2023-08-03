
import React from 'react';
import Select from './components/Select';
// import PostsAndstyleSettings from './components/PostsAndstyleSettings'

import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';

const data = [
  {
    id: 1,
    value: 'BMV',
    img: image1,
    active: true
  },
  {
    id: 2,
    value: 'SKODA',
    img: image2,
    active: true
  },
  {
    id: 3,
    value: 'AUDI',
    img: image3,
    active: true
  },
  {
    id: 4,
    value: 'ROLLS-ROYCE',
    img: image4,
    active: true
  }
];


const data2 = [
  {
    id: 1,
    value: 'Yamaha',
    img: image1,
    active: true
  },
  {
    id: 2,
    value: 'CF-Moto',
    img: image2,
    active: true
  },
  {
    id: 3,
    value: 'Honda',
    img: image3,
    active: true
  },
  {
    id: 4,
    value: 'Harley-Davidson',
    img: image4,
    active: true
  }
];

// настраиваемые стили прокидываем через пропс
const legendname = 'My Cars';
const placeholderItem = 'Выберите авто..';


const legendname2 = 'My Bikes';
const placeholderItem2 = 'Выберите мото..';

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
  backgroundColor: 'red'
};

const backgroundWhite = {
  backgroundColor: 'white'
};



function App() {
  return (
    <div>
      <Select data={data} placeholderItem={placeholderItem} background={backgroundRed} fontSize={sizeMed} legendname={legendname} />
      {/* <Select data={data2} placeholderItem={placeholderItem2} background={backgroundWhite} fontSize={sizeMed} legendname={legendname2} /> */}
    </div>
  )
}

export default App;
