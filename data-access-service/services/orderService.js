const { getDB } = require('../config/db');

// ✅ Fetch Orders from Consumer Service 1
const getAllOrdersService1 = async () => {
    const db = getDB('consumer-service1'); // Switch to consumer-service1 database
    const OrderModel = db.collection('orders'); // Access 'orders' collection
    console.log('Getting orders from Service 1 db system');
    return await OrderModel.find({}).toArray();
};

// ✅ Fetch Orders from Consumer Service 2
const getAllOrdersService2 = async () => {
    const db = getDB('consumer-service2');
    const OrderModel = db.collection('orders');
    return await OrderModel.find({}).toArray();
};

// ✅ Fetch Orders from Consumer Service 3
const getAllOrdersService3 = async () => {
    const db = getDB('consumer-service3');
    const OrderModel = db.collection('orders');
    return await OrderModel.find({}).toArray();
};

// ✅ Fetch Orders from Consumer Service 4
const getAllOrdersService4 = async () => {
    const db = getDB('consumer-service4');
    const OrderModel = db.collection('orders');
    return await OrderModel.find({}).toArray();
};

// ✅ Fetch Orders from ALL Databases
const getAllOrdersFromAllServices = async () => {
    return {
        service1: await getAllOrdersService1(),
        service2: await getAllOrdersService2(),
        service3: await getAllOrdersService3(),
        service4: await getAllOrdersService4()
    };
};

module.exports = {
    getAllOrdersService1,
    getAllOrdersService2,
    getAllOrdersService3,
    getAllOrdersService4,
    getAllOrdersFromAllServices
};
