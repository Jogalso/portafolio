import React, {useEffect} from 'react'
import Layout from '../components/Layout'

import Header from '../components/Header'
import Datos from '../components/Datos'
import FormularioContacto from '../components/FormularioContacto'
import Footer from '../components/Footer'


export default function contacto() {
    return (
        <div>
            <Layout>
                <Header />
                <Datos />
                
                <FormularioContacto />
                <Footer />
            </Layout>
        </div>
    )
}
