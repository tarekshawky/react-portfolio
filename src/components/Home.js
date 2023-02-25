import './Home.css'
import Typed from 'typed.js'
import { useEffect, useRef } from 'react';

function Home(){
 const el = useRef(null);
useEffect(() => {
    const typed = new Typed(el.current, {
        strings: ["Html", "Css", "Tailwind"],
        startDelay: 300,
        typeSpeed: 150,
        backDelay:150,
        backSpeed:150,
        smartBackspace: true,
        showCursor: false,
        loop:true
    })
})
    return(
        <div className='home'>
            <h2>Tarek Shawky</h2>
         
            <p>Iam Frontend developer <span ref={el}></span> </p>
       
        </div>
    );
}
export default Home