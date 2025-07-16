import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Ring from './Ring';
import Error from './Error';
import Sign from './Sign';
import Bracelets from './Bracelets';
import Earrings from './Earrings';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ring" element={<Ring />} />
                 <Route path="/signin" element={<Sign/>} />
                  <Route path="/bracelets" element={<Bracelets/>} />
                  <Route path="/earrings" element={<Earrings/>} />
                 <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>

    </>
);