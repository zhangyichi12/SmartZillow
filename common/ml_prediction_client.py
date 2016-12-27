import pyjsonrpc

URL = "http://localhost:5050/"

client = pyjsonrpc.HttpClient(url=URL)

def predict(zipcode, property_type, bedroom, bathroom, size, longitude, latitude):
    predicted_value = client.call('predict', zipcode, property_type, bedroom, bathroom, size, longitude, latitude)
    print "Predicted value: %f" % predicted_value
    return predicted_value