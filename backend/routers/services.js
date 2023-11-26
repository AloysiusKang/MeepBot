const express = require("express");
const router = express.Router();

// Controllers
const {
  getServices,
  getService,
  createService,
  deleteService,
  updateService,
  searchServices,
} = require("../controllers/servicesController");

router.get("/", getServices);

router.get("/search", searchServices)

router.get("/:id", getService);

router.post("/", createService);

router.delete("/:id", deleteService);

router.patch("/:id", updateService);

module.exports = router;
