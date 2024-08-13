import React, { useState } from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'


const Header = () => {

    const navigate = useNavigate()

    return (
        <div>
            <div className='header'>
                <div className="header-contents">
                    <h2>Stock Forecasting</h2>
                    <p>Machine Learning in the domain of Time Series to forecast stock prices</p>
                    <button onClick={()=>navigate('/stocks')}>Use Model</button>
                </div>
            </div>
            <div className='header1'>
                <div className="header-contents">
                    <h2>Crypto Forecasting</h2>
                    <p>Machine Learning in the domain of Time Series to forecast crypto prices</p>
                    <button onClick={()=>navigate('/crypto')}>Use Model</button>
                </div>
            </div>
            {/* <div className='header'>
                <div className="header-contents">
                    <h2>Stock Forecasting</h2>
                    <p>Machine Learning in the domain of Time Series to forecast stock prices</p>
                    <button>Use Model</button>
                </div>
            </div>
            <div className='header'>
                <div className="header-contents">
                    <h2>Stock Forecasting</h2>
                    <p>Machine Learning in the domain of Time Series to forecast stock prices</p>
                    <button>Use Model</button>
                </div>
            </div> */}
        </div>
    )
}

// const Header2 = () => {
//     return (
//         <div className='header'>
//             <div className="header-contents">
//                 <h2>Crypto Forecasting</h2>
//                 <p>Machine Learning in the domain of Time Series to forecast crypto prices</p>
//                 <button>Use Model</button>
//             </div>
//         </div>
//     )
// }

// const Header3 = () => {
//     return (
//         <div className='header'>
//             <div className="header-contents">
//                 <h2>Sentiment Analysis</h2>
//                 <p>Machine Learning in the domain of NLP to forecast stock prices</p>
//                 <button>Use Model</button>
//             </div>
//         </div>
//     )
// }

// const Header4 = () => {
//     return (
//         <div className='header'>
//             <div className="header-contents">
//                 <h2>Stock Forecasting</h2>
//                 <p>Machine Learning in the domain of Time Series to forecast stock prices</p>
//                 <button>Use Model</button>
//             </div>
//         </div>
//     )
// }


export { Header }