import sanityClient from '@sanity/client'

export const client = sanityClient({
	projectId: '5n6d1r6s',
	dataset: 'production',
	apiVersion: '2022-03-23', // use current UTC date - see "specifying API version"!
	token: 'skmRuttQS4ugUvqUCREb6Fga6Vkrvhqa0F3400kyd4OzgHyJsfHUuthSkXzp0oY1kOAqLYxTZ0ZQa5Oe5WIZsYlBtT3YxTko0odUPrVjpFdze4J7ryzGBXYLEHMytSi7Mv2ChGUrTr1TiE3Bo1l1Gvu2ahADNf2exd8e004Hmmonat2LSrN9', // or leave blank for unauthenticated usage
	useCdn: false, // `false` if you want to ensure fresh data
})
