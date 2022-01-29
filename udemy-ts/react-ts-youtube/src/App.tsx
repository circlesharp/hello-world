import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import AllMeetupsPage from './pages/AllMeetups';
import Favorites from './pages/Favorites';
import NewMeetups from './pages/NewMeetups';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />}></Route>
          <Route path='/new-meetup' element={<NewMeetups />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
