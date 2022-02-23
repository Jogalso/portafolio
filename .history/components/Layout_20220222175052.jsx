('use strict')
import Link from 'next/link';
import Head from 'next/head';
import React from 'react'

function Layout(props) {
    const {children, title} = props;
    return <div>
    <Head >
        <title>Ingeniero en computacion: {title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>    
    </Head>
    {children}
</div>
}

export default Layout