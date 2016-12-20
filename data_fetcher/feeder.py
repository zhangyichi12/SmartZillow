import os
import sys
import time

# import common package in parent directory
sys.path.append(os.path.join(os.path.dirname(__file__), '..', 'common'))

import zillow_web_scraper_client

from cloudAMQP_client import CloudAMQPClient

# Automatically feed zpids into queue
CLOUD_AMQP_URL = '''amqp://jnqrsjwd:LSRNXesVFk6BC1mQYclVc2w_7w871XuJ@hyena.rmq.cloudamqp.com/jnqrsjwd'''
DATA_FETCHER_QUEUE_NAME = 'dataFetcherTaskQueue'
ZIPCODE_FILE = 'bay_area_zipcode.txt'

WAITING_TIME = 3

cloudAMQP_client = CloudAMQPClient(CLOUD_AMQP_URL, DATA_FETCHER_QUEUE_NAME)

zipcode_list = []

with open(ZIPCODE_FILE, 'r') as zipcode_file:
    for zipcode in zipcode_file:
        zipcode_list.append(str(zipcode))

for zipcode in zipcode_list:
    zpids = zillow_web_scraper_client.search_zillow_by_zip(zipcode)
    time.sleep(WAITING_TIME)

    for zpid in zpids:
        cloudAMQP_client.sendDataFetcherTask({'zpid': zpid})

