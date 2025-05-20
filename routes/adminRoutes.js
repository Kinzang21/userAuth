const express = require('express');
const router = express.Router();
const { isAdmin } = require('../middleware/authMiddleware');
const adminController = require('../controller/adminController');

// root route
router.get('/', (req, res) => {
  res.render('pages/landing');
});
router.get('/dashboard', isAdmin, adminController.getDashboard);


router.get('/add-food',isAdmin, adminController.getAddFood);
router.post('/add-food',isAdmin, adminController.postAddFood);


router.get('/food',isAdmin, adminController.getAllFoods);


router.get('/edit-food/:id',isAdmin, adminController.getEditFood);
router.post('/edit-food/:id',isAdmin, adminController.postEditFood);
router.post('/delete-food/:id',isAdmin, adminController.deleteFood);

module.exports = router;
