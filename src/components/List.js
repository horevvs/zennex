

import { React, useState } from 'react'
import PostsAndstyleSettings from "./PostsAndstyleSettings"



function List() {

return (
    <ul>
    {PostsAndstyleSettings.map((item) => (
        <li key={item.id}>{item.auto}</li>
    ))}
</ul>
   
 );
}


export default List;