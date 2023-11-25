const serviceModel = require("../models/servicesModel");
const mongoose = require("mongoose");

const getServices = async (req, res) => {
  const services = await serviceModel.find();
  res.status(200).json(services);
};

const getService = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "Not a valid id"
        })
    }
    const service = await serviceModel.findById(id);
    if(!service){
        return res.status(404).json({
            error: "Service not found"
        })
    }
    res.status(200).json(service);  
};

const createService = async (req, res) => {
  let { service_name, rating, robot, price, total_used } = req.body;

  try {
    const service = await serviceModel.create({
      service_name,
      rating,
      robot,
      price,
      total_used,
    });
    res.status(200).json(service);
  } catch (error) {
    res.status(404).json({
      error: error.message,
    });
  }
};

const deleteService = async (req, res) => {
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "Not a valid id"
        })
    }
    const service = await serviceModel.findByIdAndDelete(id);
    if(!service){
        return res.status(404).json({
            error: "Service not found"
        })
    }

    res.status(200).json(service);  
}

const updateService = async (req, res) => {
    const {id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({
            error: "Not a valid id"
        })
    }
    const service = await serviceModel.findOneAndUpdate({_id: id}, {
        ...req.body
    });
    if(!service){
        return res.status(404).json({
            error: "Service not found"
        })
    }

    res.status(200).json(service);  
}

module.exports = { getServices, getService, createService, deleteService, updateService };
