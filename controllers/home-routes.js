const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

//find all posts
router.get('/', async (req,res) => {

    try {
        const postData = await Post.findAll({
           include: [ {model: User}, {model: Comment}]
        });
        //serializing the dats
        const posts = postData.map((post) => post.get({ plain: true }));
        //rendering on the page
        res.render('homepage', {posts});
    } catch(err) {
        res.status().json(err);
    }

//    
});

//get one single post
router.get('/post/:id', withAuth, async (req,res) => {

    try {
        const postData = await Post.findOne({
            where: { id: req.params.id},
           include: [ {model: User}, {model: Comment}]
        });
        //serializing the dats
        const post = postData.get({ plain: true });
        //rendering on the page (view)
        res.render('single-post', {post, loggedIn: res.session.loggedIn});
    } catch(err) {
        res.status().json(err);
    }

//    
});

//sign-up
router.get('/signup', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/profile');
      return;
    }
  
    res.render('signup');
  });
//login
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/profile');
      return;
    }
  
    res.render('login');
  });

  

//logout
// router.get('/logout', (req, res) => {
//     if (req.session.loggedIn) {
//       res.redirect('/');
//       return;
//     }
  
//     res.render('login');
//   });


//Dashboard Routes

//get all posts for that user
router.get('/', withAuth, async (req,res) => {

    try {
        const postData = await Post.findAll({
            where: {userId: req.session.id},
           include: [ {model: User}, {model: Comment}]
        });
        //serializing the dats
        const posts = postData.map((post) => post.get({ plain: true }));
        //rendering on the page
        res.render('dashboard', {posts, loggedIn: true});
    } catch(err) {
        res.status().json(err);
    }

//    
});

//edit single post
router.get('/edit/:id', withAuth, async (req,res) => {

    try {
        const postData = await Post.findOne({
            where: { id: req.params.id},
           include: [ {model: User}, {model: Comment}]
        });
        //serializing the dats
        const post = postData.get({ plain: true });
        //rendering on the page (view)
        res.render('edit-post', {post, loggedIn: true});
    } catch(err) {
        res.status().json(err);
    }

//    
});

//create new post

router.get('/new', withAuth, (req,res) => {
    res.render('new-post');
})

module.exports = router;