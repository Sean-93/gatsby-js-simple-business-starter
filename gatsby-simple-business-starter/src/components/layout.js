import React from 'react'
import NavBar from './navbar'
import Header from './header'
import Footer from './footer'
import Wrapper from './wrapper'
import '../styles/general-styles.css'
import '../styles/layout.css'

export default function Layout(props) {
    return (
        <div>
            <NavBar/>
            <Header/>
            <br/>
            <Wrapper>
                <main>{props.children}</main>
            </Wrapper>
            <br/>
            <Footer/>
        </div>
    )
}

