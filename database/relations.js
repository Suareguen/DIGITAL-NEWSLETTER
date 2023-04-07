const User = require('../api/models/user.model')
const Donation = require('../api/models/donation.model')
const Comment = require('../api/models/comment.model')
const Article = require('../api/models/article.model')
const Category = require('../api/models/category.model')
const Employee = require('../api/models/employee.model')
const Tag = require('../api/models/tag.model')








function addRelationsToModels() {
	try {
		//One to Many / Donations-User
		User.hasMany(Donation)
		Donation.belongsTo(User)
		console.log('Relations added to all models')

		//One to Many / User-Comment
		User.hasMany(Comment)
		Comment.belongsTo(User)

		//One to Many / Comment-Article
		Article.hasMany(Comment)
		Comment.belongsTo(Article)

		//One to Many / Category-Article
		Category.hasMany(Article)
		Article.belongsTo(Category)


		//One to Many / Employee-Article
		Employee.hasMany(Article)
		Article.belongsTo(Employee)

		//MAny to Many / Tag-Article
		Tag.belongsToMany(Article, {
			through: "article_tag",
			timestamps: false
		})
		Article.belongsToMany(Tag, {
			through: "article_tag",
			timestamps: false
		})

		console.log('Relations added!')
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels