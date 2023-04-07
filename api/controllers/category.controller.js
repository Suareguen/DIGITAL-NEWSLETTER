const Category = require('../models/category.model')

async function getAllCategories(req, res) {
    try {
        const categories = await Category.findAll() 
        if(categories) {
            return res.status(200).json(categories)
        } 
        else {
        return res.status(404).send('No Categorys found')
    }
    } catch (error) {
        res.status(500).send(error.message)
    }
}




async function getOneCategoryById(req, res) {
    try {
        const category = await Category.findByPk(req.params.categoryId)
        if(category) {
            return res.status(200).json(category)
          } 
        else {
            return res.status(404).send('No Categorys found')
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



async function createCategory(req, res) {
    try {
        const category = await Category.create(req.body)
        return res.status(200).json({ message: 'Category created', category: category })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function updateCategory(req, res) {
    try {
        const [update] = await Category.update(req.body, {
            where: {
                id: req.params.categoryId
            }
        })
        console.log(update)
        if(update) {
            return res.status(200).json({ message: 'Category updated' })
            
        }
        else {
			return res.status(404).send('Category not found or already updated')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}

async function deleteCategory(req, res) {
    try {
        const category = await Category.destroy({
            where: {
                id: req.params.CategoryId
            }
        })
        if (category) {
			return res.status(200).json('Category deleted')
		} else {
			return res.status(404).send('Category not found')
		}
    } catch (error) {
        res.status(500).send(error.message)
    }
}




module.exports = {
    getAllCategories,
    getOneCategoryById,
    createCategory,
    updateCategory,
    deleteCategory
}