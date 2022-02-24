import React from 'react';
import './App.css';
import Button from './components/Button';
import Container from './components/Container';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Input from './components/Input';
import LoggedIn from './components/UseStateLoggedIn/LoggedIn';
import Oscar from './components/Oscar';
import Status from './components/Status';
import User from './components/UseStateLoggedIn/User';
import UserFind from './ComponentsR/UserFind/UserFind';
import PeopleUser from './ComponentsR/PeopleUser/PeopleUser';
import Cards from './ComponentsR/Cards/Cards';
import LoginForm from './LoginForm/LoginForm';
import AboutUs from './GroupProject/AboutUs/AboutUs';
import Reviews from './GroupProject/Reviews/Reviews';
import Banners from './GroupProject/Banners/Banners';
import Brands from './GroupProject/Brands/Brands';
import WishList from './GroupProject/WishList/WishList';
import BannersPage from './GroupProject/BannersPage/BannersPage';
import Designers from './GroupProject/Designers/Designers';
import AddReview from './GroupProject/AddReview/AddReview';
import SiteUser from './GroupProject/AddReview/SiteUser';
import VendorHomePage from './GroupProject/VendorForm/VendorPages/VendorHomePage';
import Views from './Views/Views';


function App() {

  return (
    <div className="">
      {/* <h1>Typescripts</h1>

      <h2 className="text-5xl font-bold bg-sky-600  hover:bg-sky-700 underline">
        Hello world!
      </h2> */}
      {/* <Greet name="Karima" isLoggedIn={true}></Greet>
      <Status status='success' />

      <Oscar>
        <Heading>This is oscar heading</Heading>
      </Oscar>

      <Button handleClick={(event, id) => {
        console.log('Button Clicked', event, id)
      }}></Button>
      <Input value='' />

      <Container name='Karima-Aktari' styles={{ border: '1px solid green' }} /> */}


      {/* <LoggedIn />
      <User /> */}

      {/* <UserFind /> */}

      {/* <PeopleUser /> */}

      {/* <Cards /> */}

      {/* <AboutUs /> */}

      {/* <LoginForm /> */}
      {/* <Banners /> */}

      {/* <Brands /> */}

      {/* <Reviews /> */}

      {/* <WishList /> */}

      {/* <BannersPage /> */}

      {/* <Designers /> */}
      {/* <SiteUser /> */}


      {/* <VendorHomePage /> */}
      <Views/>

    </div>
  );
}

export default App;
