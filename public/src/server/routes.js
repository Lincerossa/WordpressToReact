import { get, all, spread } from 'axios'

const routes = () => {

  const api = type => `http://192.168.33.10/wordpress/wp-json/wp/v2/${type}`

  const getPosts = () => get(api('posts'))
  const getPages = () => get(api('pages'))
  const getCategories = () => get(api('categories'))

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