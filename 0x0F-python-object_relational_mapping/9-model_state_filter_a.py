#!/usr/bin/python3
"""
    Lists all State objects that contain the letter a from hbtn_0e_6_usa
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
    states_a = session.query(State).\
        filter(State.name.contains('%a%')).\
        order_by(asc(State.id))

    for state in states_a:
        print("{}: {}".format(state.id, state.name))
    session.close()
