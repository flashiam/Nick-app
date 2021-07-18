
# class MainUser():
#     def add_user(tx, userNode, parentNode):
#         tx.run("MERGE (a:Person {name: $name}) "
#                "MERGE (a)-[:KNOWS]->(friend:Person {name: $friend_name})",
#                name=userNode, friend_name=friend_name)
#
#     def print_friends(tx, name):
#         for record in tx.run("MATCH (a:Person)-[:KNOWS]->(friend) WHERE a.name = $name "
#                              "RETURN friend.name ORDER BY friend.name", name=name):
#             print(record["friend.name"])

class CreateSong:
    @staticmethod
    def add_song(self, tx, tag, obj):
        tx.run("MERGE (song:Song {title:$title}) " "MERGE (song)-[:SUNGBY]->(artist:Singer {name: $singer})"
               "MERGE (artist)-[:IN]->()")