import React from 'react'
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

function App (props){
    return <div>abc</div>
}

root.render(<App />);