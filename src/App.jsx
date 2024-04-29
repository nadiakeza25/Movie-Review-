import { useEffect, useState } from 'react'
import SideNav from './assets/Components/SideNav'
import './App.css'
import { BrowserRouter as Router, Routes, Route,BrowserRouter,} from "react-router-dom";
import Movies from './assets/Page/Movies';
import TvSeries from './assets/Page/TvSeries';
import Popular from './assets/Page/Popular';
import Kids from './assets/Page/Kids';
import NewMovies from './assets/Page/NewMovies';
import SearchBar from './assets/Components/SearchBar';
import CreateMovie from './assets/Page/CreateMovie';
import Review from './assets/Page/Review';



const App = () => {

  return (
    <>
    <Router>
        <SideNav />
      <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/create" element={<CreateMovie />} />
          <Route path="/review" element={<Review />}/>
      </Routes>
    </Router>

       
   
    </>
  );
};

export default App


