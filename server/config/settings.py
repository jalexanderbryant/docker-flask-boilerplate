import os

DEBUG = True
HELLO = 'Hello, World! - (Find this string in the Main Config)'
SECRET_KEY='CHANGE_THIS_KEY'
#SERVER_NAME = 'localhost:8000'
#HOST = 'http://localhost'
#PORT = '8000'
# Get Environment Variables PGUSER = os.environ['PGUSER']
PGUSER = os.environ['PGUSER']
PGPASSWORD = os.environ['PGPASSWORD']
PGHOST = os.environ['PGHOST']
PGPORT = os.environ['PGPORT']
PGDATABASE = os.environ['PGHOST']

PGURI = "postgresql://%s:%s@%s:%s/%s" %(PGUSER,
                                          PGPASSWORD,PGHOST,PGPORT,PGDATABASE)

