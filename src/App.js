//импот стилей
import './App.css';
//импорт картинок с папки images
import image1 from './images/image1.png';
import image2 from './images/image2.png';
import image3 from './images/image3.png';
import image4 from './images/image4.png';
import arrow from './images/arrow.svg';
// импорт хука
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
    {
      id: 4,
      auto: 'aurus',
      img: image4,
    }
  ];

  const [values, setValues] = useState(posts);
  const [value, setValue] = useState();
  const [show, setShow] = useState(true)

  const handleChange = (event) => {
    let input, filter, ul, li, textcontents;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    let result = event.target.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = document.getElementsByTagName('li')
    for (let i = 0; i < li.length; i++) {
      textcontents = li[i].textContent
      if (textcontents.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
    setValue(result)
  }


  function press(auto) {
    setValue(auto)
    setShow(!show)
  }


  return (
    <div>
      <form>
        <fieldset className='positiondiv'>
          <legend>Мои автомобили</legend>
          <div   >
            <div onClick={() => setShow(!show)} >
              <input type='text' id='myInput' value={value || ''} onChange={handleChange} placeholder='выберите авто' className='inputsize point' ></input>
              <div> <img src={arrow} className='arrow point' alt='none'></img> </div>
            </div>
            <div className={show ? "show" : ""} >
              <ul className='myUL' >
                {values.map((post) =>
                  <li key={post.id} onClick={() => press(post.auto)}>
                    <div className='flexb point '>
                      <div> {post.auto} </div>
                      <div className='point'> <img className='size  ' src={post.img} alt='no image' /> </div>
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


// // сам компонет
// function App() {

//   // создаем массив который будем рендерить в верстку
//   const posts = [
//     {
//       id: 1,
//       auto: 'bmv',
//       img: image1,
//     },
//     {
//       id: 2,
//       auto: 'skoda',
//       img: image2,
//     },
//     {
//       id: 3,
//       auto: 'audi',
//       img: image3,
//     },
//   ];

//   // создаем наши состояния

//   // состояние для обображения выпадющего меню
//   const [show, setShow] = useState(true);
//   //состояние для подстановки в инпут выбранного здачения
//   const [value, setValue] = useState();
//   // ссотояние для фильтрации
//   const [values, setValues] = useState(posts);

// // функция для скрыть/ открыть выпадающее меню
//   function press(auto) {
//     setValue(auto)
//     setShow(!show)
//   }

//   // обрабочик фильтрации
//   const handleChange = (event) => {
//     // складываем значение  напеченные в инпуте
//     let result = event.target.value;
//     //создаем копию массива
//     let copyPosts = posts
//     // если мы набрали один из имен которые надо отфильтровать тогла фильтруем массив и обновляем состояние values
//     if (result === 'skoda' || result === 'bmv' || result === 'audi') {
//       let filteredValues = posts.filter(element => element.auto == result)
//       setValues(filteredValues)
//     }
//     // если стираем в интупе тогла подставляем то что осталось в event.target.value
//     else {
//       setValue(result)
//       // если все стерли, тогда вставляем скопированный массив, чтобы по нвой выбрать
//       if (result == '') {
//         setValues(copyPosts)
//       }
//     }
//   }


// // мой компонент в котором происходит рендеринг с массива с помощью метода .map
//   const sidebar = (
//     <div className='size2'>
//       <ul className={show ? "show" : ""}>
//         {values.map((post) =>
//           <div key={post.id}>
//             <div className='flexb point' onClick={() => press(post.auto)}  >
//               <div> {post.auto}</div>
//               <div> <img className='size' src={post.img} alt='нету' /> </div>
//             </div>
//           </div>
//         )}
//       </ul>
//     </div>
//   );
//   //  value={value || ''} нету больше ворнинга

//   //возвращаемая верстка
//   return (
//     <div>
//       <div className='position' onClick={() => setShow(!show)}>
//         <input type='text' className='positioninput' value={value || ''} onChange={handleChange}></input>
//         <div> <img src={arrow} className='arrow' alt='none'></img> </div>
//       </div>
//       {sidebar}
//     </div>
//   );
// }

export default App;
