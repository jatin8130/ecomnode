const express = require('express');
const router = express.Router();

const app = express();

router.route('/user').get(require('../controller/user').Data).post(require('../controller/user').Adddata).put(require('../controller/user').Updatedata);
router.route('/user/:id').get(require('../controller/user').Onedata).delete(require('../controller/user').Deletedata);

router.route('/product').get(require('../controller/product').Data).post(require('../controller/product').Adddata);
router.route('/product/:id').get(require('../controller/product').Onedata).put(require('../controller/product').Updatedata).delete(require('../controller/product').Deletedata);

router.route('/order').get(require('../controller/order').Data).post(require('../controller/order').Adddata);
router.route('/order/:id').get(require('../controller/order').Onedata).put(require('../controller/order').Updatedata).delete(require('../controller/order').Deletedata);

router.route('/categorie').get(require('../controller/categorie').Data).post(require('../controller/categorie').Adddata);
router.route('/categorie/:id').get(require('../controller/categorie').Onedata).put(require('../controller/categorie').Updatedata).delete(require('../controller/categorie').Deletedata);

router.route('/admin').get(require('../controller/admin').Data).post(require('../controller/admin').Adddata).put(require('../controller/admin').Updatedata);
router.route('/admin/:id').get(require('../controller/admin').Onedata).delete(require('../controller/admin').Deletedata);

module.exports = router;