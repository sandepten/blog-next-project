import Navbar from '../Components/Navbar'
import '../styles/globals.css'
import { useEffect } from 'react';


function MyApp({ Component, pageProps }) {
  useEffect( () => { document.querySelector("body").classList.add("dark", "bg-gray-700") } );
  return <>
  <Navbar/>
  <Component {...pageProps} />
  </>
}

export default MyApp
