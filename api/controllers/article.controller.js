const Article = require('../models/article.model')

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



module.exports = {
    getAllArticles,
    getOneArticleById,
    createArticle,
    updateArticle,
    deleteArticle
}