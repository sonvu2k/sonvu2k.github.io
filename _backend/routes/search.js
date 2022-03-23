const express = require('express');
const router = express.Router();
const helper = require('../config/helpers');
const  {database} = require('../config/helpers');
const bcrypt = require('bcrypt');
const { json } = require('express');


router.get('/searchUV', function (req, res ,next){
    if (req.body.ML == "")
    {
        req.body.ML = 100000000000
        req.body.ML1 = 0
    }
    if (req.body.ML == 5000000)
    {
        req.body.ML1 = 0
    }
    if (req.body.ML == 10000000)
    {
        req.body.ML1 = 5000000
    }
    if (req.body.ML == 15000000)
    {
        req.body.ML1 = 10000000
    }
    if (req.body.ML == 16000000)
    {
        req.body.ML1 = 100000000000
    }
    database.table('thong_tin_ho_so as t')
    .leftJoin([{
        table:'thong_tin_tong_quan as a',
        on :'t.Email = a.Email'
    },{
        table:'thong_tin_ca_nhan as b',
        on :'t.Email = a.Email'
    }
    ])
    .withFields([
        'a.ML',
        'a.KN',
        't.LoaiHS',
        't.NgayTao',
        't.LuotXem',
        't.LoaiHS',
        'b.TP',
        'b.HinhDD',
        'a.NLVMM',
        'a.CapBac',
        'a.NNMM',
        'a.HTLM'
    ])
    .filter({'a.ML' : { $between: [req.body.ML1,req.body.ML] },
            'a.NLVMM' : { $like:`%${req.body.NLVMM}%`},
            'a.HTLM' :{ $like: `%${req.body.HTLM}%`},
            'a.NNMM' :{ $like: `%${req.body.NNMM}%`},
            'a.CapBac' :{ $like: `%${req.body.CapBac}%`}    
            })
    .getAll()
    .then(prods=>{
            if(prods){
                    res.json({auth: true,length:prods.length , data:prods});
            }
            else{
                    errmess:'có lỗi xảy ra'
                    res.json({auth : false,length:prods.length ,errmess:errmess})
                    
            }

    })
});

module.exports = router;