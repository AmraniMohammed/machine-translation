from flask import Flask

app = Flask(__name__)


@app.route('/')
def getValue():
    return {'translation': "Happy french"}


if __name__ == '__main__':
    app.run(debug=True)