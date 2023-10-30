# Problem 6

## Requirement Analysis

1. The score board need to be live updated, this means we need to open socket from server to client to send updated scores.
In the case when there is not much concurrent customer, we can design the server following monolithic architecture, then we must have one module to handle the the socket connection.
In case when there is a lot of concurrent customer and we want to scale the module that handle the socket connection independently
2. 
