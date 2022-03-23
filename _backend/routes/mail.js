const nodemailer = require("nodemailer");
const express = require('express');
const router = express.Router();
const helper = require('../config/helpers');
const  {database} = require('../config/helpers');
const bcrypt = require('bcrypt');
const { json } = require('express');

router.post('/send',async(req,res)=>{
    let Email = req.body.Email
    let Ma_HS = req.body.Ma_HS
    database.table('tintuyendung as b')
    .leftJoin([{
        table:'nhatuyendung as c',
        on :'b.Email = c.Email'
    }
    ])
    .filter({
        'Ma_HS':req.body.Ma_HS
    })
    .get()
    .then(prods=>{
        var formatter = new Intl.NumberFormat('vi-VI', {
            style: 'currency',
            currency: 'VND',
          });
        let vitri = prods.ChucDanh
        let mucluong = prods.MucLuong
        let Tencongty = prods.Ten_CT
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'mywork.kltn@gmail.com',
                pass: 'vudeptraiquatroi12'
            }
          });
        
        const msg = {
            from: '"My Work" <mywork.kltn@gmail.com>', // sender address
            to: `${Email}`, // list of receivers
            subject: "Mời phỏng vấn", // Subject line
            text: `Công ty ${Tencongty} mời bạn phỏng vấn , vị trí ${vitri} với mức lương ${formatter.format(mucluong)} , xem chi tiết công việc tại http://localhost:3001/chitietcongviec/${Ma_HS}`, // plain text body
          };
        transporter.sendMail(msg,function(err,info){
            if(err){
                console.log(err);
                return
            }
            console.log("Sent: "+info.response)
        });
        res.send('Đã gửi')
    })

})

router.post('/send1',async(req,res)=>{
    let Email = req.body.Email
    let ChucDanh = req.body.ChucDanh
    let EmailUV = 'nguyensonvu2k@gmail.com'
    database.table('thong_tin_ho_so as b')
    .leftJoin([{
        table:'thong_tin_tong_quan as c',
        on :'b.Email = c.Email'
    },{
        table:'thong_tin_ca_nhan as d',
        on :'b.Email = d.Email'
    }
    ,{
        table:'thongtindangnhap as e',
        on :'b.Email = e.Email'
    }])
    .filter({
        'b.Email':EmailUV
    })
    .get()
    .then(prods=>{
        var formatter = new Intl.NumberFormat('vi-VI', {
            style: 'currency',
            currency: 'VND',
          });
        let KinhNghiem = prods.KN
        let mucluong = prods.ML
        let Ten = prods.Ten
        let transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: 'mywork.kltn@gmail.com',
                pass: 'vudeptraiquatroi12'
            }
          });
        
        const msg = {
            from: '"My Work" <mywork.kltn@gmail.com>', // sender address
            to: `${Email}`, // list of receivers
            subject: "Thư ứng tuyển", // Subject line
            text: `Ứng viên ${Ten}, ${KinhNghiem} năm kinh nghiệm với mức lương mong muốn ${formatter.format(mucluong)} muốn được bạn phỏng vấn cho vị trí ${ChucDanh}, xem chi tiết hồ sơ tại http://localhost:3001/chitiethoso/${EmailUV}`, // plain text body
          };
        transporter.sendMail(msg,function(err,info){
            if(err){
                console.log(err);
                return
            }
            console.log("Sent: "+info.response)
        });
        res.send('Đã gửi')
    })

})
   

module.exports = router;