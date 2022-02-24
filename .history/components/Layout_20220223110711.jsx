('use strict')
import Head from 'next/head';
import React from 'react'
import Menu from "../components/Menu"

function Layout(props) {
    const {children, title} = props;
    return (
        <div>
            <Head >
                <title>Jose Galbis Soler - {title}</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>    
            </Head>
            <Menu />
            {children}
        </div>
    )
}

export default Layout