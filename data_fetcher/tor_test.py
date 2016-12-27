import socket
import socks
import httplib

def connectTor():
    socks.set_default_proxy(proxy_type=socks.SOCKS5, addr='localhost', port=9050)
    socket.socket = socks.socksocket
    print "Connected to tor"

def main():
    connectTor()

    conn = httplib.HTTPConnection('www.apple.com')
    conn.request('GET', '/')
    response = conn.getresponse()
    print(response.read())

if __name__ == '__main__':
    main()