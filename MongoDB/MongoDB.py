import datetime
from wsgiref.simple_server import server_version
import pymongo
conn_str = "mongodb+srv://Public:GhRepo@datawrite.a5zvh.mongodb.net/gettingStarted?retryWrites=true&w=majority"
client = pymongo.MongoClient(conn_str, serverSelectionTimeoutMS=5000)
db = client.gettingStarted
people = db.people
print(people.find_one({"name.last": "Ampere"}))
