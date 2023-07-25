
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
  // функция добавления в инпут, получаем event,  если в массиве уже есть тогда не выполняем функцию
  // если нету вставляем в value элементы сквадываемые в массив
  function press(auto) {
    // console.log(ara)
    if (ara.indexOf(auto) === -1) {
      ara.push(auto)
      let html = ara.map((item) => `${item}`);
      console.log(ara)
      // setAra(ara)
      setValue(html)
      setShow(!show)
    }
     else {

for (let i=0 ; i<ara.length; i++) 
{
  if (ara[i]== auto){
    delete ara[i];
    console.log(ara[i])
  }
  let s=ara.filter(function(x) {
    return x !== undefined;
    
});
console.log(s)
  // let html2 = s.map((item) => `${item}`);
  // setValue(html2)
  // setShow(!show)
}
 


    }





    // const handleChange = (event) => {
    //   let result = event.target.value;
    //   if (result === 'skoda' || result === 'bmv' || result === 'audi') {
    //     let filteredValues = posts.filter(element => element.auto == result)
    //     setValues(filteredValues)
    //   } else {
    //     setValue(result)
    //   }


    // }



    // //  else {
    // //   ara.push(auto)
    // //   html = ara.map((item) => `${item}`);
    // //   setValue(html)
    // //   setShow(!show)
    // // }
    // setValue(html)
    // setShow(!show)

    // else (ara.indexOf(auto) > -1) { ara.push(auto) }
    //  html = ara.map((item) => `${item}`);


  }


  function ShowMenu() {
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
