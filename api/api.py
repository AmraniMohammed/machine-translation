from flask import Flask
import tensorflow as tf
import tensorflow_text

app = Flask(__name__)



# input_text = tf.constant([
#     'Go.',
# ])

# reloaded = tf.saved_model.load('./translator5')


# result = reloaded.tf_translate(three_input_text)

# for tr in result['text']:
#   print(tr.numpy().decode())


@app.route('/ai')
def getValue():
    return {'translation': "Happy french"}

@app.route('/ai/<text>')
def getValueDyn(text):
    input_text = tf.constant([
    text,
    ])
    reloaded = tf.saved_model.load('./translator5')
    result = reloaded.tf_translate(input_text)
    for tr in result['text']:
        textTrans = tr.numpy().decode()
    return {'translation': f"{textTrans}"}


if __name__ == '__main__':
    app.run(debug=True)