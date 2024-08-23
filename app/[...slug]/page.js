import TinaComp from "../../components/TinaComp";
import TinaPage from "../../components/TinaPage";
import { client } from "../../tina/__generated__/databaseClient";
export default async function Index({ params }) {
  let res = null;
  try {
    res = await client.queries.page({
      relativePath: `${params.slug}.mdx`,
    });

    if (!JSON.parse(JSON.stringify(res.data))) {
      throw new Error("pageNotFound");
    }
    return (
      <TinaComp
        data={JSON.parse(JSON.stringify(res.data))}
        query={res.query}
        variables={res.variables}
      />
    );
  } catch (e) {
    const _data = await client.queries.page({
      relativePath: `pageNotFound.mdx`,
    });
    return (
      <TinaComp
        data={JSON.parse(JSON.stringify(_data.data))}
        query={_data.query}
        variables={_data.variables}
      />
    );
  }
}

export async function generateStaticParams() {
  const pages = await client.queries.pageConnection();
  const paths = pages.data?.pageConnection.edges.map((edge) => ({
    filename: edge.node._sys.breadcrumbs,
  }));

  return paths || [];
}
