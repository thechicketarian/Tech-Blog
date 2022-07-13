const router = require('express').Router();

const { Comment } = require('../../models')

// //create comment

router.get('/', async (req,res) => {
    try {
        const postData = await Comment.findAll({

            // postTitle = req.body.postTitle,
            // postContent: req.body.postContent,

            // userId: req.session.userid
        });

        res.json(postData);
        console.log(postData)
    } catch(err){
        res.status(500).json(err);
    }
})

router.post('/', async (req,res) => {
    const body = req.body;
    console.log(body, "this is new post")
    try {
        const commentData = await Comment.create({
            ...body
            // commentContent = req.body.commentContent,
            // postId: req.body.postId,

            // userId: req.session.userid
        });

        res.json(commentData);
        console.log(commentData)
    } catch(err){
        res.status(500).json(err);
    }
})

// //update comment
// router.put('/:id', withAuth, (req,res) => {

//     try {
//         const commentData = await Comment.update ({
//             commentContent = req.body.commentContent
//         },
//         {
//             where: { id: req.params.id }
//         });

//         res.json(commentData)
//     } catch (err) {
//         res.status(500).json(err);
//     }
    

// });

// //delete comment
// router.delete('/:id', withAuth, (req,res) => {

//     try {
//         const commentData = await Comment.destroy ({
//             where: { id: req.params.id }
//         });

//         res.json(commentData)
//     } catch (err) {
//         res.status(500).json(err);
//     }
    

// });

module.exports = router;