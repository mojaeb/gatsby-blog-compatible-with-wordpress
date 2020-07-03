const slash = require(`slash`)

module.exports = function (posts, createPage, template) {
	  const perPage = 6;
	  let   last = perPage;
	  const total = posts.length;
		let page = 1;

	  for (let i = 0; i < total; i += perPage) {

			createPage({
				path: '/all-posts/' + page,
				component: slash(template),
				context: { limit: perPage, skip: i, page: page, total: total},
			})

	    last += perPage
			page++
	  }
}