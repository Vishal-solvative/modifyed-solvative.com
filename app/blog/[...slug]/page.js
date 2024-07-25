import TinaBlogs from "../../../components/TinaBlogs";
import { client } from "../../../tina/__generated__/databaseClient";
export default async function Blogs({ params }) {
  let res = null;
  try {
    res = await client.queries.blogs({
      relativePath: `${params.slug}.mdx`,
    });
    if (!JSON.parse(JSON.stringify(res.data))) {
      throw new Error("404");
    }
    return (
      <TinaBlogs
        data={JSON.parse(JSON.stringify(res.data))}
        query={res.query}
        variables={res.variables}
      />
    );
  } catch (e) {
    const _data = await client.queries.page({
      relativePath: `404.mdx`,
    });
    return (
      <TinaBlogs
        data={JSON.parse(JSON.stringify(_data.data))}
        query={_data.query}
        variables={_data.variables}
      />
    );
  }
}

export async function generateStaticParams() {
  const pages = await client.queries.blogsConnection();
  const paths = pages.data?.blogsConnection.edges.map((edge) => ({
    filename: edge.node._sys.breadcrumbs,
  }));

  return paths || [];
}
