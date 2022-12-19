import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';

function App() {

    return (
        <div className=' min-h-screen md:py-6 md:px-12 bg-indigo-200 flex flex-col justify-center items-center'>
            <Layout />
        </div>
    )
}

export default App;
