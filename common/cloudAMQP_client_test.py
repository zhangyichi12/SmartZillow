from cloudAMQP_client import CloudAMQPClient

CLOUDAMQP_URL = 'amqp://jnqrsjwd:LSRNXesVFk6BC1mQYclVc2w_7w871XuJ@hyena.rmq.cloudamqp.com/jnqrsjwd'
QUEUE_NAME = 'test_queue'

# Initialize a client
client = CloudAMQPClient(CLOUDAMQP_URL, QUEUE_NAME)

# Send a message
#client.sendDataFetcherTask({'name' : 'test message'})


# Receive a message
client.getDataFetcherTask()
