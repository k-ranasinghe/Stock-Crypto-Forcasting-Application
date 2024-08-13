from flask import Flask, jsonify, request
from flask_cors import CORS
from utils import calculate_square  # Import the function from utils.py
from forcastfinal import forcaster

app = Flask(__name__)
cors = CORS(app, origins='*')

@app.route('/api/users', methods=['GET'])
def users():
    return jsonify(
        {
        'users': [
            'apple',
            'bob',
            'cat'
        ]
        }
    )

@app.route('/bla', methods=['POST'])
def square():
    if request.method == 'POST':
        data = request.get_json()
        number = data.get('number')
        if number is None:
            return jsonify({'error': 'Number not provided'}), 400
        try:
            result = calculate_square(number)
        except ValueError as e:
            return jsonify({'error': str(e)}), 400
        
        return jsonify({'result': result})

    return jsonify({'message': 'Send a POST request with a JSON body containing the number to get its square'})

@app.route('/forecast', methods=['POST'])
def forcast():
    # Parse request data
    data = request.get_json()
    ticker = data.get('ticker')
    end_date = data.get('end_date')
    forecast_size = data.get('forecast_size')
    print(ticker, end_date, forecast_size)

    img1, img2, img3 = forcaster(ticker, end_date, forecast_size)

    # Return the images as JSON response
    return jsonify({
        'img1': img1,
        'img2': img2,
        'img3': img3
    })


if __name__ == '__main__':
    app.run(debug=True, port=8080)