import React from 'react';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { Main } from '../Main';

import './css/index/main.css';

export function About() {
    return (
        <>
         <a className="scroll-to-top-button" href="#" aria-hidden="true">
			<i className="fas fa-level-up-alt"></i>
		</a>

        <Header />
        
        <Main />
        <Footer />
        </>
    )
}