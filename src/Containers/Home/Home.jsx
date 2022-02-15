
import React, {useState, useEffect} from 'react';
import axios from 'axios';

import './Home.css';

const Home = () => {

    useEffect(()=>{
        traePersonajes();
    },[]);

    const traePersonajes = async () => {
        //llamada de axios a la API de rick & morty
        try {

            let resultado = await axios.get("https://rickandmortyapi.com/api/character");
           
            console.log(resultado?.data?.results);

        } catch (error){
            console.log(error);
        }

    }

    return (
        <div className='homeDesignGeneral'>
            De momento no tenemos datos.
        </div>
    )
}

export default Home;
