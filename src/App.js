
import React from 'react';
import Select from './components/Select';
import PostsAndstyleSettings from './components/PostsAndstyleSettings'




// настраиваемые стили прокидываем через пропс
const legendname = 'My Cars';
const placeholderItem = 'Выберите авто..';

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
      <Select item={PostsAndstyleSettings} placeholderItem={placeholderItem} background={backgroundRed} fontSize={sizeMed} legendname={legendname} />
      <Select item={PostsAndstyleSettings} placeholderItem={placeholderItem} background={backgroundWhite} fontSize={sizeMed} legendname={legendname} />
    </div>
  )
}

export default App;
