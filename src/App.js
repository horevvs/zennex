
import React from 'react';
import Select from './components/Select';


function App() {
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

    if ( ara.indexOf(auto)  == -1 ) {
      ara.push(auto)
    }

    




    // по айти нашли элемент положили значение вставили нnmld
    // value.push(auto)
  
    // // value.push(auto)

    // // console.log( value)
    // console.log( ara)


    const html = ara.map((item) =>   `${item}`);
    // const html = ara.map((item) => `<li>${item}</li>`);
    // document.getElementById('it').innerHTML = html;

  setValue(html)
  setShow(!show)
    // setShow(!show)
  }


  return (
    <div>
      <form>
        <fieldset className='positiondiv'>
          <legend>Мои автомобили</legend>
          <div   >
            <div onClick={() => setShow(!show)}  >
              <div className='flex' > <div id='it'></div> </div>

              <input type='text' id='myInput' value={value || ''} onChange={handleChange} placeholder='выберите авто' className='inputsize point '  ></input>
              <div> <img src={arrow} className='arrow point' alt='none'></img> </div>

            </div>
            <div className={show ? "show" : ""} >
              <ul className='myUL' >
                {values.map((post) =>
                  <li key={post.id} onClick={() => press(post.auto)} >
                    <div className='flexb point '>
                      <div> {post.auto} </div>
                      <div className='point'> <img className='size' src={post.img} alt='no image' /> </div>
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

export default App;
