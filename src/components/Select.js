import '../App.css';
import arrow from '../images/arrow.svg';
import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';

const Teg = styled.div
`
font-family: 'Permanent Marker', cursive;
`
const Bord = styled.div
`
margin-top:-25px;
background-color: white;
`

function Select(props) {

  // 1 пропсы настраиваемых стилей
  const background = props.background
  const fontSize = props.fontSize
  const legendname = props.legendname
  const placeholderItem = props.placeholderItem
  const data = props.data

  // 2 состояния
  const [values, setValues] = useState([]);
  const [show, setShow] = useState(true)
  const [deleteArray, setdeleteArray] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filtereds, setFiltereds] = useState(data);
  const myRef = useRef();

  //  3 срабатывает при клике вне компонента для закрытия выпадающего меню
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  });

  // Функции

  // 2.1 функция закрытия выпадающего окна при клине все компонента
  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      setShow(true);
    }
  };

  // 2.2 функция множественного выбора элементов
  function Addelement(value) {
    if (deleteArray.indexOf(value) === -1) {
      deleteArray.push(value)
      let resultPush = deleteArray.map((item) => `${item}`);
      setValues(resultPush);
    }
    else {
      for (let i = 0; i <= deleteArray.length; i++) {
        if (deleteArray[i] === value) {
          const index = deleteArray.findIndex(item => item === deleteArray[i]);
          deleteArray.splice(index, 1);
          let resultDelete = deleteArray.map((item) => `${item}`);
          setValues(resultDelete);
        }
      }
    }
  }

  //2.3. функция  открытия/закрытия выпадающего меню
  function ShowMenu() {
    return setShow(!show);
  }

  // 2.4 функция чтения с инпута
  let filteredList = (e) => {
    let result = e.target.value.toUpperCase();
    setInputText(e.target.value.toUpperCase());
    console.log(result)
  };

  //2.5 функция фильтрации выпадающего меню в открытом состоянии
  const Filtered = filtereds.filter((el) => {
    if (inputText === '') { return el; }
    else { return el.value.toUpperCase().includes(inputText) }
  })

//2.6 функция изменения заднего фона при клике  
  function getActive(value) {
    let result = values.indexOf(value)
    if (result === -1) {
      return true
    }
  }

  return (
    <form className='form' ref={myRef}>
      <fieldset className='positiondiv  '>
        <legend style={background} className='legend'>{legendname}</legend>
        <div>
          <input onClick={ShowMenu} type='text' defaultValue={values || ''} placeholder={placeholderItem} className='inputsize point'></input>
          <img onClick={ShowMenu} src={arrow} className='arrow point ' alt='none'></img>
        </div>
        <div className={show ? "show size" : " "}>
          <Bord className='myUL'>
            <input type='text' placeholder='поиск..' onChange={filteredList} className='inputField'></input>
            {Filtered.map((post) => (
              <li className={getActive(post.value) ? "search" : "activeColor search"} id = {post.id} key = {post.id} onClick = { () => {
                Addelement(post.value);
              }}>
                <Teg className='flex point'>
                  <div style={fontSize} className='fonts'> {post.value} </div>
                  <div className='point'> <img className='size' src={post.img} alt='' /> </div>
                </Teg>
              </li>
            ))}
          </Bord>
        </div>
      </fieldset>
    </form>
  );
}

export default Select;