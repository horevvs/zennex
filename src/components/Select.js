
import '../App.css';
import image1 from '../images/image1.png';
import image2 from '../images/image2.png';
import image3 from '../images/image3.png';
import image4 from '../images/image4.png';
import arrow from '../images/arrow.svg';
import React, { useState } from "react"


function Select() {
  // массив который рендериться в селект
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
      auto: 'AURUS',
      img: image4,
    }
  ];

  const [values, setValues] = useState(posts);
  const [value, setValue] = useState([]);
  const [show, setShow] = useState(true)
  const [ara, setAra] = useState([])

  // функция фильтрации, примает значение event, сравнивает с input и по циклу сравнивает значения
  // если  элемент есть в массике , тогда не применяются стили display = "none"
  const handleChange = (event) => {
    let input, li, textcontents;
    input = document.getElementById("myInput").value.toUpperCase();
    let result = event.target.value.toUpperCase();
    li = document.getElementsByTagName('li')
    for (let i = 0; i < li.length; i++) {
      textcontents = li[i].textContent
      if (textcontents.toUpperCase().indexOf(input) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    setValue(result)
  }

  // функция множественного выбора элементов
  function press(auto) {
    if (ara.indexOf(auto) === -1) {
      ara.push(auto)
      let html = ara.map((item) => `${item}`);
      setValue(html)
    }
    else {
      for (let i = 0; i <= ara.length; i++) {
        if (ara[i] == auto) {
          const index = ara.findIndex(item => item === ara[i]);
          ara.splice(index, 1);
          let html2 = ara.map((item) => `${item}`);
          setValue(html2)
        }
      }
    }
  }

  function ShowMenu() 
  {
    setShow(!show)
  }

  return (
    <div>
      <form>
        <fieldset className='positiondiv'>
          <legend className='legend'>Мои автомобили</legend>
          <div>
            <div onClick={ShowMenu}>
              <input type='text' id='myInput' value={value || ''} onChange={handleChange} placeholder='Выберите авто..' className='inputsize point '  ></input>
              <div> <img src={arrow} className='arrow point' alt='none'></img> </div>
            </div>
            <div className={show ? "show ulBackground " : "ulBackground"} >
              <ul className='myUL' >
                {values.map((post) =>
                  <li key={post.id} onClick={() => press(post.auto)} >
                    <div className='flexb point'>
                      <div className='fonts'> {post.auto} </div>
                      <div className='point'> <img className='size' src={post.img} alt='' /> </div>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </fieldset>
      </form>
    </div >
  );
}
export default Select;
