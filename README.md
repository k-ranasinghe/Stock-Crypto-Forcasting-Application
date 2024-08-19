# Overview

This was a personal project done for the passion to learn how financial markets work. The user 
can enter the ticker(Stock abbreviation) and a prediction range in days. Then the prediction will 
be shown in the form of a graph. Time-Series and Regression models are combined together to form 
an ensemble model able to capture time series trends as well as market trends. <br>

The time-series model used was LSTM(Long Short-Term Memory) which is an improvement of RNN that 
can capture long term trends by holding information in containers for a longer period of time. <br>

For the regression model a simple linear regressor was used. Other models such Random Forrest, Gradient 
Boost, XG Boost, Decision trees were also tried out but performed poorly. Which is understandable as 
market trends are highly correlated with the individual stock prices. Threfore complex models 
may overshoot the prediction. <br>

The two predictions made by the models are added together with pre-determined weights to build the 
final forcast which is displayed as a graph as shown below. <br>

*Machine Learning libraries such as Scikit-Learn, Pandas, Numpy, Torch, Matpoltlib were used when 
building the models.*
<br><br>
![image](https://github.com/user-attachments/assets/c4244542-622f-47c6-a98b-4c7aa27c4d70)

![image](https://github.com/user-attachments/assets/efd19aa3-742c-4325-a222-0eb6303d675c)

![image](https://github.com/user-attachments/assets/414fa36a-e82f-4015-95b4-609e56fe91ab)

![image](https://github.com/user-attachments/assets/ccb15118-9cba-4e4f-a858-0f2d699e0e16)
