const express = require('express');
const {check, validationResult, body} = require('express-validator');
const router = express.Router();
const helper = require('../config/helpers');
const  {database} = require('../config/helpers');
const bcrypt = require('bcrypt');

router.post('/register',[helper.isEmailMatch], async (req, res) => {
        let {Ten, Password ,Email, LoaiAccount,SDT} = req.body;
        let password = await bcrypt.hash(req.body.Password, 10);
        database.table('thongtindangnhap')
        .insert({
        Password :password ,
        Ten : Ten,
        Email : Email,
        SDT : SDT ,
        LoaiAccount : LoaiAccount,
        }).then(lastId => {
                errmess="Đăng ký thành công"
                res.json({errmess, auth: true, ID:req.body.ID_Account , email: req.body.Email});
        }).catch(err => res.status(433).json({error: err}));
});
router.post('/register_ntd',[helper.isEmailMatch], async (req, res) => {
        let {Ten_CT, Password ,Email, LoaiAccount,SDT,Email_LH,Email_Cty,SDT_LH,Ten_LH,DiaChi,MaSoThue,Nganh,TP} = req.body;
        let password = await bcrypt.hash(req.body.Password, 10);
        database.table('thongtindangnhap')
        .insert({
        Password :password ,
        Ten : Ten_CT,
        Email : Email,
        SDT : SDT ,
        LoaiAccount : LoaiAccount,
        }).then(lastId => {
                database.table('lh_ntd')
                .insert({
                Email_Cty :Email ,
                Email_LH : Email_LH,
                SDT_LH : SDT_LH,
                Ten_LH : Ten_LH ,
                }).then(lastId => {
                        database.table('nhatuyendung')
                        .insert({
                        Email :Email ,
                        DiaChi : DiaChi,
                        MaSoThue : MaSoThue,
                        LVHD : Nganh ,
                        Ten_CT : Ten_CT,
                        TP : TP
                        }).then(lastId => {
                                errmess="Đăng ký thành công"
                                res.json({errmess, auth: true});
                        })
                })
        })
});
router.post('/login',[helper.hasAuthFields, helper.isPasswordAndUserMatch], async (req, res) => {
        database.table('thongtindangnhap')
        .withFields([
            'Email',
            'Ten',
            'SDT',
            'Password'
        ])
        .filter({
                'thongtindangnhap.Email' : req.body.Email,
                'thongtindangnhap.LoaiAccount' : req.body.Loai,
        })
        .get()
        .then(prods=>{
                if(prods){
                        errmess="Đăng nhập thành công"
                        res.json({errmess, auth: true, Account:prods.Ten , Email: prods.Email , SDT:prods.SDT,Password:prods.Password});
                }else{
                        errmess="Bạn đang chọn nhầm loại đăng nhập dành cho đối tượng khác"
                        res.json({errmess, auth: false});
                }

        })
});
router.get('/info/:email', function (req, res ,next){
        const email = req.params.email;
        database.table('thongtindangnhap as t')
        .withFields([
            't.Email',
            't.Ten',
            't.Password',
            't.SDT'
        ])
        .getAll()
        .then(prods=>{
                if(prods){
                        res.json({auth: true, Account:prods});
                }
                else{
                        res.json({email})
                        
                }

        })
});
module.exports = router;

