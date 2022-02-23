('use strict')
import Link from 'next/link';
import Head from 'next/head';
import React from 'react'

function Layout(props) {
    const {children, title} = props;
    return <div>
    <Head >
    <title>Terapia Gestalt: {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>    
    </Head>
    {children}
    
    <style jsx global>
    {`
        html{
            background: #007099;
        }
    `
    //colores en naranja #FF9524, #FFA13D, #FA9223, #007FAD, #23C1FA
    }
    </style>
    <style jsx global> 
        { `
           @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@200&display=swap');
           body{
               max-width; 100%;
               width: 100%;
               margin: 0px;
               font-family:  'Josefin Sans', sans-serif;
           }
           @font-face {
               font-family: 'RymanEco';
               src: url('/fonts/RymanEco/RymanEco-Regular.otf');
           }
        `}
    </style>
</div>
}

export default Layout