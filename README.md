# Event-Driven Scalable Data Processing System

## Introduction
This project implements a scalable and resilient **event-driven system** for processing high-throughput real-time data streams using **RabbitMQ, MongoDB, Redis, GraphQL, Prometheus, Loki, and Grafana**. It features **four producers and four consumers**, ensuring fault tolerance, monitoring, and caching to enhance performance and reliability. The system is **fully containerized** with Docker, making it ready for Kubernetes (K8s) integration in the future.

---

## Assessment Problem Statement
### Challenge:
Design and implement a resilient event-processing system capable of handling high-throughput real-time data streams while maintaining data integrity and performance.

### Key Requirements & How Our System Fulfills Them:

1. **Scalable Event Ingestion Pipeline**
   - We use **RabbitMQ** ([Official Docs](https://www.rabbitmq.com/documentation.html)) as a message broker to efficiently ingest data from **four different producers**.
   - Each producer sends data to RabbitMQ, which distributes messages to available consumers.
   - **Scalability:** RabbitMQ queues and load balancing ensure smooth data ingestion under high traffic.

2. **Reliable Event Processing with Error Handling**
   - Consumers process messages and store them in **MongoDB**.
   - **Fault Tolerance:** If a consumer fails, messages are re-queued using:
     ```js
     channel.nack(msg, false, true);
     ```
     This ensures that messages are not lost and are retried in case of failure.
   - **Acknowledgment:** Once successfully processed, messages are acknowledged:
     ```js
     channel.ack(msg);
     ```

3. **Queryable API for Processed Data**
   - Implemented a **GraphQL API** ([Official Docs](https://graphql.org/)) for optimized querying.
   - Redis caching is used to **speed up API calls** and reduce load on MongoDB.

4. **Monitoring and Observability**
   - **Grafana ([Docs](https://grafana.com/docs/))**: Visual dashboards for system metrics.
   - **Prometheus ([Docs](https://prometheus.io/docs/))**: Captures real-time performance data.
   - **Loki ([Docs](https://grafana.com/oss/loki/))**: Log aggregation and debugging.
   - API endpoint to expose metrics:
     ```js
     app.get('/metrics', async (req, res) => {
         res.setHeader('Content-Type', client.register.contentType);
         const metrics = await client.register.metrics();
         res.send(metrics);
     });
     ```

5. **System Resilience and Kubernetes Readiness**
   - **Containerization:** Dockerized services for easy deployment and scaling.
   - **Future K8s Integration:** The system can be deployed on Kubernetes ([Docs](https://kubernetes.io/docs/)) to scale dynamically with multiple pods.

---

## Project Setup & Running Locally

### Prerequisites
- **Docker & Docker Compose** ([Install Docker](https://docs.docker.com/get-docker/))
- **Node.js** ([Install Node.js](https://nodejs.org/))

### Step 1: Clone the Repository
```sh
 git clone https://github.com/your-repo/event-driven-system.git
 cd event-driven-system
```

### Step 2: Configure Prometheus Monitoring
- Find your **private IPv4 address** using:
```sh
 ipconfig   # On Windows
 ifconfig   # On Linux/macOS
```
- Edit `monitoring/prometheus.yml`, replace `<PRIVATE_IP>` with your system’s private IP:
```yaml
  - job_name: 'node'
    static_configs:
      - targets: ['<PRIVATE_IP>:9090']
```

### Step 3: Start Services with Docker Compose
```sh
 docker-compose up -d
```

### Step 4: Check Running Services
```sh
 docker ps
```

### Step 5: Access Services
| Service    | URL |
|------------|--------------------------------|
| **API Gateway**  | http://localhost:5000/api |
| **GraphQL Playground** | http://localhost:5000/graphql |
| **RabbitMQ Management** | http://localhost:15672 |
| **MongoDB** | mongodb://localhost:27017 |
| **Prometheus** | http://localhost:9090 |
| **Grafana** | http://localhost:3000 |
| **Loki** | http://localhost:3100 |

### Step 6: Check Metrics
```sh
 curl http://localhost:5000/metrics
```

---

## Key Features
### RabbitMQ - Event Broker
- Manages message queues between producers and consumers.
- Handles **message durability, load balancing, and retries**.
- **Docs:** [RabbitMQ Documentation](https://www.rabbitmq.com/documentation.html)

### MongoDB - Persistent Storage
- Stores processed data from consumers.
- Can scale with **sharding and replication**.
- **Docs:** [MongoDB Documentation](https://www.mongodb.com/docs/)

### Redis - Caching Layer
- Stores frequently accessed API responses to **reduce load on MongoDB**.
- Improves query performance.
- **Docs:** [Redis Documentation](https://redis.io/documentation)

### GraphQL - Optimized API
- Allows flexible queries with **reduced over-fetching**.
- Provides an efficient way to retrieve processed event data.
- **Docs:** [GraphQL Documentation](https://graphql.org/)

### Observability Stack
| Tool        | Purpose |
|------------|--------------------------------|
| **Prometheus** | Collects real-time system metrics |
| **Grafana** | Visualizes monitoring dashboards |
| **Loki** | Aggregates system logs |

---

## Future Enhancements
- **Kubernetes Deployment**: Scale dynamically with K8s pods.
- **Advanced Alerting**: Set up alerts for failures using Prometheus Alertmanager.
- **Data Streaming**: Use Kafka alongside RabbitMQ for event stream processing.

---

## Conclusion
This project successfully implements a **fault-tolerant, event-driven architecture** with **high scalability** and **observability**. With its containerized setup, **monitoring tools, caching, and robust messaging system**, it provides a **strong foundation** for real-time event processing applications.

---

Happy Coding! 🚀

