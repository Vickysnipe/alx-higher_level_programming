#!/usr/bin/python3
"""
    Prints the State object with the name passed as argument from hbtn_0e_6_usa
"""

from model_state import Base, State
from sqlalchemy import create_engine, asc
from sqlalchemy.orm import sessionmaker, Session
from sys import argv

if __name__ == "__main__":
    engine = create_engine('mysql+mysqldb://{}:{}@localhost:3306/{}'
                           .format(argv[1], argv[2], argv[3]),
                           pool_pre_ping=True)
    Session = sessionmaker(bind=engine)
    session = Session()
    states_match = session.query(State). \
        filter(State.name == argv[4]).all()

    if states_match:
        print("{}".format(states_match[0].id))
    else:
        print("Not found")
    session.close()
