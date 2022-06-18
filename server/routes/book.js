const express=require('express');
const router=express.Router();

const Book=require('../module/book');
const{body,validationResult}=require('express-validator');

router.post('/add',[

    body('bookname').isLength({min:3}),
    body('publication').isLength({min:3}),
    body('address').isLength({min:5}),
    body('wnum').isMobilePhone()
],(req,res)=>{


    const error=validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({
            error:error.array()
        });
    }

    

    Book.create({
        bookname:req.body.bookname,
        class:req.body.class,
        publication:req.body.publication,
        oprice:req.body.oprice,
        eprice:req.body.eprice,
        address:req.body.address,
        wnum:req.body.wnum
    }).then(Book=>res.json(Book))
    .catch(err=>{console.log(err)})
    
});


router.get('/getAll',async(req,res)=>{
    try{
        const user1=await Book.find({_v:0});
        return res.send(user1);
    }catch(error){
        return res.status(400).json({
            error:error
        })
    }
})


router.post('/find',async(req,res)=>{
    try{
        const user1=await Book.find({"bookname":req.body.bookname});
        return res.send(user1);
    }catch(error){
        return res.status(400).json({
            error:error
        })
    }
})





module.exports=router;