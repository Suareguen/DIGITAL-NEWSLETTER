const Comment = require('../models/comment.model')
const Article = require('../models/article.model')
const User = require('../models/user.model')


//Aqui tengo que ver como hago la creacion del comentario

async function getAllComments(req, res) {
    try {
        const comments = await Comment.findAll() 
        if(comments) {
            return res.status(200).json(comments)
        } 
        else {
        return res.status(404).send('No Comments found')
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function getOneCommentById(req, res) {
    try {
        const comment = await Comment.findByPk(req.params.commentId)
        if(comment) {
            return res.status(200).json(comment)
          } 
        else {
            return res.status(404).send('No Comments found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createComment(req, res) {
    try {
        const user = await User.findOne({
            where: {
                id: res.locals.user.id
            }
        })
        const comment = await user.createComment({
            title: req.body.title,
            content: req.body.content
        })
        return res.status(200).json({ message: 'Comment created', comment: {
            userName: user.userName,
            title: comment.title,
            comment: comment.body
        }})
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateComment(req, res) {
    try {
        const [update] = await Comment.update(req.body, {
            where: {
                id: req.params.commentId
            }
        })
        if(update) {
            return res.status(200).json({ message: 'Comment updated' })
            
        }
        else {
			return res.status(404).send('Comment not found or already updated')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteComment(req, res) {
    try {
        const comment = await Comment.destroy({
            where: {
                id: req.params.commentId
            }
        })
        if (comment) {
			return res.status(200).json('Comment deleted')
		} else {
			return res.status(404).send('Comment not found')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    getAllComments,
    getOneCommentById,
    updateComment,
    deleteComment,
    createComment
}