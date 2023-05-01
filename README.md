# load-balancing-apps

### What is HAProxy?
HAProxy (High Availability Proxy) is a TCP/HTTP load balancer and proxy server that allows a webserver to spread incoming requests across multiple endpoints

### Configure Load Balancing
When you configure load balancing using HAProxy, there are two types of nodes which need to be defined: frontend and backend. The frontend is the node by which HAProxy listens for connections. Backend nodes are those by which HAProxy can forward requests. A third node type, the stats node, can be used to monitor the load balancer and the other two nodes.

```
frontend http
    bind *:8080
    mode http
    use_backend all
```
This configuration block specifies a frontend node named http, which is bound to all network interfaces on port 8080. It will listen for HTTP connections (it is possible to use TCP mode for other purposes) and it will use the backend all.

```
backend all
    mode http
    server s1 nodeapp1:1111
    server s2 nodeapp2:2222
    server s3 nodeapp3:3333
```
This defines <i>all</i> and specifies several configuration options:
The <b>server</b> lines define the actual server nodes and their IP addresses, to which IP addresses will be forwarded. The servers defined here are s1, s2 and s3, each of which will use the health check you have defined.