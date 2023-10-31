# Problem 6

## Requirement Analysis

1. The score board need to be live updated, which means we need to open sockets from server to clients to send updated dashboard result.
If there aren't many concurrent customers, we can design the server following a monolithic architecture.
However, if there are a lot of concurrent customers and we want to scale the module that handles the socket connection independently, a microservices architecture might be preferable.

1. Malicious users need to be authorized to increase the score. This means the system requires the user to provide a session token to validate the action.

## System architecture diagram

In this section I will assume that the company is using AWS and follow the microservices architecture. Below is the architecture of the system.

![generator](./architecture.png)

## Sequence diagram

In this part, I assume that the application has many concurrent users and is following the microservices architecture. Below is the sequence diagram that stimulates its workflow.

![generator](./dashboard.png)

If the dashboard is updated much more frequently than the score, then we may consider caching the dashboard result each time there is a change in the dashboard after the increaseScore() function is completed.
