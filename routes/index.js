const express = require('express');
const path = require('path');
const app = express();
const port = 4000;
app.get('/name/:user_name', function(req,res) {
  res.status(200);
  res.set('Content-type', 'text/html');
  res.send('<html><body>' +
  '<h1>Hello ' + req.params.user_name + '</h1>' +
  '</body></html>'
  );
});

// app.get('*', function(req, res){
//   res.sendFile('home.html', {
//     root: path.join(__dirname, '../public')
// });
// });
  
app.get('/home', (req, res, next) => {
  let day= new Date().getDay();
  let hour = new Date().getHours();
  if (day > 0 && day < 6 && hour >= 9 && hour ) {
    next('route');
    return;
  }
  next();
},
(req, res, next) => {
  res.send('Second middleware');
}
)
app.get('/home', (req, res, next) => {
  res.sendFile('home.html', {
    root: path.join(__dirname, '../public')
});
})


app.get('/services', (req, res, next) => {
  let day= new Date().getDay();
  let hour = new Date().getHours();
  if (day > 0 && day < 6 && hour >= 9 && hour ) {
    next('route');
    return;
  }
  next();
},
(req, res, next) => {
  res.send('Second middleware');
}
)
app.get('/services', (req, res, next) => {
  res.sendFile('services.html', {
    root: path.join(__dirname, '../public')
});
})

app.get('/contact', (req, res, next) => {
  let day= new Date().getDay();
  let hour = new Date().getHours();
  if (day > 0 && day < 6 && hour >= 9 && hour ) {
    next('route');
    return;
  }
  next();
},
(req, res, next) => {
  res.send('Second middleware');
}
)
app.get('/contact', (req, res, next) => {
  res.sendFile('contact.html', {
    root: path.join(__dirname, '../public')
});
})

app.listen(port, function(){
  console.log('The server is running, ' +
      ' please, open your browser at http://localhost:%s', 
      port);
});

app.use(express.static("__dirname + '/public'"));
// app.get('/public', express.static('public'));