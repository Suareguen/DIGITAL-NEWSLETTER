const Article = require('../models/article.model')
const Category = require('../models/category.model')
const Tag = require('../models/tag.model')


async function getAllArticles(req, res) {
    try {
        const articles = await Article.findAll() 
        if(articles) {
            return res.status(200).json(articles)
        } 
        else {
        return res.status(404).send('No Articles found')
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}




async function getOneArticleById(req, res) {
    try {
        const article = await Article.findByPk(req.params.articleId)
        if(article) {
            return res.status(200).json(article)
          } 
        else {
            return res.status(404).send('No Articles found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createArticle(req, res) {
    try {
        const article = await Article.create(req.body)
        const category = await Category.findOne({
            where: {
                name: req.body.category
            }
        })
        const tag = await Tag.findOne({
            where: {
                name:req.body.name
            }
        })
        if(tag) {
            await article.addTag(tag)
        } else {
            const tag = await article.createTag({
                name: req.body.name
            })
            await article.addTag(tag)
        }
        if(category) {
            await category.addArticle(article)
        } else {
            const category = await Category.create({
                name: req.body.category
            })
            await category.addArticle(article)
        }
        await article.addTag(tag)
        return res.status(200).json({ message: 'Article created', article: article })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateArticle(req, res) {
    try {
        const [update] = await Article.update(req.body, {
            where: {
                id: req.params.articleId
            }
        })
        console.log(update)
        if(update) {
            return res.status(200).json({ message: 'Article updated' })
            
        }
        else {
			return res.status(404).send('Article not found or already updated')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteArticle(req, res) {
    try {
        const article = await Article.destroy({
            where: {
                id: req.params.articleId
            }
        })
        if (article) {
			return res.status(200).json('Article deleted')
		} else {
			return res.status(404).send('Article not found')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function commentArticle(req, res) {
    try {
        const article = await Article.findByPk(req.params.articleId)
        const comment = await Comment.create({
            title: req.body.title,
            body: req.body.body,
            userId: res.locals.user.id,
            articleId: article.id
        })
        return res.status(200).json({ message: 'Comment created', comment: {
            userName: res.locals.user.userName,
            articleTitle: article.title,
            comment: comment
        }})
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = {
    getAllArticles,
    getOneArticleById,
    createArticle,
    updateArticle,
    deleteArticle,
    commentArticle
}