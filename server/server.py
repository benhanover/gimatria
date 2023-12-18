from flask import Flask, jsonify
from pymongo import MongoClient

app = Flask(__name__)

# Set up MongoDB connection
client = MongoClient('mongodb://localhost:27017/')  # Replace with your MongoDB URI
db = client['gimatria']  # Replace with your database name
collection = db['entries']  # Replace with your collection name

@app.route('/api/data', methods=['GET'])
def get_data():
    data = []
    for document in collection.find({}, {'_id': 0}):  # Exclude _id field
        data.append(document)
    return jsonify(data)

if __name__ == '__main__':
    app.run(debug=True)