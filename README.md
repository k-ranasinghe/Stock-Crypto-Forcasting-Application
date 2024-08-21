# Stock/Crypto Price Prediction Web Application

## Overview

This project is a web-based application that predicts stock/crypto prices using a combination of Time-Series and Regression models. It was developed as a personal project to explore and understand financial markets and the behavior of stock prices. Users can input a stock ticker (e.g., AAPL, MSFT, BTC-USD, ETH-USD) and a prediction range (number of days) to generate forecasts, which are displayed graphically.

The application uses an ensemble model that combines Long Short-Term Memory (LSTM) networks with a simple Linear Regression model to capture both time-dependent patterns and market trends. The forecasts from both models are combined with predetermined weights to produce the final prediction.

The web application was built using React Vite for the frontend and Flask for the backend.

## Features

- **Stock/Crypto Price Prediction:** Input any stock ticker and get predictions for the desired number of days.
- **Graphical Visualization:** Predicted stock prices are displayed in an interactive graph.
- **Machine Learning Models:** Combines Time-Series (LSTM) and Regression models for better accuracy.
- **Market Data Integration:** Leverages historical market data from S&P 500, NASDAQ, Dow Jones, and competitor stocks.

## Tech Stack

- **Frontend:** React Vite
- **Backend:** Flask
- **Machine Learning:** Python, Scikit-Learn, Pandas, Numpy, Torch
- **Data Visualization:** Matplotlib

## Usage

1. **Clone the repository:**
    ```sh
    git clone https://github.com/k-ranasinghe/Stock-Crypto-Forecasting-Application.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd Stock-Crypto-Forecasting-Application
    ```

3. **Installing frontend dependencies:**
    ```sh
    cd client
    npm install
    ```

4. **Installing backend dependencies:** Recommend using a virtual environment like `venv` or `conda` for the python backend.
    ```sh
    cd ../server
    pip install flask scikit-learn pandas numpy torch matplotlib
    ```

5. **Run the application:**
    ```sh
    python main.py

    cd ../client
    npm run dev
    ```

If above steps were followed correctly the application will open in your default browser on `http://localhost:3000`

## Machine Learning Models

### Time-Series Model (LSTM)

**LSTM (Long Short-Term Memory):**
- LSTM is a type of Recurrent Neural Network (RNN) capable of learning long-term dependencies, especially useful in time series forecasting. 
- The LSTM model was chosen for its ability to retain information for long periods, capturing trends in stock prices over time.

**How It Works:**
- Historical stock prices are processed to create features like lagged prices, rolling means, and technical indicators (RSI, MACD).
- The data is scaled and structured into sequences suitable for LSTM input.
- The LSTM network is trained to predict the next price in the sequence, considering past trends.
- Model architecture includes multiple stacked layers to capture complex patterns.

**Code Snippet:**
```python
class LSTM(nn.Module):
    def __init__(self, input_size, hidden_size, num_stacked_layers):
        super().__init__()
        self.hidden_size = hidden_size
        self.num_stacked_layers = num_stacked_layers
        self.lstm = nn.LSTM(input_size, hidden_size, num_stacked_layers, batch_first=True)
        self.fc = nn.Linear(hidden_size, 1)

    def forward(self, x):
        h0 = torch.zeros(self.num_stacked_layers, x.size(0), self.hidden_size).to(device)
        c0 = torch.zeros(self.num_stacked_layers, x.size(0), self.hidden_size).to(device)
        out, _ = self.lstm(x, (h0, c0))
        out = self.fc(out[:, -1, :])
        return out
```

### Regression Model (Linear Regression)

**Linear Regression:**
- A basic regression model that predicts stock prices based on a linear relationship between features and the target variable.
- Simple yet effective for capturing overall market trends.

**How It Works:**
- The model is trained on historical data using market indices (e.g., S&P 500, NASDAQ), competitor stocks and technical indicators as features.
- Predictions are made by fitting a line that minimizes the difference between the actual and predicted prices.

**Code Snippet:**
```python
model = LinearRegression()
model.fit(X_train, y_train)
y_pred = model.predict(X_test)
```

### Ensemble Model

**Combining LSTM and Linear Regression:**
- Predictions from the LSTM model and the Linear Regression model are weighted and combined to generate the final forecast.
- This ensemble approach leverages the strengths of both models, resulting in more accurate predictions.

## Future Work

- **Model Optimization:** Explore hyperparameter tuning for better model performance.
- **Additional Features:** Implement more sophisticated market indicators and technical analysis tools.
- **User Interface Improvements:** Enhance the frontend for a better user experience.

## Screenshots

![image](https://github.com/user-attachments/assets/c4244542-622f-47c6-a98b-4c7aa27c4d70)

![image](https://github.com/user-attachments/assets/efd19aa3-742c-4325-a222-0eb6303d675c)

![image](https://github.com/user-attachments/assets/414fa36a-e82f-4015-95b4-609e56fe91ab)

![image](https://github.com/user-attachments/assets/ccb15118-9cba-4e4f-a858-0f2d699e0e16)



