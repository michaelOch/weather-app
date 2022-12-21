import { useState } from 'react';
import './App.css';
import Layout from './components/Layout';

function App() {

    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className={darkMode ? 'dark' : ''}>
            <div className=' min-h-screen md:py-6 md:px-12 bg-indigo-200 dark:bg-gray-700 flex flex-col justify-center items-center'>
                <Layout
                    darkMode={darkMode}
                    setDarkMode={setDarkMode}
                />
            </div>
        </div>
    )
}

export default App;
