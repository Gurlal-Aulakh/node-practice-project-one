const express=require('express');
const morgan=require('morgan');
const mongoose=require('mongoose');
const blogRoutes=require('./routes/blogRoutes');

const dbURI='mongodb+srv://Gurlal97:Qwerty123@node-tuts.zsrxuwx.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((result) => app.listen(3000))
.catch((err) =>console.log(err));
const app=express();
app.set('view engine', 'ejs');  

// app.listen(3000);

app.use(morgan('dev'));

app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// app.get('/add-blog',(req,res)=> {
//   const blog=new Blog({
//     title:'new Blog',
//     snippet:'about my new blog',
//     body:'more about my new blog'
//   });

//   blog.save()
//   .then((result)=>{
//     res.send(result);
//   })
//   .catch((err)=>{
//     console.log(err);
//   })
// });

// app.get('/all-blogs',(req,res)=>{
//     Blog.find()
//     .then(result => {
//         res.send(result);
//     })
//     .catch(err=>{
//         console.log(err);
//     })
// });

// app.get('/single-blog',(req,res) =>{
// Blog.findById('65958a6bd159ef8e685a1fe7')
// .then(result=>{
//     res.send(result);
// })
// .catch(err=>{
//     console.log(err);
// })
// });

app.get('/', (req, res) => {
    res.redirect('/blogs');
  });

app.use('/blogs',blogRoutes);


app.get('/about',(req,res)=>{
  
res.render('about', { title: 'About' });
});


// app.get('/about',(req,res)=>{
//     res.sendFile('./about.html',{root: __dirname});
//     });

//     app.get('/about-us',(req,res)=>{
//         res.redirect('/about');
//         });

app.use((req,res)=>{
    res.render('404', { title: '404' });
});        