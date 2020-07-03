const slash = require(`slash`)




module.exports = function (categories, createPage, template) {
  categories.forEach(category => {
    if (category.node.count){
      generate(category.node,createPage, template, category.node.count)
    }
  })
}

function generate(category,createPage, template, count) {
  const perPage = 6;
  let   last = perPage;
  const total = count;
  let page = 1;

  for (let i = 0; i < total; i += perPage) {
    createPage({
      path: '/all-posts/'+ `${decodeURIComponent(category.slug)}/` + page,
      component: slash(template),
      context: {
        limit: perPage,
        skip: i,
        page: page,
        total: total,
        id: category.id,
      },
    })

    last += perPage
    page++
  }
}