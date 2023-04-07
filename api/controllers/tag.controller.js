const Tag = require('../models/tag.model')

async function getAllTags(req, res) {
    try {
        const tags = await Tag.findAll() 
        if(tags) {
            return res.status(200).json(tags)
        } 
        else {
        return res.status(404).send('No Tags found')
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}




async function getOneTagById(req, res) {
    try {
        const tag = await Tag.findByPk(req.params.tagId)
        if(tag) {
            return res.status(200).json(tag)
          } 
        else {
            return res.status(404).send('No Tags found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createTag(req, res) {
    try {
        const tag = await Tag.create(req.body)
        return res.status(200).json({ message: 'Tag created', tag: tag })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateTag(req, res) {
    try {
        const [update] = await Tag.update(req.body, {
            where: {
                id: req.params.tagId
            }
        })
        console.log(update)
        if(update) {
            return res.status(200).json({ message: 'Tag updated' })
            
        }
        else {
			return res.status(404).send('Tag not found or already updated')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteTag(req, res) {
    try {
        const tag = await Tag.destroy({
            where: {
                id: req.params.tagId
            }
        })
        if (tag) {
			return res.status(200).json('Tag deleted')
		} else {
			return res.status(404).send('Tag not found')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = {
    getAllTags,
    getOneTagById,
    createTag,
    updateTag,
    deleteTag
}