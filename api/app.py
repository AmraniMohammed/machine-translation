import tensorflow as tf
import tensorflow_text

# three_input_text = tf.constant([
#     # Va.
#     'Go.',
#     # Tu peut.
#     'You can.',
#     # Je comprends.'
#     'I see.',
#     # Je comprends.'
#     'How are you?',
# ])

# reloaded = tf.saved_model.load('./translator5')


# result = reloaded.tf_translate(three_input_text)

# for tr in result['text']:
#   print(tr.numpy().decode())

# print()

input_text = tf.constant([
    'Go.',
    ])
reloaded = tf.saved_model.load('./translator5')
result = reloaded.tf_translate(input_text)


for tr in result['text']:
  print(tr.numpy().decode())
