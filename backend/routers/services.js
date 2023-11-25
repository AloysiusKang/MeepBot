const express = require("express");
const router = express.Router();

// Controllers
const {
  getServices,
  getService,
  createService,
  deleteService,
  updateService,
} = require("../controllers/servicesController");

router.get("/", getServices);

router.get("/:id", getService);

router.post("/", createService);

router.delete("/:id", deleteService);

router.patch("/:id", updateService);

module.exports = router;
