const express = require('express')

const router = express.Router();

router.route('/users').get(require('../controller/controller').userAdmin).post(require('../controller/controller').emailPost);
router.route('/users/:id').post(require('../controller/controller').emailOne).put(require('../controller/controller').Put).delete(require('../controller/controller').Delete);

router.route('/users/email/:id').get(require('../controller/controller').getOne).patch(require('../controller/controller').Patch);
router.route('/orders/user/:id').get(require('../controller/controller').getUser);

router.route('/products').get(require('../controller/controller').Get).post(require('../controller/controller').Post);
router.route('/products/:id').get(require('../controller/controller').getOne).put(require('../controller/controller').Put).delete(require('../controller/controller').Delete);

router.route('/orders').get(require('../controller/controller').Get).post(require('../controller/controller').Post);
router.route('/orders/:id').get(require('../controller/controller').getOne).put(require('../controller/controller').Put).delete(require('../controller/controller').Delete).patch(require('../controller/controller').Patch);

router.route('/categories').get(require('../controller/controller').Get).post(require('../controller/controller').Post);
router.route('/categories/:id').get(require('../controller/controller').getOne).put(require('../controller/controller').Put).delete(require('../controller/controller').Delete);

router.route('/carts/:id').get(require('../controller/controller').getUser).delete(require('../controller/controller').Delete);
router.route('/carts').post(require('../controller/controller').Post);


module.exports = router;

