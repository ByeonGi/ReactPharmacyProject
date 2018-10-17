import express from 'express';
import express from '../models/account';

const router = express.Router();

router.post('/signup', (req, res) =>{
    Account.findOne({username : req.body.username}, (err, exists)=>{
        if(err) throw err;
        if(exists){
            return res.status(409).json({
                error : "Exists",
                code : 3
            })
        }

        let account = new Account({
            username : req.body.username,
            password : req.body.password
        });

        account.save(err =>{
            if(err) throw err;
            return res.json({success : true});
        })
    })
});

router.post('/singin', (req, res)=>{
    if(typeof req.body.password !== 'string'){
        return res.status(401).json({
            error : "LOGIN FAILED",
            code : 1
        });
    }
    Account.findOne({username : req.body.username}, (err, account)=>{
        if(err) throw err;

        if(!account) {
            return res.status(401).json({
                error : "LOGIN FAILED",
                code : 1
            })
        }

        let session = req.session;
        session.loginInfo = {
            _id : account._id,
            username : account.username
        };

        return res.json({
            success : true
        })
    })
})

router.get('/getinfo', (req, res)=>{
    if(typeof req.session.loginInfo === "undefined"){
        return res.status(401).json({
            error : 1
        });
    }
    res.json({info : req.session.loginInfo});
})

router.post('/logout',(req,res)=>{
    req.session.destroy(err => {
        if(err) throw err;

    });
    return res.json({success : true});
})

export default router;