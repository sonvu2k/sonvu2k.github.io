const express = require('express');
const router = express.Router();
const helper = require('../config/helpers');
const  {database} = require('../config/helpers');
const bcrypt = require('bcrypt');
const { json } = require('express');

router.post('/soluonguv', async (req, res) => {
    database.table('thongtindangnhap')
    .filter({
        LoaiAccount:1
    })
    .getAll()
    .then(prods=>{
        if(prods){
            res.json({auth : true,data:prods,length:prods.length})
        }
        else{
            res.json({auth : false,data:prods,length:prods.length})
        }                  
    })
});

router.post('/soluongntd', async (req, res) => {
    database.table('thongtindangnhap')
    .filter({
        LoaiAccount:2
    })
    .getAll()
    .then(prods=>{
        if(prods){
            res.json({auth : true,data:prods,length:prods.length})
        }
        else{
            res.json({auth : false,data:prods,length:prods.length})
        }                  
    })
});

router.post('/chuaduyet/:id', async (req, res) => {
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 1000;   // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;     // 0, 10, 20, 30
        endValue = page * limit;                  // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 10;
    }
    let id =req.params.id
    if (id ==1){
        database.table('thong_tin_ho_so as t')
        .leftJoin([{
            table:'thong_tin_ca_nhan as b',
            on :'t.Email = b.Email'
        },{
            table:'thongtindangnhap as c',
            on :'t.Email = c.Email'
        }
        ,{
            table:'thong_tin_tong_quan as d',
            on :'t.Email = d.Email'
        }
        ,{
            table:'ntk as e',
            on :'t.Email = e.Email'
        }
        ,{
            table:'nn_th as f',
            on :'t.Email = f.Email'
        }
        ,{
            table:'knlv as q',
            on :'t.Email = q.Email'
        }
        ,{
            table:'knlv as g',
            on :'t.Email = g.Email'
        }
        ])
        .slice(startValue, endValue)
        .filter({
            't.TinhTrang':'Đang duyệt'
        })
        .getAll()
        .then(prods=>{
            if(prods){
                let Loai = req.params.id
                res.json({auth : true,data:prods,length:prods.length,id:id})
            }
            else{
                res.json({auth : false,data:prods,length:prods.length,Loai:'2'})
            }                  
        })
    }else if(id ==2){
        database.table('tintuyendung as a')
        .leftJoin([{
            table:'nhatuyendung as b',
            on :'a.Email = b.Email'
        }
        ])
        .slice(startValue, endValue)
        .filter({
            'a.TinhTrang':'Đang duyệt'
        })
        .getAll()
        .then(prods=>{
            if(prods){
                res.json({auth : true,data:prods,length:prods.length})
            }
            else{
                res.json({auth : false,data:prods,length:prods.length})
            }                  
        })
    }
    else {
        res.json({auth : false,data:prods,length:prods.length,Loai:'2'})
    }

});

router.post('/soluongviec', async (req, res) => {
    database.table('tintuyendung')
    .withFields([
        'SLCantuyen',
    ])
    .count()
    .then(prods=>{
        if(prods){
            res.json({auth : true,data:prods,length:prods.length})
        }
        else{
            res.json({auth : false,data:prods,length:prods.length})
        }                  
    })
});

router.post('/tuchoi/:id', async (req, res) => {
    let id =req.params.id
    if (id ==1){
        database.table('thong_tin_ho_so as t')
        .update({
            TinhTrang : "Từ chối duyệt do không đạt yêu cầu, kiểm tra mail để xem chi tiết"})
        .then(prods=>{
            if(prods){
                res.json({auth : true,data:prods,length:prods.length,id:id})
            }
            else{
                res.json({auth : false,data:prods,length:prods.length,Loai:'2'})
            }                  
        })
    }else if(id ==2){
        database.table('tintuyendung as a')
        .filter({
            Ma_HS:req.body.Ma_HS
        })
        .update({
            TinhTrang : "Từ chối duyệt do không đạt yêu cầu, kiểm tra mail để xem chi tiết"})
        .then(prods=>{
            if(prods){
                res.json({auth : true,data:prods,length:prods.length})
            }
            else{
                res.json({auth : false,data:prods,length:prods.length})
            }                  
        })
    }
    else {
        res.json({auth : false,data:prods,length:prods.length,Loai:'2'})
    }
});

router.post('/duyet/:id', async (req, res) => {
    let id =req.params.id
    if (id ==1){
        database.table('thong_tin_ho_so as t')
        .filter({
            Email:req.body.Email
        })
        .update({
            TinhTrang : "Đã duyệt"})
        .then(prods=>{
            if(prods){
                res.json({auth : true,data:prods,length:prods.length,id:id})
            }
            else{
                res.json({auth : false,data:prods,length:prods.length,Loai:'2'})
            }                  
        })
    }else if(id ==2){
        database.table('tintuyendung as a')
        .filter({
            Ma_HS:req.body.Ma_HS
        })
        .update({
            TinhTrang : "Đã duyệt"})
        .then(prods=>{
            if(prods){
                res.json({auth : true,data:prods,length:prods.length})
            }
            else{
                res.json({auth : false,data:prods,length:prods.length})
            }                  
        })
    }
    else {
        res.json({auth : false,data:prods,length:prods.length,Loai:'2'})
    }
});

router.post('/send2',async(req,res)=>{

    let ngayd = req.body.ngayd
    let ngayc = req.body.ngayc

    database.query(`select * from thong_tin_ho_so WHERE Ngay BETWEEN "${ngayd}" AND "${ngayc}"`).then(result => {
        let hstm = result.length
        database.query(`select * from congviec_yeuthich as b  LEFT JOIN thong_tin_ho_so a ON
        a.Email = b.Email_UV
        WHERE a.Ngay BETWEEN "${ngayd}" AND "${ngayc}"`).then(result => {
            let slt = result.length
            database.query(`select * from phongvan as b LEFT JOIN thong_tin_ho_so as a ON
            a.Email = b.Email_UV
            WHERE Ngay BETWEEN "${ngayd}" AND "${ngayc}"`).then(result => {
                let slpv = result.length
                database.query(`select * from thong_tin_ho_so as a LEFT JOIN phongvan as b ON
                a.Email = b.Email_UV
                WHERE Ngay BETWEEN "${ngayd}" AND "${ngayc}" and b.TinhTrangPhongVan like 'Đã từ chối'`).then(result => {
                    let slbtc = result.length
                    database.query(`select * from thong_tin_ho_so as a LEFT JOIN phongvan as b ON
                    a.Email = b.Email_UV
                    WHERE Ngay BETWEEN "${ngayd}" AND "${ngayc}" and b.TinhTrangPhongVan like 'Đã duyệt hồ sơ'`).then(result => {
                        let slduyet = result.length
                        res.json({hstm:hstm ,slt:slt,slpv:slpv,slbtc:slbtc,slduyet:slduyet, tungay:req.body.ngayd , denngay:req.body.ngayc})
                      })
                  })
              })
          })
      })

})

router.post('/top10vlmn',async(req,res)=>{
    database.query(`select * from tintuyendung as a LEFT JOIN nhatuyendung b ON
    a.Email = b.Email ORDER BY Ma_HS DESC LIMIT 10`)
    .then(result => {
        res.json({data:result})
      })

})

router.post('/top10vllc',async(req,res)=>{
    database.query(`select * from tintuyendung as a LEFT JOIN nhatuyendung b ON
    a.Email = b.Email ORDER BY MucLuong DESC LIMIT 10`)
    .then(result => {
        res.json({data:result})
      })

})

module.exports = router;    