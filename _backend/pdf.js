const express = require('express');
const router = express.Router();
const pdf = require('html-pdf');
const pdfTemplate = require('./Document/index');
const helper = require('./config/helpers');
const  {database} = require('./config/helpers');
const bcrypt = require('bcrypt');
const { json } = require('express');

router.post('/create-pdf', (req, res) => {
    database.table('thong_tin_ca_nhan as a')
    .leftJoin([{
        table:'thong_tin_ho_so as b',
        on :'a.Email = b.Email'
    },{
        table:'thong_tin_tong_quan as c',
        on :'a.Email = c.Email'
    },{
        table:'ntk as d',
        on :'a.Email = d.Email'
    },{
        table:'nn_th as e',
        on :'a.Email = e.Email'
    }
    ,{
        table:'knlv as f',
        on :'a.Email = f.Email'
    }
    ,{
        table:'hv_bc as g',
        on :'a.Email = g.Email'
    } ,{
        table:'thongtindangnhap as x',
        on :'a.Email = x.Email'
    }
    ])
    .filter({'a.Email' :req.body.Email})
    .get()
    .then(prods=>{
            if(prods){
                pdf.create(pdfTemplate(prods), {}).toFile('result.pdf', (err) => {
                    if(err) {
                        res.send(Promise.reject());
                    }
                    res.send(Promise.resolve());
                });
            }
            else{
                    res.json({auth : false,errmess:"Bạn còn thiếu thông tin, chưa thể Xem CV này"})
            }

    })
});

router.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

module.exports = router;