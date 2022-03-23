const Mysqli = require('mysqli');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { token } = require('morgan');

let conn = new Mysqli({
    Host: 'localhost', 
    post: 3306,
    user: 'root',
    passwd: '', 
    db: 'MGVL'
});

let db = conn.emit(false, '');

const secret = "1SBz93MsqTs7KgwARcB0I0ihpILIjk3w";

module.exports = {
    database: db,
    secret: secret,
    validJWTNeeded: (req, res, next) => {
        if (req.headers['authorization']) {
            try {
                let authorization = req.headers['authorization'].split(' ');
                if (authorization[0] !== 'Bearer') {
                    return res.status(401).send();
                } else {
                    req.jwt = jwt.verify(authorization[1], secret);
                    return next();
                }
            } catch (err) {
                return res.status(403).send("Authentication faileds");
            }
        } else {
            return res.status(401).send("No authorization header found.");
        }
    },
    hasAuthFields: (req, res, next) => {
        let errors = [];
        if (req.body) {
            if (!req.body.Email) {
                errors.push('Missing email field');
            }
            if (!req.body.Password) {
                errors.push('Missing password field');
            }
            if (errors.length) {
                return res.status(400).send({errors: errors.join(',')});
            } else {
                return next();
            }
        } else {
            return res.status(400).send({errors: 'Missing email and password fields'});
        }
    },
    isPasswordAndUserMatch: async (req, res, next) => {
        const myPlaintextPassword = req.body.Password;
        const myEmail = req.body.Email;
        const user = await db.table('thongtindangnhap').filter({$or:[{ email : myEmail }]}).get();
        if (user) {
            const match = await bcrypt.compare(myPlaintextPassword, user.Password);
            if (match) {
                req.Email = user.Email;
                next();
            } else { 
                errmess="Tài khoản hoặc mật khẩu không chính xác"
                res.json({errmess, auth: false, ID:req.body.ID , email: req.body.email});
            }

        } else {
            errmess="Tài khoản hoặc mật khẩu không chính xác"
            res.json({errmess, auth: false, ID:req.body.ID , email: req.body.email});

        }
    },
    isEmailMatch: async (req, res, next) => {
        const myPlaintextPassword = req.body.Password;
        const myEmail = req.body.Email;

        const user = await db.table('thongtindangnhap').filter({$or:[{ email : myEmail }]}).get();
        if (user) {
                req.Email = user.Email;
                errmess="Email đã có người sử dụng"
                res.json({errmess, auth: false});

        } else {
            next();
        }
    }
};

