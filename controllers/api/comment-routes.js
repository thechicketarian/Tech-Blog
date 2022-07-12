// const router = require('express').Router();

// const { Comment } = require('../../models')

// //create comment

// router.get('/', withAuth, async (req,res) => {
//     try {
//         const commentData = await Comment.create({
//             commentContent = req.body.commentContent,
//             postId: req.body.postId,

//             userId: req.session.userid
//         });

//         res.json(commentData);
//         console.log(commentData)
//     } catch(err){
//         res.status(500).json(err);
//     }
// })

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