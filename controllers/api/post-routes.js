const router = require('express').Router();

const { Post } = require('../../models')

//create a post
router.get('/', withAuth, async (req,res) => {
    try {
        const postData = await Post.create({
            postTitle = req.body.postTitle,
            postContent: req.body.postContent,

            userId: req.session.userid
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

//sent to us = data

module.exports = router;