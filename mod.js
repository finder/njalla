export default async function njalla(query) {
	if (!query) throw 'missing search query'

	const domains = await fetch('https://njal.la/list/?search=' + query + '&format=json')

	return domains.json()
}
