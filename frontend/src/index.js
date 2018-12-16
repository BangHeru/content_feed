import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import ContentFeed from './components/listdata';
import Form from './components/insertdata';


const elemet = (
    <div>
        <Form />
        <ContentFeed /> 
    </div>
);


ReactDOM.render(
    
    // <ContentFeed />,
    // document.getElementById('root')
    
    
   elemet,
    document.getElementById('root')
   
)