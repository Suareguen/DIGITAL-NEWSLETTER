const User = require('../api/models/user.model')
const Donation = require('../api/models/donation.model')
const Comment = require('../api/models/comment.model')
const Article = require('../api/models/article.model')






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
	} catch (error) {
		throw error
	}
}

module.exports = addRelationsToModels