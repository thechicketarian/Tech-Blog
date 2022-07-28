const router = require('express').Router();

const { Post } = require('../../models')
const withAuth = require('../../utils/auth')

//create a post

router.get('/', async (req,res) => {
    try {
        const postData = await Post.findAll({
        });

        res.json(postData);
        console.log(postData)
    } catch(err){
        res.status(500).json(err);
    }
})


router.get('/', withAuth, async (req,res) => {
    try {
        const postData = await Post.findAll({
            // postTitle = req.body.postTitle,
            // postContent: req.body.postContent,

            // userId: req.session.user_id
        });

        res.json(postData);
        console.log(postData)
    } catch(err){
        res.status(500).json(err);
    }
})


//post a new post
router.post('/', async (req,res) => {
    const body = req.body;
    // console.log(body, "this is new post")
    try {
        const postData = await Post.create({
            ...body
        });

        res.json(postData);
        console.log(postData)
    } catch(err){
        res.status(500).json(err);
    }
})

//update a post 

// router.put('/:id', withAuth, (req,res) => {

//     try {
//         const postData = await Post.update ({
//             postTitle = req.body.postTitle,
//             postContent: req.body.postContent,
//         },
//         {
//             where: { id: req.params.id }
//         });

//         res.json(postData)
//     } catch (err) {
//         res.status(500).json(err);
//     }
    

// });

//delete a post
// router.delete('/:id', withAuth, (req,res) => {

//     try {
//         const postData = await Post.destroy ({
//             where: { id: req.params.id }
//         });

//         res.json(postData)
//     } catch (err) {
//         res.status(500).json(err);
//     }
    

// });



module.exports = router;