import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './Stocks.css'

const Forecast = () => {

  const [ticker, setTicker] = useState('');
  const [endDate, setEndDate] = useState('');
  const [forecastSize, setForecastSize] = useState('');
  const [images, setImages] = useState({
    img1: '',
    img2: '',
    img3: ''
  })
  const [loading, setLoading] = useState(false);

  const handleFetchForecast = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:8080/forecast', {
        ticker,
        end_date: endDate,
        forecast_size: Number(forecastSize)
      });

      // Set the state with base64 images received from backend
      setImages({
        img1: response.data.img1,
        img2: response.data.img2,
        img3: response.data.img3
      });
    } catch (error) {
      console.error('Error fetching forecast:', error);
    } finally {
    setLoading(false); 
    }
  };

  return (
    <div className="forecast-calculator">
      <div className="forecast-calculator-left">
        <p className='title'>Fetch Forecast</p>
        <div className="multi-fields">
          <p>Select Stock</p>
          <select onChange={(e) => setTicker(e.target.value)}>
            <option value=""></option>
            <option value="AAPL">AAPL</option>
            <option value="MSFT">MSFT</option>
            <option value="AMZN">AMZN</option>
            <option value="GOOGL">GOOGL</option>
            <option value="NVDA">NVDA</option>
          </select>
        </div>
        <div className="multi-fields">
          <p>Enter Forecast End Date</p>
          <input
            type="text"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="YYYY-MM-DD"
          />
        </div>
        <div className="multi-fields">
          <p>Enter Forecast Size in Days</p>
          <input
            type="number"
            value={forecastSize}
            onChange={(e) => setForecastSize(e.target.value)}
            placeholder="e.g. 50"
          />
        </div>
        <button onClick={handleFetchForecast}>SUBMIT</button>
        {loading && (
          <div className="verify">
            <div className="spinner"></div>
          </div>
        )}
      </div>
      <div className="forecast-img">
        <div className="multi-fields-img">
          {images.img1 && <img src={`data:image/png;base64,${images.img1}`} alt="Image 1" />}
          {images.img2 && <img src={`data:image/png;base64,${images.img2}`} alt="Image 2" />}
          {images.img3 && <img src={`data:image/png;base64,${images.img3}`} alt="Image 3" />}
        </div>
      </div>
    </div>
  )
}

export default Forecast