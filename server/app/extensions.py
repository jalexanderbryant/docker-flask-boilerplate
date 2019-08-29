from flask_sqlalchemy import SQLAlchemy
from flask_mail import Mail
from flask_wtf import CsrfProtect

db = SQLAlchemy()
mail = Mail()
csrf = CsrfProtect()

