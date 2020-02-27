import React from 'react';
import { NavLink } from 'react-router-dom';
import { Form, Input, Button } from 'antd';

import './style.less';
import BobaCarousel from '../../containers/BobaCarousel';
import DrinkDrawer from '../../containers/DrinkDrawer';
import Cascader from '../../containers/Cascader';

const HomePage = (props) => {
  return (
    <div className="homepage">
      <div className="home-header">
        <h2>Hi {props.username},</h2>
        <div className="cascade">
          <Cascader/>
        </div>
      </div>
      <div className="content">
        <h1>Favorites</h1>
        <BobaCarousel onClick={props.onSubmit}/>
        <NavLink to="/menu">
          <Button className="all-button">All</Button>
        </NavLink>
        <Button className="carousel-button" onClick={props.onSubmit}>Select</Button>
      </div>
      <DrinkDrawer visible={props.visible}/>
    </div>
  );
};

export default HomePage;
