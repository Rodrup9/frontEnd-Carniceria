import React from 'react'
import ReactDOM from 'react-dom/client';
import { ContentMet } from './contentMet/ContentMet';
import './main.css'
import { mets } from './mets';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <ContentMet mets={mets} />
        {/* <TarggetMet mets={ {image: "src", name: 'Carne Molida', price: 23, gram: 'kg'} } /> */}
    </React.StrictMode>,
)
