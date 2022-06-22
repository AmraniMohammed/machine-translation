from flask import Flask
import tensorflow as tf
import tensorflow_text

app = Flask(__name__)


@app.route('/ai')
def getValue():
    return {'translation': "Happy french"}

@app.route('/ai/<text>')
def getValueDyn(text):
    input_text = tf.constant([
    text,
    ])
    reloaded = tf.saved_model.load('./translator') 
    result = reloaded.tf_translate(input_text)
    for tr in result['text']:
        textTrans = tr.numpy().decode()
    return {'translation': f"{textTrans}"}


if __name__ == '__main__':
    app.run(debug=True)


#Thanks. / Be calm. / Join us./ That's not my opinion. / They can speak French. / Help me. / Why's it so hot in here? / Think outside the box. / This is how I made it.