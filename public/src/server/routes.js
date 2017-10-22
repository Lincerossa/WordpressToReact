import { get, all, spread } from 'axios'

import api from '../api'

const routes = () => {
  const { posts, pages, categories  } = api

  const getPosts = () => get(posts)
  const getPages = () => get(pages)
  const getCategories = () => get(categories)

  return all([ getPosts(), getPages(), getCategories() ])
    .then(spread( (posts, pages, categories) => {
      return {
        posts: posts.data.map( ({ slug }) => ({ slug: `/${slug}` }) ),
        pages: pages.data.map( ({ slug }) => ({ slug: `/${slug}` }) ),
        categories: categories.data.map( ({ slug }) => ({ slug: `/${slug}` }) )
      }
    }))
  }

  export default routes