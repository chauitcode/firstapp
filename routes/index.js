var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', name: 'Chauit' });
});

// show tên username bằng params :username
router.get('/user/:username', function(req, res, next) {
  const username = req.params.username;
  res.render('user', { title: 'Express', name: username });
});

/* Bài 10 - Nhận dữ liệu POST với body parser*/

// get login (hiện thị form cho client)
router.get('/login', function(req, res, next) {
  res.render('login', {title: 'Đăng nhập'});
});

//post login để lấy data từ form (get login) và xử lý
router.post('/login', function(req, res, next) {
  //tạo 2 giá trị gốc để so sánh với dữ liệu từ form
  const userRoot = 'chauit';
  const pwdRoot = '123456';

  /*
    Lấy giá trị gửi lên server từ form 
    Các bạn chú ý: tại file login.ejs, với 2 input Tên đăng nhập và Password ta có 2 thuộc tính name,
    để lấy giá trị 2 input này, ta sử dụng req.body.<input_name> tương ứng.
    Trong ứng dụng này sẽ là req.body.username và req.body.password.
  */

 const {username, password} = req.body;
 /*
    Dòng trên tương đương với:
    const username = req.body.name;
    const password = req.body.password;
 */

 //Kiểm tra data
  if (username === userRoot && password === pwdRoot) 
    return res.redirect(`/user/${username}`);
  else return res.redirect('/login');
});

/* Bài 11 - Static files (Tập tin tĩnh) trong Express*/
router.get('/user/:username/info', function(req, res, next) {
  const username = req.params.username;
  res.render('userimg', { title: 'Express', name: username });
});




module.exports = router;
