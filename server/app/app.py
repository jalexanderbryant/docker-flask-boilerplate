from flask import Flask

def create_app():
    """
    Create a flask app using the app factory pattern

    :return A flask app instance.
    """
    app = Flask(__name__, instance_relative_config=True)

    app.config.from_object('config.settings')
    app.config.from_pyfile('settings.py', silent=True)

    @app.route('/')
    def index():
        """
        Render a Hello World response.

        :return Flask response
        """


        return app.config['HELLO']

    return app
