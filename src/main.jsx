import React from 'react'
import ReactDOM from 'react-dom/client';
import { MainMain } from './components/index';
import './main.css'
import { mets } from './mets';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <MainMain />
        {/* <TarggetMet mets={ {image: "src", name: 'Carne Molida', price: 23, gram: 'kg'} } /> */}
    </React.StrictMode>,
)
