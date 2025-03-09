# Event-Driven Microservices System

🚀 **A Scalable Event-Driven System using RabbitMQ, Redis, and MongoDB with Microservices Architecture**

This project demonstrates a microservices-based system with RabbitMQ for event-driven communication, Redis for caching, and MongoDB for persistent storage. The system consists of multiple producers, consumers, a data access service, and monitoring tools like Prometheus and Grafana.

---

## 🌟 Features

- **Event-Driven Architecture**: RabbitMQ ensures asynchronous message processing.
- **Caching with Redis**: Improves performance by reducing database queries.
- **MongoDB for Persistence**: Stores processed orders in different consumer databases.
- **Scalability**: Multiple producer and consumer services for high throughput.
- **Monitoring & Logging**: Prometheus, Grafana, and Loki for insights and debugging.
- **GraphQL API**: Query processed data efficiently.

---

## 🏗️ System Architecture

- **Producers**: Generate orders and send them to RabbitMQ.
- **Consumers**: Receive orders from RabbitMQ, process them, and store them in MongoDB.
- **Data Access Service**: Serves data from MongoDB with Redis caching.
- **Monitoring**: Prometheus, Grafana, and Loki collect and visualize system metrics.

---

## 🛠️ Setup Instructions

### 1️⃣ Clone the Repository

```sh
 git clone https://github.com/your-repo/event-driven-system.git
 cd event-driven-system
```

### 2️⃣ Start the Services with Docker Compose

```sh
 docker-compose up --build -d
```

This will start the following services:

- RabbitMQ
- MongoDB
- Redis
- Producer & Consumer Services
- Data Access Service
- Prometheus & Grafana
- Loki for Logging

### 3️⃣ Verify the Running Services

#### 🛠️ RabbitMQ Management UI

> 📍 Open [http://localhost:15672](http://localhost:15672) (Username: `guest`, Password: `guest`)

#### 🛠️ MongoDB

Check running databases:

```sh
 docker exec -it <mongo_container_id> mongosh
 show dbs
```

#### 🛠️ Redis CLI

Check Redis cache:

```sh
 docker exec -it <redis_container_id> redis-cli
 keys *
```

#### 🛠️ Prometheus

> 📍 Open [http://localhost:9090](http://localhost:9090)

#### 🛠️ Grafana

> 📍 Open [http://localhost:3000](http://localhost:3000) (Username: `admin`, Password: `admin`)

---

## 🔄 API Endpoints

### 📦 Producer API (Send Order)

```sh
 curl -X POST http://localhost:3001/api/orders -H "Content-Type: application/json" -d '{"product": "Mobile", "quantity": 2}'
```

### 📥 Consumer APIs (Get Processed Orders)

```sh
 curl -X GET http://localhost:4001/api/orders
```

### 📡 Data Access Service (Fetch Orders from Cache/DB)

```sh
 curl -X GET http://localhost:5000/api/orders/service1
```

### 🔍 GraphQL Endpoint (Query Processed Orders)

> 📍 Open [http://localhost:5000/graphql](http://localhost:5000/graphql) and run queries like:

```graphql
{
  getAllOrdersFromAllServices {
    service1 {
      id
      product
      quantity
    }
  }
}
```

---

## 📌 Useful Docker Commands

### 🏁 Start All Services
```sh
 docker-compose up --build -d
```

### 🛑 Stop All Services
```sh
 docker-compose down
```

### 🧹 Remove Containers & Volumes
```sh
 docker-compose down -v
```

### 📜 View Logs for a Service
```sh
 docker logs -f <container_name>
```

### 🔄 Restart a Specific Service
```sh
 docker restart <container_name>
```

---

## 🏆 Conclusion

This project provides a scalable and efficient event-driven system using RabbitMQ, Redis, and MongoDB. With monitoring and logging tools, it ensures high availability, performance, and observability.

Happy Coding! 🚀🔥

