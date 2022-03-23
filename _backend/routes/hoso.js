const express = require('express');
const router = express.Router();
const helper = require('../config/helpers');
const  {database} = require('../config/helpers');
const bcrypt = require('bcrypt');
const { json } = require('express');


router.post('/taohoso', async (req, res) => {
    database.table('thong_tin_ho_so as t')
    .withFields([
        't.Email'
    ])
    .filter({'Email' :req.body.Email})
    .getAll()
    .then(prods=>{
            if(prods.length >0){
                date = new Date 
                nam = date.getFullYear()
                thang = date.getMonth() +1
                ngay = date.getDate()
                database.table('thong_tin_ho_so')
                .update({
                    Ma_HS : req.body.Ma_HS ,
                    LoaiHS : req.body.LoaiHS,
                    Email : req.body.Email,
                    NgayTao : ngay +"/"+thang+"/"+nam,
                    TinhTrang : req.body.TinhTrang,
                    LuotXem : req.body.LuotXem,
                    })
                .then(prods=>{
                        database.table('hv_bc')
                        .update({
                            Email : req.body.Email ,
                            TrinhDo : req.body.TrinhDo,
                            Truong : req.body.Truong,
                            Khoa : req.body.Khoa,
                            ChuyenN : req.body.ChuyenN,
                            LoaiTN : req.body.LoaiTN,
                            TTBS: req.body.TTBS,
                            })
                        .then(prods=>{
                            database.table('knlv')
                            .update({
                                Email : req.body.Email ,
                                KNLV : req.body.KNLV
                                })
                            .then(prods=>{
                                database.table('nn_th')
                                .update({
                                    Email : req.body.Email ,
                                    NN : req.body.NN,
                                    TH : req.body.TH
                                    })
                                .then(prods=>{
                                    database.table('ntk')
                                    .update({
                                        Email : req.body.Email ,
                                        Ten_ntk : req.body.Ten ,
                                        ChucDanh : req.body.ChucDanh ,    
                                        CongTy : req.body.CongTy ,
                                        EMAIL_NTK : req.body.EMAIL_NTK ,
                                        SDT_NTK : req.body.SDT_NTK ,
                                        })
                                    .then(prods=>{
                                            database.table('thong_tin_tong_quan')
                                            .update({
                                                Email : req.body.Email ,
                                                Vitri : req.body.Vitri,
                                                TDHV : req.body.TDHV,    
                                                KN : req.body.KN ,
                                                CapBac : req.body.CapBac,
                                                NNMM : req.body.NNMM,
                                                ML : req.body.ML,    
                                                NLVMM : req.body.NLVMM,
                                                HTLM : req.body.HTLM,
                                                MTNN : req.body.MTNN,
                                                })
                                            .then(prods=>{
                                                    errmess="Cập nhật thành công"
                                                    res.json({errmess:errmess, auth: true , Email: prods.Email,});         
                                            })         
                                    })   
                                })       
                            })   
                        })                    
                })
            }
            else{
                date = new Date 
                nam = date.getFullYear()
                thang = date.getMonth() +1
                ngay = date.getDate()
                database.table('thong_tin_ho_so')
                .insert({
                    Ma_HS : req.body.Ma_HS ,
                    LoaiHS : req.body.LoaiHS,
                    Email : req.body.Email,
                    Ngay: new Date(),
                    NgayTao : ngay +"/"+thang+"/"+nam,
                    TinhTrang : req.body.TinhTrang,
                    LuotXem : req.body.LuotXem,
                    })
                .then(prods=>{
                        database.table('hv_bc')
                        .insert({
                            Email : req.body.Email ,
                            TrinhDo : req.body.TrinhDo,
                            Truong : req.body.Truong,
                            Khoa : req.body.Khoa,
                            ChuyenN : req.body.ChuyenN,
                            LoaiTN : req.body.LoaiTN,
                            TTBS: req.body.TTBS,
                            })
                        .then(prods=>{
                            database.table('knlv')
                            .insert({
                                Email : req.body.Email ,
                                KNLV : req.body.KNLV
                                })
                            .then(prods=>{
                                database.table('nn_th')
                                .insert({
                                    Email : req.body.Email ,
                                    NN : req.body.NN,
                                    TH : req.body.TH
                                    })
                                .then(prods=>{
                                    database.table('ntk')
                                    .insert({
                                        Email : req.body.Email ,
                                        Ten_ntk : req.body.Ten ,
                                        ChucDanh : req.body.ChucDanh ,    
                                        CongTy : req.body.CongTy ,
                                        EMAIL_NTK : req.body.EMAIL_NTK ,
                                        SDT_NTK : req.body.SDT_NTK ,
                                        })
                                    .then(prods=>{
                                            database.table('thong_tin_tong_quan')
                                            .insert({
                                                Email : req.body.Email ,
                                                Vitri : req.body.Vitri,
                                                TDHV : req.body.TDHV,    
                                                KN : req.body.KN ,
                                                CapBac : req.body.CapBac,
                                                NNMM : req.body.NNMM,
                                                ML : req.body.ML,    
                                                NLVMM : req.body.NLVMM,
                                                HTLM : req.body.HTLM,
                                                MTNN : req.body.MTNN,
                                                })
                                            .then(prods=>{
                                                    errmess="Tạo hồ sơ thành công"
                                                    res.json({errmess:errmess, auth: true , Email: prods.Email,});         
                                            })         
                                    })   
                                })       
                            })   
                        })                    
                })
            }

    })

});

router.post('/info', function (req, res ,next){
    const email = req.body.email;
    database.table('thongtindangnhap as c')
    .leftJoin([{
        table:'thong_tin_ca_nhan as b',
        on :'c.Email = b.Email'
    },{
        table:'thong_tin_ho_so as t',
        on :'t.Email = c.Email'
    }
    ,{
        table:'thong_tin_tong_quan as d',
        on :'c.Email = d.Email'
    }
    ])
    .withFields([
        'c.Email',
        't.Ma_HS',
        't.LoaiHS',
        't.NgayTao',
        't.TinhTrang',
        't.LuotXem',
        'b.HinhDD',
        'b.GT',
        'b.DiaChi',
        'b.TTHN',
        'b.NgaySinh',
        'c.SDT',
        'c.Ten',
        'd.Vitri'
    ])
    .filter({'c.Email' :email})
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

router.post('/infoNTD', function (req, res ,next){
    database.table('nhatuyendung as t')
    .leftJoin([{
        table:'lh_ntd as b',
        on :'t.Email = b.Email_CTy'
    }
    ])
    .filter({'t.Email' :req.body.Email})
    .getAll()
    .then(prods=>{
            if(prods){
                    res.json({auth: true,Email : prods, Email : req.body.Email , length:prods.length , data:prods});
            }
            else{
                    errmess:'có lỗi xảy ra'
                    res.json({auth : false,length:prods.length ,errmess:errmess})
                    
            }

    })
});

router.post('/xoahoso', async (req, res) => {
    database.table('thong_tin_ho_so')
    .filter({'Email' :req.body.Email})
    .remove()
    .then(prods=>{
        errmess="xóa ok"
        res.json({auth : false,errmess:errmess})
    })

});

router.post('/hoso', function (req, res ,next){
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 5;   // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;     // 0, 10, 20, 30
        endValue = page * limit;                  // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 10;
    }
    if ( req.body.NLVMM ==null )
    {
    database.table('thong_tin_ho_so as t')
    .leftJoin([{
        table:'thong_tin_tong_quan as a',
        on :'t.Email = a.Email'
    },{
        table:'thong_tin_ca_nhan as b',
        on :'t.Email = b.Email'
    }
    ])
    .filter({
    't.TinhTrang' : { $like:`Đã duyệt`},
    })
    .withFields([
        'a.ML',
        'a.KN',
        't.LoaiHS',
        't.NgayTao',
        't.LuotXem',
        'b.HinhDD',
        'a.NLVMM',
        'a.NLVMM',
        'a.CapBac',
        'a.NNMM',
        'a.Email'
    ])
    .getAll()
    .then(prods=>{
            if(prods){
                    let length = prods.length
                    res.json({auth: req.body.ML,length:prods.length , data:prods ,page:page});
                    database.table('thong_tin_ho_so as t')
                    .leftJoin([{
                        table:'thong_tin_tong_quan as a',
                        on :'t.Email = a.Email'
                    },{
                        table:'thong_tin_ca_nhan as b',
                        on :'t.Email = b.Email'
                    }
                    ])
                    .filter({
                        't.TinhTrang' : { $like:`Đã duyệt`},
                        })
                    .withFields([
                        'a.ML',
                        'a.KN',
                        't.LoaiHS',
                        't.NgayTao',
                        't.LuotXem',
                        'b.HinhDD',
                        'a.NLVMM',
                        'a.NLVMM',
                        'a.CapBac',
                        'a.NNMM',
                        'a.Email'
                    ])
                    .slice(startValue, endValue)
                    .getAll()
                    .then(prods=>{
                            if(prods){
                                    res.json({auth: req.body.ML,length:length , data:prods ,page:page});
                            }
                            else{
                                    errmess:'có lỗi xảy ra'
                                    res.json({auth : false,length:length ,errmess:errmess})
                                    
                            }
                
                    })
            }
            else{
                    errmess:'có lỗi xảy ra'
                    res.json({auth : false,length:prods.length ,errmess:errmess})
                    
            }

    })
    }
    else{
        if (req.body.ML == "")
        {
            req.body.ML = 1000000000000
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
        if (req.body.ML == 100000000000)
        {
            req.body.ML1 = 16000000
        }
        database.table('thong_tin_ho_so as t')
        .leftJoin([{
            table:'thong_tin_tong_quan as a',
            on :'t.Email = a.Email'
        },{
            table:'thong_tin_ca_nhan as b',
            on :'t.Email = b.Email'
        }
        ])
        .withFields([
            'a.ML',
            'a.KN',
            't.LoaiHS',
            't.NgayTao',
            't.LuotXem',
            't.LoaiHS',
            'b.HinhDD',
            'a.NLVMM',
            'a.CapBac',
            'a.NNMM',
            'a.Email',
            'a.HTLM'
        ])
        .filter({'a.ML' : { $between: [req.body.ML1,req.body.ML] },
                'a.NLVMM' : { $like:`%${req.body.NLVMM}%`},
                'a.HTLM' :{ $like: `%${req.body.HTLM}%`},
                'a.NNMM' :{ $like: `%${req.body.NNMM}%`},
                'a.CapBac' :{ $like: `%${req.body.CapBac}%`}  ,
                't.TinhTrang' : { $like:`Đã duyệt`},  
                })
        .getAll()
        .then(prods=>{
                if(prods){
                        let length = prods.length
                        database.table('thong_tin_ho_so as t')
                        .leftJoin([{
                            table:'thong_tin_tong_quan as a',
                            on :'t.Email = a.Email'
                        },{
                            table:'thong_tin_ca_nhan as b',
                            on :'t.Email = b.Email'
                        }
                        ])
                        .withFields([
                            'a.ML',
                            'a.KN',
                            't.LoaiHS',
                            't.NgayTao',
                            't.LuotXem',
                            'b.HinhDD',
                            'a.NLVMM',
                            'a.NLVMM',
                            'a.CapBac',
                            'a.NNMM',
                            'a.Email'
                        ])
                        .filter({'a.ML' : { $between: [req.body.ML1,req.body.ML] },
                        'a.NLVMM' : { $like:`%${req.body.NLVMM}%`},
                        'a.HTLM' :{ $like: `%${req.body.HTLM}%`},
                        'a.NNMM' :{ $like: `%${req.body.NNMM}%`},
                        'a.CapBac' :{ $like: `%${req.body.CapBac}%`}  ,
                        't.TinhTrang' : { $like:`Đã duyệt`},  
                        })
                        .slice(startValue, endValue)
                        .getAll()
                        .then(prods=>{
                                if(prods){
                                        res.json({auth: req.body.ML,length:length , data:prods ,page:page});
                                }
                                else{
                                        errmess:'có lỗi xảy ra'
                                        res.json({auth : false,length:length ,errmess:errmess})
                                        
                                }
                    
                        })
                }
                else{
                        errmess:'có lỗi xảy ra'
                        res.json({auth : false,length:prods.length ,errmess:errmess})
                        
                }
    
        })
    }
});

router.post('/updateEmail',[helper.isEmailMatch], async (req, res) => {

    database.table('thong_tin_ho_so as a')
    .filter({
        'a.Email' :req.body.EmailOld
    })
    .update({
        'a.Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })
    database.table('thong_tin_tong_quan')
    .filter({
        'Email' :req.body.EmailOld
    })
    .update({
        'Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })    
    database.table('thong_tin_ca_nhan as a')
    .filter({
        'a.Email' :req.body.EmailOld
    })
    .update({
        'a.Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })    
    database.table('hv_bc as a')
    .filter({
        'a.Email' :req.body.EmailOld
    })
    .update({
        'a.Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })    
    database.table('knlv as a')
    .filter({
        'a.Email' :req.body.EmailOld
    })
    .update({
        'a.Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })    
    database.table('nn_th as a')
    .filter({
        'a.Email' :req.body.EmailOld
    })
    .update({
        'a.Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })    
    database.table('thongtindangnhap as a')
    .filter({
        'a.Email' :req.body.EmailOld
    })
    .update({
        'a.Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })
});

router.post('/updatePass', async (req, res) => {
    let password = await bcrypt.hash(req.body.PassNew, 10)
    database.table('thongtindangnhap as a')
    .filter({
        'a.Email' :req.body.Email
    })
    .update({
        'a.Password': password,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })
});

router.post('/updateSDT', async (req, res) => {
    database.table('thongtindangnhap as a')
    .filter({
        'a.Email' :req.body.Email
    })
    .update({
        'a.SDT': req.body.SDT,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })
});

router.post('/thongtincanhan', async (req, res) => {
    database.table('thong_tin_ca_nhan as a')
    .filter({
        'a.Email' :req.body.Email
    })
    .getAll()
    .then(prods=>{
        if(prods.length == 0)
        {    
            database.table('thong_tin_ca_nhan')
            .insert({
                Email : req.body.Email ,
                NgaySinh : req.body.NgaySinh,
                HinhDD : req.body.HinhDD,
                DiaChi : req.body.DiaChi,
                GT : req.body.GT,
                TTHN : req.body.TTHN,
                })
            .then(prods=>{
                if(prods){
                    errmess="Tạo hồ sơ thành công"
                    res.json({errmess:errmess, auth: true , Email: prods.Email,});
                }
                else{
                    errmess="Có lỗi xảy ra"
                    res.json({errmess:errmess, auth: true , Email: prods.Email,});
                }
        
            })
        }
        else
        {
            database.table('thong_tin_ca_nhan')
            .filter({
                Email :req.body.Email
            })
            .update({
                Email : req.body.Email ,
                NgaySinh : req.body.NgaySinh,
                HinhDD : req.body.HinhDD,
                DiaChi : req.body.DiaChi,
                GT : req.body.GT,
                TTHN : req.body.TTHN,
              })
              .then(prods=>{
                if(prods){
                    errmess="Tạo hồ sơ thành công"
                    res.json({errmess:errmess, auth: true , Email: prods.Email,});
                }
                else{
                    errmess="Có lỗi xảy ra"
                    res.json({errmess:errmess, auth: true , Email: prods.Email,});
                }
        
            })
        }
    })
});

router.post('/updateNTD', async (req, res) => {
    database.table('nhatuyendung')
    .filter({
        Email :req.body.Email
    })
    .update({
        SDT: req.body.SDT,
        Ten_CT:req.body.Ten_CT,
        DiaChi: req.body.DiaChi,
        HinhDD:req.body.HinhDD,
        Nganh: req.body.Nganh,
        TP:req.body.TP,
        MaSoThue: req.body.MaSoThue,
        WebSite: req.body.WebSite,
        GTCT:req.body.GTCT,
        LVHD:req.body.LVHD,
      })
    .then(prods=>{
        if( prods){
            database.table('lh_ntd')
            .filter({
                Email_CTy :req.body.Email
            })
            .update({
                SDT_LH: req.body.SDT_LH,
                Ten_LH:req.body.Ten_LH,
                DiaChiLH: req.body.DiaChiLH,
                Email_LH:req.body.Email_LH,
                HTLH: req.body.HTLH,
              })
            .then(prods=>{
                if( prods){
                    errmess="Thay đổi thành công"
                    res.json({auth : true,errmess:errmess})
                }else{
                    errmess="Thay đổi thất bại"
                    res.json({auth : false,errmess:errmess})
                }
        
            })
        }else{
            errmess="Thay đổi thất bại"
            res.json({auth : false,errmess:errmess})
        }

    })
});

router.post('/updateEmail',[helper.isEmailMatch], async (req, res) => {

    database.table('thong_tin_ho_so as a')
    .filter({
        'a.Email' :req.body.EmailOld
    })
    .update({
        'a.Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })
    database.table('thong_tin_tong_quan')
    .filter({
        'Email' :req.body.EmailOld
    })
    .update({
        'Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })    

});

router.post('/thongtinungtuyen', async (req, res) => {
    database.table('tintuyendung')
    .insert({
        Email : req.body.Email,
        ChucDanh : req.body.ChucDanh,
        SLCanTuyen : req.body.SLCanTuyen,
        CapBac : req.body.CapBac,
        LoaiHinh : req.body.LoaiHinh,
        MucLuong : req.body.MucLuong,
        DiaDiemLamViec : req.body.DiaDiemLamViec,
        Nganh : req.body.Nganh,
        TinhTrang:"Đang duyệt",
        MoTaCongViec : req.body.MoTaCongViec,
        QuyenLoi : req.body.QuyenLoi,
        KinhNghiem : req.body.KinhNghiem,
        BangCap : req.body.BangCap,
        GioiTinh : req.body.GioiTinh,
        HanNopHoSo : req.body.HanNopHoSo,
        PhongVanTai: req.body.LoiNhan,
        NgonNguHoSo : req.body.NgonNguHoSo,
        YeuCauCongViec : req.body.YeuCauCongViec,
        YeuCauHoSo : req.body.YeuCauHoSo,
        })
    .then(prods=>{
        if(prods){
            errmess="Tạo thành công"
            res.json({errmess:errmess, auth: true}); 
        }
        else{
            errmess="Tạo thất bại"
            res.json({errmess:errmess, auth: true}); 
        }
    })
});

router.post('/infotin', function (req, res ,next){
    const email = req.body.email;
    database.table('tintuyendung as a')
    .filter({Email :email})
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

router.post('/tin', function (req, res ,next){
    let page = (req.query.page !== undefined && req.query.page !== 0) ? req.query.page : 1;
    const limit = (req.query.limit !== undefined && req.query.limit !== 0) ? req.query.limit : 5;   // set limit of items per page
    let startValue;
    let endValue;
    if (page > 0) {
        startValue = (page * limit) - limit;     // 0, 10, 20, 30
        endValue = page * limit;                  // 10, 20, 30, 40
    } else {
        startValue = 0;
        endValue = 10;
    }

        if (req.body.ML == "")
        {
            req.body.ML = 1000000000000
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
        if (req.body.ML == 100000000000)
        {
            req.body.ML1 = 16000000
        }
        database.table('tintuyendung as t')
        .leftJoin([{
            table:'nhatuyendung as a',
            on :'t.Email = a.Email'
        }
        ])
        .withFields([
            't.MucLuong',
            't.KinhNghiem',
            't.HanNopHoSo',
            'a.HinhDD',
            'a.Ten_CT',
            't.ChucDanh',
            't.DiaDiemLamViec',
            't.Ma_HS'
        ])
        .filter({'t.MucLuong' : { $between: [req.body.ML1,req.body.ML] },
                't.DiaDiemLamViec' : { $like:`%${req.body.DiaDiemLamViec}%`},
                't.LoaiHinh' :{ $like: `%${req.body.LoaiHinh}%`},
                't.Nganh' :{ $like: `%${req.body.Nganh}%`},
                't.CapBac' :{ $like: `%${req.body.CapBac}%`} ,
                't.TinhTrang' : { $like:`Đã duyệt`},     
                })
        .getAll()
        .then(prods=>{
                let length = prods.length
                database.table('tintuyendung as t')
                .leftJoin([{
                    table:'nhatuyendung as a',
                    on :'t.Email = a.Email'
                }
                ])
                .withFields([
                    't.MucLuong',
                    't.KinhNghiem',
                    't.HanNopHoSo',
                    'a.HinhDD',
                    'a.Ten_CT',
                    't.ChucDanh',
                    't.DiaDiemLamViec',
                    't.Ma_HS'
                ])
                .slice(startValue, endValue)
                .filter({'t.MucLuong' : { $between: [req.body.ML1,req.body.ML] },
                        't.DiaDiemLamViec' : { $like:`%${req.body.DiaDiemLamViec}%`},
                        't.LoaiHinh' :{ $like: `%${req.body.LoaiHinh}%`},
                        't.Nganh' :{ $like: `%${req.body.Nganh}%`},
                        't.CapBac' :{ $like: `%${req.body.CapBac}%`},
                        't.TinhTrang' : { $like:`Đã duyệt`},      
                        })
                .getAll()
                .then(prods=>{
                        if(prods){
        
                                res.json({auth:req.body.ML,length:length , data:prods,page:page});
                        }
                        else{
                                errmess:'có lỗi xảy ra'
                                res.json({auth : false,length:prods.length ,errmess:errmess})
                                
                        }
            
                })
        })


});

router.post('/chitietvieclam', function (req, res ,next){
    database.table('nhatuyendung as a')
    .leftJoin([{
        table:'tintuyendung as b',
        on :'a.Email = b.Email'
    },{
        table:'lh_ntd as c',
        on :'a.Email = c.Email_Cty'
    }
    ])
    .filter({'b.Ma_HS' :req.body.Ma_HS})
    .get()
    .then(prods=>{
            if(prods){
                    res.json({auth:true,length:prods.length , data:prods});
            }
            else{
                    errmess:'có lỗi xảy ra'
                    res.json({auth : false,length:prods.length ,errmess:errmess})
                    
            }

    })
});

router.post('/chitiethoso', function (req, res ,next){
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
    }    ,{
        table:'thongtindangnhap as x',
        on :'a.Email = x.Email'
    }
    ])
    .filter({'a.Email' :req.body.Email})
    .getAll()
    .then(prods=>{
            if(prods){
                    res.json({auth:true,length:prods.length , data:prods});
            }
            else{
                    errmess:'có lỗi xảy ra'
                    res.json({auth : false,length:prods.length ,errmess:errmess})
                    
            }

    })
});

router.post('/luuvieclam', function (req, res ,next){
    database.table('thongtindangnhap as a')
    .filter({'a.Email' :req.body.Email,
            'a.LoaiAccount':1})
    .withFields([
        'a.LoaiAccount',
    ])
    .getAll()
    .then(prods=>{
            if(prods){
                database.table('congviec_yeuthich as b')
                .filter({
                    'b.Email_UV' :req.body.Email,
                    'b.Ma_HS':req.body.Ma_HS
                })
                .getAll()
                .then(prods=>{
                        if(prods.length ==0){
                            database.table('congviec_yeuthich')
                            .insert({
                                Email_UV : req.body.Email,
                                Ma_HS : req.body.Ma_HS
                            })
                            .then(prods=>{
                                    if(prods){
                                            errmess:'Lưu thành công'
                                            res.json({auth:true,length:prods.length , data:prods,errmess:'Lưu thành công'});
                                    }
                                    else{
                                            errmess:'có lỗi xảy ra'
                                            res.json({auth : false,length:prods.length ,errmess:'có lỗi xảy ra'})
                                            
                                    }
                        
                            })
                        }
                        else{
                                errmess:'Bạn đã lưu việc này rồi'
                                res.json({auth : false,length:prods.length ,errmess:'Bạn đã lưu việc này rồi'})
                                
                        }
            
                })
            }
            else{
                    errmess:'Bạn là người tìm việc, không thể lưu hồ sơ của người khác'
                    res.json({auth : false,length:prods.Ten,errmess:'Bạn là người tuyển dụng,bạn không thể lưu hồ sơ của người khác'})
                    
            }

    })
});

router.post('/vieclamyeuthich', function (req, res ,next){
    database.table('congviec_yeuthich as a')
    .leftJoin([{
        table:'tintuyendung as b',
        on :'a.Ma_HS = b.Ma_HS'
    },{
        table:'nhatuyendung as c',
        on :'c.Email = b.Email'
    }
    ])
    .filter({'a.Email_UV' :req.body.Email,
            })
    .withFields([
        'a.Email_UV',
        'b.ChucDanh',
        'c.Ten_CT',
        'b.DiaDiemLamViec',
        'a.Ma_HS'
    ])
    .getAll()
    .then(prods=>{
            if(prods){
                res.json({auth : true,data:prods,length:prods.length})
            }
            else{
                    errmess:'Bạn là người tìm việc, không thể lưu hồ sơ của người khác'
                    res.json({auth : false,length:prods.Ten,errmess:'Bạn là người tuyển dụng,bạn không thể lưu hồ sơ của người khác'})
                    
            }

    })
});

router.post('/boluuvieclam', function (req, res ,next){
    database.table('congviec_yeuthich')
    .filter({
        Email_UV :req.body.Email,
        Ma_HS:req.body.Ma_HS
    })
    .remove()
    .then(prods=>{
        errmess="Bỏ lưu thành công"
        res.json({auth : true,errmess:errmess})
    })
});

router.post('/phongvan', function (req, res ,next){
        database.table('thong_tin_ho_so')
        .filter({'Email' :req.body.Email_UV,
        })
        .getAll()
        .then(prods=>{
            if(prods.length > 0){
                        database.table('phongvan as b')
                        .filter({
                            'b.Email_UV' :req.body.Email_UV,
                            'b.Ma_HS':req.body.Ma_HS
                        })
                        .getAll()
                        .then(prods=>{
                                if(prods.length ==0){
                                    database.table('phongvan')
                                    .insert({
                                        Email_UV : req.body.Email_UV,
                                        Ma_HS : req.body.Ma_HS,
                                        TinhTrangPhongVan:"Đang xem xét"
                                    })
                                    .then(prods=>{
                                            if(prods){
                                                database.table('tintuyendung as a')
                                                .filter({Ma_HS : req.body.Ma_HS})
                                                .withFields(['a.Soluongungtuyen']).get()
                                                .then(prods=>{
                                                    database.table('tintuyendung as a')
                                                    .filter({Ma_HS : req.body.Ma_HS})
                                                    .update({Soluongungtuyen : prods.Soluongungtuyen +1})
                                                    .then(prods=>{
                                                        if(prods){
                                                            errmess:'Nộp hồ sơ thành công'
                                                            res.json({auth:true,length:prods.length , data:prods,errmess:'Nộp hồ sơ thành công'});
                                                        }
                                                        else{
                                                                errmess:'có lỗi xảy ra'
                                                                res.json({auth : false,length:prods.length ,errmess:'Nộp hồ sơ thất bại'})
                                                                
                                                        }
            
                                                    })
                                                })
                                            }
                                            else{
                                                    errmess:'có lỗi xảy ra'
                                                    res.json({auth : false,length:prods.length ,errmess:'Nộp hồ sơ thất bại'})
                                                    
                                            }
                                
                                    })
                                }
                                else{
                                        errmess:'Bạn đã nộp sơ rồi'
                                        res.json({auth : false,length:prods,errmess:'Bạn đã nộp hồ sơ rồi'})
                                        
                                }
                    
                        })
                    }else{
                        res.json({auth : false,length:prods,errmess:'Bạn chưa có hồ sơ, hãy tạo hồ sơ cho mình trước khi ứng tuyển'})
                    }

        })
});

router.post('/xoatin', function (req, res ,next){
    database.table('tintuyendung')
    .filter({
            'Ma_HS':req.body.Ma_HS})
    .remove()
    .then(prods=>{
        if(prods){
            database.table('congviec_yeuthich')
            .filter({
                    'Ma_HS':req.body.Ma_HS})
                    .update(
                        {
                            TinhTrang:'Tin tuyển dụng không còn'
                        }
                    )
            .then(prods=>{
                if(prods){
                    database.table('phongvan')
                    .filter({
                            'Ma_HS':req.body.Ma_HS})
                    .remove()
                    .then(prods=>{
                        if(prods){
                            res.json({auth : true,length:prods.length ,errmess:'Xóa thành công'})
                        }
                        else{
                            res.json({auth : false,length:prods.length ,errmess:'Xóa thất bại'})
                        }
                
                    })
                }
                else{
                    res.json({auth : false,length:prods.length ,errmess:'Xóa thất bại'})
                }
        
            })
        }
        else{
            res.json({auth : false,length:prods.length ,errmess:'Xóa thất bại công'})
        }

    })
});

router.post('/updateEmailNTD',[helper.isEmailMatch], async (req, res) => {

    database.table('tintuyendung a')
    .filter({
        'a.Email' :req.body.EmailOld
    })
    .update({
        'a.Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })

    database.table('thongtindangnhap')
    .filter({
        'Email' :req.body.EmailOld
    })
    .update({
        'Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })    
    
    database.table('phongvan')
    .filter({
        'Email_Cty' :req.body.EmailOld
    })
    .update({
        'Email_Cty': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })  

    database.table('nhatuyendung')
    .filter({
        'Email' :req.body.EmailOld
    })
    .update({
        'Email': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })

    database.table('lh_ntd')
    .filter({
        'Email_Cty' :req.body.EmailOld
    })
    .update({
        'Email_Cty': req.body.EmailNew,
      })
    .then(prods=>{
        errmess="Thay đổi thành công"
        res.json({auth : true,errmess:errmess})
    })

});

router.post('/phongvanNTD1', function (req, res ,next){
    database.table('tintuyendung as a')
    .filter({'a.Email' :req.body.Email,
        })
    .getAll()
    .then(prods=>{
        if(prods){
            res.json({auth : true,data:prods,errmess:'Bạn là người tuyển dụng, không thể xin phỏng vấn của công ty khác'})
        }
        else{
            res.json({auth : false,data:prods,length:prods.length,errmess:'Bạn là người tuyển dụng, không thể xin phỏng vấn của công ty khác'})
        }                  
    })
});

router.post('/nguoiungtuyen/:id', async (req, res) => {
    let Ma_HS = req.params.id;
    database.table('phongvan as a')
    .leftJoin([{
        table:'thong_tin_ca_nhan as b',
        on :'a.Email_UV = b.Email'
    },{
        table:'thong_tin_ho_so as c',
        on :'a.Email_UV = c.Email'
    }
    ,{
        table:'thong_tin_tong_quan as d',
        on :'a.Email_UV = d.Email'
    },{
        table:'thongtindangnhap as e',
        on :'a.Email_UV = e.Email'
    }
    ])
    .filter({
        $and: [
          {
            $or: [{ 'a.TinhTrangPhongVan': 'Đang xem xét' }, { 'a.TinhTrangPhongVan': 'Đã duyệt hồ sơ'  }]
          },
          { 'a.Ma_HS' :Ma_HS }
        ]
      })
    .getAll()
    .then(prods=>{
        if(prods){
            res.json({auth : true,data:prods,length:prods.length,errmess:'Bạn là người tuyển dụng, không thể xin phỏng vấn của công ty khác'})
        }
        else{
            res.json({auth : false,data:prods,length:prods.length,errmess:'Bạn là người tuyển dụng, không thể xin phỏng vấn của công ty khác'})
        }                  
    })
});

router.post('/duyethoso/', async (req, res) => {
    let Ma_PV= req.body.Ma_PV;
    database.table('phongvan')
    .filter({
        Ma_PV :Ma_PV
    })
    .get()
    .then(prods=>{
        if(prods.TinhTrangPhongVan =="Đang xem xét"){
            database.table('phongvan')
            .filter({
                Ma_PV :Ma_PV
            })
            .update({
                TinhTrangPhongVan : "Đã duyệt hồ sơ",
                Status : 1
            })
            .then(prods=>{
                if(prods){
                    res.json({auth : true,data:prods,length:prods.length,errmess:'Duyệt thành công'})
                }
                else{
                    res.json({auth : false,data:prods,length:prods.TinhTrangPhongVan,errmess:'Có lỗi xảy ra'})
                }                  
            })
        }
        else{
            res.json({auth : false,data:prods,length:prods.TinhTrangPhongVan,errmess:'Hồ sơ đã được duyệt qua'})
        }                  
    })
});

router.post('/tuchoihoso/', async (req, res) => {
    let Ma_PV= req.body.Ma_PV;
    database.table('phongvan')
    .filter({
        Ma_PV :Ma_PV
    })
    .get()
    .then(prods=>{
        let Ma_HS = prods.Ma_HS
        if(prods.TinhTrangPhongVan =="Đang xem xét"){
            database.table('phongvan')
            .filter({
                Ma_PV :Ma_PV
            })
            .update({
                TinhTrangPhongVan : "Đã từ chối",
            })
            .then(prods=>{
                if(prods){
                    database.table('tintuyendung as a')
                    .filter({Ma_HS : Ma_HS})
                    .withFields(['a.Soluongungtuyen'])
                    .get()
                    .then(prods=>{
                        database.table('tintuyendung as a')
                        .filter({Ma_HS : Ma_HS})
                        .update({Soluongungtuyen : prods.Soluongungtuyen - 1})
                        .then(prods=>{
                            if(prods){
                                errmess:'Nộp hồ sơ thành công'
                                res.json({auth:true,length:prods.length , data:prods,errmess:'Đã từ chối hồ sơ'});
                            }
                            else{
                                    errmess:'có lỗi xảy ra'
                                    res.json({auth : false,length:prods.length ,errmess:'Nộp hồ sơ thất bại'})
                                    
                            }

                        })
                    })
                }
                else{
                    res.json({auth : false,data:prods,length:prods.TinhTrangPhongVan,errmess:'Có lỗi xảy ra'})
                }                  
            })
        }
        else{
            res.json({auth : false,data:prods,length:prods.TinhTrangPhongVan,errmess:'Hồ sơ đã được duyệt qua'})
        }                  
    })
});

router.post('/tintuyendungUV', async (req, res) => {
    database.table('phongvan as a')
    .leftJoin([{
        table:'tintuyendung as b',
        on :'a.Ma_HS = b.Ma_HS'
    },{
        table:'nhatuyendung as c',
        on :'b.Email = c.Email'
    }
    ])
    .filter({
        'a.Email_UV':req.body.Email
    })
    .getAll()
    .then(prods=>{
        if(prods){
            res.json({auth : true,data:prods,length:prods.TinhTrangPhongVan,errmess:'Hồ sơ đã được duyệt qua'})
        }
        else{
            res.json({auth : false,data:prods,length:prods.TinhTrangPhongVan,errmess:'Hồ sơ đã được duyệt qua'})
        }                  
    })
});

router.post('/moipv', async (req, res) => {
    database.table('phongvan')
    .filter({
        'Email_UV':req.body.Email,
        'Ma_HS':req.body.Ma_HS
    })
    .getAll()
    .then(prods=>{
        if(prods.length > 0){
            res.json({auth : false,data:prods,errmess:'Đã từng mời ứng viên này phỏng vấn rồi'})     
        }else{
            database.table('moiphongvan')
            .filter({
                'Email_UV':req.body.Email,
                'Ma_HS':req.body.Ma_HS
            })
            .getAll()
            .then(prods=>{
                if(prods.length > 0){
                    res.json({auth : false,data:prods,errmess:'Đã từng mời ứng viên này phỏng vấn rồi'})     
                }else{
                    database.table('moiphongvan')
                    .insert({
                        Email_UV:req.body.Email,
                        Ma_HS:req.body.Ma_HS,
                        TrangThai:"Đang chờ"
                    })
                    .then(prods=>{
                            res.json({auth : true,data:prods,errmess:'Mời thành công'})       
                    })
                }
            })
        }
    })
});

router.post('/moipvUV', async (req, res) => {
    database.table('moiphongvan as a')
    .leftJoin([{
        table:'tintuyendung as b',
        on :'a.Ma_HS = b.Ma_HS'
    },{
        table:'nhatuyendung as c',
        on :'b.Email = c.Email'
    }
    ])
    .filter({
        'Email_UV':req.body.Email
    })
    .getAll()
    .then(prods=>{
        res.json({auth : true,data:prods,errmess:'Đã từng mời ứng viên này phỏng vấn rồi'})     
    })
});

router.post('/xoapvUV', async (req, res) => {
    database.table('phongvan as a')
    .filter({
        'Ma_PV':req.body.Ma_PV
    })
    .get()
    .then(prods=>{
        if(prods.TinhTrangPhongVan =="Đã từ chối" ){
            database.table('phongvan')
            .filter({
                'Ma_PV':req.body.Ma_PV
            })
            .remove()
            .then(
                res.json({auth : true,data:prods,errmess:'Xóa thành công'})   
            )
        }
        else{
            res.json({auth : true,data:prods,errmess:'Chỉ những tin tuyển dụng đã từ chối mới xóa được'})   
        }
  
    })
});

router.post('/tuchoipv', async (req, res) => {
    database.table('moiphongvan')
    .filter({
        'Ma_HS':req.body.Ma_HS,
        'Email_UV':req.body.Email,
    })
    .remove()
    .then(prods=>{
        if(prods ){
            res.json({auth : true,data:prods,errmess:'Đã từ chối'})  
        }
        else{
            res.json({auth : false,data:prods,errmess:'Có lỗi xảy ra'})   
        }
  
    })
});

router.post('/xacnhanpv', async (req, res) => {

    database.table('thongtindangnhap as a')
    .filter({'a.Email' :req.body.Email,
            'a.LoaiAccount':1})
    .withFields([
        'a.LoaiAccount',
    ])
    .getAll()
    .then(prods=>{
            if(prods!= 0){
                database.table('phongvan as b')
                .filter({
                    'b.Email_UV' :req.body.Email,
                    'b.Ma_HS':req.body.Ma_HS
                })
                .getAll()
                .then(prods=>{
                        if(prods.length ==0){
                            database.table('phongvan')
                            .insert({
                                Email_UV : req.body.Email,
                                Ma_HS : req.body.Ma_HS,
                                TinhTrangPhongVan:"Đã duyệt hồ sơ",
                                Loai : 1,
                                Status:1,
                            })
                            .then(prods=>{
                                    if(prods){
                                        database.table('tintuyendung as a')
                                        .filter({Ma_HS : req.body.Ma_HS})
                                        .withFields(['a.Soluongungtuyen']).get()
                                        .then(prods=>{
                                            database.table('tintuyendung as a')
                                            .filter({Ma_HS : req.body.Ma_HS})
                                            .update({Soluongungtuyen : prods.Soluongungtuyen +1})
                                            .then(prods=>{
                                                if(prods){
                                                    database.table('moiphongvan')
                                                    .filter({
                                                        'Ma_HS':req.body.Ma_HS,
                                                        'Email_UV':req.body.Email,
                                                    })
                                                    .remove()
                                                    .then(prods=>{
                                                        if(prods ){
                                                            res.json({auth : true,data:prods,errmess:'Đã xác nhận'})  
                                                        }
                                                        else{
                                                            res.json({auth : false,data:prods,errmess:'Có lỗi xảy ra'})   
                                                        }
                                                  
                                                    })
                                                }
                                                else{
                                                        errmess:'có lỗi xảy ra'
                                                        res.json({auth : false,length:prods.length ,errmess:'Nộp hồ sơ thất bại'})
                                                        
                                                }
    
                                            })
                                        })
                                    }
                                    else{
                                            errmess:'có lỗi xảy ra'
                                            res.json({auth : false,length:prods.length ,errmess:'Nộp hồ sơ thất bại'})
                                            
                                    }
                        
                            })
                        }
                        else{
                                errmess:'Bạn đã nộp sơ rồi'
                                res.json({auth : false,length:prods,errmess:'Bạn đã nộp hồ sơ rồi'})
                                
                        }
            
                })
            }
            else{
                    errmess:'Bạn là người tuyển, không thể xin phỏng vấn của công ty khác'
                    res.json({auth : false,length:prods,errmess:'Bạn là người tuyển dụng, không thể xin phỏng vấn của công ty khác'})
                    
            }

    })
});

module.exports = router;
