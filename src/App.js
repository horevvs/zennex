
import './App.css';
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import arrow from './images/arrow.svg';
import React, { useState } from "react"



function App() {
  const posts = [
    {
      id: 1,
      auto: 'bmv',
      img: image1,
    },
    {
      id: 2,
      auto: 'skoda',
      img: image2,
    },
    {
      id: 3,
      auto: 'audi',
      img: image3,
    },
  ];

  const [show, setShow] = useState(true);
  const [value, setValue] = useState();
  const [values, setValues] = useState(posts);
  // const [valuess, setValuess] = useState(posts);

  function press(auto) {
    setValue(auto)
    setShow(!show)
  }

  const handleChange = (event) => {
    let result = event.target.value;
    if (result === 'skoda' || result === 'bmv' || result === 'audi') {
      let filteredValues = posts.filter(element => element.auto == result)
      setValues(filteredValues)
    }
    
   
    else {
      setValue(result)
    }

  }



  const sidebar = (
    <div className='size2'>
      <ul className={show ? "show" : ""}>
        {values.map((post) =>
          <div key={post.id}>
            <div className='flexb point' onClick={() => press(post.auto)}  >
              <div> {post.auto}</div>
              <div> <img className='size' src={post.img} alt='нету' /> </div>
            </div>
          </div>
        )}
      </ul>
    </div>
  );
//  value={value || ''} иногда не работаест пустым значением а так убирает ворнинг
  return (
    <div>
      <div className='position' onClick={() => setShow(!show)}>
        
        <input type='text' className='positioninput' value={value || ''} onChange={handleChange}></input>
        <div> <img src={arrow} className='arrow' alt='none'></img> </div>
      </div>
      {sidebar}
    </div>
  );
}

export default App;
