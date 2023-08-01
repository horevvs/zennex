
import '../App.css';
import arrow from '../images/arrow.svg';
import React, { useState, useEffect, useRef } from "react";
import styled from 'styled-components';
import PostsAndstyleSettings from "./PostsAndstyleSettings"



const Teg = styled.div`
font-family: 'Permanent Marker', cursive;
`
const Bord = styled.div`
margin-top:-25px;
background-color: white;
`


function Select(props) {

  // 1 пропсы настраиваемых стилей
  const background = props.background
  const fontSize = props.fontSize
  const legendname = props.legendname

  // 2 состояния
  const [value, setValue] = useState([]);
  const [show, setShow] = useState(true)
  const [deleteArray, setdeleteArray] = useState([]);
  const [inputText, setInputText] = useState("");
  const [filtereds, setFiltereds] = useState(PostsAndstyleSettings);
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

  //2.3. функция  открытия/закрытия выпадающего меню
  function ShowMenu() {
    return setShow(!show);
  }

  //2.3.1  функция  смены фона на кликнутой ссылке
  function Changecolor(id, active) {
    let result = Filtered.map
      (
        item => {
          if (item.id === id && active === true) {
            return { ...item, active: false }
          }
          if (active === false && id === item.id) {
            return { ...item, active: true }
          }
          else { return { ...item } }
        }
      )
    setFiltereds(result)
  }

  // 2.4 функция чтения с инпута
  let filteredList = (e) => {
    let result = e.target.value.toUpperCase();
    setInputText(result);
   
  };


  //2.5 функция фильтрации выпадающего меню в открытом состоянии
  const Filtered = filtereds.filter((el) => {
    if (inputText === '') { return el; }
    else { return el.auto.toUpperCase().includes(inputText) }
  }
  )

  return (
    <form className='form' ref={myRef}>
      <fieldset className='positiondiv  '>
        <legend style={background} className='legend'>{legendname}</legend>
        <div>
          <input onClick={ShowMenu} type='text' defaultValue={value || ''} placeholder='Выберите авто..' className='inputsize point'></input>
          <img onClick={ShowMenu} src={arrow} className='arrow point ' alt='none'></img>
        </div>
        <div className={show ? "show" : " "}>
          <Bord className='myUL'>
            <input type='text' placeholder='поиск..' onChange={filteredList} className='inputField'></input>
            {Filtered.map((post) => (
              <li className={post.active ? "search" : "search activeColor"} id={post.id} key={post.id} onClick={() => { press(post.auto); Changecolor(post.id, post.active) }}>
                <Teg className='flex point'>
                  <div style={fontSize} className='fonts'> {post.auto} </div>
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