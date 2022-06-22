import tensorflow as tf
import tensorflow_text


input_text = tf.constant([
    'Go.',
    ])
reloaded = tf.saved_model.load('./translator5')
result = reloaded.tf_translate(input_text)


for tr in result['text']:
  print(tr.numpy().decode())
