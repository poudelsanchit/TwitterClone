import React from 'react'
import Home from './pages/Home';
import NavBar from './components/NavBar';
import About from './pages/About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SingleTweet from './pages/SingleTweet';
import CommentBox from './components/CommentBox';
const Shell = () => {
    return (
        <>
            <NavBar />
            <BrowserRouter>
                <Routes>
                    <Route index element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/tweet/:id' element={<SingleTweet />} />
                    <Route path='/comment/:id' element={<CommentBox />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default Shell;