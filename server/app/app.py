from flask import Flask
from app.blueprints.page import page

def create_app(settings_override=None):
    """
    Create a flask app using the app factory pattern

    :return A flask app instance.
    """
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object('config.settings')
    app.config.from_pyfile('settings.py', silent=True)

    if settings_override:
        app.config.update(settings_override)

    app.register_blueprint(page)

    @app.route('/hello')
    def index():
        """
        Render a Hello World response.

        :return Flask response
        """

        return app.config['HELLO']

    return app
