
import '../App.css';
import arrow from '../images/arrow.svg';
import React, { useState } from "react";
import styled from 'styled-components';
import Changecolor from './Changecolor';


const Teg = styled.div`
color: #0091FF;
font-family: 'Permanent Marker', cursive;
`

const Bord = styled.div`
border: solid #0091FF 1px;
margin-top: -25px;
background-color: white;
`


function Select(props) {
  // пропсы настраиваемых стилей
  const background = props.background
  const fontSize = props.fontSize


  // states
  const [values, setValues] = useState(props.item);
  const [filtered, setVFiltered] = useState();
  const [value, setValue] = useState([]);
  const [show, setShow] = useState(true)
  const [deleteArray, setdeleteArray] = useState([])


 
  // functions


  // функция фильтрации, примает значение event, сравнивает с input и по циклу сравнивает значения
  // если  элемент есть в массике , тогда не применяются стили display = "none"
  // const handleChange = (event) => {
  //   let input, li, textcontents;
  //   input = document.getElementById("myInput").value.toUpperCase();
  //   let result = event.target.value.toUpperCase();
  //   li = document.getElementsByTagName('li');

  //   for (let i = 0; i < li.length; i++) {
  //     textcontents = li[i].textContent
  //     if (textcontents.toUpperCase().indexOf(input) > -1) {
  //       li[i].style.display = "";
  //     } else {
  //       li[i].style.display = "none";
  //     }
  //   }

  //   setValue(result);
  //   if (event.target.value == '') {
  //     setShow(!show);
  //   }

  // }


  const  filteredList = (event) => {


    let input, li, textcontents;
    input = document.getElementById("myInput").value.toUpperCase();
   
    li = document.getElementsByTagName('li');

    for (let i = 0; i < li.length; i++) {
      textcontents = li[i].textContent
      if (textcontents.toUpperCase().indexOf(input) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }

    // setValue(result);
    // if (event.target.value == '') {
    //   setShow(!show);
    // }

  }









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

  // функция выпадающего меню
  function ShowMenu() {
    setShow(!show);
  }

  document.onclick = function (event) {
    if (!event.target.matches('.hide')) {
      setShow(true);
    }
  }

  return (
    <div> 
      <form>
        <fieldset  className='positiondiv hide '>
          <legend style={background} className='legend hide'>Мои автомобили</legend>

          <div className=' hide' >
            <div className=' hide'>
              <input onClick={ShowMenu} type='text'  value={value || ''}  placeholder='Выберите авто..' className='inputsize point hide '   ></input>
              <img onClick={ShowMenu} src={arrow} className='arrow point hide' alt='none'></img>
            </div>

            <div className={show ? "show  hide" : " hide"} >
              <Bord className='myUL hide  relative'>
              <input  type='text'  id='myInput' placeholder='поиск..' onChange={filteredList} className=' inputField hide' ></input>
                {values.map((post) =>
                  <li className=" " id={post.id} key={post.id} onClick={() => { press(post.auto); Changecolor(post.id) }} >
                    <Teg className='flexb point hide'>
                      <div style={fontSize} className='fonts hide '> {post.auto} </div>
                      <div className='point hide '> <img className='size hide' src={post.img} alt='' /> </div>
                    </Teg>
                  </li>
                )}
              </Bord>
            </div>
          </div>
        </fieldset>
      </form>


    </div>
    
  );

}
export default Select;
