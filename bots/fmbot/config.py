from neo4j import GraphDatabase


def graphconnector():
    connect = GraphDatabase.driver("neo4j://localhost:7687", auth=("neo4j", "specsoid"))
    return connect
