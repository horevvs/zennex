



const filteredList = () => {
    let input, li, textcontents;
    input = document.getElementById("myInput").value.toUpperCase();
    li = document.getElementsByClassName('search');
    for (let i = 0; i < li.length; i++) {
        textcontents = li[i].textContent
        if (textcontents.toUpperCase().indexOf(input) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}
function InputSearch() {
    return (
        <div>
            <input type='text' id='myInput' placeholder='поиск..' onChange={filteredList} className=' inputField hide' ></input>
        </div>
    );
}

export default InputSearch;
