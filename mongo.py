import datetime
from wsgiref.simple_server import server_version
import pymongo
conn_str = "mongodb+srv://sriyansgamer:epicword@datawrite.a5zvh.mongodb.net/names?retryWrites=true&w=majority"
client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)
db = client.gettingStarted
people = db.people
personDocument = {
    "name": {"first": "Alan", "last": "Ampere"},
    "birth": datetime.datetime(1912, 6, 23),
    "death": datetime.datetime(1954, 6, 7),
    "contribs": ["Turing machine", "Turing test", "Turingery"],
    "views": 1250000
}
people.insert_one(personDocument)
print(people.find_one({"name.last": "Ampere"}))
