const express = require('express');
const router = express.Router();

const controller = require('./controller');


router.get('/ping', controller.greetPing);
router.post('/ping', controller.greetPing);

router.get('/riskengine', controller.greetRiskEngine);
router.post('/riskengine', controller.greetRiskEngine);




module.exports = router;