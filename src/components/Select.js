
import '../App.css';
import arrow from '../images/arrow.svg';
import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import Changecolor from './Changecolor';
import InputSearch from './InputSearch';



const Teg = styled.div`

font-family: 'Permanent Marker', cursive;
`
const Bord = styled.div`

margin-top: -25px;
background-color: white;
`


function Select(props) {
  

  // пропсы настраиваемых стилей
  const background = props.background
  const fontSize = props.fontSize

  // states
  const [values, setValues] = useState(props.item);
  const [value, setValue] = useState([]);
  const [show, setShow] = useState(true)
  const [deleteArray, setdeleteArray] = useState([])
  const myRef = useRef();

  // срабатывает при клике вне компонента
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    
  });

  // functions//

  // функция закрытия  выпадающего окна при клине все компонента
  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setShow(true);
    }
  };

  // функция множественного выбора элементов
  function press(auto) {
    if (deleteArray.indexOf(auto) === -1) {
      deleteArray.push(auto)
      let resultPush = deleteArray.map((item) => `${item}`);
      setValue(resultPush);
    }
    else {
      for (let i = 0; i <= deleteArray.length; i++) {
        if (deleteArray[i] === auto) {
          const index = deleteArray.findIndex(item => item === deleteArray[i]);
          deleteArray.splice(index, 1);
          let resultDelete = deleteArray.map((item) => `${item}`);
          setValue(resultDelete);
        }
      }
    }
  }

  //функция выпадающего меню
  function ShowMenu() {
    return setShow(!show);
  }

  return (
     <form className='form' ref={myRef}>
        <fieldset className='positiondiv  '>
          <legend style={background} className='legend '>Мои автомобили</legend>
            <div>
              <input onClick={ShowMenu} type='text' value={value || ''} placeholder='Выберите авто..' className='inputsize point'></input>
              <img onClick={ShowMenu} src={arrow} className='arrow point ' alt='none'></img>
            </div>
            <div className={show ? "show":" "}  >
              <Bord className='myUL ' >
                <InputSearch/>
                {values.map((post) =>
                  <li className='search' id={post.id} key={post.id} onClick={() => { press(post.auto); Changecolor(post.id)}}>
                    <Teg className='flex point'>
                      <div style={fontSize} className='fonts'> {post.auto} </div>
                      <div className='point'> <img className='size' src={post.img} alt='no image'/> </div>
                    </Teg>
                  </li>
                )}
              </Bord>
            </div>
        </fieldset>
      </form>
    
  );
}


export default Select;

