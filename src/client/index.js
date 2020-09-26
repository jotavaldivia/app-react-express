import React from 'react';
import { render } from 'react-dom';
import  request from 'superagent';
import './style/style.css';
import Map from './GoogleMap';



render(<Map/>, document.getElementById('Map'))


