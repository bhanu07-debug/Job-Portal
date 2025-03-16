const express = require('express');
const router = express.Router(); // Create an instance of Router

const homeRouter = require('./home_route');
const jobRouter = require('./searchJob_route');
// const companiesRouter = require('./companies_route');
// const postJob = require('./postJob_route');
// const profileRouter = require('./profile_route');

// const userRouter = require('./userDashboard_route');

// const applyJobRouter = require('./applyJob_route');
// const registerCompany = require('./registerCompany_route');
// const termsConditions = require('./termsCondition_route');

router.use('/', homeRouter);
router.use('/search-job', jobRouter);
// router.use('/companies', companiesRouter);
// router.use('/post-a-job', postJob);
// router.use('/profile', profileRouter);

// router.use('/Dashboard', userRouter)

// router.use('/apply-job', applyJobRouter)
// router.use('/register-company', registerCompany)
// router.use('/terms-&-conditions', termsConditions)

module.exports = router