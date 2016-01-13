var router = require('express').Router();
var userRoutes = require('./user/userRoutes');
var categoryRoutes = require('./category/categoryRoutes');
var postRoutes = require('./post/postRoutes');

// api router will mount other routers
// for all our resources. Each resource directory
// has a resourceRoutes.js file with the router ready to go,
// require them and mount them to their respective routes below

router.use('/users', userRoutes);
router.use('/categories', categoryRoutes);
router.use('/posts', postRoutes);

module.exports = router;
