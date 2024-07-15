export const fetchPages = async () => {
    try {
        const response = await fetch('http://localhost:4001/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                query: `
    query {
      pageConnection {
        edges {
          node {
            _sys {
              relativePath
            }
            id
          }
        }
      }
    }
  `
            })
        })

        if (!response.ok) {
            throw new Error('Failed to fetch pages')
        }

        const {data} = await response.json()
        const fetchedPages = data.pageConnection.edges.map(edge => ({
            relativePath: edge.node._sys.relativePath,
            id: edge.node.id
        }))

        return fetchedPages
    } catch (error) {
        console.error(error)
    }
}
