const express = require('express');
const router = express.Router();
const signupTempleteCopy = require('.../Module/signupTemplete')

router.post('/signup',(req,res)=>{
    const singnesUpUser  = new signupTempleteCopy
});

module.exports = router