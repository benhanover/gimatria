from flask import Flask, jsonify
from pymongo import MongoClient
from settings import MONGO_URL
from utils.common import get_mock_gimatria_entries

import argparse

# must be in global
app = Flask(__name__)

# must be in global
# as default, use mock functions that return mock entries
api_functions = {'history': lambda: get_mock_gimatria_entries(10)}

def main():
    args = parse_cmd_args()

    if args.mock:
        print("*** running in MOCK MODE!!! not using db")
    
    else:
        connect_and_setup_api_functions()

    app.run(debug=True)



def connect_and_setup_api_functions():

    print(f"connecting to ${MONGO_URL}!!!")

    # Set up MongoDB connection
    client = MongoClient(   MONGO_URL, 
                            serverSelectionTimeoutMS=1000   # Timeout after a short while if can't connect
                        )

    # make an operation to make pymongo connect to server
    client.server_info()

    print(f"connected to ${MONGO_URL}!!!")
    
    db = client['gimatria']  # Replace with your database name
    collection = db['entries']  # Replace with your collection name
    
    # TODO: change to get actual last 10 entries instead of all entries
    api_functions['history'] = lambda: get_all_db_entries(collection)

def get_all_db_entries(collection):
    data = []
    for document in collection.find({}, {'_id': 0}):  # Exclude _id field
        data.append(document)
    return jsonify(data)

def parse_cmd_args():
    parser = argparse.ArgumentParser()
    parser.add_argument('--mock', '--no-db', dest='mock', action='store_true', help='Run server with no db and serve mock entries')
    return parser.parse_args()

@app.route('/api/history', methods=['GET'])
def api_history():
    return api_functions['history']()

if __name__ == '__main__':
    main()
